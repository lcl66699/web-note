# this

## 创建
作用域链：当前变量、所有父级变量
变量：参数、变量、函数
content：this

## 执行
变量赋值
变量使用
函数引用

单线程

## 作用域 + 上下文

1. 对于作用域链我们直接通过创建态来定位作用域链
2. 手动取消全局，使用块级作用域，比如立刻执行函数

### this 上下文context

- this是在执行时动态读取上下文决定的，而不是创建时

考察重点
#### 函数直接调用中。this指向的是window => 变种 函数表达式、匿名函数、嵌套函数

#### 隐式绑定 - this指向的是调用堆栈的上一级
=> 变种  对象、数组等引用关系逻辑（找到最后谁激活的我）

```js
    function fn(){
        console.log(this.a)
    }
    const  obj={
        a:1
    }
    obj.fn=fn
    obj.fn()//调用的时候 fn的上一级是obj
```

#### 面试题：
```js
const foo = {
    bar: 10,
    fn: function () {
        console.log(this.bar);
        console.log(this);
    }
}

let fn = foo.fn
fn()//指向window
```

1. 在执行函数时。函数被上一级调用，上下文指向上一级
2. 直接变成共有函数（重新赋值给变量） 指向window

追问：讲log（02.fn）输出02
- 人为干涉 call apply bind
- 不改变this指向
- this指向的是最后调用它的对象

### 显示绑定 bind apply call
使用方式
* call apply bind区别

call 和apply区别是传参是不一样的，第一个都是改变的this。
apply是依次传入，bind是数组传入

bind直接返回不同，需要再次调用

#### new - this指向的是new之后得到的实例


构造函数的this指向 实例 
类方法的this指向 实例

追问 ，类中异步方法，this有区别吗
异步方法内，指向的是window，效果和全局执行函数效果相同
如何解决？改成箭头函数

### bind的原理 手写bind
1. 说明原理，写下注释
2. 根据注释，补齐代码

### 手写apply

## 如何突破作用域束缚

### 闭包：一个函数和他周围状态的引用捆绑在一起的组合

- 函数作为返回值的场景 函数外部获取到了函数作用域内的变量值


- 函数作为参数的时候，
- 函数嵌套 计数器

私有变量