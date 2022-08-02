<template><div><h2 id="const-常量标识" tabindex="-1"><a class="header-anchor" href="#const-常量标识" aria-hidden="true">#</a> const 常量标识</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">const</span> <span class="token constant">LIMIT</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    cosnt <span class="token constant">OBJ_MAP</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">'A'</span><span class="token punctuation">,</span>
        <span class="token constant">A</span><span class="token operator">:</span> <span class="token string">'a'</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 5 => VI</span>
    <span class="token comment">// VI => 5</span>
    <span class="token keyword">const</span> <span class="token constant">QUEUE</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-不允许重复声明赋值" tabindex="-1"><a class="header-anchor" href="#_1-不允许重复声明赋值" aria-hidden="true">#</a> 1. 不允许重复声明赋值</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 变量重新赋值</span>
<span class="token keyword">var</span> arg1 <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>
arg1 <span class="token operator">=</span> <span class="token string">'小可'</span><span class="token punctuation">;</span>

<span class="token comment">// 常量</span>
<span class="token comment">// ES5</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">'arg2'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'云隐'</span>，
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
arg2 <span class="token operator">=</span> <span class="token string">'小可'</span><span class="token punctuation">;</span>

<span class="token comment">// ES6</span>
<span class="token keyword">const</span> arg3 <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>
arg3 <span class="token operator">=</span> <span class="token string">'小可'</span><span class="token punctuation">;</span>

<span class="token comment">// const不允许重复声明</span>
<span class="token keyword">const</span> arg3 <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arg3 <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-块级作用域" tabindex="-1"><a class="header-anchor" href="#_2-块级作用域" aria-hidden="true">#</a> 2. 块级作用域</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> arg1 <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'arg1'</span><span class="token punctuation">,</span> arg1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> arg2 <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'arg2'</span><span class="token punctuation">,</span> arg2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 变量提升 + 块级作用域</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-无变量提升" tabindex="-1"><a class="header-anchor" href="#_3-无变量提升" aria-hidden="true">#</a> 3. 无变量提升</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> arg1 <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>

    <span class="token comment">// 相当于</span>
    <span class="token keyword">var</span> arg1<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    arg1 <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>

    <span class="token comment">// 无变量提升 - 先声明再使用</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> arg2 <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span> <span class="token comment">// not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 非全局作用域</span>

    <span class="token keyword">var</span> arg1 <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>arg1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// const不在window中</span>
    <span class="token keyword">const</span> arg1 <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>arg1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-dead-zone" tabindex="-1"><a class="header-anchor" href="#_4-dead-zone" aria-hidden="true">#</a> 4. dead zone</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> arg1 <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-let-or-const" tabindex="-1"><a class="header-anchor" href="#_5-let-or-const" aria-hidden="true">#</a> 5. let or const</h3>
<ul>
<li>引用型 const</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">teacher</span><span class="token operator">:</span> <span class="token string">'云隐'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">leader</span><span class="token operator">:</span> <span class="token string">'小可'</span>
    <span class="token punctuation">}</span>
    obj<span class="token punctuation">.</span>leader <span class="token operator">=</span> <span class="token string">'部部'</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'云隐'</span><span class="token punctuation">,</span> <span class="token string">'小可'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'aaaa'</span><span class="token punctuation">;</span>

    <span class="token comment">// 引用类型的原理 - 指向地址</span>
    <span class="token comment">// 追问 破局 - object.freeze()</span>
    object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">teacher</span><span class="token operator">:</span> <span class="token string">'云隐'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">leader</span><span class="token operator">:</span> <span class="token string">'小可'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">zhuawa</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'黄小杨'</span><span class="token punctuation">,</span> <span class="token string">'部部'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
     object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>
     obj2<span class="token punctuation">.</span>zhuawa<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>

    <span class="token comment">// freeze只能冻结根层，嵌套引用类型需要遍历递归</span>
    <span class="token comment">// 面试题目</span>
    <span class="token keyword">function</span> <span class="token function">deepFreeze</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 2. 确定主执行步骤</span>
        Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3. 逐级深入</span>
        <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// for in - hasOwnProperty</span>
            <span class="token keyword">let</span> innerObj <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
            
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> innerObj <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 1. 递归模式确定</span>
                <span class="token function">deepFreeze</span><span class="token punctuation">(</span>innerObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// lodash: clone deepclone equal deepequal</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
