# this指针-闭包-作用域

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

对于作用域链,其实就是向上找爹的一个过程

1. 对于作用域链我们直接通过创建时的层级结构来定位作用域链
2. 我们可以通过一些方式手动取消全局作用域，使用块级作用域，比如立刻执行函数,let等

### this 上下文context

- this是在执行时动态读取上下文决定的，而不是创建时

考察重点

## this指向
::: tip this指向
1. 函数直接调用,不管放在哪里,函数内部this指向的都是window => 变种方式(函数表达式、匿名函数、嵌套函数)
2. 在隐式绑定中,this指向的是调用堆栈的上一级 => 变种方式(对象、数组等引用关系逻辑（找到最后谁激活的我）)
3. call、apply时，this是第一个参数。bind要优与call/apply哦，call参数多，apply参数少
4. 在构造函数中，类中(函数体中)出现的this.xxx=xxx中的this是当前类的一个实例
5. 箭头函数没有自己的this，需要看其外层的是否有函数，如果有，外层函数的this就是内部箭头函数的this，如果没有，则this是window

#1、默认绑定（函数直接调用）
:::
### 默认直接调用
```js
    function foo() {
        console.log('函数内部this', this);//window
    }

    foo();
```
### 隐式绑定(函数被谁调用)
隐式绑定的 this 指的是调用堆栈的上一级（.前面一个）->被谁调用就指向谁
```js
    function fn(){
        console.log(this.a)
    }
    const  obj={
        a:1
    }
    obj.fn=fn //引用
    obj.fn()//调用的时候 fn的上一级是obj
```

#### 面试题：
```js
const foo = {
    bar: 10,
    fn: function () {
        console.log(this.bar);//undefined
        console.log(this);//window
    }
}

let fn = foo.fn
fn()//指向window

// 追问1，输出结果 如何改变指向?
const o1 = {
    text: 'o1',
    fn: function() {
        // 直接使用上下文 - 传统分活
        return this.text;
    }
}

const o2 = {
    text: 'o2',
    fn: function() {
        // 呼叫领导执行 - 部门协作
        return o1.fn();
    }
}

const o3 = {
    text: 'o3',
    fn: function() {
        // 直接内部构造 - 公共人
        let fn = o1.fn;
        return fn();
    }
}

//输出
console.log('o1fn', o1.fn());//this指向o1 -> o1
console.log('o2fn', o2.fn());//this指向o1 -> o1
console.log('o3fn', o3.fn());//this指向window -> undefined

/*
总结:
1. 在执行函数时。函数被上一级调用，上下文指向上一级
2. 直接变成共有函数（重新赋值给变量） 指向window
*/
```

#### 追问:将console.log('o2fn', o2.fn())的结果是o2,怎么改?
- 人为干涉 call apply bind
- 不改变this指向
```js
const o1 = {
    text: 'o1',
    fn: function() {
        return this.text;
    }
}

const o2 = {
    text: 'o2',
    fn: o1.fn
}

console.log('o2fn', o2.fn());
// this指向最后调用他的对象，在fn执行时，o1.fn抢过来挂载在自己o2fn上即可
```

### 显示绑定 bind apply call
使用方式
```js
    function foo() {
        console.log('函数内部this', this);
    }
    foo();

    // 使用，更改this指向
    foo.call({a: 1},[1,2,3]);//源码会使用大量的call
    foo.apply({a: 1},1,2,3);//第一个参数为null||undefined的时候指向全局

    const bindFoo = foo.bind({a: 1},[1,2,3]);
    bindFoo();
```
#### apply call bind区别

:::tip call apply bind区别
1. call 和apply区别是传参是不一样的，第一个参数都是改变的this。
   第二个参数传参：apply是依次传入，call是数组传入

2. bind返回原函数的拷贝,先改变了作用域，没被执行，需要再次调用

:::

### new 创建实例
- this指向的是new之后得到的实例
```js
    class Course {
        constructor(name) {
            this.name = name;
            console.log('构造函数中的this:', this);//指向 实例 
        }

        test() {
            console.log('类方法中的this:', this);//指向 实例
        }
    }

    const course = new Course('this');
    course.test();
```

#### 追问：类中使用异步方法，this有区别吗

有，异步方法内，指向的是window，效果和全局执行函数效果相同
```js
class Course {
    constructor(name) {
        this.name = name;
        console.log('构造函数中的this:', this);//指向 实例 
    }
    test() {
        console.log('异步方法外:', this);//指向 实例
        setTimeout(function () {
            console.log('异步方法内:', this);//Window
        })
    }
}

const course = new Course('this');
course.test();
```
如何解决??? => 改成箭头函数

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