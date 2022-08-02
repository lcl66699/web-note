<template><div><h2 id="class-助力js更面向对象-类" tabindex="-1"><a class="header-anchor" href="#class-助力js更面向对象-类" aria-hidden="true">#</a> class 助力js更面向对象 - 类</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 传统对象 - function</span>
    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token parameter">teacher<span class="token punctuation">,</span> course</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> teacher<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>course <span class="token operator">=</span> course<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Course</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getCourse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">teacher is:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>teacher<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, course: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>course<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> course <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token string">'云隐'</span><span class="token punctuation">,</span> <span class="token string">'ES6'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    course<span class="token punctuation">.</span><span class="token function">getCourse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Es6</span>
    <span class="token keyword">class</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
        <span class="token comment">// init 实例会默认执行</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">teacher<span class="token punctuation">,</span> course</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> teacher<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>course <span class="token operator">=</span> course<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 拓展方法</span>
        <span class="token function">getCourse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">teacher is:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>teacher<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, course: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>course<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> course <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token string">'云隐'</span><span class="token punctuation">,</span> <span class="token string">'ES6'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    course<span class="token punctuation">.</span><span class="token function">getCourse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="追问" tabindex="-1"><a class="header-anchor" href="#追问" aria-hidden="true">#</a> 追问</h3>
<h3 id="class的类型是" tabindex="-1"><a class="header-anchor" href="#class的类型是" aria-hidden="true">#</a> class的类型是？</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>typeOf Course<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="class的prototype" tabindex="-1"><a class="header-anchor" href="#class的prototype" aria-hidden="true">#</a> class的prototype</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Course</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 有区分，但本质类型相同</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="class-函数对象-属性" tabindex="-1"><a class="header-anchor" href="#class-函数对象-属性" aria-hidden="true">#</a> class &amp; 函数对象 属性</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>course<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'teacher'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="属性定义-构造器-顶层定义-两种定义方式" tabindex="-1"><a class="header-anchor" href="#属性定义-构造器-顶层定义-两种定义方式" aria-hidden="true">#</a> 属性定义 构造器 &amp; 顶层定义 两种定义方式</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">class</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
        <span class="token comment">// init 实例会默认执行</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">teacher<span class="token punctuation">,</span> course</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> teacher<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>course <span class="token operator">=</span> course<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 拓展方法</span>
        <span class="token function">getCourse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">teacher is:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>teacher<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, course: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>course<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">get</span> <span class="token function">teacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 留有空间</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>teacher<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">set</span> <span class="token function">teacher</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 留有空间</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 意义何在？</span>
    <span class="token comment">// 1. js如何建立只读变量</span>
    <span class="token keyword">class</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
        <span class="token comment">// init 实例会默认执行</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">teacher<span class="token punctuation">,</span> course</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_teacher <span class="token operator">=</span> teacher<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>course <span class="token operator">=</span> course<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 拓展方法</span>
        <span class="token function">getCourse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">teacher is:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>teacher<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, course: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>course<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">get</span> <span class="token function">teacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 留有空间</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_teacher<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 修改只读变量，会报错么 - 无法改变但是不会报错</span>

    <span class="token comment">// 2. js如何建立一个私有属性</span>
    <span class="token keyword">class</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">teacher<span class="token punctuation">,</span> course</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_teacher <span class="token operator">=</span> teacher<span class="token punctuation">;</span>

            <span class="token comment">// 在constructor作用域内定义一个局部变量</span>
            <span class="token keyword">let</span> _course <span class="token operator">=</span> <span class="token string">'es6'</span><span class="token punctuation">;</span>
            <span class="token comment">// 内部通过闭包的形式去暴露该变量</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getCourse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> _course<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">class</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
        #course <span class="token operator">=</span> <span class="token string">'es6'</span><span class="token punctuation">;</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">teacher<span class="token punctuation">,</span> course</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_teacher <span class="token operator">=</span> teacher<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">get</span> <span class="token function">course</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#course<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">set</span> <span class="token function">course</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>#course <span class="token operator">=</span> val<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 3. 封装核心 - 适配器模式</span>
    <span class="token comment">// 底层封装中台业务core</span>
    <span class="token keyword">class</span> <span class="token class-name">utils</span> <span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">core</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_main <span class="token operator">=</span> core<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> <span class="token string">'my-utils'</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_id <span class="token operator">=</span> <span class="token string">'zhaowa专有'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// fullName: {firstName: '', lastName: '', name: ''}</span>
        <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>_main<span class="token punctuation">.</span>fullName<span class="token punctuation">,</span>
                <span class="token operator">...</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">utils is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">get</span> <span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>_main<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_id
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// valid saftey</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态方法-直接挂载在类上的方法无需实例化获取" tabindex="-1"><a class="header-anchor" href="#静态方法-直接挂载在类上的方法无需实例化获取" aria-hidden="true">#</a> 静态方法 - 直接挂载在类上的方法无需实例化获取</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// ES5 </span>
    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ……</span>
    <span class="token punctuation">}</span>
    Course<span class="token punctuation">.</span><span class="token function-variable function">ring</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ……</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ES6</span>
    <span class="token keyword">class</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//……</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">static</span> <span class="token function">ring</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//……</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    Course<span class="token punctuation">.</span><span class="token function">ring</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 全局对象变量问题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// es5继承</span>
    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ……</span>
    <span class="token punctuation">}</span>
    Course<span class="token punctuation">.</span><span class="token function-variable function">ring</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ……</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Course</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">send</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ……</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">Course</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">'云隐'</span><span class="token punctuation">,</span> <span class="token string">'ES6'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// ……</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token class-name">Course</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>

    <span class="token comment">// es6</span>
    <span class="token keyword">class</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//……</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">static</span> <span class="token function">ring</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>    
    <span class="token punctuation">}</span>
    <span class="token comment">// => 工厂模式</span>
    <span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">'云隐'</span><span class="token punctuation">,</span> <span class="token string">'ES6'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
