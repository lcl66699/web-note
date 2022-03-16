# this指针-闭包-作用域

## 作用域
### 执行上下文
创建和执行是分开的
1. 创建阶段
    - 创建作用域链：当前变量、所有父级变量
    - 初始化：参数、变量、函数
    - content：指定this
2. 执行阶段
    - 变量赋值
    - 变量使用
    - 函数引用
#### 执行堆栈
js是单线程执行。执行某个区域相当于入栈，执行完成后出栈。
### 作用域与作用域

作用域：全局作用域、函数作用域、块级作用域。
可以隔离变量或函数，并控制生命周期。
作用域在函数执行上下文创建时定义好的，不是执行是定义。

对于**作用域链**,其实就是向上找爹的一个过程。

当一个块或函数嵌套在另一个块或函数中时，发生了作用域嵌套。在当前函数中如果无法找到某个变量，就会往上一级嵌套的作用域中去寻找，直到找到该变量或抵达全局作用域，这样的链式关系称为作用域链

1. 对于作用域链我们直接通过创建时的层级结构来定位作用域链
2. 我们可以通过一些方式手动取消全局作用域，使用块级作用域，
   比如立刻执行函数,let等

#### 上下文context

- this是在执行时动态读取上下文决定的，而不是创建时

考察重点

## this指向
::: tip this指向
1. 函数直接调用,不管放在哪里,函数内部this指向的都是window => 变种方式(函数表达式、匿名函数、嵌套函数)
2. 在隐式绑定中,this指向的是调用堆栈的上一级 => 变种方式(对象、数组等引用关系逻辑（找到最后谁激活的我）)
3. call、apply时，this是第一个参数。bind要优与call/apply，call参数多，apply参数少
4. 在构造函数中，this是当前类的一个实例，异步方法内，指向的是window。
5. 箭头函数自身没this，需要看其外层上一级的this。

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
1. call 和apply区别是传参是不一样的，第一个参数都是改变的this的上下文。
   第二个参数传参：apply是数组传入，call是依次传入传入

2. bind返回原函数的拷贝,先改变了作用域，没被执行，需要再次调用
   1. bind第二个参数和apply一样，都是数组传入

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


## 实现bind | apply
```js
//手写bind => bind位置（挂在那里） => Function.prototype
Function.prototype.myBind = function () {
    //此时的this，指向调用的这个函数
    const _this = this
    //调用数组原型方法变成真数组
    let args = Array.prototype.slice.call(arguments)
    //args特点，第一项是新的this，第二项~最后一项函数传参，将第一项从数组弹出
    let newThis = args.shift()
    // a. 返回一个函数
    return function () {
        // b. 返回原函数执行结果 c. 传参不变
        return _this.apply(newThis, args)
    }
}

//手写apply
Function.prototype.myApply = function (context) {
    //边缘监测
    if (typeof this !== 'function') {
        throw new TypeError(this + 'is not a function')
    }
    // 参数检测
    context = context || window
    // 挂载执行函数
    context.fn = this
    // 执行函数，如果有参数就执行带参数的，否则直接调用
    let result = arguments[1] ? context.fn(...arguments[1]) : context.fn()
    //用后销毁临时挂载
    delete context.fn
    //结果返回出去
    return result
}
```

### 闭包
::: tip 突破作用域束缚
一个函数有权访问另一个函数作用域中的变量。
一个函数和他周围状态的引用捆绑在一起的组合
:::

#### 函数作为返回值的场景
函数外部获取到了函数作用域内的变量值
```js
    function mail() {
        let content = '信';
        return function() {
            console.log(content);
        }
    }
    const envelop = mail();
    envelop();
```
#### 函数作为参数的时候
```js
    let content;
    //通用数据存储
    function envelop(fn) {
        content = 1
        fn()
    }

    //负责读，业务逻辑
    function mail() {
        console.log(content);
    }

    envelop(mail)//1
    envelop(mail)//1
```
#### 函数嵌套 比如用作计数器
```js
    let counter = 0;

    function outerFn() {
        function innerFn() {
            counter++;
            console.log(counter);
            // ...
        }
        return innerFn;
    }
    outerFn()();
```
#### 事件处理（异步执行）的闭包

```js
    let lis = document.getElementsByTagName('li');

    for(var i = 0; i < lis.length; i++) {
        (function(i) {//借用立刻执行函数，把i传进去
            lis[i].onclick = function() {
                console.log(i);
            }
        })(i);
    }
```

### 追问
#### 立即执行嵌套
打印输出啥？
```js
(function immediateA(a) {
    return (function immediateB(b) {
        console.log(a, b); // 0,1
    })(1);
})(0);
```

#### 当立即执行遇上块级作用域
打印输出啥？
```js
    let count = 0;

    (function immediate() {
        if(count === 0) {
            let count = 1;

            console.log(count);//1
        }
        console.log(count);//0
    })();
```

#### 拆分执行 - 关注*
打印输出啥？
```js
    function createIncrement() {
        let count = 0;
        
        function increment() {
            count++;
        }

        let message = `count is ${count}`;

        function log() {
            console.log(message);
        }

        return [increment, log];
    }
    const [increment, log] = createIncrement();

    increment();
    increment();
    increment();
    log();
```
为什么没有打印成功3？
两个执行方法是分离的，因为改变的是内部变量count，但是传递出来的是函数。

#### 如何实现私有变量

也是闭包来实现
```js
    function createStack() {
        return {
            items: [],
            push(item) {
                this.item.push(item);
            }
        }
    }

    const stack = {
        items: [],
        push: function () { }
    }
    //做成私有的
    function createStack() {
        const items = [];
        return {
            push(item) {
                items.push(item);
            }
        }
    }
    // Vuex store
```
