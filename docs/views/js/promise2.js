const { resolve } = require("./myPromise")

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'


class MyPromise {
    fulfilled_callBack_list = []
    rejected_callBack_list = []
    constructor(fn) {
        this.status = PENDING;
        this.value = null
        this.reason = null

        try {
            fn(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(this.reason)
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
        const realOnRejected = this.isFun(onRejected) ? onRejected : (reason) => { reason }
        // console.log(onFulfilled, onRejected);
        const Promise2 = new MyPromise((resolve, reject) => {

            switch (this.status) {

                case FULFILLED: {
                    onFulfilled(this.value)
                }
                case REJECTED: {
                    fulfilled_callBack_list
                }
                case PENDING: {
                    this.fulfilled_callBack_list.push(realOnFulfilled)
                    this.rejected_callBack_list.push(realOnRejected)
                    break;
                }
            }

        })
        return Promise2
    }
    catch(e) {
        this.reject(e)
    }
    isFun(params) {
        return typeof params === 'function'
    }

}

var a = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(888)
    }, 110)
    resolve(999)
}).then(res => {
    console.log(111, res);
})


    // .catch((err) => {
    //     console.log('err', err);
    // })