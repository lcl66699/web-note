## 网络和并发

### http/1.0/1.1/2.0 在并发请求的主要区别是什么？

##### 1. http-1.0

    每个TCP连接只能发送一个请求，当服务器响应后就会关闭这个连接，下一次请求需要再次建立TCP连接。

    想要持久连接：Contention：keep-alive

##### 2. http-1.1

默认采用持久连接，也是 tcp 连接。

不采用持久连接的话：Contention：close

管道机制：在同一个 tcp 连接里，允许多个请求同时发送，一问一答形式。
缺点：队头阻塞（按照顺序一一相应，不能并行相应，按照到达顺序来，比如第一个请求相应特别长，后面的请求等待前面请求的返回才能获得执行机会。

##### 3. http-2.0

- 加了双工模式，服务器可以同时处理多个请求了，解决了队头阻塞问题。多个请求可同时在一个连接上并行执行。某个请求任务耗时严重，不会影响到其它连接的正常执行；一个消息发送后不用等待接受,第二个消息可以直接发送.
- 多路复用

  没有次序概念。Http/1.x 有个问题叫线端阻塞，它是指一个连接一次只提交一个请求的效率比较高，多了就会变慢。而多路传输可以很好的解决这个问题，因为它能同时处理多个消息的请求和响应，甚至可以在传输过程中将一个消息跟另一个参杂在一起。所以客户端只需要一个连接就能加载一个页面。即只需建立一次连接，即一轮三次握手，实现多路复用。

- 服务器推送

这个功能通常被称作“缓存推送”。
例如网页中有一个 style.css 的请求，客户端收到 style.css 数据的同时，服务端会将 style.js 的文件推给客户端。当客户端收到再次尝试 style.js 的时候就可以直接读取缓存，不用再发送请求。

- 报头压缩

  和同一域名请求，只发送请求头不同的部分，这样就解决了 http1 中的问题 请求头过大而且重复发送

- Http/2 采用二进制格式而非文本格式

  它把原来的 header+body 的数据格式拆分为一帧帧的二进制数据进行发送，而且收发都是无顺序的，这意味着不会出现堵塞。一帧帧数据上有个标识 id,能够区分数据 ，浏览器可以据此组合出数据

### http1.1 的长连接和 2.0 多路复用什么区别？

##### http1.1：同一个时间一个 tcp 连接只能处理一个请求，采用一问一答形式。

依然存在的问题：

    1. 多个请求只能被串行处理（数据基于文本，只能按顺序传输）；
    2. 访问多个不同的文件依然会建立多个请求。

chrome 支持最大 6 个 tcp 连接。

##### http2.0：同域名上的所有通信都在单个连接上完成，单个连接可以并行的进行请求和相应

并行实现原理：http2.0 引入二进制数据帧和流的概念（数据帧对每一个数据进行标识，可以不按顺序传输，从而实现并行）

### 为什么 1.1 不能实现多路复用？

传输数据的方式不同，http2.0 基于二进制格式而非文本格式，而 1.0 是基于文本分隔符解析的协议

1.1 报文结构里，服务器需要不断的读入字节，知道遇到换行符，处理顺序串行

> get http/1.1 <br/>
> Accept: <br/>
> host: <br/>
> referer: <br/> <br/>
> POST

2.0 以帧为最小数据单位，每个帧都会有标识自己属于哪个流，多个帧组成一个流.

多路复用，其实就是一个 TCP 里存在多条流

### 实现一个控制并发量的函数，接收并发量的参数。3，urls=[8]

## 闭包

1. 创建私有变量
2. 延长变量的生命周期

## jsBridge

Hybrid 混合开发就是 native + h5 的双向通信

> native <=>jsbridge <=> h5

native 通讯流程有两种方式：

- URL Schema， 客户端通过拦截 webview 请求来完成通讯
- native 向 webview 中的 js 执行环境, 注入 API, 以此来完成通讯

### 一、URL Schema, 客户端拦截 webview (所谓的 native 提供 h5 的容器)请求

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

### 注入 API

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

## EventBus-发布订阅模式

比如 Vue 的 event bus, node 的 eventemitter3

### 1. 这种模式, 事件的触发和回调之间是同步的还是异步的?

eventemitter3 是同步的，一般是同步的

### 2. 实现一个简单的 EventEmitter 并设置设置最大监听数?

    包含：
    on 添加监听
    emit 触发
    once 执行一次监听
    off 解除监听

```js
class EventEmitter {
  constructor(options = {}) {
    this.events = {}; //存  {add：[cb1,cb2]}
    this.maxListeners = options.maxListeners || Infinity;
  }
  // 触发监听
  emit(event, ...args) {
    const cbs = this.events[event];

    if (!cbs) {
      console.warn(event, "大咩大咩");
      return this;
    }
    cbs.forEach((element) => {
      element.call(this, ...args);
    });
  }
  // 订阅监听
  on(event, cb) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    if (
      this.maxListeners !== Infinity &&
      this.maxListeners <= this.events[event].length
    ) {
      console.warn(event, "超过最大监听数");
      return this;
    }
    this.events[event].push(cb);
    return this;
  }
  // 只会触发一次
  once(event, cb) {
    const func = (...args) => {
      this.off(event, func);
      cb.call(this, ...args);
    };
    this.on(event, func);
    return this;
  }
  // 关闭监听
  off(event, cb) {
    if (!cb) {
      this.events[event] = null;
    } else {
      this.events[event] = this.events[event].filter((item) => item !== cb);
    }
    return this;
  }
}

const add = (a, b) => console.log(a + b);
const log = (...args) => console.log(...args);
const myEvent = new EventEmitter({ maxListeners: 2 });

//测试超过最大监听数
myEvent.on("test", (val) => {
  console.log(1, val);
});
myEvent.on("test", (val) => {
  console.log(2, val);
});
myEvent.on("test", (val) => {
  console.log(3, val);
});
myEvent.on("test", (val) => {
  console.log(4, val);
});
myEvent.emit("test", "测试最大监听");

myEvent.on("log", log);
myEvent.emit("add", 1, 2); // 3
myEvent.emit("log", "hi~"); // 'hi~'
myEvent.off("add");
myEvent.emit("add", 1, 2); // Error: add event is not registered.
myEvent.once("once", add);
myEvent.emit("once", 1, 2); // 3
myEvent.emit("once", 1, 2);
myEvent.emit("once", 1, 2);
```

## 用 setTimeout 实现 setInterval

```js
let timer = null;
function mockSetInterval(fn, time, ...arg) {
  const recur = function() {
    timer = setTimeout(() => {
      fn.call(this, ...arg);
      recur();
    }, time);
  };
  recur();
}
function mockClear() {
  clearInterval(timer);
}

//定时器启动
mockSetInterval(
  (val) => {
    console.log("start", val);
  },
  1000,
  999
);

// 5s后clear定时器
setTimeout(() => {
  mockClear(timer);
}, 5000);
```

> 另一种实现方法 class

```js
class MockSet {
  constructor(fn, time, ...arg) {
    this.fn = fn;
    this.time = time;
    this.arg = arg;
    this.timer = null;
    (() => {
      const recur = () => {
        this.timer = setTimeout(() => {
          this.fn.apply(this, this.arg);
          recur();
        }, this.time);
      };
      recur();
    })();
  }
  clearInterval() {
    clearInterval(this.timer);
  }
}

var myset = new MockSet(
  (val) => {
    console.log(132, val);
  },
  1000,
  ["传的参数", 123, 43, 654]
);

setTimeout(() => {
  myset.clearInterval();
}, 4000);
```

## 实现红绿灯

要求使用一个 div 实现红绿灯效果, 把一个圆形 div 按照绿色 3 秒，黄色 1 秒，红色 2 秒循环改变背景色。

Tips: 同学们可以回去尝试使用 setTimeout 嵌套/promise 链式调用 分别实现一下

```js
const colorConfig = {
  green: 3000,
  yellow: 1000,
  red: 2000,
};
var delay = (time) => {
  return new Promise((res, rej) => {
    setTimeout(res, time);
  });
};
var changeColor = async (dom, color, time) => {
  dom.style.background = color;
  await delay(time);
};
var box = document.getElementById("box");
var run = async () => {
  for (const key in colorConfig) {
    await changeColor(box, key, colorConfig[key]);
  }
  run();
};
run();
```


## HTTP请求相关

### 解决跨域
  1. jsonp
  2. cors
  3. node正向代理，比如请求/api 可以转接到同域的服务去访问/api，绕过浏览器同源策略，再返回前端
  4. nginx 反向代理，proxy_pass
  5. image标签

### 有做过全局的请求处理吗？比如统一请求并设置登录态, 比如报错统一弹toast等

    Axios的request interceptor 和 response interceptor, 单例

### 3. 你能给xhr添加hook, 实现在各个阶段打印日志吗?

    代码题, 实现页面上通过xhr发请求的时候, 在xhr的生命周期里, 能够实现自定义的行为触发。
```js
class XhrHook {
    /**
     * 构造函数
     * @param {*} beforeHooks 
     * @param {*} afterHooks 
     */
    constructor(beforeHooks = {}, afterHooks = {}) {
        // 单例
        if (XhrHook.instance) {
            return XhrHook.instance;
        }

        this.XHR = window.XMLHttpRequest;

        this.beforeHooks = beforeHooks;
        this.afterHooks = afterHooks;
        this.init();

        XhrHook.instance = this;
    }

    /**
     * 初始化 重写xhr对象
     */
    init() {
        let _this = this;

        window.XMLHttpRequest = function () {
            this._xhr = new _this.XHR();

            _this.overwrite(this);
        }

    }

    /**
     * 处理重写
     * @param {*} xhr 
     */
    overwrite(proxyXHR) {
        for (let key in proxyXHR._xhr) {

            if (typeof proxyXHR._xhr[key] === 'function') {
                this.overwriteMethod(key, proxyXHR);
                continue;
            }

            this.overwriteAttributes(key, proxyXHR);
        }
    }

    /**
     * 重写方法
     * @param {*} key 
     */
    overwriteMethod(key, proxyXHR) {
        let beforeHooks = this.beforeHooks;
        let afterHooks = this.afterHooks;

        proxyXHR[key] = (...args) => {
            // 拦截
            if (beforeHooks[key] && (beforeHooks[key].call(proxyXHR, args) === false)) {
                return;
            }

            // 执行方法本体
            const res = proxyXHR._xhr[key].apply(proxyXHR._xhr, args);

            // 方法本体执行后的钩子
            afterHooks[key] && afterHooks[key].call(proxyXHR._xhr, res);

            return res;
        };
    }

    /**
     * 重写属性
     * @param {*} key 
     */
    overwriteAttributes(key, proxyXHR) {
        Object.defineProperty(proxyXHR, key, this.setProperyDescriptor(key, proxyXHR));
    }

    /**
     * 设置属性的属性描述
     * @param {*} key 
     */
    setProperyDescriptor(key, proxyXHR) {
        let obj = Object.create(null);
        let _this = this;

        obj.set = function (val) {

            // 如果不是on打头的属性
            if (!key.startsWith('on')) {
                proxyXHR['__' + key] = val;
                return;
            }

            if (_this.beforeHooks[key]) {

                this._xhr[key] = function (...args) {
                    _this.beforeHooks[key].call(proxyXHR);
                    val.apply(proxyXHR, args);
                }

                return;
            }

            this._xhr[key] = val;
        }

        obj.get = function () {
            return proxyXHR['__' + key] || this._xhr[key];
        }

        return obj;
    }

    /**
     * 获取实例
     */
    getInstance() {
        return XhrHook.instance;
    }

    /**
     * 添加钩子
     * @param {*} key 
     * @param {*} value 
     */
    add(key, value, execed = false) {
        if (execed) {
            this.afterHooks[key] = value;
        } else {
            this.beforeHooks[key] = value;
        }
        return this;
    }

    /**
     * 删除钩子
     * @param {*} name 
     */
    rmHook(name, isExeced = false) {
        let target = (isExeced ? this.afterHooks : this.beforeHooks);
        delete target[name];
    }

    /**
     * 清空钩子
     */
    clearHook() {
        this.beforeHooks = {};
        this.afterHooks = {};
    }

    /**
     * 取消监听
     */
    unset() {
        window.XMLHttpRequest = this.XHR;
    }

    /**
     * 重新监听
     */
    reset() {
        XhrHook.instance = null;
        XhrHook.instance = new XhrHook(this.beforeHooks, this.afterHooks);
    }
}

new XhrHook({
    open: function () {
        console.log('open');
        // return false;
    },
    onload: function () {
        console.log('onload');
    },
    onreadystatechange: function () {
        console.log('onreadystatechange');
    },
    onerror: function () {
        console.log('hook error')
    }
});



var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://www.baidu.com', true);

xhr.send();

xhr.onreadystatechange = function (res) {
    console.log('statechange');
}

xhr.onerror = function () {
    console.log('error');
}
```
