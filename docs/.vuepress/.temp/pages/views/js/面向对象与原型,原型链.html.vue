<template><h1 id="面向对象及原型和原型链" tabindex="-1"><a class="header-anchor" href="#面向对象及原型和原型链" aria-hidden="true">#</a> 面向对象及原型和原型链</h1>
<h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2>
<h3 id="对象是什么-为什么要面向对象" tabindex="-1"><a class="header-anchor" href="#对象是什么-为什么要面向对象" aria-hidden="true">#</a> 对象是什么？为什么要面向对象？</h3>
<p>面向对象编程是指一种思想。
面向对象 —— 逻辑迁移更加灵活、代码复用性高、高度的模块化</p>
<p>面向过程：分析解决问题需要的步骤，编写对应的函数实现每个步骤，依次调用函数。</p>
<h4 id="对象的理解" tabindex="-1"><a class="header-anchor" href="#对象的理解" aria-hidden="true">#</a> 对象的理解</h4>
<ul>
<li>对象是对于单个物体的简单抽象</li>
<li>对象是一个容器，封装了属性 &amp; 方法</li>
<li>属性：对象的状态</li>
<li>方法：对象的行为</li>
</ul>
<p>JS中的面向对象</p>
<h2 id="构造函数-生成对象" tabindex="-1"><a class="header-anchor" href="#构造函数-生成对象" aria-hidden="true">#</a> 构造函数 - 生成对象</h2>
<ul>
<li>需要一个模板 - 表征了一类物体的共同特征， 从而生成对象</li>
<li>类即对象模板</li>
<li>js其实本质上并不是基于类，而是基于构造函数 + 原型链</li>
<li>constructor + prototype</li>
<li>优点：改变某个对象的属性和方法，不会影响到其他对象</li>
<li><strong>缺点</strong>：构造函数中的方法，会存在于每一个生成的实例里，重复的挂载其实是会导致资源浪费，实例化的时候，通过 this 添加的属性和方法都会在内存中复制一份，会造成内存的浪费。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token parameter">teacher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> teacher<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">startCourse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">开始</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">课</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> course <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token string">'老师'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="course-本质就是构造函数" tabindex="-1"><a class="header-anchor" href="#course-本质就是构造函数" aria-hidden="true">#</a> Course 本质就是构造函数</h4>
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
<h3 id="追问" tabindex="-1"><a class="header-anchor" href="#追问" aria-hidden="true">#</a> 追问：</h3>
<h4 id="如果构造函数不初始化-可以使用吗" tabindex="-1"><a class="header-anchor" href="#如果构造函数不初始化-可以使用吗" aria-hidden="true">#</a> 如果构造函数不初始化，可以使用吗？</h4>
<p>无法使用</p>
<h4 id="如果项目中需要使用-通常-不被外界感知-如何解决" tabindex="-1"><a class="header-anchor" href="#如果项目中需要使用-通常-不被外界感知-如何解决" aria-hidden="true">#</a> 如果项目中需要使用，通常（不被外界感知）如何解决？</h4>
<p>如果是类，可用静态属性。|| 单例模式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> _isClass <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Course</span><span class="token punctuation">;</span><span class="token comment">//是否是一个类</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> Course<span class="token punctuation">,</span> _isClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>_isClass<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//生成一个实例</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>leader <span class="token operator">=</span> <span class="token string">'小可'</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">startCourse</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">开始</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">课</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 使用方</span>
    <span class="token keyword">const</span> course <span class="token operator">=</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>course<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul>
<li>启发：如果编写底层的api代码时，尽量做到不需要让外部感知内部类型,外部可以直接调用</li>
</ul>
<h2 id="new的时候做了什么" tabindex="-1"><a class="header-anchor" href="#new的时候做了什么" aria-hidden="true">#</a> new的时候做了什么</h2>
<ul>
<li><code> function Course() {};</code></li>
<li><code> const course = new Course();</code></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
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
<li>将构造函数内部的this指向这个新对象</li>
</ol>
</li>
<li>
<ol start="4">
<li>执行构造函数的初始化代码</li>
</ol>
</li>
<li>
<ol start="5">
<li>如果构造函数返回非空对象，则返回该对象，否则返回刚创建的对象</li>
</ol>
</li>
</ul>
</div>
<h3 id="追问-实例属性影响吗" tabindex="-1"><a class="header-anchor" href="#追问-实例属性影响吗" aria-hidden="true">#</a> 追问：实例属性影响吗</h3>
<p>-不影响 他们都是独立的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token parameter">teacher<span class="token punctuation">,</span> leader</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> teacher<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>leader <span class="token operator">=</span> leader<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> course1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token string">'云隐'</span><span class="token punctuation">,</span> <span class="token string">'小可'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> course2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token string">'云隐'</span><span class="token punctuation">,</span> <span class="token string">'部部'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    course2<span class="token punctuation">.</span>leader <span class="token operator">=</span> <span class="token string">'aaa'</span><span class="token punctuation">;</span> <span class="token comment">// 不影响其他实例</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="constructor-是什么" tabindex="-1"><a class="header-anchor" href="#constructor-是什么" aria-hidden="true">#</a> constructor 是什么？</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token parameter">teacher<span class="token punctuation">,</span> leader</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> teacher<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>leader <span class="token operator">=</span> leader<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> course <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token string">'云隐'</span><span class="token punctuation">,</span> <span class="token string">'小可'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
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
<p>构造函数中的方法，会存在于每一个生成的实例里，重复的挂载其实是会导致资源浪费</p>
<h2 id="原型对象" tabindex="-1"><a class="header-anchor" href="#原型对象" aria-hidden="true">#</a> 原型对象</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> course1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> course2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>course1<span class="token punctuation">.</span>__proto__<span class="token punctuation">,</span> <span class="token class-name">Course</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>
<ol>
<li>构造函数： 用来初始化创建对象的函数 - Course</li>
</ol>
</li>
</ul>
<p>** 自动给构造函数赋予一个属性prototype，该属性等于实例对象的原型对象</p>
<ul>
<li>
<ol start="2">
<li>实例对象：course1是实例对象，根据原型对象创建出来的实例</li>
</ol>
</li>
<li>
<p>每个对象中都有一个__proto__</p>
</li>
<li>
<p>每个实例对象都有一个constructor</p>
</li>
<li>
<p>constructor有继承而来，并指向当前的构造函数</p>
</li>
<li>
<ol start="3">
<li>原型对象：Course.prototype</li>
</ol>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">查找原型对象</p>
<ul>
<li><code>__proto__</code>：实例上的指针，指向其构造函数的原型对象</li>
<li>Object.getPrototypeOf：获取对象上的__proto__属性</li>
<li>isPrototypeOf：是否是某个实例对象的原型对象</li>
<li>prototype：构造函数属性，指向原型对象，原型对象上有constructor属性，指向构造函数</li>
<li>原型链都会终止于Object的原型对象，Object原型的原型是null</li>
</ul>
</div>
<h4 id="原型继承" tabindex="-1"><a class="header-anchor" href="#原型继承" aria-hidden="true">#</a> 原型继承</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">Course</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>teacher <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> course1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> course2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 对上篇原型对象做优化，挂原型上，原型继承</span>
    <span class="token keyword">function</span> <span class="token function">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> <span class="token string">'云隐'</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>leader <span class="token operator">=</span> <span class="token string">'小可'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 方法挂载于prototype上,这样在实例之后startCourse不会被重复挂载。</span>
    <span class="token class-name">Course</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">startCourse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">开始</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">课</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> course1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token string">'es6'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> course2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token string">'OOP'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><hr>
<h2 id="js继承" tabindex="-1"><a class="header-anchor" href="#js继承" aria-hidden="true">#</a> JS继承</h2>
<h3 id="原型链继承" tabindex="-1"><a class="header-anchor" href="#原型链继承" aria-hidden="true">#</a> 原型链继承</h3>
<h5 id="在原型对象的所有属性和方法-都能被实例所共享" tabindex="-1"><a class="header-anchor" href="#在原型对象的所有属性和方法-都能被实例所共享" aria-hidden="true">#</a> 在原型对象的所有属性和方法，都能被实例所共享</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Game</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'lol'</span>
<span class="token punctuation">}</span>
<span class="token class-name">Game</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
<span class="token punctuation">}</span>

<span class="token comment">//新的lol类</span>
<span class="token keyword">function</span> <span class="token constant">LOL</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Game</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">///子对象原型对象指向父对象实例，完成继承</span>
<span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> <span class="token constant">LOL</span><span class="token comment">//把constructor改过来 他理应指向自己的构造函数</span>

<span class="token keyword">var</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LOL</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//继承成功</span>
<span class="token comment">// 本质：重写原型对象方式，将父对象的属性方法，作为子对象原型对象的属性和方法</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="原型链继承有什么缺点" tabindex="-1"><a class="header-anchor" href="#原型链继承有什么缺点" aria-hidden="true">#</a> 原型链继承有什么缺点?</h4>
<div class="custom-container warning"><p class="custom-container-title">缺点</p>
<ul>
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
</div>
<h3 id="构造函数继承" tabindex="-1"><a class="header-anchor" href="#构造函数继承" aria-hidden="true">#</a> 构造函数继承</h3>
<h4 id="经典继承-在子类构造函数内部调用父类构造函数" tabindex="-1"><a class="header-anchor" href="#经典继承-在子类构造函数内部调用父类构造函数" aria-hidden="true">#</a> 经典继承：在子类构造函数内部调用父类构造函数</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Game</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'lol'</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>skin <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'s'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Game</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// LOL类</span>
    <span class="token keyword">function</span> <span class="token constant">LOL</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">Game</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">///子类构造函数调用父类构造函数</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> game3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LOL</span><span class="token punctuation">(</span><span class="token string">'arg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 解决了共享属性的问题 + 子向父传参问题</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>game3<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//LOL {name: 'lol', skin: Array(1)}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="隐含的问题" tabindex="-1"><a class="header-anchor" href="#隐含的问题" aria-hidden="true">#</a> 隐含的问题</h4>
<ul>
<li>原型链上的共享方法无法被读取继承，如何解决？
<ul>
<li>属性或者方法想被继承的话，只能在构造函数中定义。</li>
<li>引申出组合继承</li>
</ul>
</li>
</ul>
<h3 id="组合继承" tabindex="-1"><a class="header-anchor" href="#组合继承" aria-hidden="true">#</a> 组合继承</h3>
<p>综合了原型链继承和构造函数继承。</p>
<p>使用原型链继承原型上的属性和方法，通过构造函数继承继承实例属性。
既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性。</p>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="追问-组合继承就没有缺点么-问题在于-无论何种场景-都会调用两次父类构造函数。" tabindex="-1"><a class="header-anchor" href="#追问-组合继承就没有缺点么-问题在于-无论何种场景-都会调用两次父类构造函数。" aria-hidden="true">#</a> 追问：组合继承就没有缺点么？问题在于：无论何种场景，都会调用两次父类构造函数。</h4>
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
<h3 id="寄生组合继承" tabindex="-1"><a class="header-anchor" href="#寄生组合继承" aria-hidden="true">#</a> 寄生组合继承</h3>
<p>组合继承的优化，减少一次构造函数执行。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Game</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'lol'</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>skin <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'s'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Game</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// LOL类</span>
<span class="token keyword">function</span> <span class="token constant">LOL</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Game</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//其实可以通过原型的方式读取，通过Object.create创建完整的对象，绕开new </span>
<span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Game</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> <span class="token constant">LOL</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="但是如何实现多重继承" tabindex="-1"><a class="header-anchor" href="#但是如何实现多重继承" aria-hidden="true">#</a> 但是如何实现多重继承？</h4>
<p>通过<code>Object.assign(LOL.prototype, Store.prototype)</code>;</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Game</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'lol'</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>skin <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'s'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Game</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Store</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>shop <span class="token operator">=</span> <span class="token string">'steam'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Store</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getPlatform</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>shop<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token constant">LOL</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Game</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">Store</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Game</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//组合寄生</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token class-name">Store</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//两位父亲都得有</span>
<span class="token class-name">LOL</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> <span class="token constant">LOL</span><span class="token punctuation">;</span>

<span class="token comment">// LOL继承两类</span>
<span class="token keyword">const</span> game3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LOL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="class继承" tabindex="-1"><a class="header-anchor" href="#class继承" aria-hidden="true">#</a> class继承</h3>
<p>通过extends关键字继承，在初始化时super调用父类</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//通过类继承</span>
<span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>
