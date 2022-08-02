<template><div><h1 id="一、webpack" tabindex="-1"><a class="header-anchor" href="#一、webpack" aria-hidden="true">#</a> 一、Webpack</h1>
<h2 id="_1、webpack中的module是指什么" tabindex="-1"><a class="header-anchor" href="#_1、webpack中的module是指什么" aria-hidden="true">#</a> 1、Webpack中的module是指什么?</h2>
<p>其实webpack中提到的module概念, 和咱们平时前端开发的module概念是一样的.</p>
<p>webpack 支持ESModule, CommonJS, AMD, Assets等.</p>
<p>简单说几个模块的引入和导出方式:</p>
<ol>
<li>ESM</li>
</ol>
<p>关键字 export 允许将 ESM 中的内容暴露给其他模块,
关键字 import 允许从其他模块获取引用到 ESM 中.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> aa <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./a.js'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> bb <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以设置 package.json 中的属性来显式设置文件模块类型。
在 package.json 中</p>
<ul>
<li>设置 &quot;type&quot;: &quot;module&quot; 会强制 package.json 下的所有文件使用 ECMAScript 模块。</li>
<li>设置 &quot;type&quot;: &quot;commonjs&quot; 将会强制使用 CommonJS 模块。</li>
</ul>
<ol start="2">
<li>CommonJS</li>
</ol>
<p>module.exports 允许将 CommonJS 中的内容暴露给其他模块,
require 允许从其他模块获取引用到 CommonJS 中.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    aa<span class="token punctuation">,</span>
    bb
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="所以webpack-modules-如何表达自己的各种依赖关系" tabindex="-1"><a class="header-anchor" href="#所以webpack-modules-如何表达自己的各种依赖关系" aria-hidden="true">#</a> 所以webpack modules 如何表达自己的各种依赖关系?</h3>
<ul>
<li>ESM import 语句</li>
<li>CommonJS require() 语句</li>
<li>AMD define 和 require 语句</li>
<li>css/sass/less 文件中的 @import 语句。</li>
<li>stylesheet url(...) 或者 HTML <img src=...> 文件中的图片链接。</li>
</ul>
<h3 id="那么问题又来了-我们常说的-chunk-和-bundle-的区别是什么" tabindex="-1"><a class="header-anchor" href="#那么问题又来了-我们常说的-chunk-和-bundle-的区别是什么" aria-hidden="true">#</a> 那么问题又来了, 我们常说的 chunk 和 bundle 的区别是什么?</h3>
<ol>
<li>Chunk</li>
</ol>
<p>Chunk是Webpack打包过程中Modules的集合，是打包过程中的概念。
Webpack的打包是从一个入口模块开始，入口模块引用其他模块，模块再引用模块。Webpack通过引用关系逐个打包模块，这些module就形成了一个Chunk。
当然如果有多个入口模块，可能会产出多条打包路径，每条路径都会形成一个Chunk。</p>
<ol start="2">
<li>Bundle</li>
</ol>
<p>Bundle是我们最终输出的一个或多个打包好的文件.</p>
<ol start="3">
<li>Chunk 和 Bundle 的关系?</li>
</ol>
<p>大多数情况下，一个Chunk会生产一个Bundle。比如咱们来简单写个项目试一下</p>
<p><strong>代码：project/webpack-run-demo</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"production"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">"./src/index.js"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"[name].js"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是当我们开启source-map后, chunk和bundle就不是一对一的关系了.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"production"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">"./src/index.js"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"[name].js"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">"source-map"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看一下webpack的输出, ChunkNames只有一个Index, 而输出了两个bundle. index.js, index.js.map.</p>
<p>所以可以有这样的一个总结：</p>
<p>Chunk是过程中的代码块，Bundle是打包结果输出的代码块, Chunk在构建完成就呈现为Bundle。</p>
<ol start="4">
<li>生成Chunk的几种方式</li>
</ol>
<ul>
<li>entry配置一个key, value为数组</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"production"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src/index.js"</span><span class="token punctuation">,</span> <span class="token string">"./src/add.js"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"[name].js"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到这种情况, 也只会产生一个chunk.</p>
<ul>
<li>entry配置多个key</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"production"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">"./src/index.js"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">common</span><span class="token operator">:</span> <span class="token string">"./src/common.js"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"[name].js"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到这种情况, 产生了common和index两个chunk, 配置的key也就会被用为chunkName.</p>
<p>而output中filename字段, 将被用为bundle的名称。</p>
<ul>
<li>Split Chunk</li>
</ul>
<p>咱们来改一下文件引用结构, 修改一下配置。</p>
<ol>
<li>add.js 和 multiply.js 都引用common.js</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// add.js</span>
<span class="token keyword">import</span> CommonFn <span class="token keyword">from</span> <span class="token string">'./c ommon.js'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">CommonFn</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// multiply.js</span>
<span class="token keyword">import</span> CommonFn <span class="token keyword">from</span> <span class="token string">'./common.js'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">CommonFn</span><span class="token punctuation">(</span>a <span class="token operator">*</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>安装lodash</li>
</ol>
<p><code v-pre>npm i lodash</code></p>
<ol start="3">
<li>修改index.js</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
    once
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'lodash'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Add <span class="token keyword">from</span> <span class="token string">'./add.js'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Multiply <span class="token keyword">from</span> <span class="token string">'./multiply.js'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> onceAdd <span class="token operator">=</span> <span class="token function">once</span><span class="token punctuation">(</span>Add<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> addRes <span class="token operator">=</span> <span class="token function">onceAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mulRes <span class="token operator">=</span> <span class="token function">Multiply</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>addRes<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mulRes<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>修改webpack.config.js</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">"./src/index.js"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">other</span><span class="token operator">:</span> <span class="token string">"./src/multiply.js"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"[name].js"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">runtimeChunk</span><span class="token operator">:</span> <span class="token string">"single"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">commons</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">"initial"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// 默认是20000, 这里为了演示生成commonChunks, 对最小体积不做限制</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">"initial"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"vendor"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>看一下这种配置会产生几个chunk?</li>
</ol>
<p>配置介绍： https://webpack.docschina.org/configuration/optimization/#optimizationruntimechunk
官方runtime解释：https://www.webpackjs.com/concepts/manifest/#runtime</p>
<ul>
<li>entry main</li>
<li>entry other</li>
<li>runtimeChunk: single</li>
<li>splitChunks commons</li>
<li>splitChunks vendor</li>
</ul>
<h2 id="_2、比较重要的一些概念" tabindex="-1"><a class="header-anchor" href="#_2、比较重要的一些概念" aria-hidden="true">#</a> 2、比较重要的一些概念</h2>
<ol>
<li>Compiler 对象包含了 Webpack 环境所有的的配置信息，包含 options，loaders，plugins 这些信息，这个对象在 Webpack 启动时候被实例化，它是全局唯一的，可以简单地把它理解为 Webpack 实例；</li>
<li>Compilation 对象包含了当前的模块资源、编译生成资源、变化的文件等。当 Webpack 以开发模式运行时，每当检测到一个文件变化，一次新的 Compilation 将被创建。Compilation 对象也提供了很多事件回调供插件做扩展。通过 Compilation 也能读取到 Compiler 对象。</li>
</ol>
<h3 id="plugin-和-loader-分别是做什么的-怎么工作的" tabindex="-1"><a class="header-anchor" href="#plugin-和-loader-分别是做什么的-怎么工作的" aria-hidden="true">#</a> Plugin 和 Loader 分别是做什么的? 怎么工作的?</h3>
<ol>
<li>Loader</li>
</ol>
<p>一句话描述：模块转换器，将非js模块转化为webpack能识别的js模块.</p>
<p>loader 让 webpack 能够去处理那些非 JavaScript 文件.
loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块,然后你就可以利用 webpack 的打包能力,对它们进行处理。
本质上,webpack loader 将所有类型的文件,转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。</p>
<ol start="2">
<li>Plugin</li>
</ol>
<p>一句话描述：扩展插件，在webpack运行的各个阶段，都会广播出去相对应的事件，插件可以监听到这些事件的发生，在特定的时机做相对应的事情</p>
<p>loader 被用于转换某些类型的模块,而插件则可以用于执行范围更广的任务。
插件的范围包括,从打包优化和压缩,一直到重新定义环境中的变量。插件接口功能极其强大,可以用来处理各种各样的任务。</p>
<p>在 webpack 运行的生命周期中会广播出各种事件，Plugin 就可以监听这些事件，在触发时通过 webpack 提供的 API 改变输出结果。
在插件中，可以拿到 Compile 和 Compilation 的引用对象，使用它们广播事件，这些事件可以被其他插件监听到，或者对他们做出一定修改，其他插件拿到的也是变化的对象。</p>
<h2 id="_3、能简单描述一下webpack的打包流程吗" tabindex="-1"><a class="header-anchor" href="#_3、能简单描述一下webpack的打包流程吗" aria-hidden="true">#</a> 3、能简单描述一下webpack的打包流程吗？</h2>
<ol>
<li>初始化参数：从配置文件和 Shell 语句中读取与合并参数,得出最终的参数。</li>
<li>开始编译：用上一步得到的参数初始化 Compiler 对象,加载所有配置的插件,执行对象的 run 方法开始执行编译。</li>
<li>确定入口：根据配置中的 entry 找出所有的入口文件。</li>
<li>编译模块：从入口文件出发,调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。</li>
<li>完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后,得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。</li>
<li>输出资源：根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk,再把每个 Chunk 转换成一个单独的文件加入到输出列表,这步是可以修改输出内容的最后机会。</li>
<li>输出完成：在确定好输出内容后,根据配置确定输出的路径和文件名,把文件内容写入到文件系统</li>
</ol>
<p>这么说可能还是有点迷糊, 咱们可以来一步一步的写个打包工具, 感受一下webpack的打包流程</p>
<p><strong>代码： project/mywebpack</strong></p>
<h1 id="二、promise-常见面试代码题-有时间的话可以讲一下" tabindex="-1"><a class="header-anchor" href="#二、promise-常见面试代码题-有时间的话可以讲一下" aria-hidden="true">#</a> 二、Promise 常见面试代码题（有时间的话可以讲一下）</h1>
<ol>
<li>
<p>实现Promise.allSelttled</p>
</li>
<li>
<p>Promise.limit的多种实现</p>
</li>
</ol>
</div></template>
