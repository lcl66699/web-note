<template><div><h1 id="公开课-01" tabindex="-1"><a class="header-anchor" href="#公开课-01" aria-hidden="true">#</a> 公开课 - 01</h1>
<ul>
<li>面试题分析</li>
<li>如何写出漂亮的简历</li>
<li>自由提问</li>
</ul>
<h2 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h2>
<blockquote>
<p>这里是部分字节跳动、百度、美团的面试题</p>
</blockquote>
<h3 id="编程题实战" tabindex="-1"><a class="header-anchor" href="#编程题实战" aria-hidden="true">#</a> 编程题实战</h3>
<ol>
<li>实现 <code v-pre>lodash</code> 中的 <code v-pre>get</code> 函数. 难度：🌟</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// get(data, 'a[3].b')</span>
<span class="token comment">// const obj = { a: { b: {c : ['hello zhuawa!']}}}</span>
<span class="token comment">// obj.a.b.c ?? 👈  不好！</span>

<span class="token comment">// obj?.a?.b?.c</span>
<span class="token comment">// _.get(obj, 'a.b.c', null);</span>

<span class="token keyword">const</span> <span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> path<span class="token punctuation">,</span> defaultValue <span class="token operator">=</span> <span class="token keyword">void</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 'a[3].b' -> 'a.3.b' / 'a.b.c'</span>
  <span class="token comment">// ?: 非捕获性分组</span>
  <span class="token keyword">const</span> paths <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\[(\d+)\]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">'.$1'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// paths => ['a', '3', 'b'];</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> data<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> path <span class="token keyword">of</span> paths<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// edge case data -> null </span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> defaultValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>实现 <code v-pre>add(1)(2)(3)</code> 难度：🌟</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token operator">+</span> c<span class="token punctuation">;</span>
<span class="token comment">// function add(a, b, c) { return a + b +c  }</span>
<span class="token comment">// 转为👇</span>
<span class="token comment">// newAdd(a)(b)(c) => xxx</span>

<span class="token comment">// bad case 暴力解法</span>
<span class="token comment">// function() { return (a) => { return (b) => { // c} } }</span>

<span class="token comment">// curry 玩儿的参数</span>
<span class="token comment">// 参数的收集 -> 函数执行</span>

<span class="token comment">// 1. 知道原来的函数是需要多少参数的  fn.length</span>
<span class="token comment">// 2. 每次都要返回一个新的函数</span>
<span class="token comment">// 3. 每次函数执行的时候，都要把参数收集起来 [...args]</span>
<span class="token comment">// 4. 终止条件：当收集的参数个数 (args.length === fn.length)</span>
<span class="token comment">//    fn.apply 🔥</span>


<span class="token comment">// curry 👈</span>
<span class="token keyword">const</span> <span class="token function-variable function">curry</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token operator">=></span> 
  <span class="token punctuation">(</span>
    <span class="token function-variable function">temp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span>
      <span class="token operator">=></span> args<span class="token punctuation">.</span>length <span class="token operator">===</span> fn<span class="token punctuation">.</span>length
        <span class="token operator">?</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">temp</span><span class="token punctuation">(</span><span class="token operator">...</span>arg<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

<span class="token comment">// homework: 不定参数实现</span>

<span class="token comment">// 思路：</span>
<span class="token comment">// 原函数三个参数的情况 'currAdd(a)(b)(c)'</span>
<span class="token comment">// 不定参数 - 不知道参数有多少个 ？ 🔥</span>
<span class="token comment">// 'currAdd(a)(b, c)(d)(e)()' 这样是不是就可以了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>实现 <code v-pre>async</code> 和 <code v-pre>await</code> 难度：🌟🌟</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="工程化问题实战" tabindex="-1"><a class="header-anchor" href="#工程化问题实战" aria-hidden="true">#</a> 工程化问题实战</h3>
<ol>
<li>如何优化 <code v-pre>node</code> 镜像制作 难度：🌟</li>
</ol>
<ul>
<li>DOCKER_BUILDKIT 查看 dockerfile instruction 耗时</li>
<li>FROM YOUR_OLD_DOCK 基于历史最新的业务镜像构建</li>
<li>COPY 等指令，充分利用 cache</li>
<li>优化 OS 大小，alpine</li>
<li>npm i --only=production 移除 devDependencies</li>
<li>抽出来放 CDN</li>
<li>...</li>
</ul>
<p>关注一下 devOps</p>
<ol start="2">
<li><code v-pre>webpack</code> 热更新原理 难度：🌟🌟</li>
</ol>
<blockquote>
<p>vite 之类的</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 *           内存文件系统
 *               |
 *              读写
 *               |
 *          webpack compile     - watch -      代码
 *               |                               |
 *                ----------------------------change
 *               |
 *            server(websocket) --> manifest(hash.hot-update.json / hash.hot-update.js) ｜ hash &amp; chunk
 *              |
 *              |
 *  Browser: hotDownloadManifest(拉 manifest)
 *              |
 *              | get hash chunkid
 *              |
 *           hotDownloadUpdateChunk(拉 chunkjs 文件)
 *              |
 *              |
 *           hotAddUpdateChunk(update the chunk)
 *              |
 *              |
 *           hotUpdateDownloaded
 */</span>

<span class="token comment">// homework： 思考如何让传统的 webpack hmr 更快？</span>
<span class="token comment">// 思路：</span>
<span class="token comment">// 1. 为什么慢？</span>
<span class="token comment">// 2. 跟模块模式有关联吗？ ESM</span>
<span class="token comment">// 3. 想想 vite？</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开放性问题实战" tabindex="-1"><a class="header-anchor" href="#开放性问题实战" aria-hidden="true">#</a> 开放性问题实战</h3>
<ol>
<li><code v-pre>obj.a.b.c</code> 和 <code v-pre>obj['a']['b']['c']</code> 哪一个性能更好？</li>
</ol>
<ul>
<li>AST</li>
<li>编译一下，汇编的角度去看</li>
<li>分析源码，V8 JerryScript...</li>
</ul>
<ol start="2">
<li>如何突破 <code v-pre>localStorage</code> 的大小限制？</li>
</ol>
<ul>
<li>同域 ，破绽：port</li>
</ul>
<blockquote>
<p>127.0.0.1:1000 -&gt; 127.0.0.1:1099</p>
</blockquote>
<h3 id="算法题实战" tabindex="-1"><a class="header-anchor" href="#算法题实战" aria-hidden="true">#</a> 算法题实战</h3>
<ol>
<li>最短编辑距离算法问题 难度：🪐</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 给出两个单词word1和word2，计算出将word1 转换为word2的最少操作次数。</span>

<span class="token comment">// 你总共三种操作方法：</span>

<span class="token comment">// 插入一个字符</span>
<span class="token comment">// 删除一个字符</span>
<span class="token comment">// 替换一个字符</span>

<span class="token comment">// 解答 👇</span>

<span class="token doc-comment comment">/**
 *  [
 *    [0, 1, 2],
 *    [1, x, x],
 *    [2, x, x]
 *  ]
 * */</span>

<span class="token comment">// bai  -  bay  => 1</span>
<span class="token keyword">const</span> <span class="token function-variable function">levenshtein</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">s1<span class="token punctuation">,</span> s2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> l1 <span class="token operator">=</span> s1<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> l2 <span class="token operator">=</span> s2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> matrix <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> l1<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// [[], []]</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> l2<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// [[0, 1, 2]]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>j <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">//  [[0, 1, 2], [1], [2]];</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 填写 xxxx</span>

        <span class="token comment">// 相同为 0  不同为 1</span>
        <span class="token keyword">let</span> cost <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s1<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!==</span> s2<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          cost <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 左上角顶点</span>
        <span class="token keyword">const</span> temp <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> cost<span class="token punctuation">;</span>
        <span class="token comment">// 和上，下，左上角，取最小</span>
        matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>temp<span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> matrix<span class="token punctuation">[</span>l1<span class="token punctuation">]</span><span class="token punctuation">[</span>l2<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// homework: 思考 `Levenshtein Distance` 算法和 `React` 千丝万缕的联系.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何写好个人简历" tabindex="-1"><a class="header-anchor" href="#如何写好个人简历" aria-hidden="true">#</a> 如何写好个人简历</h2>
<p>首先，基于经验的一些 <code v-pre>tips</code>:</p>
<ol>
<li>简历的标题一定要带上名字！！(比如：张三-本-4年-高级前端开发工程师.pdf)</li>
<li>强烈建议不要搞些花哨的网页版简历</li>
<li>简历最好不要超过 1 页，至多不超过 2 页</li>
<li>简历三大原则：清晰，简短，必要</li>
<li>简历不是一成不变，可针对 <code v-pre>JD</code> 定制，指哪儿打哪儿</li>
</ol>
<p><strong>对开发人员来说，简历的核心重点是突出你的能力</strong></p>
<p><strong>对开发人员来说，简历的核心重点是突出你的能力</strong></p>
<p><strong>对开发人员来说，简历的核心重点是突出你的能力</strong></p>
<h3 id="个人介绍部分" tabindex="-1"><a class="header-anchor" href="#个人介绍部分" aria-hidden="true">#</a> 个人介绍部分</h3>
<p>这一 <code v-pre>part</code> 没啥好说的，写清楚<strong>联系方式</strong>，<strong>意向工作地</strong>，<strong>岗位诉求</strong>，<strong>学校学历</strong> 就行，排版简单点，很多公司都有 <code v-pre>OCR</code> 提取关键信息，不要难为它们就行。</p>
<h3 id="个人技术部分" tabindex="-1"><a class="header-anchor" href="#个人技术部分" aria-hidden="true">#</a> 个人技术部分</h3>
<p>一般来说，我不介意大家写一个「个人技术」的列表，大部分都会给自己挖坑，当然确实是精通的同学当我没说。
如果非要写，切记以下内容不建议写上去：</p>
<ol>
<li>其实你不是很精深的知识领域，比如只是配置过 <code v-pre>webpack</code></li>
<li>常识性的知识技能不要写了，比如你写上去熟练掌握 <code v-pre>git</code> 操作，wtf?</li>
<li>过时已久的也不建议写了，比如你写一个熟练使用 <code v-pre>backbone</code></li>
</ol>
<p>注意以下措辞的区别：</p>
<ol>
<li>了解：表示你听说过这个概念，甚至了解与此概念有关的基本原理</li>
<li>熟悉：表示你通过 Demo 的形式实践过某个技术，或做过一两个与该技术有关的项目，但缺乏沉淀</li>
<li>熟练掌握：表示你在工业级环境下，通过数个项目的实践已经掌握了某种技术的核心原理，并能够灵活地应用在开发中</li>
<li>精通：表示你通过很多次的项目实践和潜心研究，已经对某种技术的原理和应用掌握到近乎尽善尽美的程度</li>
</ol>
<p>加分项：</p>
<ol>
<li>社区博客文章，高转发高点赞那种，加分</li>
<li><code v-pre>Github</code> 一片绿油油的，主导/参与维护一些社区知名项目，<code v-pre>PR</code> 内容都是逻辑代码级别的，不是文档</li>
<li>除前端常用技术栈，还掌握了一些硬核技能，比如 <code v-pre>rust</code> 开发 <code v-pre>wasm</code>，<code v-pre>cpp</code>，···</li>
</ol>
<h3 id="个人项目部分" tabindex="-1"><a class="header-anchor" href="#个人项目部分" aria-hidden="true">#</a> 个人项目部分</h3>
<p>对于大多数公司来说，招聘的开发都是做业务的。所以这部分是<strong>很重要很重要很重要</strong>的！</p>
<blockquote>
<p>严格说，这一 <code v-pre>part</code> 基本占你简历评分的 <code v-pre>60%</code> 以上</p>
</blockquote>
<p>基本按照 <code v-pre>STAR</code> 原则写就行。</p>
<p>bad case:</p>
<blockquote>
<p>我在该项目中完成了 XXX，YYY 需求，运用了 a，b，c 技术。</p>
</blockquote>
<p>good case:</p>
<blockquote>
<p>XXX 项目出现 XXX 问题，我作为 XXX，负责其中的 XXX 部分，我通过 XXX 方式（或技术方案）成功解决了该问题，使 XXX 提高了 XXX，XXX 增长了 XXX</p>
</blockquote>
<p>这当然基于事实的基础上也是有一些技巧的（阴险脸）</p>
<h3 id="一些消息" tabindex="-1"><a class="header-anchor" href="#一些消息" aria-hidden="true">#</a> 一些消息</h3>
<p>百度</p>
<ul>
<li>大部分（注意是大部分）部门加班不严重，之前 FEX 平均约 8 点左右能撤</li>
<li>现在应该是 16 薪了</li>
<li>女性领导占比比较多，女性开发多，对女性很友好的公司</li>
<li>技术氛围浓厚</li>
<li>9.30之前早餐免费，餐补，20:30之后宵夜免费</li>
<li>节假日福利，生日福利，团建（我之前的团队是出国团建，去了日本、泰国等）</li>
<li>研发话语权大</li>
<li>社保公积金打满，打车 9 点以后免费</li>
</ul>
<p>字节跳动</p>
<ul>
<li>房补 1500</li>
<li>餐标 120，一天三顿管够，开饭时间略坑</li>
<li>小福利不断，各种礼品啥的</li>
<li>年轻人多，氛围上比较活跃，积极，公司的态度就是 always day one 嘛</li>
<li>内推福利我记得有送 mini cooper</li>
<li>目前吸引的人才比较多，很多百度系，阿里系的人在，看团队，可能有点存在xx</li>
<li>产品，UI 话语权比较大</li>
<li>社保公积金打满，打车 10 点以后免费</li>
</ul>
<p>美团</p>
<ul>
<li>开水团</li>
<li>工作时间上除了一些特殊部门，比如优选，其实还好</li>
<li>社保公积金打满(北京)，打车 9.30 以后免费</li>
<li>公司市值高，绩效拿 S 的话，我记得是有人拿过 20 万的股票奖励的</li>
<li>平时的团建基本是看各个团队组织，但是经费不高</li>
</ul>
</div></template>
