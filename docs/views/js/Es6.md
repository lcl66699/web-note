# ES6
ES6：指2015年6月发布的ES2015标准, 在谈及ES6的时候, 都会把ES2016、ES2017等标准的内容也带进去。
### CMAScript 和 JavaScript 的关系 
ECMAScript是JavaScript的规格，JavaScript是ECMAScript的一种实现，在日常场合，这两个词是可以互换的。

JavaScript的创造者Netscape公司，将JavaScript提交给国际标准化组织ECMA，希望这种语言能够成为国际标准，后来ECMA发布标准文件的第一版（ECMA-262），规定了浏览器脚本语言的标准，并将这种语言称为ECMAScript。

该标准从一开始就是针对JavaScript语言制定的，之所以不叫JavaScript，有两个原因：一是商标，Java是Sun公司的商标，根据授权协议，只有Netscape公司可以合法地使用JavaScript这个名字，且JavaScript本身也已经被Netscape公司注册为商标；二是想体现这门语言的制定者是ECMA，不是Netscape，有利于保证这门语言的开放性和中立性。
### 语法提案的批准流程

任何人都可以向标准委员会（又称 TC39 委员会）提案，要求修改语言标准。
一种新的语法从提案到变成正式标准，需要经历五个阶段。每个阶段的变动都需要由 TC39 委员会批准。

- Stage 0 - Strawman（展示阶段）
- Stage 1 - Proposal（征求意见阶段）
- Stage 2 - Draft（草案阶段）
- Stage 3 - Candidate（候选人阶段）
- Stage 4 - Finished（定案阶段）

一个提案只要能进入 Stage 2，就差不多肯定会包括在以后的正式标准里面

## Babel转码器

报错 token SyntaxError: Unexpected token '=='
是解析的时候。。。

词法解析 语法解析

Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在现有环境执行。

安装 Babel 
```sh
npm install --save-dev @babel/core
npm install --save-dev @babel/preset-env //最新转码规则
```

配置配置文件.babelrc
```json
{
  "presets": [
      "@babel/env",
      "@babel/preset-react"
  ],
  "plugins": []
}
```


## 常用API
- let&&const
- 箭头函数
- class类
- 解构
- 数组操作 Array for of...
- 模板字符串
- 反射Reflect
- 代理Proxy

## let && const
1. const不允许重复声明赋值
2. 块级作用域,不在window中，而var定义的全局变量会作为window对象属性存在，可通过window.访问
3. 不存在变量提升，暂时性死区
   - 要先声明再使用
#### const
ES5的时候定义常量
```js
Object.defineProperty(window, 'arg', {
    value: '小明',
    writable: false
})
```
要先声明再使用
```js
console.log(arg);//ReferenceError: Cannot access 'arg' before initialization
const arg = '小米'
```

#### let or const
* 引用型(指向地址) const
```js
const arr = [1, 2, 3]
Object.freeze(arr)//冻结

arr[0] = '改变'

console.log(arr);//冻结了 改不了

const obj = {
    question: '你回家吃饭吗',
    answerList: ['不回家去你家吃啊', '嗯？']
}
Object.freeze(obj)//冻结

obj.answerList[0] = '回家'
console.log(obj);//还是修改成了

//freeze只能冻结根层，嵌套引用类型需要递归遍历
//面试题目 实现全部冻结
function deepFreeze(obj) {
    Object.freeze(obj);//冻结
    //逐级遍历
    (Object.keys(obj) || []).forEach(key => {
        let innerObj = obj[key]
        if (typeof innerObj === 'object') {
            //递归
            deepFreeze(innerObj)
        }
    });
}

deepFreeze(obj)
```

## 解构赋值

### 数组的解构赋值
```js
let [a, b, c] = [1, 2, 3];

//嵌套解构
let [foo, [[bar], baz]] = [1, [[2], 3]];

//解构赋值允许指定默认值。
let [foo = true] = [];
foo // true
let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

var [x,y,m]=[3,4];
console.log(m);//解构不成功为undefind
```

### 对象的解构赋值
```js
//对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"
let { baz } = { foo: 'aaa', bar: 'bbb' };
baz // undefined

//默认值
var {x = 3} = {};

```
### 字符串解构赋值
```js
//字符串的解构赋值
const [a, b, c, d, e] = 'hello';
a // "h"b // "e"c // "l"d // "l"e // "o"
//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值
let {length : len} = 'hello';
len // 5
```
### 解构赋值用途
1. 一句代码，交换变量的值
```js
let x = 1;let y = 2;
[x, y] = [y, x];
```
2. 提取 JSON 数据.
3. 函数参数的默认值




```js
```
```js
```

```js
```
```js
```
```js
```
### 箭头函数

```js
const test = (a, b) => {
    return a + b
}
const test = (a, b) => a + b
```

#### 使用箭头函数应注意什么？
- 箭头函数并不会形成独立上下文，内部this指向window
函数体内的this对象就是定义时所在的对象，而不是使用时所在的对象。普通函数里的this是使用的时候决定的
- 不可以当做构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
- 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以使用rest参数代替
- 不可以使用yield命令，因此箭头函数不能用作Genertor函数。
#### 场景
1. dom操作cb
2. 类操作
   1. 箭头函数不能用作构造函数
   2. 箭头函数无法构造原型方法，没prototype属性

#### 箭头函数的参数特性，无法使用arguments


## class 类

定义class
```js
//类声明
class Person { }
//类表达式
const Animal = class { }
```
### 函数和class区别
- 函数声明可以提升，但是类不行。
- 函数受函数作用域限制，而类受块作用域限制



### 类的构成
::: tips
包含构造函数方法、实例方法、获取函数get、设置函数set和静态类方法staic。
:::

### constructor：构造函数
在创建类的新实例的时候，会调用这个函数。

使用new 调用类的构造函数会执行如下操作
1. 在内存创建一个空对象
2. 将这个对象的内部的prototype指针被赋值为构造函数的prototype属性
3. 构造函数内部this指向新对象
4. 执行构造函数内部代码，（给新对象添加属性）
5. 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的对象


### 静态类方法 static

用于执行不特定于实例的操作，也不要求存在类的实例，在使用中 static作为前缀关键字，
比如 Promise.resolve()等。

- 可以使用set和get函数

### 继承
通过extends关键字继承

使用super可以调用父类构造函数
#### class的类型是？
```js
class Person {
    constructor(options) {
        console.log(options);
    }
}
console.log(typeof Person);//function
```
#### class的prototype有区分 但和本质相同
- 函数对象 属性hasOwnP

//js如何建立只读变量 用get 

私有变量 #xx
static

## 模板字符串
```js
const a = `汉字汉字${value}汉字汉字`;
```
### 面试题:实现模板字符串
实现一个 render(template, context) 方法，将 template 中的占位符用 context 填充。

```js
const year = '2022';
const month = '1';
const day = '16';
let template = '${year}-${month}-${day}';
let context = { year, month, day };


//高阶函数（函数返回函数）
function render(template) {
    return function (context) {
        return template.replace(/\$\{(.*?)\}/g,
            (match, key) => context[key]
        );
    }
}

const str = render(template)({ year, month, day });
console.log(str) // 2022-1-16
```

## 遍历 Iterator接口

ES6 为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历。

## 字符串的新增方法
- includes()：返回布尔值，表示是否找到了参数字符串。
- startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
- endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
这三个方法都支持第二个参数，表示开始搜索的位置。
```js
let s = 'Hello world!';
s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```
- repeatt()方法返回一个新字符串，表示将原字符串重复n次。(参数如果是小数，会被去掉取整。)
```js
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
```
- padStart()，padEnd()
  
如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
```js
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
```
padStart()和padEnd()一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。

- trimStart()，trimEnd()
trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串
```js
```
## 数组扩展
- 扩展运算符 ...
- Array.from() : 将类数组转化为真实的数组
- Array.of() : 用于将一组值，转换为数组。
- 数组实例的 copyWithin(),使用这个方法，会修改当前数组。
  它接受三个参数。
   - target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
   - start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
   - end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。
- 数组实例的 find() 和 findIndex()
- fill方法使用给定值，填充一个数组。
```js
new Array(3).fill(7)// [7, 7, 7]
```
## 对象扩展
- Object.is() 比较两个值是否相等`Object.is({}, {})  // true`

## Generator

Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同

形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。
```js
function* getData() {
    yield http();
    yield getLog();
}
// Generator函数
function* generator() {
    yield 'status one'         // yield 表达式是暂停执行的标记  
    return 'hello world'
}

let iterator = generator()   // 调用 Generator函数，函数并没有执行，返回的是一个Iterator对象
iterator.next()              // {value: "status one", done: false}，value 表示返回值，done 表示遍历还没有结束
iterator.next()              // {value: "hello world", done: true}，value 表示返回值，done 表示遍历结束
```
yield 表达式

由于 Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。

遍历器对象的next方法的运行逻辑如下。

- 遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
- 下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
- 如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
```js
function* getData() {
    yield http();
    yield getLog();
}
function getLog() {
    console.log("我是网络请求");
}
function http() {
    return $.ajax({
        type: "get",
        url: "http://iwenwiki.com/api/blueberrypai/getIndexChating.php",
        success: function (data) {
            console.log(data);
        }
    })
}

var gd = getData();
gd.next();
gd.next();
```

## proxy
proxy在目标对象的外层搭建了一层拦截，外界对目标对象的某些操作，必须通过这层拦截
```js
var proxy = new Proxy(target, handler);
```

new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。

#### Proxy的作用
对于代理模式 Proxy 的作用主要体现在三个方面
- 拦截和监视外部对对象的访问
- 降低函数或类的复杂度
- 在复杂操作前对操作进行校验或对所需资源进行管理

```js
```
```js
```





