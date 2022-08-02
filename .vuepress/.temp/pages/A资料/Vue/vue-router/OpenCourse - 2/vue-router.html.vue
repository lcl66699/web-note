<template><div><h1 id="vuerouter" tabindex="-1"><a class="header-anchor" href="#vuerouter" aria-hidden="true">#</a> VueRouter</h1>
<ol>
<li>vue router 从列表 浏览了一段时间 , 点击进了一个详情页, 然后返回的时候, 我期望回到列表页还是停留在原来的浏览位置, 你可以怎么做?</li>
</ol>
<ul>
<li>keep-alive</li>
<li>localStorage/sessionStorage + scrollTop +  scrollTo</li>
<li>scrollBehavior</li>
</ul>
<ol start="2">
<li>router-view是什么?</li>
</ol>
<p>类似于动态的组件.</p>
<p>找到当前路径对应的component, 并展示出来.</p>
<ol>
<li>异步加载about.vue</li>
</ol>
<p>首屏 app.js chunk-vendors 2.4MB 159kB
About about.js 21kB</p>
<ol start="2">
<li>同步加载about.vue</li>
</ol>
<p>首屏 app.js chunk-vendors 2.4MB 180KB
About</p>
<h2 id="导航守卫的执行顺序" tabindex="-1"><a class="header-anchor" href="#导航守卫的执行顺序" aria-hidden="true">#</a> 导航守卫的执行顺序</h2>
<ol>
<li>[组件] 前一个组件的beforeRouteLeave</li>
<li>[全局] router.beforeEach</li>
<li>[路由参数变化] beforeRouteUpdate</li>
<li>[配置文件里] beforeEnter</li>
<li>[组件] beforeRouteEnter</li>
<li>[全局] afterEach</li>
</ol>
<h2 id="scollbehavior生效的条件" tabindex="-1"><a class="header-anchor" href="#scollbehavior生效的条件" aria-hidden="true">#</a> scollBehavior生效的条件</h2>
<ol>
<li>浏览器支持的History api</li>
<li>点击浏览器的返回/前进按钮</li>
<li>router-link是不可以触发的</li>
</ol>
</div></template>
