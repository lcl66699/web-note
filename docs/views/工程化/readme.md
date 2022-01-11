
# webpack

:::tip 基本概念
- entry :入口 webpack执行第一步从entry开始.可抽象成输入
- Moudule: 模块,在webpack中一切皆模块,一个模块对应一个文件,webpack会从配置的entry开始,递归找出所有依赖的模块
- chunk:代码块,一个chunk由多个模块组成,用于代码的合并和分割
- loader:模块转换器,用于讲模块的原内容按照需求转换新内容
- plugin:扩展插件,在webpack构建流程中的特定时机会广播对应的事件,插件可以监听这些事件的发生,在特定的时机去做对应的事情
:::


## 经典问题
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


## 文件指纹

加hash  在chunk上


## 函数式编程理论

### 特点
- vue3 react 16.8 全面化函数的推动
- 函数式编程使代码单元测试更独立 tree shaking过程流畅 方便做ut
- 减少对this依赖
- js天生友好的函数式编程 ramda loadsh

### 概念

- 抽象运算过程
- 并非过程运算 是一种函数的映射
- 幂等 相同的输入始终得到相同的输出 

### 纯函数

### 数组长度未知，取最后一项
```js
let first=arr=>arr[0]
let reverse=>arr=>arr.reverse()

let last=compose(first,reverse)
```

module.exports.pitch

babel
 

 loader过程中添油加醋

 plugin     
 - loader提供的方法 是动词 翻译馆
 - plugins 插件 是类class