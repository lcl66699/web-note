# BOM

BOM:Browser Object Model 浏览器对象模型，提供了独立于内容的，可以与浏览器窗口进行滑动的对象结构，浏览器提供的API

主要对象：
1. window 对象 BOM核心，js访问浏览器的接口，也是es规定的global对象
2. location 对象 提供当前窗口中加载的文档有关的信息和一些导航功能，即是window也是document属性
3. navigation 对象 获取浏览器系统信息
4. screen 对象 用来表示浏览器窗口外部的显示器信息
5. history 对象保存用户上网的历史信息，存浏览历史等

### window 对象

- alert()
- confirm()
- prompt()
- open()
- onerror()
  - 监听一些全局的监控
  - addEventListener('error')
- setTimeout()
- setInterval()


### 窗口位置

- screenLeft 窗口相对于左边的位置 适用于Chrome、IE、Safari
- screenTop
- screenX	窗口相对于左边的位置 适用于FireFox
- screenY	
- moveBy(x,y) 在水平和垂直方向上移动的像素
- moveTo(x,y) 接收的是新位置的x和y坐标值


### 窗口大小

- innerWidth 获取可视窗口大小，视图区
- innerHeight	

- outerWidth 返回页面视图容器大小
- outerHeight	

- resizeTo(width, height) 接收浏览器窗口的新宽度和新高度
- resizeBy(width, height)


### Location 对象
提供当前窗口中的加载的文档有关的信息和一些导航功能。既是 window 对象属性，也是 document 的对象属性

location 对象的主要属性：
- hash
- host
- hostname
- href
- pathname
- port
- protocol
- search 拿到整体url参数 包括问号

location 的应用场景： 比如区分环境用host



### Navigation 对象
navigation 接口表示用户代理的状态和标识，允许脚本查询它和注册自己进行一些活动

isOnline 检测当前网络是否在线


### History 对象
history 对象保存着用户上网的历史记录，从窗口被打开的那一刻算起，history 对象是用窗口的浏览历史用文档和文档状态列表的形式表示。

- go()
- back()
- forword()
- length

- pushState
- onPopState
- 利用pushState和replaceState去劫持url的变化从而阻止浏览器刷新， 然后又利用popstate完成前端路由的逻辑。用vue-router时是用router.push()来实现跳转的，不是直接pushstate。router.push里面可以调用pushstate来改变url，然后再手动调用方法来更新页面，这里改变页面不需要监听popstate


## 事件捕获和冒泡机制

- 捕获是从window到目标元素
- 冒泡是目标元素到window

```js
window.addEventListener('click', () => {
    console.log(12312);
}, false)
//false 冒泡阶段
//true 捕获阶段
```



### addEventListener执行顺序

- addEventListener先从事件捕获开始执行,也就是第三个参数为true,先从window开始,到parent,再到son
- 紧接着开始执行事件冒泡,也就是默认的false.先从子元素开始执行,然后到parent,最后到window
  
::: tip 提示
#### `e.target.nodeName` 指的是当前点击元素
#### `e.currentTarget.nodeName` 指的是绑定事件监听的元素
:::

### 详解浏览器事件捕获，冒泡

浏览器事件模型中的过程主要分为三个阶段：捕获阶段、目标阶段、冒泡阶段。



## 阻止事件传播
- e.stopPropagation()
```js
window.addEventListener('click', (e) => {
    e.stopPropagation()
}, true)
```
这个方法不只能阻止冒泡，还能阻止捕获阶段的传播。

- stopImmediatePropagation() 
如果有多个相同类型事件的事件监听函数绑定到同一个元素，当该类型的事件触发时，它们会按照被添加的顺序执行。如果其中某个监听函数执行了 event.stopImmediatePropagation() 方法，则当前元素剩下的监听函数将不会被执行。



## 阻止默认行为

e.preventDefault()

e.preventDefault()可以阻止事件的默认行为发生，默认行为是指：点击a标签就转跳到其他页面、拖拽一个图片到浏览器会自动打开、点击表单的提交按钮会提交表单等等，因为有的时候我们并不希望发生这些事情，所以需要阻止默认行为



##  事件委托 绑定事件的运用

常见的一个面试题可能是ul + li，点击每个li alert对应的索引，这里就写一下看看

- 先来给每个li绑定事件

- 再来写一个事件委托的方式

```js
const list = document.getElementById('list')
list.addEventListener('click', function (e) {
    const target = e.target
    if (target.tagName.toLowerCase() == 'li') {
        const lilist = this.querySelectorAll('li')//伪数组
        // 伪数组不能直接用indexOf
        const index = Array.prototype.indexOf.call(lilist, target)
        console.log(`内容为${target.innerHtml},下标是${index}`);
    }
})
```


## 兼容性

attachEvent——兼容：IE7、IE8； 不支持第三个参数来控制在哪个阶段发生，默认是绑定在冒泡阶段
addEventListener——兼容：firefox、chrome、IE、safari、opera；
## 封装一个多浏览器兼容的绑定事件函数

```js
class BomEvent {
    constructor(element) {
        this.element = element;
    }

    addEvent(type, handler) {
        if (this.element.addEventListener) {
            //事件类型、需要执行的函数、是否捕捉
            this.element.addEventListener(type, handler, false);
        } else if (this.element.attachEvent) {
            this.element.attachEvent('on' + type, function () {
                handler.call(element);
            });
        } else {
            this.element['on' + type] = handler;
        }
    }

    removeEvent(type, handler) {
        if (this.element.removeEnentListener) {
            this.element.removeEnentListener(type, handler, false);
        } else if (element.datachEvent) {
            this.element.detachEvent('on' + type, handler);
        } else {
            this.element['on' + type] = null;
        }
    }
}
// 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
function stopPropagation(ev) {
    if (ev.stopPropagation) {
        ev.stopPropagation(); // 标准w3c
    } else {
        ev.cancelBubble = true; // IE
    }
}
// 取消事件的默认行为
function preventDefault(event) {
    if (event.preventDefault) {
        event.preventDefault(); // 标准w3c
    } else {
        event.returnValue = false; // IE
    }
}
```

