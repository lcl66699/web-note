# ES6
ES6：指2015年6月发布的ES2015标准, 在谈及ES6的时候, 都会把ES2016、ES2017等标准的内容也带进去。
## 常用API
- let const
- 箭头函数
- class类
- 解构
- 数组操作 Array for of...
- 模板字符串
- 反射Reflect
- 代理Proxy

### let && const
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

### 箭头函数

```js
const test = (a, b) => {
    return a + b
}
const test = (a, b) => a + b
```

#### 执行上下文

箭头函数并不会形成独立上下文，内部this指向window
箭头函数里的this是定义的时候决定的, 普通函数里的this是使用的时候决定的
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
extends关键字继承

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
### 解构赋值

### 遍历 Iterator接口