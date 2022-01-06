
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

### 误人子弟版
  
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

### 实现async、await
....
## 工程化问题

### 如何优化node镜像制作
   - DOCKER_BUILDKIT 查看 dockerfile instruction 耗时
   - FROM YOUR_OLD_DOCK 基于历史最新的业务镜像构建
   - COPY 等指令，充分利用 cache
   - 优化 OS 大小，alpine
   - npm i --only=production 移除 devDependencies
   - 抽出来放 CDN 
   - ...
   - devOps

### webpack热更新原理


```javascript
/**
 *           内存文件系统
 *               |
 *              读写
 *               |
 *          webpack compile     - watch -      代码
 *               |                               |
 *                ----------------------------change
 *               |
 *            server(websocket) --> manifest(hash.hot-update.json / hash.hot-update.js) ｜ hash & chunk
 *              |
 *              |
 *  Browser: hotDownloadManifest(拉 manifest)
 *              |
 *              | get hash chunkid
 *              |
 *           hotDownloadUpdateChunk(拉 chunkjs 文件)
 *              |
 *              |
 *           hotAddUpdateChunk(update the chunk)
 *              |
 *              |
 *           hotUpdateDownloaded
 */

// homework： 思考如何让传统的 webpack hmr 更快？
// 思路：
// 1. 为什么慢？
// 2. 跟模块模式有关联吗？ ESM
// 3. 想想 vite？
```

## 开放性问题实战

### `obj.a.b.c` 和 `obj['a']['b']['c']` 哪一个性能更好？

- AST
- 编译一下，汇编的角度去看
- 分析源码，V8 JerryScript...

### 如何突破 `localStorage` 的大小限制？

- 同域 ，破绽：port
> 127.0.0.1:1000 -> 127.0.0.1:1099

## 算法题实战

1. 最短编辑距离算法问题 难度：🪐

```javascript
// 给出两个单词word1和word2，计算出将word1 转换为word2的最少操作次数。

// 你总共三种操作方法：

// 插入一个字符
// 删除一个字符
// 替换一个字符

// 解答 👇

/**
 *  [
 *    [0, 1, 2],
 *    [1, x, x],
 *    [2, x, x]
 *  ]
 * */

// bai  -  bay  => 1
const levenshtein = (s1, s2) => {
  let l1 = s1.length;
  let l2 = s2.length;
  
  const matrix = [];

  for (let i = 0; i <= l1; i++) {
    matrix[i] = []; // [[], []]

    for (let j = 0; j <= l2; j++) {
      if (i === 0) {
        matrix[i][j] = [j]; // [[0, 1, 2]]
      }
      else if(j === 0) {
        matrix[i][j] = i; //  [[0, 1, 2], [1], [2]];
      }
      else {
        // 填写 xxxx

        // 相同为 0  不同为 1
        let cost = 0;
        if (s1[i - 1] !== s2[j - 1]) {
          cost = 1;
        }

        // 左上角顶点
        const temp = matrix[i - 1][j - 1] + cost;
        // 和上，下，左上角，取最小
        matrix[i][j] = Math.min(temp, matrix[i - 1][j] + 1, matrix[i][j - 1] + 1)
      }
    }
  }

  return matrix[l1][l2];
}

// homework: 思考 `Levenshtein Distance` 算法和 `React` 千丝万缕的联系.
```

## webpack

### webpack中的Module是什么？

前端模块
wepack支持 ESModule、CommonJs、AMD、Assets(image,font,video,audio,json)

1. ESModule

关键字 export import

1. Commonjs
   
关键字 module.exports require

package.json

type:module -> ESM
type:commonjs -> cjs 强制使用cmj模块

### webpack modules,如何表达自己的各种依赖关系
* ESM import 语句
* CommonJS require() 语句
* AMD define 和 require 语句
* css/sass/less 文件中的 @import 语句。
* stylesheet url(...) 或者 HTML `<img src=...> `文件中的图片链接。

### *常说的 chunk和bundle的区别是什么？

1. chunk(过程)
   chunk是webpack打包过程中Modules的集合，是<span style='color:red'>打包过程中的概念</span>
   webpack打包从一个入口模块开始，入口模块引用其他模块，其他模块又引用其他模块...
   通过引用关系逐个打包模块，这些module形成了chunk

   如果有多个入口文件，会产生多个打包路径，每条路径都会形成各自的chunk。

2. bundle(结果)
  是我们最终输出的一个或多个打包好的文件。

::: warning 区别
大多数情况下，一个chunk会产生一个bundle，但是也有例外。
比如当我们开启source-map后, chunk和bundle就不是一对一的关系了。下面代码是一个
chunk对应两个bundle。chunk是过程中的代码块，bundle是打包结果输出的代码块，chunk在构建完成后就会变成bundle
::: 

```js
module.exports = {
    mode: "production",
    entry: {
        index: "./src/index.js"
    },
    output: {
        filename: "[name].js"
    },
    devtool: "source-map"
};
```
