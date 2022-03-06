<template><h1 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> vue-router</h1>
<h2 id="router-发展历史" tabindex="-1"><a class="header-anchor" href="#router-发展历史" aria-hidden="true">#</a> Router 发展历史</h2>
<p>路由的概念，是伴随 SPA 出现的。在此之前，⻚⾯的跳转是通过服务器端进⾏控制的；</p>
<ul>
<li>传统的⻚⾯的跳转，是通过前端向后台发送请求</li>
<li>后台通过模板引擎的渲染，将⼀个新的 html 界⾯</li>
<li>⽐如⻚⾯跳转时：
<ul>
<li>from 表单的提交；</li>
<li>a 标签的默认属性；</li>
<li>js 调⽤ location.href，给其赋值；</li>
<li>H5: history 的 go / forward / back -- // history.push / replace ?</li>
</ul>
</li>
<li>在 SPA（即只有⼀个 html ） 的出现后，前端可以⾃由控制组件的渲染，来模拟⻚⾯的跳转。
<ul>
<li>⻚⾯是怎么发⽣跳转，向服务端请求的呢？-- 浏览器劫持</li>
<li>SPA的⽅法，需要拦截请求；
<ul>
<li>hash 路由，当我的hash</li>
<li>history 的 go / forward / back 的时候，我的浏览器的地址，是发⽣了改变的，</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">总结</p>
<p>后端路由是根据 url 访问相关的 controller 进⾏数据资源和模板引擎的拼接，返回前端；</p>
<p>前端路由是通过 js 根据 url 返回对应的组件加载。
所以，前端的路由包含两个部分：</p>
<ul>
<li>url 的处理</li>
<li>组件加载</li>
</ul>
</div>
<h3 id="路由的分类" tabindex="-1"><a class="header-anchor" href="#路由的分类" aria-hidden="true">#</a> 路由的分类</h3>
<ul>
<li>history 路由</li>
<li>hash 路由</li>
<li>memory 路由 *</li>
</ul>
<h6 id="hash-路由" tabindex="-1"><a class="header-anchor" href="#hash-路由" aria-hidden="true">#</a> hash 路由</h6>
<p>window.location.hash = &quot;xxx&quot;</p>
<h6 id="history-路由" tabindex="-1"><a class="header-anchor" href="#history-路由" aria-hidden="true">#</a> history 路由</h6>
<p>history./(go|back|repalce|push|forward)/</p>
<h2 id="hash-路由-和-history-路由-有什么区别" tabindex="-1"><a class="header-anchor" href="#hash-路由-和-history-路由-有什么区别" aria-hidden="true">#</a> hash 路由 和 history 路由，有什么区别？</h2>
<ul>
<li>hash 路由 ⼀般会携带 ⼀个 # 号，不够美观； history 路由不存在这个问题；</li>
<li>默认 hash 路由是不会像浏览器发出请求的，主要是⼀般⽤于锚点；history 中 go / back / forward 以及浏览器的前进、后退按钮⼀般都会像服务端发起请求；-- history 的所有 url 内容，服务端都可以获取到</li>
<li>基于此，hash 模式，是不⽀持SSR的，但是 history 模式可以做 SSR</li>
<li>history 在部署的时候，如 nginx， 需要只渲染⾸⻚，让⾸⻚根据路径重新跳转。</li>
<li>要注意：如何部署</li>
</ul>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token comment"># 单个的服务器部署</span>
<span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
 try_files uri $uri /xxx/main/index.html
<span class="token punctuation">}</span>
<span class="token comment"># 存在代理的情况</span>
<span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
 <span class="token directive"><span class="token keyword">rewrite</span> ^ /file/index.html break</span><span class="token punctuation">;</span> <span class="token comment"># 这⾥代表的是xxx.cdn 的资源路径</span>
  <span class="token directive"><span class="token keyword">proxy_pass</span> https://www.xxx.cdn.com</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul>
<li>location.hash 的值实际就是 URL中#后面的东西。</li>
<li>history 实际采用了HTML5中提供的API来实现，主要有history.pushState()和history.replaceState() 通过 window.addEventListener 监听popstate 变化</li>
<li>hash 通过 hashchange 监听变化，</li>
</ul>
<h3 id="手写hash路由" tabindex="-1"><a class="header-anchor" href="#手写hash路由" aria-hidden="true">#</a> 手写hash路由</h3>
<ul>
<li>hash 值的更改，会触发 hashchange 事件</li>
<li>window.addEventLisenter('hashchange', () =&gt; {})
#3、history路由</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zh<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>hash 路由<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript">window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash <span class="token operator">=</span> <span class="token string">'#'</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript">window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash <span class="token operator">=</span> <span class="token string">'#about'</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>关于我们<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript">window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash <span class="token operator">=</span> <span class="token string">'#user'</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>用户列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>context<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">

    <span class="token keyword">class</span> <span class="token class-name">BaseRouter</span> <span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>routes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>refresh <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>refresh<span class="token punctuation">)</span><span class="token punctuation">;</span>
            window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'hashchange'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>refresh<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">route</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>routes<span class="token punctuation">[</span>path<span class="token punctuation">]</span> <span class="token operator">=</span> callback <span class="token operator">||</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">''</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>routes<span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>      
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> Route <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BaseRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    Route<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">'/about'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">changeText</span><span class="token punctuation">(</span><span class="token string">"关于我们页面"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Route<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">'/user'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">changeText</span><span class="token punctuation">(</span><span class="token string">"用户列表页"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Route<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">changeText</span><span class="token punctuation">(</span><span class="token string">"首页"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">changeText</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'context'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> arg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h3 id="手写history路由" tabindex="-1"><a class="header-anchor" href="#手写history路由" aria-hidden="true">#</a> 手写history路由</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zh<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>H5 路由<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./about<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>关于我们<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./user<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>用户列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>context<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">class</span> <span class="token class-name">BaseRouter</span> <span class="token punctuation">{</span>
            <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>routes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_bindPopstate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token function">init</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>path<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> cb <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>routes<span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token function">route</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>routes<span class="token punctuation">[</span>path<span class="token punctuation">]</span> <span class="token operator">=</span> callback <span class="token operator">||</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token function">go</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>path<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> cb <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>routes<span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token function">_bindPopstate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'popstate'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    <span class="token keyword">const</span> path <span class="token operator">=</span> e<span class="token punctuation">.</span>state <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>state<span class="token punctuation">.</span>path<span class="token punctuation">;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>routes<span class="token punctuation">[</span>path<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>routes<span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">const</span> Route <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BaseRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    Route<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">'./about'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">changeText</span><span class="token punctuation">(</span><span class="token string">"关于我们页面"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Route<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">'./user'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">changeText</span><span class="token punctuation">(</span><span class="token string">"用户列表页"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Route<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">'./'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">changeText</span><span class="token punctuation">(</span><span class="token string">"首页"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">changeText</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'context'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> arg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    container<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span> <span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName <span class="token operator">===</span> <span class="token string">'A'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            Route<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'href'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div><h3 id="history-go-back-一定会刷新吗" tabindex="-1"><a class="header-anchor" href="#history-go-back-一定会刷新吗" aria-hidden="true">#</a> history.go / back ⼀定会刷新吗？</h3>
<p>要根据指定⻚⾯和当前界⾯的构建关系，动态决定；</p>
<h3 id="pushstate-会触发-popstate-事件吗" tabindex="-1"><a class="header-anchor" href="#pushstate-会触发-popstate-事件吗" aria-hidden="true">#</a> pushState 会触发 popState 事件吗？</h3>
<p>popState 是监听其他的操作。
pushState/replaceState 都不会触发 popState 事件，需要触发⻚⾯的重新渲染。
popState 什么时候触发？</p>
<ul>
<li>点击浏览器的前进、后退按钮</li>
<li>back / forward / go</li>
</ul>
</template>
