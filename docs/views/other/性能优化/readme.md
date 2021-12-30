# 性能优化

做性能优化的目的？

1. 首屏时间（比如刷新后的白屏）
2. 首次可交互时间 （比如输入框验证码）
3. 首次有意义内容渲染时间

## 前端的性能优化

页面性能检测: https://developers.google.com/speed/pagespeed/insights/ 

1. 只请求当前需要的资源
    路由异步加载, 图片懒加载, polyfill的优化(可以做低版本适配) 

    [(只引入需要的，cnd链接,实现对polyfill的按需加载)](https://polyfill.io/v3/url-builder/)
    
2. 缩减资源体积
    - 打包压缩 webpack4已经内置了
    - gzip 一种压缩的算法，压缩静态资源的，后端node或者nginx可以开启
    - 图片格式优化, 压缩(https://tinypng.com/), 根据屏幕分辨率展示不同分辨率的图片,webp可以无损压缩
    - 尽量控制cookie大小(每一个请求都会带cookie)
3. 时序优化
    - js中promise.all去并发的发请求
    - ssr-把打包放在服务端进行渲染，也方便seo
    - prefetch、prerender、preload
    - <link rel="dns-prefetch" href="xxxxxx" /> 立刻去请求dns
    - <link rel="preconnect" href="xxxxxxx" /> 域连接，访问域名的时候
    - <link rel="preload" as="image" href="xxxxxxxxx" /> 预加载
4. 合理利用缓存
    cdn cdn预热（不通过访问，提前预热） cdn刷新（原站更新了，强制去cdn）
    http缓存
    localStorage, sessionStorage

### 如果⼀段js执行时间非常长, 怎么去分析?

装饰器装饰一下
```ts
export function measure(target: any, name: string, descriptor: any) {
  const oldValue = descriptor.value;

  descriptor.value = async function() {
    console.time(name);
    const ret = await oldValue.apply(this, arguments);
    console.timeEnd(name);
    return ret;
  };

  return descriptor;
}

//使用
export default class Home extends Vue {
    public longTimefn() {
        return new Promise((resolve) => setTimeout(resolve, 3000));
    }

    @measure
    public async created() {
        await this.longTimefn();
    }
}
```


### 阿⾥云oss⽀持通过链接后拼参数实现图⽚格式转换, 尝试写⼀下, 把图⽚转为webp格式? 需要注意什么?

首先判断浏览器支不支持webp,处理边界
[caniuse](https://caniuse.com/)

```js
function checkWebp() {
    try {
        return (
            document
                .createElement('canvas')//创建canvas元素
                .toDataURL('image/webp')//转成base64
                .indexOf('data:image/webp') === 0//转成之后查找有没有data:image/webp，有就是转成了
        );
    } catch (err) {
        return false;
    }
}

const supportWebp = checkWebp();

export function getWebpImageUrl(url) {
    if (!url) {
        throw Error(url, 'url不能为空');
    }
    if (url.startsWith('data:')) {//是否是base64格式
        return url;
    }
    if (!supportWebp) {
        return url;
    }
    return url + '?x-oss-process=image/format,webp';
}
```

### 如果有巨量的图片需要展示在页面, 除了懒加载这种方式, 还有什么好的方法限制其同一时间加载的数量?

    代码题, 使用promise实现并发控制
    
```js
function limitLoad(urls, handler, limit) {
    // 对数组做一个拷贝
    const sequence = [].concat(urls)
    let promises = [];//执行池子

    //并发请求到最大数
    promises = sequence.splice(0, limit).map((url, index) => {
        // 这里返回的 index 是任务在 promises 的脚标，
        //用于在 Promise.race 之后找到完成的任务脚标
        return handler(url).then(() => {
            return index
        });
    });

    let p = Promise.race(promises);//传入promise数组，返回第一个执行成功的结果
    for (let i = 0; i < sequence.length; i++) {
        p = p.then((res) => {
            promises[res] = handler(sequence[i]).then(() => {
                return res
            });
            return Promise.race(promises)
        })
    }
}

const urls = [{
    info: 'link1',
    time: 3000
},
{
    info: 'link2',
    time: 2000
},
{
    info: 'link3',
    time: 5000
},
{
    info: 'link4',
    time: 1000
},
{
    info: 'link5',
    time: 1200
},
{
    info: 'link6',
    time: 2000
},
{
    info: 'link7',
    time: 800
},
{
    info: 'link8',
    time: 3000
},
];

// 设置我们要执行的任务
function loadImg(url) {
    return new Promise((resolve, reject) => {
        console.log("----" + url.info + " start!");
        setTimeout(() => {
            console.log(url.info + " OK!!!");
            resolve();
        }, url.time)
    })
};

limitLoad(urls, loadImg, 3)
```


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

