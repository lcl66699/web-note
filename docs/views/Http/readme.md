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

## 前端的内存处理

内存声明周期：分配，使用，垃圾回收机制回收

### js 的垃圾回收机制

- 引用计数法
  - 看一个对象是否有指向他的引用。如果没有其他对象指向他了，说明这个对象不再被需要了
  - 但是如果是循环引用，引用计数法会无法识别，导致内存泄露
- 标记清除法

  - 标记清除算法将“不再使用的对象”定义为“无法达到的对象”。
  - 简单来说，就是从根部（在 JS 中就是全局对象）出发定时扫描内存中的对象。 凡是能从根部到达的对象，都是还需要使用的。 那些无法由根部出发触及到的对象被标记为不再使用，稍后进行回收。

    1. 垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记。
    2. 从根部出发将能触及到的对象的标记清除。
    3. 那些还存在标记的变量被视为准备删除的变量。
    4. 最后垃圾收集器会执行最后一步内存清除的工作，销毁那些带标记的值并回收它们所占用的内存空间。

### 常见的内存泄露

1. 万恶的全局变量
2. 未被清理的定时器和回调函数
3. 闭包
   一个内部函数，有权访问外部函数的变量

   ```js
   var theThing = null;
   var replaceThing = function() {
     var originalThing = theThing;
     console.log(originalThing);
     var unused = function() {
       //没被用到
       if (originalThing)
         // 对于 'originalThing'的引用
         console.log("hi");
     };
     theThing = {
       longStr: new Array(1000000).join("*"),
       someMethod: function() {
         console.log("message");
       },
     };
   };
   setInterval(replaceThing, 1000);
   ```

   定时器每次调用 replaceThing 的时候，会得到很长的 longStr 字符串和一个对于新闭包 someMethod 对象

   关键在于，闭包之间是共享作用域的，nused 引用了 originalThing，虽然 unused 可能一直没有被调用，但是 someMethod 可能会被调用，
   就会导致无法对其内存进行回收。 当这段代码被反复执行时，内存会持续增长。

4. DOM 引用

```js
var elements = {
  image: document.getElementById("image"),
};
function doStuff() {
  elements.image.src = "http://example.com/image_name.png";
}
function removeImage() {
  document.body.removeChild(document.getElementById("image"));
  // 这个时候我们对于 #image 仍然有一个引用, Image 元素, 仍然无法被内存回收.
}
```

上述案例中，即使我们对于 image 元素进行了移除，但是仍然有对 image 元素的引用，依然无法对齐进行内存回收。

### 避免内存泄露？

- 尽量减少全局变量，使用严格模式避免意外创建全局变量。
- 使用完数据后，及时解除引用（闭包中的变量，dom 引用，定时器清除）。

### 实现一个 sizeOf 函数。接收一个对象，计算传入的对象占用的字节数

```js
function calculator(object) {}

const testObj = {
  a: 1111,
  b: "ccc",
  2222: false,
};

console.log(calculator(testObj));
```

> 解答

```js
var myWeakSet = new WeakSet();
function objSize(object) {
  if (object === null) {
    return 0;
  }
  let bytes = 0;
  let properties = Object.keys(object); //拿到key
  for (let i = 0; i < properties.length; i++) {
    const element = properties[i];
    if (typeof object[element] === "object" && object[element] !== null) {
      if (myWeakSet.has(object[element])) {
        continue;
      }
      myWeakSet.add(object[element]);
    }
    bytes += calculator(object[element]); //value
    bytes += calculator(element); //key
  }

  return bytes;
}

function calculator(object) {
  /**
   * string 每个长度占2字节
   * number 8字节
   * boolean 4字节
   * 数组：数组内的元素相加
   * 对象：分别拿到key和value分别计算 判断value的时候需要判断：
   *      是不是两个key引用的同一个对象
   */
  let objType = typeof object;

  switch (objType) {
    case "string":
      return object.length * 2;
    case "number":
      return 8;
    case "boolean":
      return 4;
    case "object":
      if (Array.isArray(object)) {
        //map中的calculator等于： item => { return calculator(item) }
        return object.map(calculator).reduce((a, b) => {
          return a + b;
        }, 0);
      } else {
        return objSize(object);
      }
    default:
      return 0;
  }
}

const obj2 = {
  A: 132,
  B: [1, 2, 3],
}; //占用 2+8+2+24=36

const testObj = {
  a: obj2,
  b: obj2,
  c: [1, 0, false],
};

console.log(calculator(testObj));
```

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

## 防抖和节流

函数防抖（debounce）：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。如下图，持续触发 scroll 事件时，并不执行 handle 函数，当 1000 毫秒内没有触发 scroll 事件时，才会延时触发 scroll 事件。 debounce.webp

函数节流（throttle）：当持续触发事件时，保证一定时间段内只调用一次事件处理函数。节流通俗解释就比如我们水龙头放水，阀门一打开，水哗哗的往下流，秉着勤俭节约的优良传统美德，我们要把水龙头关小点，最好是如我们心意按照一定规律在某个时间间隔内一滴一滴的往下滴。

比如，持续触发 scroll 事件时，并不立即执行 handle 函数，每隔 1000 毫秒才会执行一次 handle 函数。

## 分别适合用在什么场景？

节流：resize scroll
防抖：input 输入框 比如搜索

防抖 频繁输入 1s 后触发：

```html
<input type="text" oninput="test(event)" />
<script>
  var changeinput = (event) => {
    console.log(event.target.value);
  };
  var debounce = (fn, wait) => {
    var timeout = null;
    return function() {
      if (timeout !== null) {
        clearInterval(timeout);
      }
      timeout = setTimeout(() => {
        fn.apply(this, arguments);
      }, wait);
    };
  };

  var test = debounce(changeinput, 1000);
</script>
```

### 节流实现:首节流

```js
/*
    节流实现 时间戳的实现，
    首节流，第一次立即执行。但是最后如果只滚动了一秒，不会再执行了
*/
function throttle(fn, delay) {
  let last = 0;
  return function() {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn.apply(this, arguments);
    }
  };
}

function handle(val = "test") {
  console.log(val, new Date());
}

const throttleHander = throttle(handle, 2000);
window.addEventListener("scroll", throttleHander);
```

### 节流实现:尾节流

```js
/*
    定时器实现，尾节流，不会立刻执行函数，而是再delay之后执行
    最后一次停止触发后，因为delay的定时器，还会执行一次
*/
function throttle(fn, delay) {
  let timer = null;
  return function() {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, arguments);
      }, delay);
    }
  };
}

function handle(val = "test") {
  console.log(val, new Date());
}

const throttleHander = throttle(handle, 2000);
window.addEventListener("scroll", throttleHander);
```

### 节流实现，兼顾了首节流和尾节流

```js
var myipy = (val) => {
  console.log("节流实现，兼顾了首节流和尾节流");
};
function throttle(fn, delay) {
  var last = 0;
  var timer = null;
  return function() {
    const now = Date.now();
    clearInterval(timer);
    if (now - last >= delay) {
      fn.call(this, ...arguments);
      last = Date.now();
    } else {
      timer = setTimeout(() => {
        fn.call(this, ...arguments);
        last = Date.now();
      }, delay);
    }
  };
}
var mydebouce = throttle(myipy, 2000);

window.addEventListener("scroll", mydebouce);
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

## 事件循环 Event Loop

首先 JavaScript 是一门单线程语言，异步操作都是放到事件循环队列里面，等待主执行栈来执行的，并没有专门的异步执行线程。

### 执行顺序：

开始释放微任务队列，根据微任务先进先出的原则，把最近放在其队列的微任务依次拿出来运行，完了之后，接着再开始释放宏任务队列，根据宏任务先进后出的原则，把最先放在其队列的宏任务依次拿出来运行，完了以后全部结束。

先执行同步代码，遇到异步宏任务如定时器则将异步宏任务放入宏任务队列中，遇到异步微任务（如 promise.then()之类的）则将异步微任务放入微任务队列中，当所有同步代码执行完毕后，开始释放微任务队列，根据微任务先进先出的原则，把最近放在其队列的微任务依次拿出来运行，微任务执行完毕后再将异步宏任务从队列中调入主线程执行，一直循环直至所有任务执行完毕。

- 宏任务是主流，当 js 开始被执行的时候，就是开启一个宏任务，在宏任务中执行一条一条的指令；
- 宏任务可以同时有多个，但会按顺序一个一个执行；
- 每一个宏任务，后面都可以跟一个微任务队列，如果微任务队列中有指令或方法，那么就会执行；如果没有，则开始执行下一个宏任务，直到所有的宏任务执行完为止，微任务相当于宏任务的小尾巴；
- 为什么有了宏任务，还会有微任务存在？因为宏任务太占用性能，当需要一些较早就准备好的方法，排在最后才执行的时候，又不想新增一个宏任务，那么就可以把这些方法，一个一个的放在微任务队列里面，在这个宏任务中的代码执行完后，就会执行微任务队列。

因此当前同步代码执行，遇到异步任务，如果是异步宏任务，放入下一轮宏任务队列，是异步微任务，放入微任务队列跟在当前宏任务屁股后面。微任务相当于宏任务的小尾巴，因此当前宏任务执行完，在它后面等着的异步微任务就会被立刻放入队列继续执行。而异步的宏任务需要等到下一轮，从而造成了异步中微任务在宏任务之前执行的情况。
除此之外，在 js 中还存在宏任务和微任务。

1. 同步
2. 微任务（Promise.then、Promise.catch,MutaionObserver,process.nextTick(Node.js 环境))
3. 宏任务（script( 整体代码)，计时器，ajax，读取文件,事件绑定,回调函数,Node 中 fs 可以进行异步的 I/O 操作）
4. setImmediate

> process.nextTick(Node.js 环境)
>
> process.nextTick(node 中实现的 api，把当前任务放到主栈最后执行，当主栈执行完，先执行 nextTick，再到等待队列中找)

#### Promise 和 async 中的立即执行

我们知道 Promise 中的异步体现在 then 和 catch 中，所以写在 Promise 中的代码是被当做同步任务立即执行的。而在 async/await 中，在出现 await 出现之前，其中的代码也是立即执行的。那么出现了 await 时候发生了什么呢?

从字面意思上看 await 就是等待，await 等待的是一个表达式，这个表达式的返回值可以是一个 promise 对象也可以是其他值。

很多人以为 await 会一直等待之后的表达式执行完之后才会继续执行后面的代码，实际上 await 是一个让出线程的标志。await 后面的表达式会先执行一遍，将 await 后面的代码加入到 microtask 队列中，然后就会跳出整个 async 函数来执行后面的代码。

#### code

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");
setTimeout(function() {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function(resolve) {
  console.log("promise1");
  resolve();
}).then(function() {
  console.log("promise2");
});

console.log("script end");

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout
```

```js
console.log("start");
setTimeout(() => {
  console.log("children2");
  Promise.resolve().then(() => {
    console.log("children3");
  });
}, 0);

new Promise(function(resolve, reject) {
  console.log("children4");
  setTimeout(function() {
    console.log("children5");
    resolve("children6");
  }, 0);
}).then((res) => {
  console.log("children7");
  setTimeout(() => {
    console.log(res);
  }, 0);
});

// 答案
// start
// children4
// children2
// children3
// children5
// children7
// children6

//分析：这道题执行代码会产生很多个宏任务，每个宏任务中又会产生微任务

// 1. 从上往下执行代码，先执行同步代码，输出 start
// 2. 遇到setTimeout，先把 setTimeout 的代码放到宏任务队列①中
// 3. 接着往下执行，输出 children4, 遇到setTimeout，先把 setTimeout 的代码放到宏任务队列②中，此时.then并不会被放到微任务队列中，因为 resolve是放到 setTimeout中执行的
// 4. 代码执行完成之后，会查找微任务队列中的事件，发现并没有，于是开始执行宏任务①，即第一个 setTimeout， 输出 children2，此时，会把 Promise.resolve().then放到微任务队列中。
// 5. 宏任务①中的代码执行完成后，会查找微任务队列，于是输出 children3；然后开始执行宏任务②，即第二个 setTimeout，输出 children5，此时将.then放到微任务队列中。
// 6. 宏任务②中的代码执行完成后，会查找微任务队列，于是输出 children7，遇到 setTimeout，放到宏任务队列中。此时微任务执行完成，开始执行宏任务，输出 children6;
```
