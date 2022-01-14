
# webpack

:::tip 基本概念
- entry :入口 webpack执行第一步从entry开始.可抽象成输入
- Moudule: 模块,在webpack中一切皆模块,一个模块对应一个文件,webpack会从配置的entry开始,递归找出所有依赖的模块
- chunk:代码块,一个chunk由多个模块组成,用于代码的合并和分割
- loader:模块转换器,用于讲模块的原内容按照需求转换新内容
- plugin:扩展插件,在webpack构建流程中的特定时机会广播对应的事件,插件可以监听这些事件的发生,在特定的时机去做对应的事情
:::

## Webpack 基础

### 安装
```sh
$ npm install webpack webpack-cli -D # 安装到本地依赖
```


## 经典问题
### webpack运行流程
1. 初始化参数：从配置文件和 Shell 语句中读取与合并参数,得出最终的参数。
2. 开始编译：用上一步得到的参数初始化 Compiler 对象,加载所有配置的插件,执行对象的 run 方法开始执行编译。
3. 确定入口：根据配置中的 entry 找出所有的入口文件。
4. 编译模块：从入口文件出发,调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
5. 完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后,得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。
6. 输出资源：根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk,再把每个 Chunk 转换成一个单独的文件加入到输出列表,这是可以修改输出内容的最后机会。
7. 输出完成：在确定好输出内容后,根据配置确定输出的路径和文件名,把文件内容写入到文件系统

在以上过程中，webpack会在特定的时间点广播特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用webpack提供的API改变webpack的运行结果。

### compiler和compilation

compiler 对象包含了webpack环境的所有的配置信息，包含options，loaders，plugins等信息，负责文件监听和启动编译，这个对象在webpack启动的时候被实例化，全局只有一个compiler实例。 

compilation 对象包含了当前模块资源，编译生成资源，变化的文件等。
compilation当webpack以开发模式运行时，每当检测到文件的变化，便有一次新的compilation被创建。
compilation对象也提供了很多事件回调事件给插件进行扩展，通过compilation 也能读取到compiler对象

compiler和compilation的区别在于：compiler代表了整个weback从启动到关闭的生命周期，而compilation只代表一次新的编译

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



### Loader 和 Plugin 分别是做什么的? 怎么工作的?

- Loader 
    一句话描述：模块转换器(翻译官)，将非js模块转化为webpack能识别的js模块,并且一个文件可以链式的经过多个loader进行翻译

    module   resolve loader 过程中添油加醋

    loader 让 webpack 能够去处理那些非 JavaScript 文件.
    loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块,然后你就可以利用 webpack 的打包能力,对它们进行处理。
    本质上,webpack loader 将所有类型的文件,转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。

- pligun

    一句话描述：扩展插件，在webpack运行的各个阶段，都会广播出去相对应的事件，插件可以监听到这些事件的发生，在特定的时机做相对应的事情
    
    loader 被用于转换某些类型的模块,而插件则可以用于执行范围更广的任务。
    插件的范围包括,从打包优化和压缩,一直到重新定义环境中的变量。插件接口功能极其强大,可以用来处理各种各样的任务。

    在 webpack 运行的生命周期中会广播出各种事件，Plugin 可以监听这些事件，在触发时通过 webpack 提供的 API 改变输出结果。
    在插件中，可以拿到 Compile 和 Compilation 的引用对象，使用它们广播事件，这些事件可以被其他插件监听到，或者对他们做出一定修改，其他插件拿到的也是变化的对象。

### 如何本地项目去做一些多端口服务的代理转发 

proxy多写几个就行了
```js

module.exports = {
  dev: {
    proxyTable: {
      './': {
        target: ''
      }
    },
  }
}
```

### 如何利用webpack去做依赖锁定？锁版本
锁依赖固定板本 script标签写死
```js
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
```

###  静态文件的移动&赋值,用哪个plugin
```js
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,//移动到指定位置
        ignore: ['.*']
      }
    ])
```

### 性能优化
- 视图渲染
- 网络层 减少请求
- 代码 | 结构
  - tree shaking 引入包的按需引入
  - 模块懒加载 vue-router+trunk|noparse
  - 文件指纹 消除缓存
分chunk 性能优化
## 文件指纹

文件指纹是在chunk上加hash 值,主要针对每个在使用cdn的时候,缓存问题,有了文件名+hash文件名更改,
不会再走缓存

| 占位符      | 解释                       |
| ----------- | -------------------------- |
| ext         | 文件后缀名                 |
| path        | 文件相对路径               |
| folder      | 文件所在文件夹             |
| hash        | 每次构建生成的唯一 hash 值 |
| chunkhash   | 根据 chunk 生成 hash 值    |
| contenthash | 根据文件内容生成hash 值    |


- hash ：任何一个文件改动，整个项目的构建 hash 值都会改变；
- chunkhash：文件的改动只会影响其所在 chunk 的 hash 值；
- contenthash：每个文件都有单独的 hash 值，文件的改动只会影响自身的 hash 值；

## 函数式编程理论

## 手写Loader
## 手写Plugin


### 特点
- vue3 react 16.8 全面化函数的推动
- 函数式编程使代码单元测试更独立 tree shaking过程流畅 方便做UT
- 减少对this依赖,减轻了开发人员对于指向问题的困惑
- js天生友好的函数式编程 ramda loadsh

### 概念

- 抽象运算过程
- 函数式的函数并非对于过程运算，是一种函数的映射
- 幂等 相同的输入始终得到相同的输出 

### 纯函数
纯函数指没有副作用的函数。相同的输入有相同的输出，就跟我们上学的函数一样。
  - 仅取决于提供的输入，而不依赖于任何在函数求值或调用间隔时可能变化的隐藏状态和外部状态。
  - 不会造成超出作用域的变化，例如修改全局变量或引用传递的参数。
```js
let arr = [1, 2, 3, 4, 5];

arr.slice(0, 3); // [1, 2, 3]
arr.slice(0, 3); // [1, 2, 3]

arr.splice(0, 3); // [1, 2, 3]
arr.splice(0, 3); // [4, 5]
```
对于系统的改造
```js
// 不纯的
let min = 18;
let limit = age => age > min;

// 纯函数
let limit = age => age > 18;
```
对于大型系统来说，对于外部状态的依赖，会大大的提高系统复杂性
* 问题：
18被硬编码到了函数内部的，造成了功能拓展的局限

### 高阶函数
1. 函数作为参数被传递到另一个函数中
2. 函数作为返回值被另外一个函数返回
```js
    let fn = arg => {
        let outer = "outer";
        let innerFn = () => {
            console.log(outer);
            console.log(arg);
        }
        return innerFn;
    }

    let closure = fn(18);
    // 闭包
```
### 函数柯里化
1. 传递给函数一部分参数用于功能调用，让他返回一个函数去处理剩下的函数
```js
// let add = (x, y) => x + y;
// 柯里化后
let add = x => (y => x + y);
let add2 = add(2)(10);
console.log(add2);//12

// // 回到上面的limit， 纯函数化
let limit = min => {
    return age => age > min;
}
console.log(limit(18)(12));
```
> 是一种预加载方式
* 问题
包心菜代码的产生h(g(f(x)));


### 升级->组合
> 通过更优雅的方式实现纯函数的解耦

```js
let compose = (f, g) => (x => f(g(x)));

let add1 = x => x + 1;
let mul5 = x => x * 5;

compose(mul5, add1)(2); // 15

// 面试题 - 数组长度未知的情况下，拿到最后一项
let first = arr => arr[0];
let reverse = arr => arr.reverse();

let compose = (first, reverse) => (x) => first(reverse(x))//实现
let last = compose(first, reverse)([1, 2, 3, 4, 5]);
console.log(last) // 5
```
 
