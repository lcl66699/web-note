<template><div><h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2>
<h3 id="对象是什么-为什么要面向对象" tabindex="-1"><a class="header-anchor" href="#对象是什么-为什么要面向对象" aria-hidden="true">#</a> 对象是什么？为什么要面向对象？</h3>
<h4 id="特点-面向对象-——-逻辑迁移更加灵活、代码复用性高、高度的模块化" tabindex="-1"><a class="header-anchor" href="#特点-面向对象-——-逻辑迁移更加灵活、代码复用性高、高度的模块化" aria-hidden="true">#</a> 特点： 面向对象 —— 逻辑迁移更加灵活、代码复用性高、高度的模块化</h4>
<hr>
<h4 id="对象的理解" tabindex="-1"><a class="header-anchor" href="#对象的理解" aria-hidden="true">#</a> 对象的理解</h4>
<ul>
<li>对象是对于单个物体的简单抽象</li>
<li>对象是一个容器，封装了属性 &amp; 方法
** 属性：对象的状态
** 方法：对象的行为</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 简单对象</span>
    <span class="token keyword">const</span> Course <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">teacher</span><span class="token operator">:</span> <span class="token string">'云隐'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">leader</span><span class="token operator">:</span> <span class="token string">'小可'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">startCourse</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">开始</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">课</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 函数对象</span>
    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>leader <span class="token operator">=</span> <span class="token string">'小可'</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">startCourse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">开始</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">课</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="构造函数-生成对象" tabindex="-1"><a class="header-anchor" href="#构造函数-生成对象" aria-hidden="true">#</a> 构造函数 - 生成对象</h2>
<h4 id="需要一个模板-表征了一类物体的共同特征-从而生成对象" tabindex="-1"><a class="header-anchor" href="#需要一个模板-表征了一类物体的共同特征-从而生成对象" aria-hidden="true">#</a> 需要一个模板 - 表征了一类物体的共同特征， 从而生成对象</h4>
<h4 id="类即对象模板" tabindex="-1"><a class="header-anchor" href="#类即对象模板" aria-hidden="true">#</a> 类即对象模板</h4>
<h4 id="js其实本质上并不是基于类-而是基于构造函数-原型链" tabindex="-1"><a class="header-anchor" href="#js其实本质上并不是基于类-而是基于构造函数-原型链" aria-hidden="true">#</a> js其实本质上并不是基于类，而是基于构造函数 + 原型链</h4>
<h4 id="constructor-prototype" tabindex="-1"><a class="header-anchor" href="#constructor-prototype" aria-hidden="true">#</a> constructor + prototype</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token parameter">teacher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> teacher<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>leader <span class="token operator">=</span> <span class="token string">'小可'</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">startCourse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">开始</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">课</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> course <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token string">'云隐'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="course-本质就是构造函数" tabindex="-1"><a class="header-anchor" href="#course-本质就是构造函数" aria-hidden="true">#</a> Course 本质就是构造函数</h4>
<ul>
<li>
<ol>
<li>函数体内使用的this，指向所要生成的实例</li>
</ol>
</li>
<li>
<ol start="2">
<li>生成对象用new来进行实例化</li>
</ol>
</li>
<li>
<ol start="3">
<li>可以做初始化传参</li>
</ol>
</li>
</ul>
<h4 id="追问" tabindex="-1"><a class="header-anchor" href="#追问" aria-hidden="true">#</a> 追问：</h4>
<h4 id="如果构造函数不初始化-可以使用吗-无法使用" tabindex="-1"><a class="header-anchor" href="#如果构造函数不初始化-可以使用吗-无法使用" aria-hidden="true">#</a> 如果构造函数不初始化，可以使用吗？ - 无法使用</h4>
<h4 id="如果项目中需要使用-通常-不被外界感知-如何解决" tabindex="-1"><a class="header-anchor" href="#如果项目中需要使用-通常-不被外界感知-如何解决" aria-hidden="true">#</a> 如果项目中需要使用，通常（不被外界感知）如何解决？</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> _isClass <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Course</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>_isClass<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>leader <span class="token operator">=</span> <span class="token string">'小可'</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">startCourse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">开始</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">课</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 使用方</span>
    <span class="token keyword">const</span> course <span class="token operator">=</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>启发：如果编写底层的api代码时，尽量做到不需要让外部感知内部类型</li>
</ul>
<h4 id="引发思考-new是什么-new的原理-new时候做了些什么" tabindex="-1"><a class="header-anchor" href="#引发思考-new是什么-new的原理-new时候做了些什么" aria-hidden="true">#</a> 引发思考: new是什么 / new的原理 / new时候做了些什么</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> course <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<ol>
<li>创建了一个空对象，作为返回的对象实例</li>
</ol>
</li>
<li>
<ol start="2">
<li>将生成空对象的原型对象指向了构造函数的prototype属性</li>
</ol>
</li>
<li>
<ol start="3">
<li>将当前实例对象赋给了内部this</li>
</ol>
</li>
<li>
<ol start="4">
<li>执行构造函数的初始化代码</li>
</ol>
</li>
</ul>
<h3 id="追问-实例属性影响-独立" tabindex="-1"><a class="header-anchor" href="#追问-实例属性影响-独立" aria-hidden="true">#</a> 追问：实例属性影响 - 独立</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token parameter">teacher<span class="token punctuation">,</span> leader</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> teacher<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>leader <span class="token operator">=</span> leader<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> course1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token string">'云隐'</span><span class="token punctuation">,</span> <span class="token string">'小可'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> course2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token string">'云隐'</span><span class="token punctuation">,</span> <span class="token string">'部部'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    course2<span class="token punctuation">.</span>leader <span class="token operator">=</span> <span class="token string">'aaa'</span><span class="token punctuation">;</span> <span class="token comment">// 不影响其他实例</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="constructor-是什么" tabindex="-1"><a class="header-anchor" href="#constructor-是什么" aria-hidden="true">#</a> constructor 是什么？</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token parameter">teacher<span class="token punctuation">,</span> leader</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> teacher<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>leader <span class="token operator">=</span> leader<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> course <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token string">'云隐'</span><span class="token punctuation">,</span> <span class="token string">'小可'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<ol>
<li>每个对象在创建时，会自动拥有一个构造函数属性constructor</li>
</ol>
</li>
<li>
<ol start="2">
<li>constructor继承自原型对象，指向了构造函数的引用</li>
</ol>
</li>
</ul>
<h4 id="追问-使用构造函数-没有问题么-会有什么性能上的问题" tabindex="-1"><a class="header-anchor" href="#追问-使用构造函数-没有问题么-会有什么性能上的问题" aria-hidden="true">#</a> 追问：使用构造函数 没有问题么 / 会有什么性能上的问题?</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>leader <span class="token operator">=</span> <span class="token string">'小可'</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">startCourse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">开始</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">课</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> course1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token string">'es6'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> course2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token string">'OOP'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 构造函数中的方法，会存在于每一个生成的实例里，重复的挂载其实是会导致资源浪费</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="原型对象" tabindex="-1"><a class="header-anchor" href="#原型对象" aria-hidden="true">#</a> 原型对象</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> course1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> course2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<ol>
<li>构造函数： 用来初始化创建对象的函数 - Course
** 自动给构造函数赋予一个属性prototype，该属性等于实例对象的原型对象</li>
</ol>
</li>
<li>
<ol start="2">
<li>实例对象：course1是实例对象，根据原型对象创建出来的实例
** 每个对象中都有一个__proto__
** 每个实例对象都有一个constructor
** constructor有继承而来，并指向当前的构造函数</li>
</ol>
</li>
<li>
<ol start="3">
<li>原型对象：Course.prototype</li>
</ol>
</li>
</ul>
<hr>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">Course</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>teacher <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> course1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> course2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 对上篇原型对象做优化</span>
    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>leader <span class="token operator">=</span> <span class="token string">'小可'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 方法挂载于prototype上</span>
    <span class="token class-name">Course</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">startCourse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">开始</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">课</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> course1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token string">'es6'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> course2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token string">'OOP'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="继承-2-js如何实现继承" tabindex="-1"><a class="header-anchor" href="#继承-2-js如何实现继承" aria-hidden="true">#</a> 继承(2. js如何实现继承？)</h2>
<h4 id="在原型对象的所有属性和方法-都能被实例所共享" tabindex="-1"><a class="header-anchor" href="#在原型对象的所有属性和方法-都能被实例所共享" aria-hidden="true">#</a> 在原型对象的所有属性和方法，都能被实例所共享</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// Game类</span>
    <span class="token keyword">function</span> <span class="token function">Game</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'lol'</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Game</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// LOL类</span>
    <span class="token keyword">function</span> <span class="token constant">LOL</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Game</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> <span class="token constant">LOL</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LOL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 本质：重写原型对象方式，将父对象的属性方法，作为子对象原型对象的属性和方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="追问-原型链继承有什么缺点" tabindex="-1"><a class="header-anchor" href="#追问-原型链继承有什么缺点" aria-hidden="true">#</a> 追问：原型链继承有什么缺点</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Game</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'lol'</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>skin <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'s'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Game</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// LOL类</span>
    <span class="token keyword">function</span> <span class="token constant">LOL</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Game</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> <span class="token constant">LOL</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> game1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LOL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> game2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LOL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    game1<span class="token punctuation">.</span>skin<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'ss'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<ol>
<li>父类属性一旦赋值给子类的原型属性，此时属性属于子类的共享属性了</li>
</ol>
</li>
<li>
<ol start="2">
<li>实例化子类时，无法向父类做传参</li>
</ol>
</li>
</ul>
<h3 id="解决方法-构造函数继承" tabindex="-1"><a class="header-anchor" href="#解决方法-构造函数继承" aria-hidden="true">#</a> 解决方法：构造函数继承</h3>
<h4 id="经典继承-在子类构造函数内部调用父类构造函数" tabindex="-1"><a class="header-anchor" href="#经典继承-在子类构造函数内部调用父类构造函数" aria-hidden="true">#</a> 经典继承：在子类构造函数内部调用父类构造函数</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Game</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'lol'</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>skin <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'s'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Game</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// LOL类</span>
    <span class="token keyword">function</span> <span class="token constant">LOL</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">Game</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> game3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LOL</span><span class="token punctuation">(</span><span class="token string">'arg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 解决了共享属性的问题 + 子向父传参问题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="追问-原型链上的共享方法无法被读取继承-如何解决" tabindex="-1"><a class="header-anchor" href="#追问-原型链上的共享方法无法被读取继承-如何解决" aria-hidden="true">#</a> 追问：原型链上的共享方法无法被读取继承，如何解决？</h3>
<h4 id="解决方案-组合继承" tabindex="-1"><a class="header-anchor" href="#解决方案-组合继承" aria-hidden="true">#</a> 解决方案：组合继承</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Game</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'lol'</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>skin <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'s'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Game</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// LOL类</span>
    <span class="token keyword">function</span> <span class="token constant">LOL</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">Game</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Game</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> <span class="token constant">LOL</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> game3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LOL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="追问-组合继承就没有缺点么-问题在于-无论何种场景-都会调用两次父类构造函数。" tabindex="-1"><a class="header-anchor" href="#追问-组合继承就没有缺点么-问题在于-无论何种场景-都会调用两次父类构造函数。" aria-hidden="true">#</a> 追问：组合继承就没有缺点么？问题在于：无论何种场景，都会调用两次父类构造函数。</h4>
<ul>
<li>
<ol>
<li>初始化子类原型时</li>
</ol>
</li>
<li>
<ol start="2">
<li>子类调用函数内部call父类的时候</li>
</ol>
</li>
</ul>
<h4 id="解决方案-寄生组合继承" tabindex="-1"><a class="header-anchor" href="#解决方案-寄生组合继承" aria-hidden="true">#</a> 解决方案： 寄生组合继承</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Game</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'lol'</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>skin <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'s'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Game</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// LOL类</span>
    <span class="token keyword">function</span> <span class="token constant">LOL</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">Game</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Game</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> <span class="token constant">LOL</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="提高-看起来完美解决了继承-但是如何实现多重继承" tabindex="-1"><a class="header-anchor" href="#提高-看起来完美解决了继承-但是如何实现多重继承" aria-hidden="true">#</a> 提高： 看起来完美解决了继承，但是如何实现多重继承？</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Game</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'lol'</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>skin <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'s'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Game</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">Store</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>shop <span class="token operator">=</span> <span class="token string">'steam'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Store</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getPlatform</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>shop<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token constant">LOL</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">Game</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">Store</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Game</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// LOL.prototype = Object.create(Store.prototype);</span>
    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token class-name">Store</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> <span class="token constant">LOL</span><span class="token punctuation">;</span>
    <span class="token comment">// LOL继承两类</span>
    <span class="token keyword">const</span> game3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LOL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
