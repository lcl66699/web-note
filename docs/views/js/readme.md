# 事件循环

## Event Loop

首先 JavaScript 是一门单线程语言，异步操作都是放到事件循环队列里面，等待主执行栈来执行的，并没有专门的异步执行线程。

### 宏任务
  - script( 整体代码)
  - 计时器
  - ajax
  - 读取文件
  - 事件绑定
  - 回调函数
  - Node 中 fs 可以进行异步的 I/O 操作
  
### 微任务
  - Promise.then
  - Promise.catch
  - MutaionObserver(前端的回溯)
  - process.nextTick(Node.js 环境)

### node中的事件循环和浏览器中的事件循环区别

node宏任务执行顺序：

  1. timer定时器
  2. pending callback 待定回调 执行延迟到下一个循环迭代的I/O回调
  3. idle prepare 仅系统内部使用
  4. poll 检索新的I/O事件，执行与I/O相关的回调
  5. check：执行setImmediate()回调函数
  6. close callback ：sock.on('close',()=>{})

node v10之前：
1. 执行完一个阶段的所有任务
2. 执行nextTick队列里的内容
3. 执行完微任务队列的内容

node v10以后：
和浏览器的行为相同了




### 执行顺序

:::tip 
先执行同步代码，遇到异步宏任务如定时器则将异步宏任务放入宏任务队列中，遇到异步微任务（如 promise.then()之类的）则将异步微任务放入微任务队列中，当所有同步代码执行完毕后，开始释放微任务队列，根据微任务先进先出的原则，把最近放在其队列的微任务依次拿出来运行，微任务执行完毕后再将异步宏任务从队列中调入主线程执行，一直循环直至所有任务执行完毕。
:::
- 宏任务是主流，当 js 开始被执行的时候，就是开启一个宏任务，在宏任务中执行一条一条的指令；
- 宏任务可以同时有多个，但会按顺序一个一个执行；
- 每一个宏任务，后面都可以跟一个微任务队列，如果微任务队列中有指令或方法，那么就会执行；如果没有，则开始执行下一个宏任务，直到所有的宏任务执行完为止，微任务相当于宏任务的小尾巴；
- 为什么有了宏任务，还会有微任务存在？因为宏任务太占用性能，当需要一些较早就准备好的方法，排在最后才执行的时候，又不想新增一个宏任务，那么就可以把这些方法，一个一个的放在微任务队列里面，在这个宏任务中的代码执行完后，就会执行微任务队列。

因此当前同步代码执行，遇到异步任务，如果是异步宏任务，放入下一轮宏任务队列，是异步微任务，放入微任务队列跟在当前宏任务屁股后面。微任务相当于宏任务的小尾巴，因此当前宏任务执行完，在它后面等着的异步微任务就会被立刻放入队列继续执行。而异步的宏任务需要等到下一轮，从而造成了异步中微任务在宏任务之前执行的情况。


> process.nextTick(Node.js 环境)
>
> process.nextTick(node 中实现的 api，把当前任务放到主栈最后执行，当主栈执行完，先执行 nextTick，再到等待队列中找)

### Promise 和 async 中的立即执行

我们知道 Promise 中的异步体现在 then 和 catch 中，所以写在 Promise 中的代码是被当做同步任务立即执行的。而在 async/await 中，在出现 await 出现之前，其中的代码也是立即执行的。那么出现了 await 时候发生了什么呢?

从字面意思上看 await 就是等待，await 等待的是一个表达式，这个表达式的返回值可以是一个 promise 对象也可以是其他值。

await 后面的函数相当于在new Promise 里面,await下一行的代码相当于.then

很多人以为 await 会一直等待之后的表达式执行完之后才会继续执行后面的代码，实际上 await 是一个让出线程的标志。await 后面的表达式会先执行一遍，将 await 后面的代码加入到 microtask 队列中，然后就会跳出整个 async 函数来执行后面的代码。

### code

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

```js
Promise.resolve()//先执行
    .then(async () => {//执行上行后走微任务
        console.log(0);
        setTimeout(() => {
            console.log('宏任务');
        }, 0);
        return Promise.resolve(4);//当执行栈空的时候 job进队列
        // return 4
    })
    .then((res) => {
        console.log(res);
    });


Promise.resolve().then(() => {//回调进入微任务2
    console.log(1);
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5);
}).then(() => {
    console.log(6);
}).then(() => {
    console.log(7);
}).then(() => {
    console.log(8);
})
//return Promise.resolve() 会产生两个微任务
/*
当前执行栈为空的时候，才会resolve
*/
```


## 防抖和节流

函数防抖（debounce）：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。如下图，持续触发 scroll 事件时，并不执行 handle 函数，当 1000 毫秒内没有触发 scroll 事件时，才会延时触发 scroll 事件。 debounce.webp

函数节流（throttle）：当持续触发事件时，保证一定时间段内只调用一次事件处理函数。节流通俗解释就比如我们水龙头放水，阀门一打开，水哗哗的往下流，秉着勤俭节约的优良传统美德，我们要把水龙头关小点，最好是如我们心意按照一定规律在某个时间间隔内一滴一滴的往下滴。

比如，持续触发 scroll 事件时，并不立即执行 handle 函数，每隔 1000 毫秒才会执行一次 handle 函数。

- 适合场景
  - 节流：resize scroll
  - 防抖：input 输入框 比如搜索

### 防抖实现
频繁输入 1s 后触发：
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

## Promise

### Promise.all

有一个报错了,其他的Promise还会执行嘛?
  - 会的,在实例化的时候就已经执行了

#### 手写Promise.all

```js
const PromiseAll = (arr) => {
    return new Promise((reslove, reject) => {
        if (!Array.isArray(arr)) { return reject('传入的参数需是数组') }
        let resArr = []
        let counter = 0////这个变量用来计数
        arr.forEach((item, i) => {
            //检验传来的值是不是promise 这种处理方式得*2 不是很简洁
            const isPromise = Object.prototype.toString.call(item) === '[object Promise]'
            //检验传来的值是不是promise,直接Promise.resolve,因为Promise.resolve包裹的参数默认就会转Promise,不需要关注类型了
            Promise.resolve(item).then((val) => {
                counter++
                resArr[i] = val
                //为何不用resArr.length去判断?是因为执行的可能是异步,
                //所以在赋值的时候,很可能先赋值到大的下标,这时候数组长度虽然变长,但是其他Promise并未返回
                if (counter == arr.length) {
                    reslove(resArr)
                }
            }).catch(err => reject(err))
        })
    })
}

const pro1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('1')
    }, 1000)
})
const pro2 = new Promise((res, rej) => {
    setTimeout(() => {
        res('2')
    }, 2000)
})
const pro3 = new Promise((res, rej) => {
    setTimeout(() => {
        res('3')
    }, 3000)
})

const pro4 = 123

const peoAll = PromiseAll([pro1, pro2, pro3, pro4])
    .then((res) => {
        console.log('3s', res);//3s后打印['1','2','3']
    })
    .catch((err) => {
        console.log(err);
    })
```

#### Promise缓存

## 装饰器