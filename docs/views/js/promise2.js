
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'


class MyPromise {
    fulfilled_callBack_list = []
    rejected_callBack_list = []
    _status = PENDING
    constructor(fn) {
        this.status = PENDING;
        this.value = null
        this.reason = null

        try {
            fn(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(value) {
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
    then(onFulfilled, onRejected) {
        const realOnFulfilled = this.isFun(onFulfilled) ? onFulfilled : (value) => { value }
        const realOnRejected = this.isFun(onRejected) ? onRejected : (reason) => {
            throw reason
        }
        // console.log(onFulfilled, onRejected);
        const Promise2 = new MyPromise((resolve, reject) => {
            const realOnFulfilledMicrotask = () => {
                queueMicrotask(() => {
                    try {
                        const x = realOnFulfilled(this.value)
                        resolvePromise(Promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            }
            const realOnRejectedMicrotask = () => {
                queueMicrotask(() => {
                    try {
                        const x = realOnRejected(this.reason)
                        resolvePromise(Promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            }
            switch (this.status) {
                case FULFILLED: {
                    realOnFulfilledMicrotask()
                    break
                }
                case REJECTED: {
                    realOnRejectedMicrotask()
                    break
                }
                case PENDING: {
                    this.fulfilled_callBack_list.push(realOnFulfilledMicrotask)
                    this.rejected_callBack_list.push(realOnRejectedMicrotask)
                    break;
                }
            }

        })
        return Promise2
    }
    catch(e) {
        // this.reject(e)
        return this.then(null, e)
    }
    isFun(params) {
        return typeof params === 'function'
    }
    resolvePromise(Promise2, x, resolve, reject) {
        if (Promise2 === x) {
            return reject(new TypeError('TypeError'))
        }
        if (x instanceof MyPromise) {
            queueMicrotask(() => {
                x.then((y) => this.resolvePromise(Promise2, y, resolve, reject))
            })
        } else if (typeof x === 'object' || this.isFun(x)) {
            if (x === null) return resolve(x)
            let then = null
            try {
                then = x.then

            } catch (error) {
                return reject(error)
            }
            if (this.isFun(then)) {
                let flag = false
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
                    reject(e)
                }

            } else {
                resolve(x)
            }
        } else {
            resolve(x)
        }

    }
    get status() {
        return this._status
    }
    set status(new_val) {
        this._status = new_val
        switch (new_val) {
            case FULFILLED: {
                this.fulfilled_callBack_list.forEach(fn => {
                    fn(this.value)
                })
                break
            }
            case REJECTED: {
                this.rejected_callBack_list.forEach(fn => {
                    fn(this.reason)
                })
                break
            }
        }
    }


    static reslove(params) {
        if (params instanceof MyPromise) {
            return params
        }
        return new MyPromise((reslove, reject) => {
            reslove(params)
        })
    }
    static reject(reason) {
        return new MyPromise((reslove, reject) => {
            reject(reason)
        })
    }

    static race(promise_list) {
        return new MyPromise((reslove, reject) => {
            if (promise_list.length) {
                reslove()
            }
            promise_list.forEach(fn => {
                fn.then(reslove, reject)
            })
        })
    }

    static all(promise_list) {
        return new MyPromise((reslove, reject) => {
            let res = []
            let count = 0
            for (let i = 0; i < promise_list.length; i++) {
                MyPromise.reslove(promise_list[i])
                    .then((val) => {
                        count++
                        res.push(val)
                        if (res.length === count) {
                            reslove(res)
                        }
                    })
                    .catch(err => {
                        reject(err)
                    })
            }
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

// var a = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(888)
//     }, 110)
//     // resolve(999)
// }).then(res => {
//     console.log(111, res);
// })


// .catch((err) => {
//     console.log('err', err);
// })

module.exports = MyPromise