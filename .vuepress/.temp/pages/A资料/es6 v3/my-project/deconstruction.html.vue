<template><div><h3 id="key解构技巧" tabindex="-1"><a class="header-anchor" href="#key解构技巧" aria-hidden="true">#</a> key解构技巧</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">const</span> zhaowa <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">teacher</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">leader</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'es6'</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 别名</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">teacher</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            name<span class="token punctuation">,</span>
            age
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        leader<span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> className
    <span class="token punctuation">}</span> <span class="token operator">=</span> zhaowa<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="追问结构使用场景" tabindex="-1"><a class="header-anchor" href="#追问结构使用场景" aria-hidden="true">#</a> 追问结构使用场景</h2>
<h3 id="形参结构" tabindex="-1"><a class="header-anchor" href="#形参结构" aria-hidden="true">#</a> 形参结构</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">each</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> each<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结合初始值" tabindex="-1"><a class="header-anchor" href="#结合初始值" aria-hidden="true">#</a> 结合初始值</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">const</span> course <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> teacher<span class="token punctuation">,</span> leader<span class="token punctuation">,</span> course <span class="token operator">=</span> <span class="token string">'zhaowa'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// …… </span>
    <span class="token punctuation">}</span>

    <span class="token function">course</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">teacher</span><span class="token operator">:</span> <span class="token string">'yy'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">leader</span><span class="token operator">:</span> <span class="token string">'小可'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">const</span> <span class="token function-variable function">getCourse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">teacher</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
            <span class="token literal-property property">leader</span><span class="token operator">:</span> <span class="token string">''</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> teacher<span class="token punctuation">,</span> leader <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCourse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量交换" tabindex="-1"><a class="header-anchor" href="#变量交换" aria-hidden="true">#</a> 变量交换</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>b<span class="token punctuation">,</span> a<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json处理" tabindex="-1"><a class="header-anchor" href="#json处理" aria-hidden="true">#</a> json处理</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token string">'{"teacher": "yy", "leader": "xk"}'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>
    teacher<span class="token punctuation">,</span>
    leader
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> ajax</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">const</span> <span class="token punctuation">{</span>
        code<span class="token punctuation">,</span>
        data<span class="token punctuation">,</span>
        msg
    <span class="token punctuation">}</span> <span class="token operator">=</span> response<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
