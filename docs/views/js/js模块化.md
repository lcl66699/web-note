# js模块化

## 无模块化
1. script标签引入各种js文件
```js
  <script src="jquery.js"></script>
  <script src="app.js"></script>
  //……
```
2. 不同js被一个模板引用
3. 但是被依赖的放在前面，否则使用就会报错

- 缺点：
  - 污染全局作用域
  - 维护成本高
  - 依赖关系不明显

### IIFE(语法侧的优化)

#### 无模块化优化->利用函数作用域,匿名函数自调用(闭包)

比如定义一个最简单的模块

```js
const iifeModule=(()=>{
    let count=0
    const add=()=>count++
    const reset=()=>{
            count=0
    }
    return {
        add,
        reset
    }
})()

//调用时
iifeModule.add()
```

### 问题1：有额外依赖时候，怎么引入其他模块？
比如jquery的依赖处理以及模块加载方案

答：
  - 通过函数传参的方式(xxx1,xxx2)
  - IIFE加传参调配

## CJS - commonjs规范

::: tip node.js制定
该规范最初是用在服务器端的node的它有四个重要的环境变量为模块化的实现提供支持：`module`、`exports`、`require`、`global`。实际使用时，用`module.exports`定义当前模块对外输出的接口（不推荐直接用`exports`），用`require`加载模块（同步）。
:::
特征：
- 通过module+exports 去对外暴露接口
- 通过require来调用其他模块
```js
const test2 = require('./test2')

let count=0
const add=()=>count++
const reset=()=>{
    count=0
}
//导出
exports.add=add
exports.reset=reset

module.exports={add,reset}

//引用
const {add,reset} = require('./test1')
// var add = require("./test.js").add;也可以这样
// var reset = require("./test.js").reset;也可以这样
add()
reset()
```

实际执行处理
```js
(function(thisValue, exports, require, module){
    const dependencyModule1 = require('./dependencyModule1');
    const dependencyModule2 = require('./dependencyModule2');

    // 业务逻辑……
}).call(thisValue,exports,require,module)
```
require命令的基本功能是，读入并执行一个JavaScript文件，然后返回该模块的exports对象。如果没有发现指定模块，会报错。

CommonJS模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。这点与ES6模块化有重大差异（下文会介绍）

* 优点：
  - 先在服务端实现了，从框架层解决依赖，全局变量污染问题
* 缺点
  - 同步加载，对于异步不友好
  - 主要针对服务端，模块文件都存在本地磁盘，读取非常快，所以这样做不会有问题。但是在web端，由于网络原因，不适合。

## AMD规范
**通过异步加载+允许制定回调函数**

AMD 是 RequireJS 在推广过程中对模块定义的规范化产出

- 优点：适合在浏览器环境中异步加载模块、并行加载多个模块
- 缺点：不能按需加载、开发成本大、会有引入成本

新增定义方式：
1. define(id, [depends], callback) //定义模块
2. require([module], callback)//加载模块,提前加载
3. require.config({path:{'jquery': 'https://jquery.min.js'}})//配置模块

通过define来定义一个模块，然后require进行加载,使用require.config()指定引用路径

先到require.js官网下载最新版本,然后引入到页面，如下：
```html
<script data-main="./alert" src="./require.js"></script>
```

模块定义方式
```js
  define('amdModule', ['dependencyModule1', 'dependencyModule2'], (dependencyModule1, dependencyModule2) => {
    // 业务逻辑
    let count = 0;
    const increase = () => count++;
    const reset = () => {
      count = 0;
    }

    return {
      increase, reset
    }
  })
```
```js
//引入模块
// 引用模块的时候，我们将模块名放在`[]`中作为`reqiure()`的第一参数；如果我们定义的模块本身也依赖其他模块,那就需要将它们放在`[]`中作为`define()`的第一参数。
require(['amdModule'],amdModule=>{
    amdModule.add()
})
```


### 问题2：如果想在amdModule兼容已有代码呢？
```js
define('amdModule',[],(require)=>{
    //callback里面的参数第一个提供了require
    // 引入部分
    const dependencyModule1 = require(./dependencyModule1);
})
```

### 问题3：AMD中使用revealing

```js
define('amdModule',[],(require,export,module)=>{
    //callback里面的参数第一个提供了require
    // 引入部分
    const dependencyModule1 = require(./dependencyModule1);
    //业务处理

    ...

    // 做一些跟引入依赖相关事宜……
    export.increase = increase();
    export.reset = reset();
   
})

define('amdModule', [], require => {
    const otherModule = require('amdModule');
    otherModule.increase();
    otherModule.reset();
})
```

### 问题4：兼容AMD & CJS/如何判断cjs和AMD

UMD出现：

```js
(define('amdModule',[],(require,export,module)=>{
    //callback里面的参数第一个提供了require
}))(
    //目标是一次性区分commonjs和AMD
    typeof module==='object'
    && module.exports
    && typeof define !=='function'
    ?//是commonjs
    item=>module.exports=item (require,exports,module)
    : //是AMD
    define
)
```


## CMD规范

> 按需加载

CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。

- 优点：按需加载，依赖就近
- 缺点: 依赖于打包，加载逻辑存在某个模块中，扩大模块体积
  
```js
define('amdModule',(require,exports,module)=>{
    //callback里面的参数第一个提供了require
    let $=require('jquery')//需要时候引入
    if(xxx==false){
        var b=require('./b)
    }
})
```


### 问题5：AMD和CMD区别？

- **AMD 推崇依赖前置、提前执行**
- **CMD推崇依赖就近、延迟执行**

## ES6模块化

::: tip
ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。

在ES6中，我们可以使用 import 关键字引入模块，通过 exprot 关键字导出模块，功能较之于前几个方案更为强大，也是目前所推崇的，**但是由于ES6目前无法在浏览器中执行，所以，我们只能通过babel将不被支持的import编译为当前受到广泛支持的 require**。 
:::

新增定义：
- 引入关键字：import
- 导出关键字：export

```js
//引入
import xxx from './xxx.js'

//实现代码逻辑
let count=0
const add=()=>count++
export const reset=()=>{
    count=0
}
//导出区域
export default {
    add,reset
}
```
模板引入的地方
```html
<script type="module" src="./test.js"></script>

//使用:
//在使用的时候 type类型为module
<script type="module">
    //使用前需要再次import下
    import { count } from './test.js'
    console.log(count);
</script>
```
node中引入调用
```js
import { add, reset } from './esModule.mjs';
add();
reset();

import esModule from './esModule.mjs';
esModule.add();
esModule.reset();
```
::: danger 注意

es6在导出的时候有一个默认导出，`export default`,使用它导出后，在import的时候，不需要加上{}，模块名字可以随意起。该名字实际上就是个对象，包含导出模块里面的函数或者变量。

如果没有default,在引入的时候需要加{},且括号内名字是导出时的名字.

一个模块只能有一个export default
:::

### **问题6：动态模块在加载时候怎么处理？**
export promise,可以使用.then
```js
import('./xxx.js').then(res=>{
    res.add()
})
```

- 优点：通过一种最统一的形态整合了js模块化
- 缺点（局限性）：本质上还是运行时依赖分析,需要babel


## 问题7：CommonJs和ES6区别

1. **CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。**
   - CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
   - CommonJS对基本数据类型,属于复制,会被模块缓存,同时,在另一个模块可以对该变量进行重新赋值(原来的不会改变)
   - CommonJS对复杂类型,属于浅拷贝,在另一个模块进行修改会影响这个模块的值
   - CommonJS当使用require命令加载同一个模块时，不会再执行该模块，而是取到内存缓存之中的值。也就是说，CommonJS模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就返回第一次运行的结果，除非手动清除系统缓存。
   - ES6 模块遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。模块里原始值变了，import加载的值也会跟着变。
   - ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。
2. **CommonJS 模块是运行时加载，ES6 模块是编译阶段引用**
   - 运行时加载: CommonJS 模块就是对象；即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。当使用require命令加载某个模块时，就会运行整个模块的代码
   - 编译时加载: ES6 模块不是对象，而是通过 export 命令显式指定输出的代码，import时采用静态命令的形式。即在import时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。


```js
/*
* 定义业务文件test.js
*/
var count = 1
const add = () => {
    count++
    console.log('test', count);
}
//通过es6导出
export {
    count,
    add
}
//通过commmonjs导出
module.exports = {
    count,
    add,
}

/*
* 下面为引用
*/
var {count,add} = require("./test.js");//通过cjs引入
import { count, add } from "./test.js"; //通过es6导入

add();
console.log(count); //????
//这时通过commonjs引入的count值为1
//而通过es6 import引入的count值为2
```

#### ES6-Babel-Browserify

## 前端工程化
根本问题：前端模块化处理方案依赖于运行时进行依赖分析

解决方案：线下执行

grunt(管道机制) gulp webpack(预编译的过程)


#### webpack为核心的工程化 + mvvm框架的组件化 + 设计模式

### 工程化思想实现

1. 扫描依赖关系表：
```js
  {
    a: ['b', 'c'],
    b: ['d'],
    e: []
  }
```

2. 重新生成依赖数据模板
```html
  <!doctype html>
    <script src="main.js"></script>
    <script>
      // 构建工具生成数据
      require.config({
        "deps": {
          a: ['b', 'c'],
          b: ['d'],
          e: []
        }
      })
    </script>
    <script>
      require(['a', 'e'], () => {
        // 业务处理
      })
    </script>
  </html>
```

3. 执行工具，采用模块化方案解决模块化处理依赖
```js
  define('a', ['b', 'c'], () => {
    // 执行代码
    export.run = () => {}
  })
```

> 工程化优点：
1. 构建时生成配置，运行时执行
2. 最终转化成执行处理依赖
3. 可以拓展

#### 完全体 webpack为核心的工程化 + mvvm框架组件化 + 设计模式






