### 垃圾回收 or 内存泄露
```js
    // 1. 全局变量的使用导致无法被销毁】
    function foo() {
        barA = 'a'; // 无声明写法，上升为全局变量 === window.barA
        this.barB = 'b'; // 全局变量 === window.barB
        return barA + barB;
    }
    // barA & barB依然驻存

    // 2. 定时器的存在
    var ajaxData = fetchData();

    setInterval(function() {
        // dom操作
        // 使用了ajaxData
    }, 5000); // ajaxData在，定时器也会一直常驻

    // 3. 闭包
    function makeAdder(x) {
        let z = 1;
        return function(y) {
            return x + y + z;
        }
    }

    var add5 = makeAdder(5);

    console.log(add5(2)); // 5 + 2 + 1 = 8
    // 变量z常驻

    // 4. dom操作
    // 5. 时间操作
    // 放入数组中，数组执行之后，依然存在引用
```
#### 方案： 及时清除引用（dom、闭包、定时器）；减少不必要的全局变量（开启严格模式）等