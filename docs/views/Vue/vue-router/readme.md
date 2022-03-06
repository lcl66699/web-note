# vue-router


## Router 发展历史

路由的概念，是伴随 SPA 出现的。在此之前，⻚⾯的跳转是通过服务器端进⾏控制的；
* 传统的⻚⾯的跳转，是通过前端向后台发送请求 
* 后台通过模板引擎的渲染，将⼀个新的 html 界⾯ 
* ⽐如⻚⾯跳转时：
  - from 表单的提交； 
  - a 标签的默认属性； 
  - js 调⽤ location.href，给其赋值； 
  - H5: history 的 go / forward / back -- // history.push / replace ?
* 在 SPA（即只有⼀个 html ） 的出现后，前端可以⾃由控制组件的渲染，来模拟⻚⾯的跳转。
  - ⻚⾯是怎么发⽣跳转，向服务端请求的呢？-- 浏览器劫持
  - SPA的⽅法，需要拦截请求；
    - hash 路由，当我的hash
    - history 的 go / forward / back 的时候，我的浏览器的地址，是发⽣了改变的，
:::tip 总结
后端路由是根据 url 访问相关的 controller 进⾏数据资源和模板引擎的拼接，返回前端；

前端路由是通过 js 根据 url 返回对应的组件加载。 
所以，前端的路由包含两个部分： 
- url 的处理
- 组件加载
:::

### 路由的分类

* history 路由 
* hash 路由 
* memory 路由 * 

###### hash 路由
window.location.hash = "xxx" 
###### history 路由
history./\(go|back|repalce|push|forward)/

##  hash 路由 和 history 路由，有什么区别？

* hash 路由 ⼀般会携带 ⼀个 # 号，不够美观； history 路由不存在这个问题；
* 默认 hash 路由是不会像浏览器发出请求的，主要是⼀般⽤于锚点；history 中 go / back / forward 以及浏览器的前进、后退按钮⼀般都会像服务端发起请求；-- history 的所有 url 内容，服务端都可以获取到 
* 基于此，hash 模式，是不⽀持SSR的，但是 history 模式可以做 SSR 
* history 在部署的时候，如 nginx， 需要只渲染⾸⻚，让⾸⻚根据路径重新跳转。 
* 要注意：如何部署
```nginx
# 单个的服务器部署
location / {
 try_files uri $uri /xxx/main/index.html
}
# 存在代理的情况
location / {
 rewrite ^ /file/index.html break; # 这⾥代表的是xxx.cdn 的资源路径
  proxy_pass https://www.xxx.cdn.com;
}
```
* location.hash 的值实际就是 URL中#后面的东西。
* history 实际采用了HTML5中提供的API来实现，主要有history.pushState()和history.replaceState() 通过 window.addEventListener 监听popstate 变化
* hash 通过 hashchange 监听变化，

### 手写hash路由

- hash 值的更改，会触发 hashchange 事件
- window.addEventLisenter('hashchange', () => {})
#3、history路由
```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hash 路由</title>
</head>
<body>
    <div id="container" >
        <button onclick="window.location.hash = '#'">首页</button>
        <button onclick="window.location.hash = '#about'">关于我们</button>
        <button onclick="window.location.hash = '#user'">用户列表</button>
    </div>

    <div id="context"></div>
    
</body>
<script>

    class BaseRouter {
        constructor() {
            this.routes = {};
            this.refresh = this.refresh.bind(this);
            window.addEventListener('load', this.refresh);
            window.addEventListener('hashchange', this.refresh);
        }

        route(path, callback) {
            this.routes[path] = callback || function() {}
        }

        refresh() {
            const path = `/${window.location.hash.slice(1) || ''}`;
            this.routes[path]();
        }      
    }

    const Route = new BaseRouter();

    Route.route('/about', () => changeText("关于我们页面"));
    Route.route('/user', () => changeText("用户列表页"));
    Route.route('/', () => changeText("首页"));

    function changeText(arg) {
        document.getElementById('context').innerHTML = arg;
    }

</script>
</html>
```
### 手写history路由
```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>H5 路由</title>
</head>
<body>
    <div id="container">
        <a href="./" >首页</a>
        <a href="./about">关于我们</a>
        <a href="./user">用户列表</a>
    </div>
    <div id="context"></div>
    <script>
        class BaseRouter {
            constructor() {
                this.routes = {};
                this._bindPopstate();
                this.init();
            }

            init(path) {
                window.history.replaceState({path}, null, path);
                const cb = this.routes[path];
                if(cb) {
                    cb();
                }
            }

            route(path, callback) {
                this.routes[path] = callback || function() {}
            }

            go(path) {
                window.history.pushState({path}, null, path);
                const cb = this.routes[path];
                if(cb) {
                    cb();
                }
            }

            _bindPopstate() {
                window.addEventListener('popstate', e => {
                    const path = e.state && e.state.path;
                    this.routes[path] && this.routes[path]();
                })
            }
        }

        const Route = new BaseRouter();

    Route.route('./about', () => changeText("关于我们页面"));
    Route.route('./user', () => changeText("用户列表页"));
    Route.route('./', () => changeText("首页"));

    function changeText(arg) {
        document.getElementById('context').innerHTML = arg;
    }

    container.addEventListener('click' , e => {
        if(e.target.tagName === 'A') {
            e.preventDefault();
            Route.go(e.target.getAttribute('href'))
        }
    })
    </script>
</body>
</html>
```
### history.go / back ⼀定会刷新吗？
要根据指定⻚⾯和当前界⾯的构建关系，动态决定；
### pushState 会触发 popState 事件吗？

popState 是监听其他的操作。 
pushState/replaceState 都不会触发 popState 事件，需要触发⻚⾯的重新渲染。 
popState 什么时候触发？ 
  - 点击浏览器的前进、后退按钮 
  - back / forward / go