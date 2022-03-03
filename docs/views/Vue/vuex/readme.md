# vuex

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

### vue组件传值
通过父节点
eventBus
provide inject提供和注入
vuex

## vuex介绍

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
首先vuex是vue的一个插件，通过Vue.use()使用
它包含install、mapActions、等等

每个组件（也就是Vue实例）在beforeCreate的生命周期中都混入（Vue.mixin）同一个Store实例作为属性 `$store`，给每一个模块mixins， 也就是为啥可以通过
`this.$store.dispatch` 等调用方法的原因。最终每个Vue的实例对象，都有一个$store属性。且是同一个Store实例

「页面 dispatch/commit」-> 「actions/mutations」-> 「状态变更」-> 「页面更新」-> 「页面 dispatch/commit」




状态机，总线机制，单例模式实现（全局只能有一个实例）



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