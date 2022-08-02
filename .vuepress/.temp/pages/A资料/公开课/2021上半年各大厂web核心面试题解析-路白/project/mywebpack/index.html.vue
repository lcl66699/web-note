<template><div><h1 id="实现一个自己的打包工具" tabindex="-1"><a class="header-anchor" href="#实现一个自己的打包工具" aria-hidden="true">#</a> 实现一个自己的打包工具</h1>
<p>webpack的官方定义:</p>
<p>本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。
当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。</p>
<h2 id="打包工具需要做什么" tabindex="-1"><a class="header-anchor" href="#打包工具需要做什么" aria-hidden="true">#</a> 打包工具需要做什么?</h2>
<p>先来看一下咱们平时开发时写的代码</p>
<ol>
<li>ESModule</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// a.js</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> axios<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>CommonJS</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// a.js</span>
<span class="token keyword">const</span> _ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'axios'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> axios<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述a.js文件只是一个简单的js文件, 如果他们里面有引用其他模块, 那么它们之间的依赖关系就由module系统来表示.</p>
<p>注意, ESModule 上述代码也无法在低版本浏览器运行.</p>
<p>而打包工具会把这些比较简短的代码, 编译成更长更复杂的代码, 但是可以在低版本浏览器运行, 并且不破坏他们之间的依赖关系.</p>
<h2 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h2>
<ol>
<li>找到一个入口文件</li>
<li>解析这个入口文件, 提取它的依赖.</li>
<li>解析入口文件的依赖文件, 并提取依赖文件的依赖. (提炼一下语言, 就是递归的去创建一个文件间的依赖图, 描述所有文件间的依赖关系)</li>
<li>把所有文件打包成一个文件</li>
</ol>
<h2 id="开始开发" tabindex="-1"><a class="header-anchor" href="#开始开发" aria-hidden="true">#</a> 开始开发</h2>
<ol>
<li>新建几个js源文件</li>
</ol>
<ul>
<li>name.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'lubai'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>message.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
    name
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./name.js'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is a boy</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>entry.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> message <span class="token keyword">from</span> <span class="token string">'./message.js'</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>先来看一下这三个文件的依赖关系</li>
</ol>
<p>我们以entry.js做为入口文件.</p>
<p>entry依赖message, message依赖name.</p>
<p>entry.js =&gt; message.js =&gt; name.js</p>
<ol start="3">
<li>开始编写咱们自己的打包工具 mywebpack.js</li>
</ol>
<p>首先来读取一下入口文件entry.js的内容</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createAsset</span><span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> content <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">createAsset</span><span class="token punctuation">(</span><span class="token string">'./source/entry.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在当前目录下运行一下命令, 看一下输出
<code v-pre>node mywebpack.js</code></p>
<ol start="4">
<li>分析ast, 思考如何能够解析出entry.js文件的依赖</li>
</ol>
<p>这里先看一个ast的工具 https://astexplorer.net/</p>
<p>可以在左侧输入代码, 右侧看到对应代码的AST</p>
<p>咱们可以把entry.js里的内容复制到左侧看一下。</p>
<p>4.1 可以看到最上级是一个File, File中包含换一个program, 就是我们的程序
4.2 在program的body属性里, 就是我们各种语法的描述
4.3 可以看到第一个就是 ImportDeclaration, 也就是引入的声明.
4.4 ImportDeclaration里有一个source属性, 它的value就是引入的文件地址 './message.js'</p>
<ol start="5">
<li>生成entry.js的ast</li>
</ol>
<p>首先安装一下 babylon, 一个基于babel的js解析工具.
官方解释：Babylon is a JavaScript parser used in Babel.</p>
<p><code v-pre>npm i babylon</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> babylon <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'babylon'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createAsset</span><span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> content <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> ast <span class="token operator">=</span> babylon<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">'module'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ast<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">createAsset</span><span class="token punctuation">(</span><span class="token string">'./source/entry.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再来运行一下mywebpack.js看看输出是什么?</p>
<p>可以看到输出了一个Object, 这就是咱们entry.js的AST.</p>
<ol start="6">
<li>基于AST, 找到 entry.js 的 ImportDeclaration Node</li>
</ol>
<p>首先咱们需要遍历出 ImportDeclaration Node. 那么咱们就需要一个工具, babel-traverse</p>
<p>官方解释：We can use it alongside Babylon to traverse and update nodes</p>
<p><code v-pre>npm i babel-traverse</code></p>
<p>然后咱们利用它来遍历并获取到 ImportDeclaration 节点, 遍历到对应节点后, 可以提供一个函数来操作此节点.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> babylon <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'babylon'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> traverse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'babel-traverse'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createAsset</span><span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> content <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> ast <span class="token operator">=</span> babylon<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">'module'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">ImportDeclaration</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
            node
        <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">createAsset</span><span class="token punctuation">(</span><span class="token string">'./source/entry.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li>获取entry.js的依赖</li>
</ol>
<p>因为可能有多个依赖, 所以咱们声明一个数组来存储.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> babylon <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'babylon'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> traverse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'babel-traverse'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createAsset</span><span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> content <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> ast <span class="token operator">=</span> babylon<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">'module'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> dependencies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">ImportDeclaration</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
            node
        <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            dependencies<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dependencies<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">createAsset</span><span class="token punctuation">(</span><span class="token string">'./source/entry.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印一下dependencies数组看看.</p>
<ol start="8">
<li>优化函数 createAsset , 使其能够区分文件.</li>
</ol>
<p>因为要获取所有文件的依赖, 所以咱们需要一个id来标识所有文件.</p>
<p>这里咱们用一个简单的自增number, 这样遍历的每一个文件的id就唯一了.</p>
<p>同时咱们要先获取到入口文件的 id filename 以及 dependencies</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> babylon <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'babylon'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> traverse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'babel-traverse'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token constant">ID</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createAsset</span><span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> content <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> ast <span class="token operator">=</span> babylon<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">'module'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> dependencies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">ImportDeclaration</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
            node
        <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            dependencies<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token constant">ID</span><span class="token operator">++</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        id<span class="token punctuation">,</span>
        filename<span class="token punctuation">,</span>
        dependencies
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> mainAsset <span class="token operator">=</span> <span class="token function">createAsset</span><span class="token punctuation">(</span><span class="token string">'./source/entry.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mainAsset<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行一下看看, 是不是返回了正确的结果.</p>
<ol start="9">
<li>我们获取到了单个文件的依赖了, 接下来尝试建立依赖图</li>
</ol>
<p>新增一个函数 createGraph, 把createAsset的调用移入此函数.
同时entry的路径应该是需要动态的, 所以createGraph接收一个参数entry.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createGraph</span><span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mainAsset <span class="token operator">=</span> <span class="token function">createAsset</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token function">createGraph</span><span class="token punctuation">(</span><span class="token string">'./source/entry.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>graph<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>声明一个数组, 来存储所有的Asset, 用以后续的遍历.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createGraph</span><span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mainAsset <span class="token operator">=</span> <span class="token function">createAsset</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> allAsset <span class="token operator">=</span> <span class="token punctuation">[</span>mainAsset<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> asset <span class="token keyword">of</span> allAsset<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        asset<span class="token punctuation">.</span>dependencies<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10">
<li>上面存储的所有路径都是相对路径, 想办法把他们转为绝对路径</li>
</ol>
<p>因为有了绝对路径, 我们才能获取到他们的asset</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createGraph</span><span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mainAsset <span class="token operator">=</span> <span class="token function">createAsset</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> allAsset <span class="token operator">=</span> <span class="token punctuation">[</span>mainAsset<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> asset <span class="token keyword">of</span> allAsset<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> dirname <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>asset<span class="token punctuation">.</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
        asset<span class="token punctuation">.</span>dependencies<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">relativePath</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> absoultePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dirname<span class="token punctuation">,</span> relativePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> childAsset <span class="token operator">=</span> <span class="token function">createAsset</span><span class="token punctuation">(</span>absoultePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11">
<li>我们需要一个map, 来记录dependencies中的相对路径 和 childAsset的对应关系, 方便后续做依赖的引入</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createGraph</span><span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mainAsset <span class="token operator">=</span> <span class="token function">createAsset</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> allAsset <span class="token operator">=</span> <span class="token punctuation">[</span>mainAsset<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> asset <span class="token keyword">of</span> allAsset<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> dirname <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>asset<span class="token punctuation">.</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>

        asset<span class="token punctuation">.</span>mapping <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        asset<span class="token punctuation">.</span>dependencies<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">relativePath</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> absoultePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dirname<span class="token punctuation">,</span> relativePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">const</span> childAsset <span class="token operator">=</span> <span class="token function">createAsset</span><span class="token punctuation">(</span>absoultePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

            asset<span class="token punctuation">.</span>mapping<span class="token punctuation">[</span>relativePath<span class="token punctuation">]</span> <span class="token operator">=</span> childAsset<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12">
<li>那么接下来如何遍历所有的文件?</li>
</ol>
<p>很简单, 把新生成的chileAsset推入allAsset数组即可</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createGraph</span><span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mainAsset <span class="token operator">=</span> <span class="token function">createAsset</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> allAsset <span class="token operator">=</span> <span class="token punctuation">[</span>mainAsset<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> asset <span class="token keyword">of</span> allAsset<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> dirname <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>asset<span class="token punctuation">.</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>

        asset<span class="token punctuation">.</span>mapping <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        asset<span class="token punctuation">.</span>dependencies<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">relativePath</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> absoultePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dirname<span class="token punctuation">,</span> relativePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">const</span> childAsset <span class="token operator">=</span> <span class="token function">createAsset</span><span class="token punctuation">(</span>absoultePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

            asset<span class="token punctuation">.</span>mapping<span class="token punctuation">[</span>relativePath<span class="token punctuation">]</span> <span class="token operator">=</span> childAsset<span class="token punctuation">.</span>id<span class="token punctuation">;</span>

            allAsset<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>childAsset<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> allAsset<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出一下看看, 我们其实就已经获取到了他们之间依赖关系的图.</p>
<p>有了依赖图了, 咱们接下来就要把所有文件打包成一个文件了</p>
<ol start="13">
<li>新增一个方法bundle</li>
</ol>
<p>它的入参就是咱们刚才创建的graph.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bundle</span><span class="token punctuation">(</span><span class="token parameter">graph</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token function">createGraph</span><span class="token punctuation">(</span><span class="token string">'./source/entry.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">bundle</span><span class="token punctuation">(</span>graph<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="14">
<li>创建整体的结果代码</li>
</ol>
<p>因为他需要接收参数, 且需要立即执行, 所以用一个自执行函数来包裹.</p>
<p>他接收的参数是什么? 是module, 是每一个文件模块.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bundle</span><span class="token punctuation">(</span><span class="token parameter">graph</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> modules <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        (function() {
            
        })({</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>modules<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">})
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来遍历graph, 来获取所有的module, 拼接成modules</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bundle</span><span class="token punctuation">(</span><span class="token parameter">graph</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> modules <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

    graph<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">module</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        modules <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>module<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:[

        ],</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        (function() {
            
        })({</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>modules<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">})
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里, 每一个module.id对应的value, 应该有当前module的可执行代码, 也就是CommonJs规范的代码.  （这里可以看一下babel 在线演示工具, 展示一下是什么样子的代码.
https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&amp;build=&amp;builtIns=false&amp;corejs=false&amp;spec=false&amp;loose=false&amp;code_lz=Q&amp;debug=false&amp;forceAllTransforms=true&amp;shippedProposals=false&amp;circleciRepo=&amp;evaluate=true&amp;fileSize=false&amp;timeTravel=false&amp;sourceType=module&amp;lineWrap=true&amp;presets=env%2Creact%2Cstage-0%2Cstage-1%2Cstage-2%2Cstage-3&amp;prettier=true&amp;targets=&amp;version=7.14.2&amp;externalPlugins=
）</p>
<p>但是咱们上面只分析了依赖, 并没有去记录每一个module的代码对吧? 所以咱们添加一下对代码的记录。</p>
<ol>
<li>编译所有源代码</li>
</ol>
<p>咱们修改createAsset方法, 在这里获取所有code并且编译.</p>
<p>首先咱们会用到babel-core, 安装他！</p>
<p><code v-pre>npm i babel-core</code></p>
<p>还会用到 babel-preset-env 作为预设来编译代码, 安装他！</p>
<p><code v-pre>npm i babel-preset-env</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> babel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'babel-core'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token constant">ID</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createAsset</span><span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> content <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> ast <span class="token operator">=</span> babylon<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">'module'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> dependencies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">ImportDeclaration</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
            node
        <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            dependencies<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token constant">ID</span><span class="token operator">++</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span>
        code
    <span class="token punctuation">}</span> <span class="token operator">=</span> babel<span class="token punctuation">.</span><span class="token function">transformFromAst</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token comment">// 第三个参数, 告诉babel以什么方式编译我们的代码. 这里我们就用官方提供的preset-env, 编译es2015+的js代码.</span>
        <span class="token comment">// 当然还有其他的各种预设, 可以编译ts, react等等代码.</span>
        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'env'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        id<span class="token punctuation">,</span>
        filename<span class="token punctuation">,</span>
        dependencies<span class="token punctuation">,</span>
        code
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取到了code之后, 咱们来打印一下看看.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token function">createGraph</span><span class="token punctuation">(</span><span class="token string">'./source/entry.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>graph<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="16">
<li>把编译后的代码, 加入咱们的result中</li>
</ol>
<p>再看一遍咱们bebal在线演示编译后的代码, 想一下咱们CommonJS的规范, 每个模块的代码函数其实要接收3个参数</p>
<p>require, module, exports</p>
<p>CommonJS规范规定，每个模块内部：</p>
<ol>
<li>
<p>module变量代表当前模块。
这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。</p>
</li>
<li>
<p>require方法用于加载模块。</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bundle</span><span class="token punctuation">(</span><span class="token parameter">graph</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> modules <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

    graph<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">module</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        modules <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>module<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:[
            function(require, module, exports) {
                </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>module<span class="token punctuation">.</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
            },
        ],</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        (function() {
            
        })({</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>modules<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">})
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么接下来, 咱们是不是应该开始实现require函数? 因为module和exports其实咱们已经可以非常方便的拿到了.</p>
<p>首先咱们要先把要引入需要的mapping给放到modules里</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">bundle</span><span class="token punctuation">(</span><span class="token parameter">graph</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> modules <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

    graph<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">module</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        modules <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>module<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:[
            function(require, module, exports) {
                </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>module<span class="token punctuation">.</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
            },
            </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>mapping<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,
        ],</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        (function() {
            
        })({</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>modules<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">})
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再输出一下看看, 发现现在这样输出的代码比较难看. 咱们加几个美化的命令</p>
<p>感兴趣的同学可以去npm搜一下哈. 全局安装就可以了.</p>
<p><code v-pre>node mywebpack.js | js-beautify | highlight</code></p>
<ol start="17">
<li>接下来实现require方法</li>
</ol>
<p>require方法应该接收一个参数, 来表示要引入哪些代码.</p>
<p>那么咱们可以用id来实现, 因为前面用一个mapping存了依赖的relativePath和模块id的映射关系.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bundle</span><span class="token punctuation">(</span><span class="token parameter">graph</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> modules <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

    graph<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">module</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        modules <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>module<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:[
            function(require, module, exports) {
                </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>module<span class="token punctuation">.</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
            },
            </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>mapping<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,
        ],</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 记住这里modules的数据结构, 取出来的fn和mapping分别是什么?</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        (function(modules) {
            function require(id) {
                const [fn, mapping] = modules[id];

                function localRequire(relativePath) {
                    return require(mapping[relativePath]);
                }

                const module = { exports: {}};

                fn(localRequire, module, module.exports);

                return module.exports;
            }
            require(0);
        })({</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>modules<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">})
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里基本就已经完成了, 咱们运行一下代码看看.</p>
<p>复制到浏览器里运行一下, 看看能不能正常运行。</p>
<ol start="18">
<li>每次手动复制太麻烦了, 咱们把结果输出到一个文件里吧</li>
</ol>
<p><code v-pre>npm init</code></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"rm -rf dist.js &amp;&amp; node mywebpack.js > dist.js"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后运行</p>
<p><code v-pre>npm run build</code>.</p>
<p>大功告成！</p>
</div></template>
