<template><div><h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1>
<div class="custom-container tip"><p class="custom-container-title">基本概念</p>
<ul>
<li>entry :入口 webpack执行第一步从entry开始.可抽象成输入</li>
<li>Moudule: 模块,在webpack中一切皆模块,一个模块对应一个文件,webpack会从配置的entry开始,递归找出所有依赖的模块</li>
<li>chunk:代码块,一个chunk由多个模块组成,用于代码的合并和分割</li>
<li>loader:模块转换器,用于讲模块的原内容按照需求转换新内容</li>
<li>plugin:扩展插件,在webpack构建流程中的特定时机会广播对应的事件,插件可以监听这些事件的发生,在特定的时机去做对应的事情</li>
</ul>
</div>
<h2 id="webpack-基础" tabindex="-1"><a class="header-anchor" href="#webpack-基础" aria-hidden="true">#</a> Webpack 基础</h2>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli -D <span class="token comment"># 安装到本地依赖</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="经典问题" tabindex="-1"><a class="header-anchor" href="#经典问题" aria-hidden="true">#</a> 经典问题</h2>
<h3 id="webpack运行流程" tabindex="-1"><a class="header-anchor" href="#webpack运行流程" aria-hidden="true">#</a> webpack运行流程</h3>
<ol>
<li>初始化参数：从配置文件和 Shell 语句中读取与合并参数,得出最终的参数。</li>
<li>开始编译：用上一步得到的参数初始化 Compiler 对象,加载所有配置的插件,执行对象的 run 方法开始执行编译。</li>
<li>确定入口：根据配置中的 entry 找出所有的入口文件。</li>
<li>编译模块：从入口文件出发,调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。</li>
<li>完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后,得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。</li>
<li>输出资源：根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk,再把每个 Chunk 转换成一个单独的文件加入到输出列表,这是可以修改输出内容的最后机会。</li>
<li>输出完成：在确定好输出内容后,根据配置确定输出的路径和文件名,把文件内容写入到文件系统</li>
</ol>
<p>在以上过程中，webpack会在特定的时间点广播特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用webpack提供的API改变webpack的运行结果。</p>
<h3 id="compiler和compilation" tabindex="-1"><a class="header-anchor" href="#compiler和compilation" aria-hidden="true">#</a> compiler和compilation</h3>
<p>compiler 对象包含了webpack环境的所有的配置信息，包含options，loaders，plugins等信息，负责文件监听和启动编译，这个对象在webpack启动的时候被实例化，全局只有一个compiler实例。</p>
<p>compilation 对象包含了当前模块资源，编译生成资源，变化的文件等。
compilation当webpack以开发模式运行时，每当检测到文件的变化，便有一次新的compilation被创建。
compilation对象也提供了很多事件回调事件给插件进行扩展，通过compilation 也能读取到compiler对象</p>
<p>compiler和compilation的区别在于：compiler代表了整个weback从启动到关闭的生命周期，而compilation只代表一次新的编译</p>
<h3 id="webpack中的module是什么" tabindex="-1"><a class="header-anchor" href="#webpack中的module是什么" aria-hidden="true">#</a> webpack中的Module是什么？</h3>
<p>前端模块
wepack支持 ESModule、CommonJs、AMD、Assets(image,font,video,audio,json)</p>
<ol>
<li>ESModule</li>
</ol>
<p>关键字 export import</p>
<ol>
<li>Commonjs</li>
</ol>
<p>关键字 module.exports require</p>
<p>package.json</p>
<p>type:module -&gt; ESM
type:commonjs -&gt; cjs 强制使用cmj模块</p>
<h3 id="webpack-modules-如何表达自己的各种依赖关系" tabindex="-1"><a class="header-anchor" href="#webpack-modules-如何表达自己的各种依赖关系" aria-hidden="true">#</a> webpack modules,如何表达自己的各种依赖关系</h3>
<ul>
<li>ESM import 语句</li>
<li>CommonJS require() 语句</li>
<li>AMD define 和 require 语句</li>
<li>css/sass/less 文件中的 @import 语句。</li>
<li>stylesheet url(...) 或者 HTML <code v-pre>&lt;img src=...&gt; </code>文件中的图片链接。</li>
</ul>
<h3 id="常说的-chunk和bundle的区别是什么" tabindex="-1"><a class="header-anchor" href="#常说的-chunk和bundle的区别是什么" aria-hidden="true">#</a> *常说的 chunk和bundle的区别是什么？</h3>
<ol>
<li>
<p>chunk(过程)
chunk是webpack打包过程中Modules的集合，是<span style='color:red'>打包过程中的概念</span>
webpack打包从一个入口模块开始，入口模块引用其他模块，其他模块又引用其他模块...
通过引用关系逐个打包模块，这些module形成了chunk</p>
<p>如果有多个入口文件，会产生多个打包路径，每条路径都会形成各自的chunk。</p>
</li>
<li>
<p>bundle(结果)
是我们最终输出的一个或多个打包好的文件。</p>
</li>
</ol>
<div class="custom-container warning"><p class="custom-container-title">区别</p>
<p>大多数情况下，一个chunk会产生一个bundle，但是也有例外。
比如当我们开启source-map后, chunk和bundle就不是一对一的关系了。下面代码是一个
chunk对应两个bundle。chunk是过程中的代码块，bundle是打包结果输出的代码块，chunk在构建完成后就会变成bundle</p>
</div>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="loader-和-plugin-分别是做什么的-怎么工作的" tabindex="-1"><a class="header-anchor" href="#loader-和-plugin-分别是做什么的-怎么工作的" aria-hidden="true">#</a> Loader 和 Plugin 分别是做什么的? 怎么工作的?</h3>
<ul>
<li>
<p>Loader
一句话描述：模块转换器(翻译官)，将非js模块转化为webpack能识别的js模块,并且一个文件可以链式的经过多个loader进行翻译</p>
<p>module   resolve loader 过程中添油加醋</p>
<p>loader 让 webpack 能够去处理那些非 JavaScript 文件.
loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块,然后你就可以利用 webpack 的打包能力,对它们进行处理。
本质上,webpack loader 将所有类型的文件,转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。</p>
</li>
<li>
<p>pligun</p>
<p>一句话描述：扩展插件，在webpack运行的各个阶段，都会广播出去相对应的事件，插件可以监听到这些事件的发生，在特定的时机做相对应的事情</p>
<p>loader 被用于转换某些类型的模块,而插件则可以用于执行范围更广的任务。
插件的范围包括,从打包优化和压缩,一直到重新定义环境中的变量。插件接口功能极其强大,可以用来处理各种各样的任务。</p>
<p>在 webpack 运行的生命周期中会广播出各种事件，Plugin 可以监听这些事件，在触发时通过 webpack 提供的 API 改变输出结果。
在插件中，可以拿到 Compile 和 Compilation 的引用对象，使用它们广播事件，这些事件可以被其他插件监听到，或者对他们做出一定修改，其他插件拿到的也是变化的对象。</p>
</li>
</ul>
<h3 id="如何本地项目去做一些多端口服务的代理转发" tabindex="-1"><a class="header-anchor" href="#如何本地项目去做一些多端口服务的代理转发" aria-hidden="true">#</a> 如何本地项目去做一些多端口服务的代理转发</h3>
<p>proxy多写几个就行了</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">dev</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxyTable</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'./'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">''</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何利用webpack去做依赖锁定-锁版本" tabindex="-1"><a class="header-anchor" href="#如何利用webpack去做依赖锁定-锁版本" aria-hidden="true">#</a> 如何利用webpack去做依赖锁定？锁版本</h3>
<p>锁依赖固定板本 script标签写死</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'index.html'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'index.html'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态文件的移动-赋值-用哪个plugin" tabindex="-1"><a class="header-anchor" href="#静态文件的移动-赋值-用哪个plugin" aria-hidden="true">#</a> 静态文件的移动&amp;赋值,用哪个plugin</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">new</span> <span class="token class-name">CopyWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">from</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'../static'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">to</span><span class="token operator">:</span> config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>assetsSubDirectory<span class="token punctuation">,</span><span class="token comment">//移动到指定位置</span>
        <span class="token literal-property property">ignore</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.*'</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h3>
<ul>
<li>视图渲染</li>
<li>网络层 减少请求</li>
<li>代码 | 结构
<ul>
<li>tree shaking 引入包的按需引入</li>
<li>模块懒加载 vue-router+trunk|noparse</li>
<li>文件指纹 消除缓存
分chunk 性能优化</li>
</ul>
</li>
</ul>
<h2 id="文件指纹" tabindex="-1"><a class="header-anchor" href="#文件指纹" aria-hidden="true">#</a> 文件指纹</h2>
<p>文件指纹是在chunk上加hash 值,主要针对每个在使用cdn的时候,缓存问题,有了文件名+hash文件名更改,
不会再走缓存</p>
<table>
<thead>
<tr>
<th>占位符</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>ext</td>
<td>文件后缀名</td>
</tr>
<tr>
<td>path</td>
<td>文件相对路径</td>
</tr>
<tr>
<td>folder</td>
<td>文件所在文件夹</td>
</tr>
<tr>
<td>hash</td>
<td>每次构建生成的唯一 hash 值</td>
</tr>
<tr>
<td>chunkhash</td>
<td>根据 chunk 生成 hash 值</td>
</tr>
<tr>
<td>contenthash</td>
<td>根据文件内容生成hash 值</td>
</tr>
</tbody>
</table>
<ul>
<li>hash ：任何一个文件改动，整个项目的构建 hash 值都会改变；</li>
<li>chunkhash：文件的改动只会影响其所在 chunk 的 hash 值；</li>
<li>contenthash：每个文件都有单独的 hash 值，文件的改动只会影响自身的 hash 值；</li>
</ul>
<h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> Loader</h2>
<h3 id="常用loaders" tabindex="-1"><a class="header-anchor" href="#常用loaders" aria-hidden="true">#</a> 常用loaders</h3>
<ul>
<li>es6-&gt;es5  babel-loader</li>
<li>css  css-loader style-loader</li>
<li>less  less-loader</li>
<li>图片  url-loader</li>
<li>把图片换成路径  file-loader</li>
</ul>
<p>//weback提供的 顺序
module.exports.pitch = function () {
console.log('pitch A');
}</p>
<h2 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> Plugin</h2>
<ul>
<li>mini-css-extract-plugin
分离CSS 将CSS提取到单独的文件中。</li>
<li>postcss-loader autoprefixer
处理CSS3属性前缀</li>
<li>压缩JS和CSS
用terser-webpack-plugin替换掉uglifyjs-webpack-plugin解决uglifyjs不支持es6</li>
</ul>
<h2 id="noparse" tabindex="-1"><a class="header-anchor" href="#noparse" aria-hidden="true">#</a> noParse</h2>
<p>module.noParse 字段，可以用于配置哪些模块文件的内容不需要进行解析
不需要解析依赖（即无依赖） 的第三方大型类库等，可以通过这个字段来配置，以提高整体的构建速度
<code v-pre> noParse: /jquery|lodash/, // 正则表达式</code></p>
<h2 id="函数式编程理论" tabindex="-1"><a class="header-anchor" href="#函数式编程理论" aria-hidden="true">#</a> 函数式编程理论</h2>
<h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3>
<ul>
<li>vue3 react 16.8 全面化函数的推动</li>
<li>函数式编程使代码单元测试更独立 tree shaking过程流畅 方便做UT</li>
<li>减少对this依赖,减轻了开发人员对于指向问题的困惑</li>
<li>js天生友好的函数式编程 ramda loadsh</li>
</ul>
<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3>
<ul>
<li>抽象运算过程</li>
<li>函数式的函数并非对于过程运算，是一种函数的映射</li>
<li>幂等 相同的输入始终得到相同的输出</li>
</ul>
<h3 id="纯函数" tabindex="-1"><a class="header-anchor" href="#纯函数" aria-hidden="true">#</a> 纯函数</h3>
<p>纯函数指没有副作用的函数。相同的输入有相同的输出，就跟我们上学的函数一样。</p>
<ul>
<li>仅取决于提供的输入，而不依赖于任何在函数求值或调用间隔时可能变化的隐藏状态和外部状态。</li>
<li>不会造成超出作用域的变化，例如修改全局变量或引用传递的参数。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3]</span>
arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3]</span>

arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3]</span>
arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [4, 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于系统的改造</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 不纯的</span>
<span class="token keyword">let</span> min <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">limit</span> <span class="token operator">=</span> <span class="token parameter">age</span> <span class="token operator">=></span> age <span class="token operator">></span> min<span class="token punctuation">;</span>

<span class="token comment">// 纯函数</span>
<span class="token keyword">let</span> <span class="token function-variable function">limit</span> <span class="token operator">=</span> <span class="token parameter">age</span> <span class="token operator">=></span> age <span class="token operator">></span> <span class="token number">18</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于大型系统来说，对于外部状态的依赖，会大大的提高系统复杂性</p>
<ul>
<li>问题：
18被硬编码到了函数内部的，造成了功能拓展的局限</li>
</ul>
<h3 id="高阶函数" tabindex="-1"><a class="header-anchor" href="#高阶函数" aria-hidden="true">#</a> 高阶函数</h3>
<ol>
<li>函数作为参数被传递到另一个函数中</li>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数柯里化" tabindex="-1"><a class="header-anchor" href="#函数柯里化" aria-hidden="true">#</a> 函数柯里化</h3>
<ol>
<li>传递给函数一部分参数用于功能调用，让他返回一个函数去处理剩下的函数</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// let add = (x, y) => x + y;</span>
<span class="token comment">// 柯里化后</span>
<span class="token keyword">let</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token parameter">y</span> <span class="token operator">=></span> x <span class="token operator">+</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> add2 <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>add2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//12</span>

<span class="token comment">// // 回到上面的limit， 纯函数化</span>
<span class="token keyword">let</span> <span class="token function-variable function">limit</span> <span class="token operator">=</span> <span class="token parameter">min</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token parameter">age</span> <span class="token operator">=></span> age <span class="token operator">></span> min<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>是一种预加载方式</p>
</blockquote>
<ul>
<li>问题
包心菜代码的产生h(g(f(x)));</li>
</ul>
<h3 id="升级-组合" tabindex="-1"><a class="header-anchor" href="#升级-组合" aria-hidden="true">#</a> 升级-&gt;组合</h3>
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

<span class="token keyword">let</span> <span class="token function-variable function">compose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">first<span class="token punctuation">,</span> reverse</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">first</span><span class="token punctuation">(</span><span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//实现</span>
<span class="token keyword">let</span> last <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span> reverse<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>last<span class="token punctuation">)</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
