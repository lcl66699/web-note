# 面向对象及原型和原型链

## 面向对象
### 对象是什么？为什么要面向对象？
面向对象编程是指一种思想。
面向对象 —— 逻辑迁移更加灵活、代码复用性高、高度的模块化

面向过程：分析解决问题需要的步骤，编写对应的函数实现每个步骤，依次调用函数。
#### 对象的理解
* 对象是对于单个物体的简单抽象
* 对象是一个容器，封装了属性 & 方法
* 属性：对象的状态
* 方法：对象的行为


JS中的面向对象
## 构造函数 - 生成对象
- 需要一个模板 - 表征了一类物体的共同特征， 从而生成对象
- 类即对象模板
- js其实本质上并不是基于类，而是基于构造函数 + 原型链
- constructor + prototype
- 优点：改变某个对象的属性和方法，不会影响到其他对象
- **缺点**：构造函数中的方法，会存在于每一个生成的实例里，重复的挂载其实是会导致资源浪费，实例化的时候，通过 this 添加的属性和方法都会在内存中复制一份，会造成内存的浪费。
```js
    function Course(teacher) {
        this.teacher = teacher;
        this.startCourse = function(name) {
            return `开始${name}课`;
        }
    }
    const course = new Course('老师');
```

#### Course 本质就是构造函数
* 1. 函数体内使用的this，指向所要生成的实例
* 2. 生成对象用new来进行实例化
* 3. 可以做初始化传参

### 追问：
#### 如果构造函数不初始化，可以使用吗？
  无法使用
#### 如果项目中需要使用，通常（不被外界感知）如何解决？
如果是类，可用静态属性。|| 单例模式
```js
    function Course() {
        const _isClass = this instanceof Course;//是否是一个类
        console.log(123, this, Course, _isClass);
        if (!_isClass) {
            return new Course();//生成一个实例
        }

        this.teacher = '云隐';
        this.leader = '小可';
        this.startCourse = function (name) {
            return `开始${name}课`;
        }
    }
    // 使用方
    const course = Course();
    console.log(course);
```
* 启发：如果编写底层的api代码时，尽量做到不需要让外部感知内部类型,外部可以直接调用

## new的时候做了什么

- ` function Course() {};`
- ` const course = new Course();`

::: tip
* 1. 创建了一个空对象，作为返回的对象实例
* 2. 将生成空对象的原型对象指向了构造函数的prototype属性
* 3. 将构造函数内部的this指向这个新对象
* 4. 执行构造函数的初始化代码
* 5. 如果构造函数返回非空对象，则返回该对象，否则返回刚创建的对象
:::

### 追问：实例属性影响吗
 -不影响 他们都是独立的
```js
    function Course(teacher, leader) {
        this.teacher = teacher;
        this.leader = leader;
    }
    const course1 = new Course('云隐', '小可');
    const course2 = new Course('云隐', '部部');

    course2.leader = 'aaa'; // 不影响其他实例
```

### constructor 是什么？
```js
    function Course(teacher, leader) {
        this.teacher = teacher;
        this.leader = leader;
    }
    const course = new Course('云隐', '小可');
```
* 1. 每个对象在创建时，会自动拥有一个构造函数属性constructor
* 2. constructor继承自原型对象，指向了构造函数的引用

#### 追问：使用构造函数 没有问题么 / 会有什么性能上的问题?
构造函数中的方法，会存在于每一个生成的实例里，重复的挂载其实是会导致资源浪费

## 原型对象
```js
    function Course() {};
    const course1 = new Course();
    const course2 = new Course();
    
    console.log(course1.__proto__, Course.prototype);
```
* 1. 构造函数： 用来初始化创建对象的函数 - Course
  
** 自动给构造函数赋予一个属性prototype，该属性等于实例对象的原型对象

* 2. 实例对象：course1是实例对象，根据原型对象创建出来的实例
* 每个对象中都有一个__proto__
* 每个实例对象都有一个constructor
* constructor有继承而来，并指向当前的构造函数

* 3. 原型对象：Course.prototype

:::tip 查找原型对象
- `__proto__`：实例上的指针，指向其构造函数的原型对象
- Object.getPrototypeOf：获取对象上的__proto__属性
- isPrototypeOf：是否是某个实例对象的原型对象
- prototype：构造函数属性，指向原型对象，原型对象上有constructor属性，指向构造函数
- 原型链都会终止于Object的原型对象，Object原型的原型是null
:::
#### 原型继承
```js
    function Course() {};
    Course.prototype.teacher = '云隐';
    const course1 = new Course();
    const course2 = new Course();

    // 对上篇原型对象做优化，挂原型上，原型继承
    function Course() {
        this.teacher = '云隐';
        this.leader = '小可';
    }
    
    // 方法挂载于prototype上,这样在实例之后startCourse不会被重复挂载。
    Course.prototype.startCourse = function(name) {
        return `开始${name}课`;
    }

    const course1 = new Course('es6');
    const course2 = new Course('OOP');
```

***
## JS继承

### 原型链继承
##### 在原型对象的所有属性和方法，都能被实例所共享
```js
function Game() {
    this.name = 'lol'
}
Game.prototype.getName = function () {
    return this.name
}

//新的lol类
function LOL() { }
LOL.prototype = new Game()///子对象原型对象指向父对象实例，完成继承
LOL.prototype.constructor = LOL//把constructor改过来 他理应指向自己的构造函数

var game = new LOL() //继承成功
// 本质：重写原型对象方式，将父对象的属性方法，作为子对象原型对象的属性和方法
```

#### 原型链继承有什么缺点?
:::warning 缺点
* 1. 父类属性一旦赋值给子类的原型属性，此时属性属于子类的共享属性了
* 2. 实例化子类时，无法向父类做传参
:::

### 构造函数继承
#### 经典继承：在子类构造函数内部调用父类构造函数
```js
    function Game(arg) {
        this.name = 'lol';
        this.skin = ['s'];
    }
    Game.prototype.getName = function () {
        return this.name;
    }

    // LOL类
    function LOL(arg) {
        Game.call(this, arg);///子类构造函数调用父类构造函数
    }

    const game3 = new LOL('arg');
    // 解决了共享属性的问题 + 子向父传参问题
    console.log(game3);//LOL {name: 'lol', skin: Array(1)}
```

#### 隐含的问题
- 原型链上的共享方法无法被读取继承，如何解决？
    - 属性或者方法想被继承的话，只能在构造函数中定义。
    - 引申出组合继承


### 组合继承

综合了原型链继承和构造函数继承。

使用原型链继承原型上的属性和方法，通过构造函数继承继承实例属性。
既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性。
```js
    function Game(arg) {
        this.name = 'lol';
        this.skin = ['s'];
    }
    Game.prototype.getName = function() {
        return this.name;
    }

    // LOL类
    function LOL(arg) {
        Game.call(this, arg);
    }
    LOL.prototype = new Game();
    LOL.prototype.constructor = LOL;

    const game3 = new LOL();
```

#### 追问：组合继承就没有缺点么？问题在于：无论何种场景，都会调用两次父类构造函数。
* 1. 初始化子类原型时
* 2. 子类调用函数内部call父类的时候

#### 解决方案： 寄生组合继承

### 寄生组合继承

组合继承的优化，减少一次构造函数执行。
```js
function Game(arg) {
    this.name = 'lol';
    this.skin = ['s'];
}
Game.prototype.getName = function () {
    return this.name;
}

// LOL类
function LOL(arg) {
    Game.call(this, arg);
}
//其实可以通过原型的方式读取，通过Object.create创建完整的对象，绕开new 
LOL.prototype = Object.create(Game.prototype);
LOL.prototype.constructor = LOL;
```

#### 但是如何实现多重继承？

通过`Object.assign(LOL.prototype, Store.prototype)`;
```js
function Game(arg) {
    this.name = 'lol';
    this.skin = ['s'];
}
Game.prototype.getName = function () {
    return this.name;
}

function Store() {
    this.shop = 'steam';
}
Store.prototype.getPlatform = function () {
    return this.shop;
}

function LOL(arg) {
    Game.call(this, arg);
    Store.call(this, arg);
}
LOL.prototype = Object.create(Game.prototype);//组合寄生
Object.assign(LOL.prototype, Store.prototype);//两位父亲都得有
LOL.prototype.constructor = LOL;

// LOL继承两类
const game3 = new LOL();
```
### class继承

通过extends关键字继承，在初始化时super调用父类
```js
//通过类继承
class Child extends Parent {
    constructor() {
        super();
    }
}
```

