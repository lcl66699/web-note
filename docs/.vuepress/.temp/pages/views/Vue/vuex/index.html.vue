<template><h1 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> vuex</h1>
<p>MVC</p>
<ul>
<li>view:html+css</li>
<li>Controller:js</li>
<li>Moderl:data</li>
</ul>
<p>MVVM</p>
<ul>
<li>view</li>
<li>ViewModel</li>
<li>Model</li>
</ul>
<p>mvvm的理解
比如之前jquery，需要改变一个方块颜色
你需要先获取dom节点，再进行操作颜色</p>
<ol>
<li>区别：
就是一个双向绑定
抛弃了对dom的严格感知
无需对流程的过程化操作</li>
<li>实现：
写法上、代码</li>
</ol>
<h3 id="vue组件传值" tabindex="-1"><a class="header-anchor" href="#vue组件传值" aria-hidden="true">#</a> vue组件传值</h3>
<p>通过父节点
eventBus
provide inject提供和注入
vuex</p>
<h2 id="vuex介绍" tabindex="-1"><a class="header-anchor" href="#vuex介绍" aria-hidden="true">#</a> vuex介绍</h2>
<ol>
<li>State</li>
</ol>
<p>当前应⽤状态，可以理解为组件的data⽅法返回的Object</p>
<ol start="2">
<li>Mutations</li>
</ol>
<p>更改 Vuex 的 store 中的状态的唯一方法是提交 mutation，必须是同步函数</p>
<ol start="3">
<li>Actions</li>
</ol>
<p>Action 可以包含任意异步操作,Action 提交的是 mutation，而不是直接变更状态。</p>
<ol start="4">
<li>Getters</li>
</ol>
<p>Getter为state的计算属性</p>
<ol start="5">
<li>Modules</li>
</ol>
<p>modules的主要功能是为了防⽌state过于庞⼤和冗余，所以对其进⾏模块化分隔</p>
<h3 id="辅助函数" tabindex="-1"><a class="header-anchor" href="#辅助函数" aria-hidden="true">#</a> 辅助函数</h3>
<ol>
<li>mapStates
使用 mapState 辅助函数帮助我们生成计算属性，入参为对象</li>
<li>mapGetters</li>
<li>mapMutaions</li>
<li>mapActions</li>
</ol>
<h2 id="vuex-3原理" tabindex="-1"><a class="header-anchor" href="#vuex-3原理" aria-hidden="true">#</a> vuex 3原理</h2>
<p>首先vuex是vue的一个插件，通过Vue.use()使用
它包含install、mapActions、等等</p>
<p>每个组件（也就是Vue实例）在beforeCreate的生命周期中都混入（Vue.mixin）同一个Store实例作为属性 <code>$store</code>，给每一个模块mixins， 也就是为啥可以通过
<code>this.$store.dispatch</code> 等调用方法的原因。最终每个Vue的实例对象，都有一个$store属性。且是同一个Store实例</p>
<p>「页面 dispatch/commit」-&gt; 「actions/mutations」-&gt; 「状态变更」-&gt; 「页面更新」-&gt; 「页面 dispatch/commit」</p>
<p>状态机，总线机制，单例模式实现（全局只能有一个实例）</p>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
<h3 id="vuex修改数据为何兜一圈" tabindex="-1"><a class="header-anchor" href="#vuex修改数据为何兜一圈" aria-hidden="true">#</a> vuex修改数据为何兜一圈？</h3>
<p>异步操作先actions调用muations然后muations去修改</p>
<h3 id="vuex什么时候进行的初始化" tabindex="-1"><a class="header-anchor" href="#vuex什么时候进行的初始化" aria-hidden="true">#</a> vuex什么时候进行的初始化？</h3>
<p>beforeCreate</p>
<h3 id="vuex自己定义了告警-为什么不用console-assert" tabindex="-1"><a class="header-anchor" href="#vuex自己定义了告警-为什么不用console-assert" aria-hidden="true">#</a> vuex自己定义了告警，为什么不用console.assert？</h3>
<p>console.assert 函数报错不会阻止后续代码执行
因为要throw Error，把进程打断</p>
<h3 id="object-create-null-和-区别" tabindex="-1"><a class="header-anchor" href="#object-create-null-和-区别" aria-hidden="true">#</a> object.create(null) 和{}区别</h3>
<ul>
<li>原型链问题
<ul>
<li>object.create(null).__proto__为undefined</li>
<li>{}.__proto指向Object.prototype</li>
</ul>
</li>
</ul>
<h3 id="ssr特点" tabindex="-1"><a class="header-anchor" href="#ssr特点" aria-hidden="true">#</a> ssr特点</h3>
<p>优点 首屏加载快、有利于seo
缺点:server压力大，负载均衡</p>
<p>服务端为什么不导出一个router实例，而是工程模式函数封装
因为用户每一个请求都创建一个实例</p>
<h1 id="vuex-4版本" tabindex="-1"><a class="header-anchor" href="#vuex-4版本" aria-hidden="true">#</a> vuex 4版本</h1>
<p>vuex 是⼀个专为 vue.js 应⽤程序开发的状态管理模式 + 库。它采⽤集中式存储管理应⽤的所有组件的状态，并以相应的规则保证状态以⼀种可预测的⽅式发生变化。
与 vuex 4 相匹配的版本是 vue 3。</p>
<p>在组件访问store inject或者$stroe</p>
<p>重写了dispatch和content是为了保证this指向store实例</p>
<p>redux是和react独立的，vuex依赖于vuex，为vue而生
单向数据流</p>
</template>
