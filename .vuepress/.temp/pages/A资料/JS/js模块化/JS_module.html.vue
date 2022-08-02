<template><div><h2 id="js模块化" tabindex="-1"><a class="header-anchor" href="#js模块化" aria-hidden="true">#</a> JS模块化</h2>
<h3 id="_1-不得不说的历史" tabindex="-1"><a class="header-anchor" href="#_1-不得不说的历史" aria-hidden="true">#</a> 1. 不得不说的历史</h3>
<h4 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h4>
<p>JS本身简单的页面设计：页面动画 + 表单提交
并无模块化 or 命名空间的概念</p>
<blockquote>
<p>JS的模块化需求日益增长</p>
</blockquote>
<h4 id="幼年期-无模块化" tabindex="-1"><a class="header-anchor" href="#幼年期-无模块化" aria-hidden="true">#</a> 幼年期： 无模块化</h4>
<ol>
<li>开始需要在页面中增加一些不同的js：动画、表单、格式化</li>
<li>多种js文件被分在不同的文件中</li>
<li>不同的文件又被同一个模板引用</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"jquery.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"main.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"dep1.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token comment">//……</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>认可：
文件分离是最基础的模块化第一步
问题出现：</p>
<ul>
<li>污染全局作用域 =&gt; 不利于大型项目的开发以及多人团队的共建</li>
</ul>
<h4 id="成长期-模块化的雏形-iife-语法侧的优化" tabindex="-1"><a class="header-anchor" href="#成长期-模块化的雏形-iife-语法侧的优化" aria-hidden="true">#</a> 成长期： 模块化的雏形 - IIFE（语法侧的优化）</h4>
<h5 id="作用域的把控" tabindex="-1"><a class="header-anchor" href="#作用域的把控" aria-hidden="true">#</a> 作用域的把控</h5>
<p>栗子：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">// 定义一个全局变量</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token comment">// 代码块1</span>
  <span class="token keyword">const</span> <span class="token function-variable function">increase</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">++</span>count<span class="token punctuation">;</span>
  <span class="token comment">// 代码块2</span>
  <span class="token keyword">const</span> <span class="token function-variable function">reset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用函数块级作用域</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// ……</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>仅定义了一个函数，如果立即执行</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// ……</span>
  <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初步实现了一个最最最最简单的模块</p>
<p>尝试去定义一个最简单的模块</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> iifeModule <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">increase</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">++</span>count<span class="token punctuation">;</span>
    <span class="token function-variable function">reset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

iifeModule<span class="token punctuation">.</span><span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
iifeModule<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>追问：有额外依赖时，如何优化IIFE相关代码</strong></p>
<blockquote>
<p>优化1： 依赖其他模块的IIFE</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> iifeModule <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">dependencyModule1<span class="token punctuation">,</span> dependencyModule2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">increase</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">++</span>count<span class="token punctuation">;</span>
    <span class="token function-variable function">reset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>dependencyModule1<span class="token punctuation">,</span> dependencyModule2<span class="token punctuation">)</span><span class="token punctuation">;</span>
iifeModule<span class="token punctuation">.</span><span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
iifeModule<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试1：了解早期jquery的依赖处理以及模块加载方案吗？/ 了解传统IIFE是如何解决多方依赖的问题
答：IIFE加传参调配</strong></p>
<p>实际上，jquery等框架其实应用了revealing的写法：
揭示模式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> iifeModule <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">dependencyModule1<span class="token punctuation">,</span> dependencyModule2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">increase</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">++</span>count<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">reset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    increase<span class="token punctuation">,</span> reset
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>dependencyModule1<span class="token punctuation">,</span> dependencyModule2<span class="token punctuation">)</span><span class="token punctuation">;</span>
iifeModule<span class="token punctuation">.</span><span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
iifeModule<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="成熟期" tabindex="-1"><a class="header-anchor" href="#成熟期" aria-hidden="true">#</a> 成熟期：</h4>
<h5 id="cjs-commonjs" tabindex="-1"><a class="header-anchor" href="#cjs-commonjs" aria-hidden="true">#</a> CJS - Commonjs</h5>
<blockquote>
<p>node.js制定
特征：</p>
</blockquote>
<ul>
<li>通过module + exports 去对外暴露接口</li>
<li>通过require来调用其他模块</li>
</ul>
<p>模块组织方式
main.js 文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 引入部分</span>
<span class="token keyword">const</span> dependencyModule1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">/</span>dependencyModule1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> dependencyModule2 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">/</span>dependencyModule2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 处理部分</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">increase</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">++</span>count<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">reset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 做一些跟引入依赖相关事宜……</span>

<span class="token comment">// 暴露接口部分</span>
exports<span class="token punctuation">.</span>increase <span class="token operator">=</span> increase<span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>reset <span class="token operator">=</span> reset<span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  increase<span class="token punctuation">,</span> reset
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模块使用方式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">const</span> <span class="token punctuation">{</span> increase<span class="token punctuation">,</span> reset <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./main.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可能被问到的问题</strong></p>
<p>实际执行处理</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">thisValue<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> require<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dependencyModule1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">/</span>dependencyModule1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dependencyModule2 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">/</span>dependencyModule2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 业务逻辑……</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>thisValue<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> require<span class="token punctuation">,</span> module<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ul>
<li>优点：
CommonJS率先在服务端实现了，从框架层面解决依赖、全局变量污染的问题</li>
</ul>
</blockquote>
<ul>
<li>缺点：
主要针对了服务端的解决方案。对于异步拉取依赖的处理整合不是那么的友好。</li>
</ul>
<p>新的问题 —— 异步依赖</p>
<h4 id="amd规范" tabindex="-1"><a class="header-anchor" href="#amd规范" aria-hidden="true">#</a> AMD规范</h4>
<blockquote>
<p>通过异步加载 + 允许制定回调函数
经典实现框架是：require.js</p>
</blockquote>
<p>新增定义方式:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">// 通过define来定义一个模块，然后require进行加载</span>
  <span class="token comment">/*
  define
  params: 模块名，依赖模块，工厂方法
   */</span>
  <span class="token function">define</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">[</span>depends<span class="token punctuation">]</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span>module<span class="token punctuation">]</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模块定义方式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'amdModule'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'dependencyModule1'</span><span class="token punctuation">,</span> <span class="token string">'dependencyModule2'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">dependencyModule1<span class="token punctuation">,</span> dependencyModule2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 业务逻辑</span>
    <span class="token comment">// 处理部分</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">increase</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">++</span>count<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">reset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      increase<span class="token punctuation">,</span> reset
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入模块：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'amdModule'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token parameter">amdModule</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    amdModule<span class="token punctuation">.</span><span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题2: 如果在AMDmodule中想兼容已有代码，怎么办</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'amdModule'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token parameter">require</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 引入部分</span>
    <span class="token keyword">const</span> dependencyModule1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">/</span>dependencyModule1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dependencyModule2 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">/</span>dependencyModule2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 处理部分</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">increase</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">++</span>count<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">reset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 做一些跟引入依赖相关事宜……</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      increase<span class="token punctuation">,</span> reset
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题3: AMD中使用revealing</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'amdModule'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> <span class="token keyword">export</span><span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 引入部分</span>
    <span class="token keyword">const</span> dependencyModule1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">/</span>dependencyModule1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dependencyModule2 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">/</span>dependencyModule2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 处理部分</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">increase</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">++</span>count<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">reset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 做一些跟引入依赖相关事宜……</span>

    <span class="token keyword">export</span><span class="token punctuation">.</span>increase <span class="token operator">=</span> <span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">export</span><span class="token punctuation">.</span>reset <span class="token operator">=</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'amdModule'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token parameter">require</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> otherModule <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'amdModule'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    otherModule<span class="token punctuation">.</span><span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    otherModule<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题4：兼容AMD&amp;CJS/如何判断CJS和AMD</strong>
UMD的出现</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token punctuation">(</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'amdModule'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> <span class="token keyword">export</span><span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 引入部分</span>
    <span class="token keyword">const</span> dependencyModule1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">/</span>dependencyModule1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dependencyModule2 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">/</span>dependencyModule2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 处理部分</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">increase</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">++</span>count<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">reset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 做一些跟引入依赖相关事宜……</span>

    <span class="token keyword">export</span><span class="token punctuation">.</span>increase <span class="token operator">=</span> <span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">export</span><span class="token punctuation">.</span>reset <span class="token operator">=</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span>
    <span class="token comment">// 目标是一次性区分CommonJSorAMD</span>
    <span class="token keyword">typeof</span> module <span class="token operator">===</span> <span class="token string">"object"</span>
    <span class="token operator">&amp;&amp;</span> module<span class="token punctuation">.</span>exports
    <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> define <span class="token operator">!==</span> <span class="token string">"function"</span>
      <span class="token operator">?</span> <span class="token comment">// 是 CJS</span>
        <span class="token parameter">factory</span> <span class="token operator">=></span> module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span>require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module<span class="token punctuation">)</span>
      <span class="token operator">:</span> <span class="token comment">// 是AMD</span>
        define
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ul>
<li>优点: 适合在浏览器中加载异步模块，可以并行加载多个模块</li>
</ul>
</blockquote>
<ul>
<li>缺点：会有引入成本，不能按需加载</li>
</ul>
<h5 id="cmd规范" tabindex="-1"><a class="header-anchor" href="#cmd规范" aria-hidden="true">#</a> CMD规范</h5>
<blockquote>
<p>按需加载
主要应用的框架 sea.js</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'module'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> $ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'jquery'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// jquery相关逻辑</span>

    <span class="token keyword">let</span> dependencyModule1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./dependecyModule1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// dependencyModule1相关逻辑</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ul>
<li>优点：按需加载，依赖就近</li>
</ul>
</blockquote>
<ul>
<li>依赖于打包，加载逻辑存在于每个模块中，扩大模块体积</li>
</ul>
<p><strong>面试题5：AMD&amp;CMD区别</strong>
答：依赖就近，按需加载</p>
<h4 id="es6模块化" tabindex="-1"><a class="header-anchor" href="#es6模块化" aria-hidden="true">#</a> ES6模块化</h4>
<blockquote>
<p>走向新时代</p>
</blockquote>
<p>新增定义：
引入关键字 —— import
导出关键字 —— export</p>
<p>模块引入、导出和定义的地方：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">// 引入区域</span>
  <span class="token keyword">import</span> dependencyModule1 <span class="token keyword">from</span> <span class="token string">'./dependencyModule1.js'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> dependencyModule2 <span class="token keyword">from</span> <span class="token string">'./dependencyModule2.js'</span><span class="token punctuation">;</span>

  <span class="token comment">// 实现代码逻辑</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">increase</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">++</span>count<span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">reset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 导出区域</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    increase<span class="token punctuation">,</span> reset
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板引入的地方</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"module"</span> src<span class="token operator">=</span><span class="token string">"esModule.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>node中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">import</span> <span class="token punctuation">{</span> increase<span class="token punctuation">,</span> reset <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./esModule.mjs'</span><span class="token punctuation">;</span>
  <span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">import</span> esModule <span class="token keyword">from</span> <span class="token string">'./esModule.mjs'</span><span class="token punctuation">;</span>
  esModule<span class="token punctuation">.</span><span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  esModule<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试题6：动态模块</strong>
考察：export promise</p>
<p>ES11原生解决方案：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./esModule.js'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">dynamicEsModule</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    dynamicEsModule<span class="token punctuation">.</span><span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ul>
<li>优点（重要性）：通过一种最统一的形态整合了js的模块化</li>
</ul>
</blockquote>
<ul>
<li>缺点（局限性）：本质上还是运行时的依赖分析</li>
</ul>
<h3 id="解决模块化的新思路-前端工程化" tabindex="-1"><a class="header-anchor" href="#解决模块化的新思路-前端工程化" aria-hidden="true">#</a> 解决模块化的新思路 - 前端工程化</h3>
<h4 id="背景-1" tabindex="-1"><a class="header-anchor" href="#背景-1" aria-hidden="true">#</a> 背景</h4>
<p>根本问题 - 运行时进行依赖分析</p>
<blockquote>
<p>前端的模块化处理方案依赖于运行时分析</p>
</blockquote>
<p>解决方案：线下执行
grunt gulp webpack</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token operator">&lt;</span><span class="token operator">!</span>doctype html<span class="token operator">></span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"main.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>
      <span class="token comment">// 给构建工具一个标识位</span>
      require<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span>__FRAME_CONFIG__<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>
      <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'e'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 业务处理</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'c'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">export</span><span class="token punctuation">.</span>run <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// run</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="工程化实现" tabindex="-1"><a class="header-anchor" href="#工程化实现" aria-hidden="true">#</a> 工程化实现</h5>
<p>step1: 扫描依赖关系表：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'d'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>step2: 重新生成依赖数据模板</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token operator">&lt;</span><span class="token operator">!</span>doctype html<span class="token operator">></span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"main.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>
      <span class="token comment">// 构建工具生成数据</span>
      require<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string-property property">"deps"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'d'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>
      <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'e'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 业务处理</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>step3: 执行工具，采用模块化方案解决模块化处理依赖</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 执行代码</span>
    <span class="token keyword">export</span><span class="token punctuation">.</span><span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>优点：</p>
</blockquote>
<ol>
<li>构建时生成配置，运行时执行</li>
<li>最终转化成执行处理依赖</li>
<li>可以拓展</li>
</ol>
<h4 id="完全体-webpack为核心的工程化-mvvm框架组件化-设计模式" tabindex="-1"><a class="header-anchor" href="#完全体-webpack为核心的工程化-mvvm框架组件化-设计模式" aria-hidden="true">#</a> 完全体 webpack为核心的工程化 + mvvm框架组件化 + 设计模式</h4>
</div></template>
