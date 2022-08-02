<template><div><h3 id="js函数式编程" tabindex="-1"><a class="header-anchor" href="#js函数式编程" aria-hidden="true">#</a> JS函数式编程</h3>
<h5 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h5>
<ol>
<li>Vue3 React16.8 全面化函数式的推动</li>
<li>函数式编程可以使得代码单元相对更加独立 - tree shaking过程更顺畅，更方便做UT</li>
<li>减少了对this的依赖，减轻了开发人员对于指向问题的困惑</li>
<li>js天生友好函数式：ramda、loadsh</li>
</ol>
<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4>
<blockquote>
<ol>
<li>一种抽象运算过程</li>
</ol>
</blockquote>
<ol start="2">
<li>函数式的函数并非对于过程运算，函数的映射</li>
<li>幂等 - 相同的输入始终得到相同的输出</li>
</ol>
<h5 id="纯函数" tabindex="-1"><a class="header-anchor" href="#纯函数" aria-hidden="true">#</a> 纯函数</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3]</span>
arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3]</span>

arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3]</span>
arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [4, 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于系统的改造</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 不纯的</span>
<span class="token keyword">let</span> min <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">limit</span> <span class="token operator">=</span> <span class="token parameter">age</span> <span class="token operator">=></span> age <span class="token operator">></span> min<span class="token punctuation">;</span>

<span class="token comment">// 纯纯的</span>
<span class="token keyword">let</span> <span class="token function-variable function">limit</span> <span class="token operator">=</span> <span class="token parameter">age</span> <span class="token operator">=></span> age <span class="token operator">></span> <span class="token number">18</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于大型系统来说，对于外部状态的依赖，会大大的提高系统复杂性</p>
<ul>
<li>问题：
18被硬编码到了函数内部的，造成了功能拓展的局限</li>
</ul>
<h4 id="高阶函数hoc" tabindex="-1"><a class="header-anchor" href="#高阶函数hoc" aria-hidden="true">#</a> 高阶函数HOC</h4>
<p>定义：</p>
<blockquote>
<ol>
<li>函数作为参数被传递到另一个函数中</li>
</ol>
</blockquote>
<ol start="2">
<li>函数作为返回值被另外一个函数返回</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token parameter">arg</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> outer <span class="token operator">=</span> <span class="token string">"outer"</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token function-variable function">innerFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>outer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> innerFn<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> closure <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 闭包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数柯里化" tabindex="-1"><a class="header-anchor" href="#函数柯里化" aria-hidden="true">#</a> 函数柯里化</h4>
<blockquote>
<p>传递给函数一部分参数用于功能调用，让他返回一个函数去处理剩下的参数</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">let</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>

    <span class="token comment">// 柯里化后</span>
    <span class="token keyword">let</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token parameter">y</span> <span class="token operator">=></span> x <span class="token operator">+</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> add2 <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> add200 <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">add2</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2 + 2 add(2)(2)</span>
    <span class="token function">add200</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 200 + 50</span>

    <span class="token comment">// 回到上面的limit， 纯函数化</span>
    <span class="token keyword">let</span> <span class="token function-variable function">limit</span> <span class="token operator">=</span> <span class="token parameter">min</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token parameter">age</span> <span class="token operator">=></span> age <span class="token operator">></span> min<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> limit18 <span class="token operator">=</span> <span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">limit18</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>是一种预加载方式</p>
</blockquote>
<ul>
<li>问题
包心菜代码的产生h(g(f(x)));</li>
</ul>
<h4 id="组合" tabindex="-1"><a class="header-anchor" href="#组合" aria-hidden="true">#</a> 组合</h4>
<blockquote>
<p>通过更优雅的方式实现纯函数的解耦</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">compose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">f<span class="token punctuation">,</span> g</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token function-variable function">add1</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">mul5</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token function">compose</span><span class="token punctuation">(</span>mul5<span class="token punctuation">,</span> add1<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 15</span>

<span class="token comment">// 面试题 - 数组长度未知的情况下，拿到最后一项</span>
<span class="token keyword">let</span> <span class="token function-variable function">first</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> last <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span> reverse<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">last</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
