
# jsBridge

Hybrid 混合开发就是 native + h5 的双向通信

> native <=>jsbridge <=> h5

native 通讯流程有两种方式：

- URL Schema， 客户端通过拦截 webview 请求来完成通讯
- native 向 webview 中的 js 执行环境, 注入 API, 以此来完成通讯

## URL Schema
- 客户端拦截 webview (所谓的 native 提供 h5 的容器)请求

#### 原理

1. 在 webview 中发出的网络请求，都会被客户端监听和捕获到。

2. 定义自己的私有协议

上面说过, 所有网络请求都会被监听到, 网络请求最常见的就是 http 协议, 比如https://a.b.com/fetchInfo, 这是一个很常见的请求。

webview 内的 H5 页面肯定有很多类似的 http 请求, 我们为了区别于业务请求, 需要定制一套 h5 和 native 进行交互的私有协议, 我们通常称呼为 URL Schema。

比如我们现在定义协议头为 mingzi://,

那么随后我们要在 webview 请求中都带上这个私有协议开头, 比如有一个请求是 setLeftButton, 实际发出的请求会是 mingzi://setLeftButton?params1=xxx&params2=xxx.

这里大家记住, 这个协议的名称是我们自定义的, 只要 h5 和 native 协商好即可。
但是如果公司旗下有多个 app, 对于通用的业务一般会定义一个通用的协议头, 比如 common://；对于每个 app 自己比较独立的业务, 基本每个 app 都会自己定义一套协议, 比如 appa://, appb://, appc://.

3. 请求的发送

对于 webview 请求的发送, 我们一般使用 iframe 的方式。也可以使用 location.href 的方式, 但是这种方式不适用并行发请求的场景。

```js
const doc = window.document;
const body = window.document.body;
const iframe = doc.createElement("iframe");

iframe.style.display = "none";
iframe.src = "mingzi://setLeftButton?param1=12313123";

body.appendChild(iframe);
setTimeout(() => {
  body.removeChild(iframe);
}, 200);
```

而且考虑到安全性, 客户端中一般会设置域名白名单, 比如客户端设置了 mingzi.com 为白名单, 那么只有 mingzi.com 域下发出的请求, 才会被客户端处理。

这样可以避免自己 app 内部的业务逻辑, 被第三方页面直接调用。

4. 客户端拦截协议请求

iOS 和 Android 对 webview 请求的拦截方法不太相同。

- iOS: shouldStartLoadWithRequest
- Android: shouldOverrideUrlLoading

当客户端解析到请求的 URL 协议是约定要的 mingzi://时, 便会解析参数, 并根据 h5 传入的方法名比如 setLeftButton, 来进行相关操作（设置返回按钮的处理逻辑）。

5. 请求处理完成后的回调

因为咱们 webview 的请求本质上还是异步请求的过程, 当请求完成后, 我们需要有一个 callback 触发, 无论是通知 h5 执行结果，还是返回一些数据， 都离不开 callback 的执行。

我们可以使用 Js 自带的事件机制，window.addEventListener 和 window.dispatchEvent 这两个 API。

还是这个例子, 比如咱们现在要调用 setLeftButton 方法, 方法要传入一个 callback 来得知是否执行成功了。

```js
webview.setLeftButton({ params1: 111 }, (err) => {
  if (err) {
    console.error("执行失败");
    return;
  }
  console.log("执行成功");
  // 业务逻辑
});
```

JsBridge 中具体的步骤应该是这样的：

- 在 H5 调用 setLeftButton 方法时, 通过 webview_api 名称+参数 作为唯一标识,注册自定义事件

```js
const handlerId = Symbol();
const eventName = `setLeftButton_${handlerId}`;
const event = new Event(eventName);
window.addEventListener(eventName, (res) => {
  if (res.data.errcode) {
    console.error("执行失败");
    return;
  }
  console.log("执行成功");
  // 业务逻辑
});

JsBridge.send(`mingzi://setLeftButton?handlerId=${eventName}&params1=111`);
```

- 客户端在接收到请求, 完成自己的对应处理后, 需要调用 JsBridge 中的 dispatch, 携带回调的数据触发自定义事件。

```js
event.data = { errcode: 0 };
window.dispatchEvent(event);
```

## 注入 API

上述方式有个比较大的缺点, 就是参数如果太长会被截断。以前用这种方式主要是为了兼容 iOS6， 现在几乎已经不需要考虑这么低的版本了。

所以现在主流的实现是 native 向 js 的执行环境中注入 API.

具体怎么操作呢, 咱们分步骤来看：

1. 向 native 传递信息

由于 native 已经向 window 变量注入了各种 api, 所以咱们可以直接调用他们。

比如现在 window.mingziWebview = { setLeftButton: (params) => {}} 就是 native 注入的对象 api。

我们可以直接这样调用, 就可以传参数给 native 了

```js
window.mingziWebview["setLeftButton"](params);
```

但是为了安全性, 或者为了不要乱码等问题, 我们一般会对参数进行编码, 比如转换为 base64 格式。

2. 准备接收 native 的回调

咱们同样可以在 window 上声明接收回调的 api

```js
window["setLeftButton_Callback_1"] = (errcode, response) => {
  console.log(errcode);
};
```

同样为了安全性和参数传递的准确性, native 也会将回调的数据进行 base64 编码, 咱们需要在回调函数里进行解析。

3. native 调用回调函数

native 怎么知道哪个是这次的回调函数呢? 他们确实不知道, 所以我们需要在调用的时候就告诉 native。

```js
window.mingziWebview["setLeftButton"](params);
```

这个 Params 中, 我们会加入一个属性叫做 trigger, 它的值是回调函数的名称, 比如

```js
const callbackName = "setLeftButton_Callback_1";
window.mingziWebview["setLeftButton"]({
  trigger: callbackName,
  ...otherParams,
});

window[callbackName] = (errcode, response) => {
  console.log(errcode);
};
```

同时为了保证 callbackName 的唯一性, 我们一般会加入各种 Date.now() + id, 使其保证唯一。
