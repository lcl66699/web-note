<template><div><h3 id="垃圾回收-or-内存泄露" tabindex="-1"><a class="header-anchor" href="#垃圾回收-or-内存泄露" aria-hidden="true">#</a> 垃圾回收 or 内存泄露</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 1. 全局变量的使用导致无法被销毁】</span>
    <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        barA <span class="token operator">=</span> <span class="token string">'a'</span><span class="token punctuation">;</span> <span class="token comment">// 无声明写法，上升为全局变量 === window.barA</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>barB <span class="token operator">=</span> <span class="token string">'b'</span><span class="token punctuation">;</span> <span class="token comment">// 全局变量 === window.barB</span>
        <span class="token keyword">return</span> barA <span class="token operator">+</span> barB<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// barA &amp; barB依然驻存</span>

    <span class="token comment">// 2. 定时器的存在</span>
    <span class="token keyword">var</span> ajaxData <span class="token operator">=</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// dom操作</span>
        <span class="token comment">// 使用了ajaxData</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ajaxData在，定时器也会一直常驻</span>

    <span class="token comment">// 3. 闭包</span>
    <span class="token keyword">function</span> <span class="token function">makeAdder</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> add5 <span class="token operator">=</span> <span class="token function">makeAdder</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add5</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5 + 2 + 1 = 8</span>
    <span class="token comment">// 变量z常驻</span>

    <span class="token comment">// 4. dom操作</span>
    <span class="token comment">// 5. 时间操作</span>
    <span class="token comment">// 放入数组中，数组执行之后，依然存在引用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方案-及时清除引用-dom、闭包、定时器-减少不必要的全局变量-开启严格模式-等" tabindex="-1"><a class="header-anchor" href="#方案-及时清除引用-dom、闭包、定时器-减少不必要的全局变量-开启严格模式-等" aria-hidden="true">#</a> 方案： 及时清除引用（dom、闭包、定时器）；减少不必要的全局变量（开启严格模式）等</h4>
</div></template>
