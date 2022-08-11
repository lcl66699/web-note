const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'


class MyPromise {
    fulfilled_callBack_list = []
    rejected_callBack_list = []
    _status = PENDING
    constructor(fn) {
        //初始化是pending
        this.status = PENDING
        this.value = null
        this.reason = null
        try {
            fn(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }
    isFun(fn) {
        return typeof fn === 'function'
    }

    then(onfulfilled, onrejected) {
        const realOnFulfilled = this.isFun(onfulfilled) ? onfulfilled : value => value
        const realOnRejected = this.isFun(onrejected) ? onrejected : reason => { throw reason }
        const Promise2 = new MyPromise((resolve, reject) => {
            const fulfilledMicrotask = () => {
                queueMicrotask(() => {
                    try {
                        const x = realOnFulfilled(this.value)
                        this.resolvePromise(Promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            }
            const rejectedMicrotask = () => {
                queueMicrotask(() => {
                    try {
                        const x = realOnRejected(this.reason)
                        this.resolvePromise(Promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            }
            switch (this.status) {
                case FULFILLED: {
                    fulfilledMicrotask()
                    break;
                }
                case REJECTED: {
                    rejectedMicrotask()
                    break;
                }
                case PENDING: {
                    this.fulfilled_callBack_list.push(fulfilledMicrotask)
                    this.rejected_callBack_list.push(rejectedMicrotask)
                    break;
                }

            }
        })

        // console.log(Promise2);
        return Promise2
    }
    catch(onRejected) {
        return this.then(null, onRejected)
    }
    resolvePromise(Promise2, x, resolve, reject) {
        if (Promise2 === x) {
            return reject(new TypeError('Type Error'))
        }
        if (x instanceof MyPromise) {
            queueMicrotask(() => {
                x.then((y) => this.resolvePromise(Promise2, y, resolve, reject), reject)
            })
        } else if (typeof x === 'object' || this.isFun(x)) {
            if (x === null) { return resolve(x) }

            let then = null
            try {
                then = x.then
            } catch (error) {
                return reject(error)
            }

            if (this.isFun(then)) {
                let flag = false //保证执行一次
                try {
                    then.call(
                        x,
                        (y) => {
                            if (flag) return
                            flag = true
                            this.resolvePromise(Promise2, y, resolve, reject)
                        },
                        (r) => {
                            if (flag) return
                            flag = true
                            reject(r)
                        }
                    )
                } catch (error) {
                    if (flag) return
                    reject(error)
                }
            } else {
                //x不是函数
                resolve(x)
            }

        } else {
            resolve(x)
        }
    }

    get status() {
        return this._status
    }
    //监听状态
    set status(new_status) {
        this._status = new_status
        switch (new_status) {
            case FULFILLED:
                this.fulfilled_callBack_list.forEach(fn => {
                    fn(this.value)
                });
                break
            case REJECTED:
                this.rejected_callBack_list.forEach(fn => {
                    fn(this.reason)
                });
                break
        }
    }


    resolve(value) {
        //因为reslove只能执行一次
        if (this.status === PENDING) {
            this.status = FULFILLED
            this.value = value
        }
    }
    reject(reason) {
        if (this.status === PENDING) {
            this.status = REJECTED
            this.reason = reason
        }
    }

    static resolve(value) {
        if (value instanceof MyPromise) {
            return value
        }
        return new MyPromise((resolve, reject) => {
            resolve(value)
        })
    }
    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason)
        })
    }
    static race(promise_list) {
        return new MyPromise((resolve, reject) => {
            if (!promise_list.length) resolve()
            for (let i = 0; i < promise_list.length; i++) {
                promise_list[i].then(resolve, reject)
            }
        })
    }

    static all(promise_list) {
        return new MyPromise((resolve, reject) => {
            if (!Array.isArray(promise_list)) { return reject(new Error('传入的参数必须是数组')) }
            let count = 0;
            const res = []
            promise_list.forEach((fn, i) => {
                MyPromise.resolve(fn)
                    .then((val) => {
                        count++
                        res.push(val)
                        if (res.length === promise_list.length) {
                            resolve(res)
                        }
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        })
    }

    // 目前是通过他测试 他会测试一个对象
    static deferred() {
        let dfd = {}
        dfd.promise = new MyPromise((resolve, reject) => {
            dfd.resolve = resolve;
            dfd.reject = reject;
        });
        return dfd;
    }
}

// var test = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hahahah')
//     }, 1000);
//     // reject('gagag')
// }).then((res) => {
//     console.log('res', res);
// }).catch(err => {
//     console.log('错误了', err)
// })

// const pro1 = new MyPromise((res, rej) => {
//     setTimeout(() => {
//         res('1')
//     }, 1000)
// })

// const pro2 = new MyPromise((res, rej) => {
//     setTimeout(() => {
//         res('2')
//     }, 2000)
// })
// const pro3 = new MyPromise((res, rej) => {
//     setTimeout(() => {
//         rej('3')
//     }, 3000)
// })

// const val = MyPromise.all([pro1, pro2, pro3])
// val.then((res) => {
//     console.log('测试all', res);
// }).catch((err) => {
//     console.log('报错了', err);
// })



module.exports = MyPromise;
  //npm install promises-aplus-tests 用来测试自己的promise 符不符合promisesA+规范