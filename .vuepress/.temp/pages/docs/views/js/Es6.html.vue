<template><div><h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h1>
<p>ES6：指2015年6月发布的ES2015标准, 在谈及ES6的时候, 都会把ES2016、ES2017等标准的内容也带进去。</p>
<h3 id="cmascript-和-javascript-的关系" tabindex="-1"><a class="header-anchor" href="#cmascript-和-javascript-的关系" aria-hidden="true">#</a> CMAScript 和 JavaScript 的关系</h3>
<p>ECMAScript是JavaScript的规格，JavaScript是ECMAScript的一种实现，在日常场合，这两个词是可以互换的。</p>
<p>JavaScript的创造者Netscape公司，将JavaScript提交给国际标准化组织ECMA，希望这种语言能够成为国际标准，后来ECMA发布标准文件的第一版（ECMA-262），规定了浏览器脚本语言的标准，并将这种语言称为ECMAScript。</p>
<p>该标准从一开始就是针对JavaScript语言制定的，之所以不叫JavaScript，有两个原因：一是商标，Java是Sun公司的商标，根据授权协议，只有Netscape公司可以合法地使用JavaScript这个名字，且JavaScript本身也已经被Netscape公司注册为商标；二是想体现这门语言的制定者是ECMA，不是Netscape，有利于保证这门语言的开放性和中立性。</p>
<h3 id="语法提案的批准流程" tabindex="-1"><a class="header-anchor" href="#语法提案的批准流程" aria-hidden="true">#</a> 语法提案的批准流程</h3>
<p>任何人都可以向标准委员会（又称 TC39 委员会）提案，要求修改语言标准。
一种新的语法从提案到变成正式标准，需要经历五个阶段。每个阶段的变动都需要由 TC39 委员会批准。</p>
<ul>
<li>Stage 0 - Strawman（展示阶段）</li>
<li>Stage 1 - Proposal（征求意见阶段）</li>
<li>Stage 2 - Draft（草案阶段）</li>
<li>Stage 3 - Candidate（候选人阶段）</li>
<li>Stage 4 - Finished（定案阶段）</li>
</ul>
<p>一个提案只要能进入 Stage 2，就差不多肯定会包括在以后的正式标准里面</p>
<h2 id="babel转码器" tabindex="-1"><a class="header-anchor" href="#babel转码器" aria-hidden="true">#</a> Babel转码器</h2>
<p>报错 token SyntaxError: Unexpected token '=='
是解析的时候。。。</p>
<p>词法解析 语法解析</p>
<p>Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在现有环境执行。</p>
<p>安装 Babel</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev @babel/core
<span class="token function">npm</span> <span class="token function">install</span> --save-dev @babel/preset-env //最新转码规则
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置配置文件.babelrc</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"@babel/env"</span><span class="token punctuation">,</span>
      <span class="token string">"@babel/preset-react"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用api" tabindex="-1"><a class="header-anchor" href="#常用api" aria-hidden="true">#</a> 常用API</h2>
<ul>
<li>let&amp;&amp;const</li>
<li>箭头函数</li>
<li>class类</li>
<li>解构</li>
<li>数组操作 Array for of...</li>
<li>模板字符串</li>
<li>反射Reflect</li>
<li>代理Proxy</li>
</ul>
<h2 id="let-const" tabindex="-1"><a class="header-anchor" href="#let-const" aria-hidden="true">#</a> let &amp;&amp; const</h2>
<ol>
<li>const不允许重复声明赋值</li>
<li>块级作用域,不在window中，而var定义的全局变量会作为window对象属性存在，可通过window.访问</li>
<li>不存在变量提升，暂时性死区
<ul>
<li>要先声明再使用</li>
</ul>
</li>
</ol>
<h4 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> const</h4>
<p>ES5的时候定义常量</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">'arg'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'小明'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要先声明再使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//ReferenceError: Cannot access 'arg' before initialization</span>
<span class="token keyword">const</span> arg <span class="token operator">=</span> <span class="token string">'小米'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="let-or-const" tabindex="-1"><a class="header-anchor" href="#let-or-const" aria-hidden="true">#</a> let or const</h4>
<ul>
<li>引用型(指向地址) const</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token comment">//冻结</span>

arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'改变'</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//冻结了 改不了</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">question</span><span class="token operator">:</span> <span class="token string">'你回家吃饭吗'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">answerList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'不回家去你家吃啊'</span><span class="token punctuation">,</span> <span class="token string">'嗯？'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token comment">//冻结</span>

obj<span class="token punctuation">.</span>answerList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'回家'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//还是修改成了</span>

<span class="token comment">//freeze只能冻结根层，嵌套引用类型需要递归遍历</span>
<span class="token comment">//面试题目 实现全部冻结</span>
<span class="token keyword">function</span> <span class="token function">deepFreeze</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//冻结</span>
    <span class="token comment">//逐级遍历</span>
    <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> innerObj <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> innerObj <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//递归</span>
            <span class="token function">deepFreeze</span><span class="token punctuation">(</span>innerObj<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">deepFreeze</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值" aria-hidden="true">#</a> 解构赋值</h2>
<h3 id="数组的解构赋值" tabindex="-1"><a class="header-anchor" href="#数组的解构赋值" aria-hidden="true">#</a> 数组的解构赋值</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//嵌套解构</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>foo<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>bar<span class="token punctuation">]</span><span class="token punctuation">,</span> baz<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//解构赋值允许指定默认值。</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>foo <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
foo <span class="token comment">// true</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token string">'b'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// x='a', y='b'</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token string">'b'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// x='a', y='b'</span>

<span class="token keyword">var</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>m<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//解构不成功为undefind</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象的解构赋值" tabindex="-1"><a class="header-anchor" href="#对象的解构赋值" aria-hidden="true">#</a> 对象的解构赋值</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//对象的属性没有次序，变量必须与属性同名，才能取到正确的值。</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> bar<span class="token punctuation">,</span> foo <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'aaa'</span><span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">'bbb'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
foo <span class="token comment">// "aaa"</span>
bar <span class="token comment">// "bbb"</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> baz <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'aaa'</span><span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">'bbb'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
baz <span class="token comment">// undefined</span>

<span class="token comment">//默认值</span>
<span class="token keyword">var</span> <span class="token punctuation">{</span>x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串解构赋值" tabindex="-1"><a class="header-anchor" href="#字符串解构赋值" aria-hidden="true">#</a> 字符串解构赋值</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//字符串的解构赋值</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>
a <span class="token comment">// "h"b // "e"c // "l"d // "l"e // "o"</span>
<span class="token comment">//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">length</span> <span class="token operator">:</span> len<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>
len <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解构赋值使用场景" tabindex="-1"><a class="header-anchor" href="#解构赋值使用场景" aria-hidden="true">#</a> 解构赋值使用场景</h3>
<ol>
<li>一句代码，交换变量的值</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> x<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>提取 JSON 数据，ajax返回值等</li>
<li>函数参数的默认值</li>
<li>函数形参结构</li>
<li>遍历Map结构</li>
</ol>
<h3 id="基本原理" tabindex="-1"><a class="header-anchor" href="#基本原理" aria-hidden="true">#</a> 基本原理</h3>
<p>解构是ES6提供的语法糖，其实内在是针对可迭代对象的Iterator接口，通过遍历器按顺序获取对应的值进行赋值。
这里需要提前懂得ES6的两个概念： - Iterator - 可迭代对象</p>
<p>参考资料：
<a href="https://zhuanlan.zhihu.com/p/60207680" target="_blank" rel="noopener noreferrer">ES6之解构赋值及其原理<ExternalLinkIcon/></a></p>
<h2 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用箭头函数应注意什么" tabindex="-1"><a class="header-anchor" href="#使用箭头函数应注意什么" aria-hidden="true">#</a> 使用箭头函数应注意什么？</h4>
<ul>
<li>箭头函数并不会形成独立上下文,函数体内的this对象就是定义时所在的对象，而不是使用时所在的对象。普通函数里的this是使用的时候决定的</li>
<li>不可以当做构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。</li>
<li>不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以使用rest参数代替</li>
<li>不可以使用yield命令，因此箭头函数不能用作Genertor函数。</li>
</ul>
<h4 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h4>
<ol>
<li>dom操作cb,<code v-pre>tn.addEventListener('click', () =&gt; {}</code></li>
<li>类操作
<ol>
<li>箭头函数不能用作构造函数</li>
<li>箭头函数无法构造原型方法，没prototype属性</li>
</ol>
</li>
</ol>
<h2 id="class-类" tabindex="-1"><a class="header-anchor" href="#class-类" aria-hidden="true">#</a> class 类</h2>
<p>定义class</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//类声明</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token comment">//类表达式</span>
<span class="token keyword">const</span> Animal <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数和class区别" tabindex="-1"><a class="header-anchor" href="#函数和class区别" aria-hidden="true">#</a> 函数和class区别</h3>
<ul>
<li>函数声明可以提升，但是类不行。</li>
<li>函数受函数作用域限制，而类受块作用域限制</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">类的构成</p>
<p>包含构造函数方法、实例方法、获取函数get、设置函数set和静态类方法staic。</p>
</div>
<h3 id="constructor-构造函数" tabindex="-1"><a class="header-anchor" href="#constructor-构造函数" aria-hidden="true">#</a> constructor：构造函数</h3>
<p>在创建类的新实例的时候，会调用这个函数。</p>
<p>使用new 调用类的构造函数会执行如下操作</p>
<ol>
<li>在内存创建一个空对象</li>
<li>将这个对象的内部的prototype指针被赋值为构造函数的prototype属性</li>
<li>构造函数内部this指向新对象</li>
<li>执行构造函数内部代码，（给新对象添加属性）</li>
<li>如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的对象</li>
</ol>
<h3 id="静态类方法-static" tabindex="-1"><a class="header-anchor" href="#静态类方法-static" aria-hidden="true">#</a> 静态类方法 static</h3>
<p>用于执行不特定于实例的操作，也不要求存在类的实例，在使用中 static作为前缀关键字，
比如<code v-pre>Promise.resolve()</code>等。</p>
<ul>
<li>可以使用set和get函数</li>
</ul>
<h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3>
<p>通过extends关键字继承</p>
<p>使用super可以调用父类构造函数</p>
<h4 id="class的类型是" tabindex="-1"><a class="header-anchor" href="#class的类型是" aria-hidden="true">#</a> class的类型是？</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> Person<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="class的prototype和函数有区分-但和本质相同" tabindex="-1"><a class="header-anchor" href="#class的prototype和函数有区分-但和本质相同" aria-hidden="true">#</a> class的prototype和函数有区分，但和本质相同</h4>
<h2 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">汉字汉字</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">汉字汉字</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="面试题-实现模板字符串" tabindex="-1"><a class="header-anchor" href="#面试题-实现模板字符串" aria-hidden="true">#</a> 面试题:实现模板字符串</h3>
<p>实现一个 render(template, context) 方法，将 template 中的占位符用 context 填充。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> year <span class="token operator">=</span> <span class="token string">'2022'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> month <span class="token operator">=</span> <span class="token string">'1'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> day <span class="token operator">=</span> <span class="token string">'16'</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> template <span class="token operator">=</span> <span class="token string">'${year}-${month}-${day}'</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token punctuation">{</span> year<span class="token punctuation">,</span> month<span class="token punctuation">,</span> day <span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">//高阶函数（函数返回函数）</span>
<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">template</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> template<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\$\{(.*?)\}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">(</span><span class="token parameter">match<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=></span> context<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span> year<span class="token punctuation">,</span> month<span class="token punctuation">,</span> day <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token comment">// 2022-1-16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="迭代器iterator接口" tabindex="-1"><a class="header-anchor" href="#迭代器iterator接口" aria-hidden="true">#</a> 迭代器Iterator接口</h2>
<p>Iterator是一种接口，为各种不一样的数据解构提供统一的访问机制。任何数据解构只要有Iterator接口，就能通过遍历操作，依次按顺序处理数据结构内所有成员。ES6中的for of的语法相当于遍历器，会在遍历数据结构时，自动寻找Iterator接口。</p>
<p>Iterator作用：</p>
<ul>
<li>为各种数据解构提供统一的访问接口</li>
<li>使得数据解构能按次序排列处理 -</li>
<li>可以使用ES6最新命令 for of进行循环遍历</li>
</ul>
<p>原生具备 Iterator 接口的数据结构如下。</p>
<ul>
<li>Array</li>
<li>Map</li>
<li>Set</li>
<li>String</li>
<li>函数的 arguments 对象</li>
<li>NodeList 对象（伪数组）</li>
</ul>
<h4 id="可迭代对象" tabindex="-1"><a class="header-anchor" href="#可迭代对象" aria-hidden="true">#</a> 可迭代对象</h4>
<div class="custom-container tip"><p class="custom-container-title">协议</p>
<p>可迭代协议：对象必须实现iterator方法。即对象或其原型链上必须有一个名叫Symbol.iterator的属性。该属性的值为无参函数，函数返回迭代器协议。</p>
<p>迭代器协议：定义了标准的方式来产生一个有限或无限序列值。其要求必须实现一个next()方法，该方法返回对象有done(boolean)和value属性。
value表示具体的返回值，done 是布尔类型的，表示集合是否遍历完成或者是否后续还有可用数据，没有可用数据则返回 true，否则返回 false。</p>
</div>
<p>每个迭代器都表示对可迭代对象的一次性有序遍历，不同迭代器之间不影响</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">limit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>limit <span class="token operator">=</span> limit
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token keyword">let</span> limit <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>limit
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;=</span> limit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">value</span><span class="token operator">:</span> count<span class="token operator">++</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> myCounter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Counter</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> iterator <span class="token keyword">of</span> myCounter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//1 2 3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">注意</p>
<p>迭代器维护着一个指向可迭代对象的引用，因此迭代器会阻止垃圾回收程序回收可迭代对象</p>
</div>
<h3 id="提前终止迭代器" tabindex="-1"><a class="header-anchor" href="#提前终止迭代器" aria-hidden="true">#</a> 提前终止迭代器</h3>
<p>可选的return方法用于提前关闭</p>
<p>return()方法必须返回一个有效的InteratorResult对象，可以只返回<code v-pre>{done:true}</code>.
注意：数组的代码不能关闭，上面代码增加代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">return</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//终止了</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'终止了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>

<span class="token keyword">let</span> myCounter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Counter</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> iterator <span class="token keyword">of</span> myCounter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>iterator <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//1 2 3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generator生成器" tabindex="-1"><a class="header-anchor" href="#generator生成器" aria-hidden="true">#</a> Generator生成器</h2>
<p>Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同,使用生成器可以自定义迭代器和实现协程</p>
<p>形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。</p>
<div class="custom-container danger"><p class="custom-container-title">注意</p>
<p>箭头函数不能用来定义生成器函数</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> <span class="token string">'status one'</span>         <span class="token comment">// yield 表达式是暂停执行的标记  </span>
    <span class="token keyword">yield</span> <span class="token string">'hello world1'</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> aa <span class="token operator">=</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aa<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//产生生成器对象，处于暂停执行的状态 generator {&lt;suspended>}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aa<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{value: 'status one', done: false}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aa<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{value: 'hello world1', done: false}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aa<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{value: undefined, done: true}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="yield-表达式" tabindex="-1"><a class="header-anchor" href="#yield-表达式" aria-hidden="true">#</a> yield 表达式</h4>
<p>由于 Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。</p>
<p>遍历器对象的next方法的运行逻辑如下。</p>
<ul>
<li>遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。</li>
<li>下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。</li>
<li>如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> <span class="token function">http</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">yield</span> <span class="token function">getLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">getLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我是网络请求后的执行函数"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">http</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://39.106.5.96:3000/api"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"get"</span><span class="token punctuation">,</span>
        <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> gd <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gd<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gd<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="场景-1" tabindex="-1"><a class="header-anchor" href="#场景-1" aria-hidden="true">#</a> 场景</h3>
<ol>
<li>生成器对象作为可迭代对象  然后for of遍历</li>
<li>使用yield实现输入和输出</li>
<li>产生可迭代对象
<ol>
<li>用<code v-pre>yield*</code>让他能迭代一个可迭代的对象，从而一次产出一个值。eg：<code v-pre>   yield* [1, 2, 3]</code></li>
</ol>
</li>
<li>使用yield*实现递归算法</li>
</ol>
<p>生成器可作为默认迭代器</p>
<h3 id="提前终止生成器" tabindex="-1"><a class="header-anchor" href="#提前终止生成器" aria-hidden="true">#</a> 提前终止生成器</h3>
<p>return()方法强制生成器进入关闭状态，提供给return括号里的值 就是终止迭代器返回对象的值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> iterator <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">yield</span> iterator
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> g <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{value: 1, done: false}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">return</span><span class="token punctuation">(</span><span class="token number">88</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{value: 88, done: true}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{value: undefined, done: true}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串的新增方法" tabindex="-1"><a class="header-anchor" href="#字符串的新增方法" aria-hidden="true">#</a> 字符串的新增方法</h2>
<ul>
<li>includes()：返回布尔值，表示是否找到了参数字符串。</li>
<li>startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。</li>
<li>endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
这三个方法都支持第二个参数，表示开始搜索的位置。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">'Hello world!'</span><span class="token punctuation">;</span>
s<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'world'</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
s<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
s<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>repeatt()方法返回一个新字符串，表示将原字符串重复n次。(参数如果是小数，会被去掉取整。)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'x'</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// "xxx"</span>
<span class="token string">'hello'</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// "hellohello"</span>
<span class="token string">'na'</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// ""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>padStart()，padEnd()</li>
</ul>
<p>如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'x'</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">'ab'</span><span class="token punctuation">)</span> <span class="token comment">// 'ababx'</span>
<span class="token string">'x'</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">'ab'</span><span class="token punctuation">)</span> <span class="token comment">// 'abax'</span>
<span class="token string">'x'</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">'ab'</span><span class="token punctuation">)</span> <span class="token comment">// 'xabab'</span>
<span class="token string">'x'</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">'ab'</span><span class="token punctuation">)</span> <span class="token comment">// 'xaba'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>padStart()和padEnd()一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。</p>
<ul>
<li>trimStart()，trimEnd()
trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="数组扩展" tabindex="-1"><a class="header-anchor" href="#数组扩展" aria-hidden="true">#</a> 数组扩展</h2>
<ul>
<li>扩展运算符 ...</li>
<li>Array.from() : 将类数组转化为真实的数组</li>
<li>Array.of() : 用于将一组值，转换为数组。</li>
<li>数组实例的 copyWithin(),使用这个方法，会修改当前数组。
它接受三个参数。
<ul>
<li>target（必需）：从该位置开始替换数据。如果为负值，表示倒数。</li>
<li>start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。</li>
<li>end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。</li>
</ul>
</li>
<li>数组实例的 find() 和 findIndex()</li>
<li>fill方法使用给定值，填充一个数组。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token comment">// [7, 7, 7]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="对象扩展" tabindex="-1"><a class="header-anchor" href="#对象扩展" aria-hidden="true">#</a> 对象扩展</h2>
<ul>
<li>Object.is() 比较两个值是否相等<code v-pre>Object.is({}, {})  // true</code></li>
</ul>
<h2 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> proxy</h2>
<p>proxy在目标对象的外层搭建了一层拦截，外界对目标对象的某些操作，必须通过这层拦截</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。</p>
<h4 id="proxy的作用" tabindex="-1"><a class="header-anchor" href="#proxy的作用" aria-hidden="true">#</a> Proxy的作用</h4>
<p>对于代理模式 Proxy 的作用主要体现在三个方面</p>
<ul>
<li>拦截和监视外部对对象的访问</li>
<li>降低函数或类的复杂度</li>
<li>在复杂操作前对操作进行校验或对所需资源进行管理</li>
</ul>
</div></template>
