# PromiseA+规范
 
### 术语
[PromiseA+规范](https://promisesaplus.com/)
- promise 是一个有then法的对象或者是函数，行为遵循本规范
- thenable  是一个有then方法的对象或者是函数
- value 是promise状态成功时的值，也就是resolve的参数, 包括各种数据类型, 也包括undefined/thenable或者是 promise
- reason 是promise状态失败时的值, 也就是reject的参数, 表示拒绝的
- exception  是一个使用throw抛出的异常值
  

## 规范

### Promise Status

有三种状态

1. **pending**
   1. 初始的状态可以改变
   2. 一个Promise在实例化后，resolve/reject都处于这个状态
   3. resolve：可以把pending改成fulfilled状态
   4. reject：可以把pending改成reject状态
2. **fulfilled**
   1. 最状态，不可改变
   2. 一个promise被resolve后会变成这个状态
   3. then之后返回的是新promise，必须有一个value值，不传是undefind
3. **rejected**
   1. 最状态，不可改变
   2. 一个promise被rejected后会变成这个状态
   3. 必须有一个reason值，不传是undefind

::: tip 状态流转
pending -> reslove(value) -> fulfilled

pending -> reject(reason) -> rejected
:::

### then方法

promise应该有一个then方法，用来访问最终结果

```js
Promise.then(onFulfilled,onRejected)
```
1. 参数要求
   1. 必须是函数类型，如果不是函数，应该被**忽略**

2. onFulfilled特性
   1. promise变成fulfilled时，应该调用onFulfilled，参数是value
   2. promise变成fulfilled之前不应该被调用
   3. 只能被调用一次(需要一个变量来限制执行次数)

3. onRejected特性
   1. promise变成rejected时，应该调用onRejected，参数是value
   2. promise变成rejected之前不应该被调用
   3. 只能被调用一次(需要一个变量来限制执行次数)


4. onFulfilled,onRejected执行环境应该在微任务里
    - queueMicrotask(()=>{})  来实现微任务调用


5. then方法可调用多次（可以用数组去存）
   1. promise状态变成fulfilled后，所有的onFulfilled回调都需要按照then的原始调用顺序执行
   2. promise状态变成rejected后，所有的onRejected回调都需要按照then的原始调用顺序执行


6. 返回值
   1. then方法的返回值应该是一个**新的Promise**
    ```js
    const promise1=new Promise()

    const promise2=promise.then(cb1,cb2).then().then()

    //最后的then是上一个.then返回的promise
    ```
    1. onFulfilled或者onRejected执行结果为x，调用 **resolvePromise()**
    2. onFulfilled或者onRejected执行时报错了，promise2就需要被reject
    3. onFulfilled如果不是一个函数，promise2以promise1的value，触发fulfilled
    4. onRejected如果不是一个函数，promise2以promise1的reason，触发rejected
7. **resolvePromise**
   
   ```js
   resolvePromise(promise2, x, resolve, reject)
   ```

    1. 如果 promise2 和 x 相等，以 Tyeperror 作为 reason 去 reject promise。（reject TypeError）
    2. 如果 x 是一个 promsie
        - 如果x是pending态，那么promise必须保持pending,直到 x 变成 fulfilled or rejected.
        - 如果 x 被 fulfilled, 以相同的 value 去 fulfill promise。
        - 如果 x 被 rejected, 以相同的 reason 去 reject promise。
    3. 否则，如果 x 是一个 object 或者 是一个 function
        - let then = x.then
        - 如果取属性 x.then 会导致抛出异常 e，则以 e 为 reason reject promise。
        - 如果 then 是一个函数，then.call(x, resolvePromiseFn, rejectPromise)，让 x 作为 this 调用它，第一个参数为 resolvePromise，第二个参数为 rejectPromise，然后：
            - resolvePromiseFn 的 入参是 y, 执行 resolvePromise(promise2, y, resolve, reject);
            - rejectPromise 的 入参是 r, reject promise with r.
            - 如果 resolvePromise 和 rejectPromise 都被调用了，或多次调用同一参数，那么第一个调用优先，其他的调用都会被忽略。
            - 如果调用then抛出异常e 
                - 如果 resolvePromise 或 rejectPromise 已经被调用，那么忽略它
                - 否则， 把 e 作为 reason reject promise
        - 如果 then 不是一个function. 将 x 作为参数执行 promise。
    4. 如果 x 不是一个对象或者函数，将 x 作为参数执行 promise。

    
###### 结合代码来看会好很多

## 实现一个Promise

3. 设置初始状态 status value reason
4. resolve / reject
   1. 更改status pedding -> fulfilled/rejected
   2. 入参 value/reason
5. promise构造函数的入参
   1. 入参是一个函数，函数接收两个参数(reslove,reject)
   2. new Promise的时候，就要执行这个函数，并且有任何错误都要reject出去
6. then函数