# 网络和并发
## http

### http/1.0/1.1/2.0 在并发请求的主要区别是什么？

##### 1. http-1.0

    每个TCP连接只能发送一个请求，当服务器响应后就会关闭这个连接，下一次请求需要再次建立TCP连接。

    想要持久连接：Contention：keep-alive

##### 2. http-1.1

默认采用持久连接，也是 tcp 连接。

不采用持久连接的话：Contention：close

管道机制：在同一个 tcp 连接里，允许多个请求同时发送，一问一答形式。
缺点：队头阻塞（按照顺序一一相应，不能并行相应，按照到达顺序来，比如第一个请求相应特别长，后面的请求等待前面请求的返回才能获得执行机会。

##### 3. http-2.0

- 加了双工模式，服务器可以同时处理多个请求了，解决了队头阻塞问题。多个请求可同时在一个连接上并行执行。某个请求任务耗时严重，不会影响到其它连接的正常执行；一个消息发送后不用等待接受,第二个消息可以直接发送.
- 多路复用

  没有次序概念。Http/1.x 有个问题叫线端阻塞，它是指一个连接一次只提交一个请求的效率比较高，多了就会变慢。而多路传输可以很好的解决这个问题，因为它能同时处理多个消息的请求和响应，甚至可以在传输过程中将一个消息跟另一个参杂在一起。所以客户端只需要一个连接就能加载一个页面。即只需建立一次连接，即一轮三次握手，实现多路复用。

- 服务器推送

这个功能通常被称作“缓存推送”。
例如网页中有一个 style.css 的请求，客户端收到 style.css 数据的同时，服务端会将 style.js 的文件推给客户端。当客户端收到再次尝试 style.js 的时候就可以直接读取缓存，不用再发送请求。

- 报头压缩

  和同一域名请求，只发送请求头不同的部分，这样就解决了 http1 中的问题 请求头过大而且重复发送

- Http/2 采用二进制格式而非文本格式

  它把原来的 header+body 的数据格式拆分为一帧帧的二进制数据进行发送，而且收发都是无顺序的，这意味着不会出现堵塞。一帧帧数据上有个标识 id,能够区分数据 ，浏览器可以据此组合出数据

### http1.1 的长连接和 2.0 多路复用什么区别？

##### http1.1：同一个时间一个 tcp 连接只能处理一个请求，采用一问一答形式。

依然存在的问题：

    1. 多个请求只能被串行处理（数据基于文本，只能按顺序传输）；
    2. 访问多个不同的文件依然会建立多个请求。

chrome 支持最大 6 个 tcp 连接。

##### http2.0：同域名上的所有通信都在单个连接上完成，单个连接可以并行的进行请求和相应

并行实现原理：http2.0 引入二进制数据帧和流的概念（数据帧对每一个数据进行标识，可以不按顺序传输，从而实现并行）

### 为什么 1.1 不能实现多路复用？

传输数据的方式不同，http2.0 基于二进制格式而非文本格式，而 1.0 是基于文本分隔符解析的协议

1.1 报文结构里，服务器需要不断的读入字节，知道遇到换行符，处理顺序串行

> get http/1.1 <br/>
> Accept: <br/>
> host: <br/>
> referer: <br/> <br/>
> POST

2.0 以帧为最小数据单位，每个帧都会有标识自己属于哪个流，多个帧组成一个流.

多路复用，其实就是一个 TCP 里存在多条流

### 实现一个控制并发量的函数，接收并发量的参数。3，urls=[8]
前提
```js
const urls = [{
      info: 'link1',
      time: 3000
  },
  {
      info: 'link2',
      time: 2000
  },
  {
      info: 'link3',
      time: 5000
  },
  {
      info: 'link4',
      time: 1000
  },
  {
      info: 'link5',
      time: 1200
  },
  {
      info: 'link6',
      time: 2000
  },
  {
      info: 'link7',
      time: 800
  },
  {
      info: 'link8',
      time: 3000
  },
];

// 设置我们要执行的任务
function loadImg(url) {
    return new Promise((resolve, reject) => {
        console.log("----" + url.info + " start!");
        setTimeout(() => {
            console.log(url.info + " OK!!!");
            resolve();
        }, url.time)
    })
};


const queue = new PromiseQuene({ count: 3 })
urls.forEach((url) => {
    queue.add(() => loadImg(url))
})
```

#### code实现
```js
//实现控制并发的函数，urls=[8]
class PromiseQuene {
    constructor(options = {}) {
        this.count = options.count || 1
        this.currentCount = 0//当前进行的任务
        this.pendingList = []//当前等待的池子

    }
    add(fn) {
        this.pendingList.push(fn)
        this.run()
    }
    run(fn) {
        if (this.pendingList.length == 0 || this.currentCount == this.count) {
            return
        }
        this.currentCount++
        const onefn = this.pendingList.shift()

        const promise = onefn()
        promise.then(() => {
            this.currentCount--
            this.run()
        }).catch(() => {
            this.currentCount--
            this.run()
        })
    }
}
```

#### 如果有高优先级需要先执行呢？
- 可以在插入的时候排序
- `const onefn = this.pendingList.shift()`也可以在弹出的之前先进行排序在弹出

## HTTP请求相关

### 解决跨域
1. jsonp
    原理：动态创建一个script标签。利用script标签的src属性不受同源策略限制。因为所有的src属性和href属性都不受同源策略限制。可以请求第三方服务器数据内容。
    步骤：
    1. 去创建一个script标签
    2. script的src属性设置接口地址
    3. 接口参数,必须要带一个自定义函数名 要不然后台无法返回数据。
    4. 通过定义函数名去接收后台返回数据
2. cors
3. node正向代理，比如请求/api 可以转接到同域的服务去访问/api，绕过浏览器同源策略，再返回前端
4. nginx 反向代理，proxy_pass
5. image标签
6. document.domain + iframe：主域名相同，子域名不通，设置document.domain为主域名解决

### 有做过全局的请求处理吗？比如统一请求并设置登录态, 比如报错统一弹toast等

Axios的request interceptor 和 response interceptor, 单例
```js
import axios from 'axios'
import { Notification, MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import errorCode from '@/utils/errorCode'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 10000
})
// request拦截器
service.interceptors.request.use(config => {
  // 是否需要设置 token
  const isToken = (config.headers || {}).isToken === false
  if (getToken() && !isToken) {
    config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  // get请求映射params参数
  if (config.method === 'get' && config.params) {
    let url = config.url + '?';
    for (const propName of Object.keys(config.params)) {
      const value = config.params[propName];
      var part = encodeURIComponent(propName) + "=";
      if (value !== null && typeof (value) !== "undefined") {
        if (typeof value === 'object') {
          for (const key of Object.keys(value)) {
            if (value[key] !== null && typeof (value[key]) !== 'undefined') {
              let params = propName + '[' + key + ']';
              let subPart = encodeURIComponent(params) + '=';
              url += subPart + encodeURIComponent(value[key]) + '&';
            }
          }
        } else {
          url += part + encodeURIComponent(value) + "&";
        }
      }
    }
    url = url.slice(0, -1);
    config.params = {};
    config.url = url;
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
  // 未设置状态码则默认成功状态
  const code = res.data.code || 200;
  // 获取错误信息
  const msg = errorCode[code] || res.data.msg || errorCode['default']
  if (code === 401) {
    MessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
      confirmButtonText: '重新登录',
      cancelButtonText: '取消',
      type: 'warning'
    }
    ).then(() => {
      store.dispatch('LogOut').then(() => {
        location.href = '/index';
      })
    }).catch(() => { });
    return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
  } else if (code === 500) {
    Message({
      message: msg,
      type: 'error'
    })
    return Promise.reject(new Error(msg))
  } else if (code !== 200) {
    Notification.error({
      title: msg
    })
    return Promise.reject('error')
  } else {
    return res.data
  }
},
  error => {
    console.log('err' + error)
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    }
    else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    }
    else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    Message({
      message: message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

```

### 给xhr添加hook, 实现在各个阶段打印日志
代码题, 实现页面上通过xhr发请求的时候, 在xhr的生命周期里, 能够实现自定义的行为触发。

```js
class XhrHook {
    /**
     * 构造函数
     * @param {*} beforeHooks 
     * @param {*} afterHooks 
     */
    constructor(beforeHooks = {}, afterHooks = {}) {
        // 单例
        if (XhrHook.instance) {
            return XhrHook.instance;
        }

        this.XHR = window.XMLHttpRequest;

        this.beforeHooks = beforeHooks;
        this.afterHooks = afterHooks;
        this.init();

        XhrHook.instance = this;
    }

    /**
     * 初始化 重写xhr对象
     */
    init() {
        let _this = this;

        window.XMLHttpRequest = function () {
            this._xhr = new _this.XHR();

            _this.overwrite(this);
        }

    }

    /**
     * 处理重写
     * @param {*} xhr 
     */
    overwrite(proxyXHR) {
        for (let key in proxyXHR._xhr) {

            if (typeof proxyXHR._xhr[key] === 'function') {
                this.overwriteMethod(key, proxyXHR);
                continue;
            }

            this.overwriteAttributes(key, proxyXHR);
        }
    }

    /**
     * 重写方法
     * @param {*} key 
     */
    overwriteMethod(key, proxyXHR) {
        let beforeHooks = this.beforeHooks;
        let afterHooks = this.afterHooks;

        proxyXHR[key] = (...args) => {
            // 拦截
            if (beforeHooks[key] && (beforeHooks[key].call(proxyXHR, args) === false)) {
                return;
            }

            // 执行方法本体
            const res = proxyXHR._xhr[key].apply(proxyXHR._xhr, args);

            // 方法本体执行后的钩子
            afterHooks[key] && afterHooks[key].call(proxyXHR._xhr, res);

            return res;
        };
    }

    /**
     * 重写属性
     * @param {*} key 
     */
    overwriteAttributes(key, proxyXHR) {
        Object.defineProperty(proxyXHR, key, this.setProperyDescriptor(key, proxyXHR));
    }

    /**
     * 设置属性的属性描述
     * @param {*} key 
     */
    setProperyDescriptor(key, proxyXHR) {
        let obj = Object.create(null);
        let _this = this;

        obj.set = function (val) {

            // 如果不是on打头的属性
            if (!key.startsWith('on')) {
                proxyXHR['__' + key] = val;
                return;
            }

            if (_this.beforeHooks[key]) {

                this._xhr[key] = function (...args) {
                    _this.beforeHooks[key].call(proxyXHR);
                    val.apply(proxyXHR, args);
                }

                return;
            }

            this._xhr[key] = val;
        }

        obj.get = function () {
            return proxyXHR['__' + key] || this._xhr[key];
        }

        return obj;
    }

    /**
     * 获取实例
     */
    getInstance() {
        return XhrHook.instance;
    }

    /**
     * 添加钩子
     * @param {*} key 
     * @param {*} value 
     */
    add(key, value, execed = false) {
        if (execed) {
            this.afterHooks[key] = value;
        } else {
            this.beforeHooks[key] = value;
        }
        return this;
    }

    /**
     * 删除钩子
     * @param {*} name 
     */
    rmHook(name, isExeced = false) {
        let target = (isExeced ? this.afterHooks : this.beforeHooks);
        delete target[name];
    }

    /**
     * 清空钩子
     */
    clearHook() {
        this.beforeHooks = {};
        this.afterHooks = {};
    }

    /**
     * 取消监听
     */
    unset() {
        window.XMLHttpRequest = this.XHR;
    }

    /**
     * 重新监听
     */
    reset() {
        XhrHook.instance = null;
        XhrHook.instance = new XhrHook(this.beforeHooks, this.afterHooks);
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
```


### qs.stringify序列化问题总结

曾经的疑惑:为什么有的项目请求参数需要qs.stringify转一下而有的却不需要呢?
```js
axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
const service = axios.create({
  baseURL: '', // url = base url + request url
  timeout: 1000 * 20, // 响应时间
  transformRequest: [function (data) {
    return qs.stringify(data)
  }]
})
```
#### 总结
前后台在对接的时候，约定好入参格式：

- 如果约定为纯JSON格式入参，即Content-Type=application/json。后台使用@RequestBody注解，接收前端传递的参数，前台直接使用axios.post即可，不再需要使用QS序列化。
- 如果约定为纯表单格式入参，即Content-Type=application/x-ww-form-urlencoder。后台使用@RequestParam注解，接收前端传递的参数，前台使用axios.post提交参数，需要对data进行QS序列化操作。

## ajax 及 fetch API 详解

### XMLHTTPRequest
   - 非常简易的原生ajax请求
```js
var xhr = new XMLHttpRequest()
xhr.open('GET', 'http://39.106.5.96/api/')
xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return //还没完成

    if (xhr.status == 200) {//成功
        console.log(xhr.responseText);
    } else {//失败
        console.log(xhr.status, xhr.statusText);
    }

}

//超时
xhr.timeout = 5000
xhr.ontimeout = function () {
    console.log('请求超时');
}

//progress事件可以报告长时间运行的文件上传
xhr.upload.onprogress = function (p) {
    console.log(Math.round((p.loaded / p.total) * 100) + '%');
}

xhr.send()//一定要先监听后发送,返回Hello GET
```

### fetch
```js
fetch('http://39.106.5.96/api/', {
    method: 'get',
})
.then((response) => {
    if (response.ok) {
        return response.text()
    }
    throw new Error(`请求异常`)
}).then((res) => {
    console.log(res);
}).catch(error => {
    console.log(error);
})
```


- 默认不带cookie
- 错误不会reject
- 不支持超时设置,可以用promise包裹
  ```js
  // 不支持直接设置超时, 可以用promise
  function fetchTimeout(url, init, timeout = 3000) {
    return new Promise((resolve, reject) => {
        fetch(url, init)
            .then(resolve)
            .catch(reject);
        setTimeout(reject, timeout);
    })
  }
  ```
- 需要借用AbortController中止fetch
  ```js
  const controller = new AbortController()//创建一个控制器

  fetch('http://39.106.5.96/api/', {
      method: 'get',
      signal: controller.signal
  })//...省略...
  
  controller.abort()//取消掉
  ```


### 为什么常见的cdn域名和业务域名不一样？

- 安全问题，会携带业务cookie，不想把得到的用户信息抛给cdn厂商
- 拉取静态资源的时候，如果是同域名也会携带cookie，增加带宽没必要
- 并发请求数针对http1.1

#### 常见的浏览器请求/响应头/错误码解析

#### request header 请求头
- method: GET
- path: 路径
- scheme: https
- accept: application/json, text/plain, */*
- accept-encoding: gzip, deflate, br
- cache-control: no-cache
- cookie: deviceId=c12;
- origin: 
- referer: 判断当前浏览器来自哪个页面，从哪里来
- user-agent: 判断当前环境（比如判断安卓|ios） Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1

#### response header 返回头

- access-control-allow-credentials: 限制来的请求，true *表示随便来
- access-control-allow-origin: 
- content-encoding: gzip 压缩
- content-type: application/json;charset=UTF-8|| form表单提交
- date: Thu, 06 Aug 2020 08:15:05 GMT
- set-cookie: userId=xxx; 通过set-cookie种
- status: 200

#### status

* 200	get 成功
* 201 post 成功
* 301 永久重定向
* 302	临时重定向
* 304 *协商缓存（浏览器和服务器协商） 服务器文件未修改
    - last-modified 来判断当前文件有被修改，比较时间
    - etag 通过哈希判断前后两段是否被修改
* 400	客户端请求有语法错误，不能被服务器识别
* 403	服务器受到请求，但是拒绝提供服务，可能是跨域
* 404	请求的资源不存在
* 405 请求的method不允许
* 414 请求地址太长
* 500	服务器发生不可预期的错误

### 强缓存
* expired 代表什么时候过期，不准确
* max-age :1000 代表接收1000ms之后cookie失效

### 常见的单页面应用，针对index.html如果一定要做缓存，适合做什么缓存？

协商缓存。

因为强缓存无法去实时的了，
js hash
css hash
index.html 没有hash


## 封装一个多浏览器兼容的请求函数

```ts
interface IOptions {
    url: string;
    type?: "GET" | "POST";
    data: any;
    timeout?: number;
}

function formatUrl(object) {
    // a=xxx&b=xxxx; querystring
    let dataArr = [];

    for (let key in object) {
        dataArr.push(`${key}=${encodeURIComponent(object[key])}`);
    }
    return dataArr.join("&");
}

export function ajax(
    options: IOptions = {
        type: "GET",
        data: {},
        timeout: 3000,
        url: "",
    }
) {
    return new Promise((resolve, reject) => {
        if (!options.url) {
            return;
        }

        const queryString = formatUrl(options.data);

        const onStateChange = () => {
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    clearTimeout(timer);
                    if (
                        (xhr.status >= 200 && xhr.status < 300) ||
                        xhr.status === 304
                    ) {
                        resolve(xhr.responseText);
                    } else {
                        reject(xhr.status);
                    }
                }
            };
        };

        let timer;
        let xhr;

        if ((window as any).XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        if (options.type.toUpperCase() === "GET") {
            xhr.open("GET", `${options.url}?${queryString}`);
            onStateChange();
            xhr.send();
        } else if (options.type.toUpperCase() === "POST") {
            xhr.open("POST", options.url);
            xhr.setRequestHeader(
                "ContentType",
                "application/x-www-form-urlencoded"
            );
            onStateChange();
            xhr.send(options.data);
        }

        if (options.timeout) {
            timer = setTimeout(() => {
                xhr.abort();//取消掉
                reject("timeout");
            }, options.timeout);
        }
    });
}

```
