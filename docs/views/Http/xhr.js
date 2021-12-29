class XhrHook {
    constructor(beforeHooks = {}, afterHooks = {}) {
        this.XHR = window.XMLHttpRequest
        this.beforeHooks = beforeHooks
        this.afterHooks = afterHooks
        this.init()
    }
    init() {
        let that = this
        window.XMLHttpRequest = function () {
            this.xhr = new that.XHR()
            that.overwrite(this)
        }
    }

    overwrite(proxyXHR) {
        for (const key in proxyXHR._xhr) {
            if (typeof proxyXHR._xhr[key] === 'function') {
                

            }
        }
    }
}

new XhrHook({
    open: function () {
        console.log('open');
        // return false;
    },
    onload: function () {
        console.log('onload');
    },
    onreadystatechange: function () {
        console.log('onreadystatechange');
    },
    onerror: function () {
        console.log('hook error')
    }
});



var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://www.baidu.com', true);

xhr.send();

xhr.onreadystatechange = function (res) {
    console.log('statechange');
}

xhr.onerror = function () {
    console.log('error');
}