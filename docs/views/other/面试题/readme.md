
# 面试题

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

Tips: 也可以尝试使用 setTimeout 嵌套/promise 链式调用 分别实现一下

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


## 闭包

1. 创建私有变量
2. 延长变量的生命周期



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
      console.warn(event, "哒咩这个事件");
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
    return this;//链式调用 所以return this
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

## 实现lodash中的get函数

```js
const get = (data, path, defaultValue = void 0) => {
    const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.');
    console.log(paths);
    let result = data
    for (const path of paths) {
        result = result[path]
        console.log(result);
        if (result == null) {
            return defaultValue
        }
    }

    return result
}
console.log(132, get(obj, 'a.b.c', null))
```
## 实现add(1)(2)(3)-函数柯里化

:::tip 柯里化
英语：Currying，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
:::
### 参数固定版
  1. 知道原来的函数是需要多少参数的  fn.length（函数的length 属性指明函数的形参个数。）
  2. 每次都要返回一个新的函数
  3. 每次函数执行的时候，都要把参数收集起来 [...args]
  4. 终止条件：当收集的参数个数 (args.length === fn.length)
  5. fn.apply
```js
const curry = (fn, ...args) => {
    // 函数的参数个数可以直接通过函数数的.length属性来访问
    return args.length >= fn.length // 这个判断很关键！！！
        // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
        ? fn(...args)
        /**
         * 传入的参数小于原始函数fn的参数个数时
         * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
        */
        : (..._args) => curry(fn, ...args, ..._args);
}
function add1(x, y, z) {
    return x + y + z;
}

const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
```
### 参数不固定
```js
const add = (...args) => {
    return args.reduce((a, b) => a + b)
}

const curry = (fn) => {
    let args = []
    return function curring(..._args) {
        if (_args.length) {//还有参数
            args.push(..._args)
            // args = [...args, ..._args]
            return curring
        } else {
            let res = fn.apply(this, args)
            args = []//如果不清空再次调用的时候，会有残留
            return res
        }
    }
}

const curryAdd = curry(add)

console.log(curryAdd(1, 2, 3)());//注意调用的时候，需要()再调用
console.log(curryAdd(1)(2)(3)());
console.log(curryAdd(1, 2)(3)());
console.log(curryAdd(1)(2, 3)());
```

### <span style='color:red'>误人子弟版</span> 
  
网上很多说这种toString隐式转换的，但是我认为并不对,特别是用
`Array.prototype.slice.call(arguments)`这个的，对于新手来说不是特别清晰，花里胡哨搞一堆，下面贴代码。
```js
function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    let args = [...arguments]
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    let adder = function () {
        args.push(...arguments)
        return adder
    }

    //return一个函数会隐士转换为string类型，所以重写toString方法
    adder.toString = function () {
        return args.reduce((a, b) => {
            return a + b
        })
    }
    return adder
}

let a = add(1)(2)(3)
// firefox是直接打印对象，chorme打印的是fn
console.log(a);
console.log(add(1, 2, 3)(4));
console.log(add(1)(2)(3)(4)(5));
alert(add(2, 6)(1));//alert会触发隐式转换，console.log不行

```


