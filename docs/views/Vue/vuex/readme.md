# vuex状态管理

MVC
- view:html+css
- Controller:js
- Moderl:data 


MVVM
- view
- ViewModel
- Model

mvvm的理解
比如之前jquery，需要改变一个方块颜色
你需要先获取dom节点，再进行操作颜色
1. 区别：
就是一个双向绑定
抛弃了对dom的严格感知
无需对流程的过程化操作
2. 实现：
写法上、代码

#### vue组件传值
通过父节点
eventBus
provide inject提供和注入
vuex


## 关于状态管理

> 状态管理是当前前端比较核心的部分，因为视图能用状态描述，所以前端的逻辑复杂度移到了如何让状态“不要出错”，前端与后端的一个区别在于，状态在前端是长生命周期的，又会在这个生命周期中有不可枚举地、未知地、难以追踪的多次修改，保证其按照既定轨迹不出错就很困难了

> 为什么说是某一时刻，状态不是一成不变的，实际业务场景中，状态是一直在被改变的，从而带来视图的随之更新。

往大了看，状态本质是还是一种可以描述视图状态、行为的数据结构，状态的管理则是通过一定的算法将这些数据结构组织、管理起来

往细了看，状态大致可以分为两类，**本地状态**和**共享状态**

本地状态就是 `vue` 中的 `data`，`react`中的 `state`，这里我们一般会用来控制弹窗的现实隐藏、`loading`效果等

共享状态最常见的场景，业务中肯定会出现大量需要兄弟节点通信、祖孙节点通信等情况的场景，通信的目的是为了状态分享，虽然可以通过一些方式，比如回调函数等手段实现，但都不是最佳实践

> 一般情况下，小项目不需要什么状态管理工具，简单是避免麻烦的最佳实践，当你的应用膨胀到你已经无法理顺状态流的时候，才是你考虑使用状态管理工具的时机
>
> 项目的复杂度和组件层次结构的复杂性是衡量是否使用状态管理工具的标准，这多多少少取决于经验

所以 `Flux` 架构及其追随者 `Redux` `Vuex`被提出，主要思想是**应用的状态被集中存放到一个仓库中，但是仓库中的状态不能被直接修改**，**必须通过特定的方式**才能更新状态

理想的状态管理工具需要解决的问题

1. 状态更新的设计，`API` 足够少，且简单
2. 如何共享状态
3. 状态提升
4. 状态下降
5. 同步、异步的处理
6. 持久状态和临时状态如何区分维护
7. 状态更新的事务如何管理
8. ...
## vuex介绍

:::tip 实践
>
> [vue-vuex 最佳实践](https://github.com/weipxiu/Vue-vuex)
>
> [vuex 最佳实践](https://bigdata.bihell.com/language/javascript/vue/vuex.html#%E4%B8%80%E3%80%81vuex%E5%88%B0%E5%BA%95%E6%98%AF%E4%B8%AA%E4%BB%80%E4%B9%88%E9%AC%BC)
:::
### 更改状态

「页面 dispatch/commit」-> 「actions/mutations」-> 「状态变更」-> 「页面更新」-> 「页面 dispatch/commit」...

1. State

当前应⽤状态，可以理解为组件的data⽅法返回的Object

2. Mutations

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation，必须是同步函数

3. Actions

Action 可以包含任意异步操作,Action 提交的是 mutation，而不是直接变更状态。

4. Getters

Getter为state的计算属性

5. Modules

modules的主要功能是为了防⽌state过于庞⼤和冗余，所以对其进⾏模块化分隔



### 辅助函数
1. mapStates
使用 mapState 辅助函数帮助我们生成计算属性，入参为对象
2. mapGetters
3. mapMutaions
4. mapActions




## vuex 3原理


> [开发 vue 插件](https://cn.vuejs.org/v2/guide/plugins.html)
首先vuex是vue的一个插件，通过Vue.use()使用

每个组件（也就是Vue实例）在beforeCreate的生命周期中都通过混入（Vue.mixin）
将 `$store` 这样的快速访问 `store` 的快捷属性注入到每一个 `vue` 实例中 
也就是为啥可以通过`this.$store.dispatch` 等调用方法的原因。
最终每个Vue的实例对象，都有一个$store属性。且是同一个Store实例。

至于为什么`store` 是响应式的呢？
因为利用 `vue` 的`data` 里的状态是响应式的啊～


vuex状态机，是总线机制，单例模式实现的（全局只能有一个实例vuex）

结构原理
初始化挂载
Store 对象解析


看源码
### Step1 - store 注册

```js
/**
* store.js - store 注册
*/
let Vue

// vue 插件必须要这个 install 函数
export function install(_Vue) {
  // 拿到 Vue 的构造器，存起来
  Vue = _Vue
  // 通过 mixin 注入到每一个vue实例 👉 https://cn.vuejs.org/v2/guide/mixins.html
  Vue.mixin({ beforeCreate: vuexInit })
  
  function vuexInit () {
    const options = this.$options
    // 这样就可以通过 this.$store 访问到 Vuex 实例，拿到 store 了
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store
    }
  }
}
```



### Step2 - 响应式

```js
/**
* store.js - 实现响应式
*/
export class Store {
  constructor(options = {}) {
    resetStoreVM(this, options.state)
  }
  
  get state () {
    return this._vm._data.$$state
  }
}

function resetStoreVM(store, state) {
  // 因为 vue 实例的 data 是响应式的，正好利用这一点，就可以实现 state 的响应式
  store._vm = new Vue({
    data: {
      $$state: state
    }
  })
}
```



### Step3 - 衍生数据

```js
/**
* store.js - 衍生数据（getters）
*/
export class Store {
  constructor(options = {}) {
    
    const state = options.state
    
    resetStoreVM(this, state)
    
    // 我们用 getters 来收集衍生数据 computed
    this.getters = {}
    
    // 简单处理一下，衍生不就是计算一下嘛，传入state
    _.forEach(this.getters, (name, getterFn) => {
      Object.defineProperty(this.getters, name, {
        get: () => getterFn(this.state)
      })
    })
  }
  
  get state () {
    return this._vm._data.$$state
  }
}

function resetStoreVM(store, state) {
  store._vm = new Vue({
    data: {
      $$state: state
    }
  })
}
```



### Step4 - Actions/Mutations

```js
/**
* store.js - Actions/Mutations 行为改变数据
*/
export class Store {
  constructor(options = {}) {
    
    const state = options.state
    
    resetStoreVM(this, state)
    
    this.getters = {}
    
    _.forEach(options.getters, (name, getterFn) => {
      Object.defineProperty(this.getters, name, {
        get: () => getterFn(this.state)
      })
    })
    
    // 定义的行为，分别对应异步和同步行为处理
    this.actions = {}
    this.mutations = {}
    
    _.forEach(options.mutations, (name, mutation) => {
      this.mutations[name] = payload => {
        // 最终执行的就是 this._vm_data.$$state.xxx = xxx 这种操作
        mutation(this.state, payload)
      }
    })
    
    _.forEach(options.actions, (name, action) => {
      this.actions[name] = payload => {
        // action 专注于处理异步，这里传入 this，这样就可以在异步里面通过 commit 触发 mutation 同步数据变化了
        action(this, payload)
      }
    })
  }
  
  // 触发 mutation 的方式固定是 commit
  commit(type, payload) {
    this.mutations[type](payload)
  }
  
  // 触发 action 的方式固定是 dispatch
  dispatch(type, payload) {
    this.actions[type](payload)
  }
  
  get state () {
    return this._vm._data.$$state
  }
}

function resetStoreVM(store, state) {
  store._vm = new Vue({
    data: {
      $$state: state
    }
  })
}
```



### Step5 - 拆分出多个 Module

```js
// module 可以对状态模型进行分层，每个 module 又含有自己的 state、getters、actions 等

// 定义一个 module 基类
class Module {
	constructor(rawModule) {
    this.state = rawModule || {}
    this._rawModule = rawModule
    this._children = {}
  }
  
  getChild (key) {
    return this._children[key]
  }
  
   addChild (key, module) {
    this._children[key] = module
  }
}

// module-collection.js 把 module 收集起来
class ModuleCollection {
  constructor(options = {}) {
    this.register([], options)
  }
  
  register(path, rawModule) {
    const newModule = new Module(rawModule)
    if (path.length === 0 ) {
      // 如果是根模块 将这个模块挂在到根实例上
      this.root = newModule
    }
    else {
      const parent = path.slice(0, -1).reduce((module, key) => {
        return module.getChild(key)
      }, this.root)
      
      parent.addChild(path[path.length - 1], newModule)
    }
    
    // 如果有 modules，开始递归注册一波
    if (rawModule.modules) {
      _.forEach(rawModule.modules, (key, rawChildModule) => {
        this.register(path.concat(key), rawChildModule)
      })
    }
  }
}

// store.js 中
export class Store {
  constructor(options = {}) {
    // 其余代码...
    
    // 所有的 modules 注册进来
    this._modules = new ModuleCollection(options)
    
    // 但是这些 modules 中的 actions, mutations, getters 都没有注册，所以我们原来的方法要重新写一下
    // 递归的去注册一下就行了，这里抽离一个方法出来实现
    installModule(this, this.state, [], this._modules.root);
  }
}

function installModule(store, state, path, root) {
  // getters
  const getters = root._rawModule.getters
  if (getters) {
    _.forEach(getters, (name, getterFn) => {
      Object.defineProperty(store.getters, name, {
        get: () => getterFn(root.state)
      })
    })
  }
  
  // mutations
  const mutations = root._rawModule.mutations
  if (mutations) {
    _.forEach(mutations, (name, mutation) => {
      let _mutations = store.mutations[name] || (store.mutations[name] = [])
      _mutations.push(payload => {
        mutation(root.state, payload)
      })
      
      store.mutations[name] = _mutations
    })
  }
  
  // actions
  const actions = root._rawModule.actions
  if (actions) {
    _.forEach(actions, (name, action) => {
      let _actions = store.actions[name] || (store.actions[name] = [])
      _actions.push(payload => {
        action(store, payload)
      })
      
      store.actions[name] = _actions
    })
  }
  
  // 递归
  _.forEach(root._children, (name, childModule) => {
    installModule(this, this.state, path.concat(name), childModule)
  })
}
```



### Step6 - 插件机制

```js
(options.plugins || []).forEach(plugin => plugin(this))
```



以上只是以最简化的代码实现了 `vuex` 核心的 `state` `module` `actions` `mutations` `getters` 机制，
如果对源代码感兴趣，可以看[若川的文章](https://juejin.cn/post/6844904001192853511#heading-12)



## SSR

> web1.0 时代，几乎所有的页面都是服务端渲染的...现在，只是又绕回去了而已

#### CSR VS SSR

首先让我们看看 CSR 的过程（划重点，浏览器渲染原理基本流程）

![csr](https://raw.githubusercontent.com/yacan8/blog/master/images/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86/image-20200730191954015.png)



过程如下：

1. 浏览器通过请求得到一个`HTML`文本
2. 渲染进程解析`HTML`文本，构建`DOM`树
3. 解析`HTML`的同时，如果遇到内联样式或者样式脚本，则下载并构建样式规则（`stytle rules`），若遇到`JavaScrip`t脚本，则会下载执行脚本。
4. `DOM`树和样式规则构建完成之后，渲染进程将两者合并成渲染树（`render tree`）
5. 渲染进程开始对渲染树进行布局，生成布局树（`layout tree`）
6. 渲染进程对布局树进行绘制，生成绘制记录
7. 渲染进程的对布局树进行分层，分别栅格化每一层，并得到合成帧
8. 渲染进程将合成帧信息发送给`GPU`进程显示到页面中



很容易发现，`CSR`  的特点就是会在浏览器端的运行时去动态的渲染、更新 `DOM` 节点，特别是 `SPA` 应用来说，其模版 `HTML` 只有一个 `DIV`，然后是运行时（`React`，`Vue`，`Svelte` 等）动态的往里插入内容，这样的话各种 `BaiduSpider` 拿不到啥有效信息，自然 `SEO` 就不好了，项目一旦复杂起来， `bundle` 可能超乎寻常的大...这也是一个开销

那么`SSR` 呢，则是是服务端完成了渲染过程，将渲染完成的 `HTML` 字符串或者流返回给浏览器，就少了脚本解析、运行这一环节，理论上 `FP` 表现的更佳，`SEO` 同样



![csr vs ssr](https://raw.githubusercontent.com/yacan8/blog/master/images/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86/image-20200731165404271.png)

但其实，现在 `SSR` 也并没有大行其道，凡事有利有弊，`SSR` 也是有缺点的

1.  复杂，同构项目的代码复杂度直线上升，因为要兼容两种环境
2. 对服务端的开销大，既然 `HTML` 都是拼接好的，那么传输的数据肯定就大多了，同时，拿 `Node` 举例，在处理 `Computed` 密集型逻辑的时候是阻塞的，不得不上负载均衡、缓存策略等来提升
3. CI/CD 更麻烦了，需要在一个 `Server` 环境，比如 `Node`

> 一般来说，ToB 的业务场景基本不需要 SSR，需要 SSR 的一定是对首屏或者 SEO 有强诉求的，不然没必要搞那么麻烦，简洁是避免麻烦的最佳实践，同时，随着浏览器发展，越来越快，爬虫也越来越智能，SSR 的场景在被压缩



彩蛋，这里说到了 `CSR` 和 `SSR` ，其实我们现今常见的渲染方案有6-7种吧！



![render](https://image-static.segmentfault.com/324/269/3242695953-5c7c0095b3cf5_fix732)



注意，这里提到了 `hydration` 这个词，这是一个很棒的思路，对 `FP` 有帮助，但是不能提升 `TTI`



> 补充资料，务必精读
>
> [VUE SSR 指南（动手操练一下最佳）](https://ssr.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr-%EF%BC%9F)



#### 同构应用

我们以上面的指南为基础讲讲同构应用（因为同构应用算是比较复杂的了），通过同构应用让大家对 `SSR` 有一个更直观、立体的认识

首先需要了解什么是同构应用

> 一份代码，既可以客户端渲染，也可以服务端渲染



看看客户端渲染，对我们而言，基本可以这样概括：页面 = 模版 + 数据，应用 = 路由 + 页面

所以，同构，我们需要注意的是构了个啥？，就是 **路由**、**模版**、**数据**

![同构](https://raw.githubusercontent.com/yacan8/blog/master/images/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86/vue%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93%E6%9E%84%E5%BB%BA.png)



假定大家已经认真阅读并实际操练了 `VUE SSR` 指南，

现在就一些实践经验做一些补充：

1. 服务端的 `webpack` 不用关注 `CSS`，客户端会打包出来的，到时候推 `CDN`，然后改一下 `public path` 就好了

2. 服务端的代码不需要分 `chunk`，`Node` 基于内存一次性读取反而更高效

3. 如果有一些方法需要在特定的环境执行，比如客户端环境中上报日志，可以利用 `beforeMouted` 之后的生命周期都不会在服务端执行这一特点，当然也可以使用 `isBrowser` 这种判断

4. `CSR` 和 `SSR` 的切换和降级

   ```js
   // 总有一些奇奇怪怪的场景，比如就只需要 CSR，不需要 SSR
   // 或者在 SSR 渲染的时候出错了，页面最好不要崩溃啊，可以降级成 CSR 渲染，保证页面能够出来
   
   // 互相切换的话，总得有个标识是吧，告诉我用 CSR 还是 SSR
   // search 就不错，/demo?ssr=true
   module.exports = function(req, res) {
     if(req.query.ssr === 'true'){
       const context = { url: req.url }
       renderer.renderToString(context, (err, html) => {
         if(err){
           res.render('demo') // views 文件下的 demo.html
         }
         res.end(html)
       })
     } else {
       res.render('demo')
     }
   }
   ```

5. `Axios` 封装，至少区分环境，在客户端环境是需要做代理的



> 这里的最佳实践知识抛砖引玉，还是得自己去踩坑总结



`VUE-SSR` 优化方案：

1. 页面级别的缓存，比如 `nginx` `micro-caching`
2. 设置 `serverCacheKey`，如果相同，将使用缓存，组件级别的缓存
3. `CGI` 缓存，通过 `memcache`  等，将相同的数据返回缓存一下，注意设置缓存更新机制
4. 流式传输，但是必须在` asyncData` 之后，否则没有数据，说明也可能会被 `CGI` 耗时阻塞
5. 分块传输，这样前置的 `CGI` 完成就会渲染输出，但是这个方案难啊
6. [JSC](https://juejin.cn/post/6844903476120518670)，就是不用 `vue-loader`












## 常见问题

### vuex修改数据为何兜一圈？
异步操作先actions调用muations然后muations去修改


### vuex什么时候进行的初始化？ 
beforeCreate



### vuex自己定义了告警，为什么不用console.assert？
console.assert 函数报错不会阻止后续代码执行
因为要throw Error，把进程打断

### object.create(null) 和{}区别 
- 原型链问题
  - object.create(null).__proto__为undefined
  - {}.__proto指向Object.prototype


### ssr特点
优点 首屏加载快、有利于seo
缺点:server压力大，负载均衡

服务端为什么不导出一个router实例，而是工程模式函数封装
因为用户每一个请求都创建一个实例

# vuex 4版本
vuex 是⼀个专为 vue.js 应⽤程序开发的状态管理模式 + 库。它采⽤集中式存储管理应⽤的所有组件的状态，并以相应的规则保证状态以⼀种可预测的⽅式发生变化。
与 vuex 4 相匹配的版本是 vue 3。

在组件访问store inject或者$stroe

重写了dispatch和content是为了保证this指向store实例

redux是和react独立的，vuex依赖于vuex，为vue而生
单向数据流