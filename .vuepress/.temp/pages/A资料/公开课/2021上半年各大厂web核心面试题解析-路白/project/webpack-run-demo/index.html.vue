<template><div><h2 id="webpack-demo" tabindex="-1"><a class="header-anchor" href="#webpack-demo" aria-hidden="true">#</a> webpack-demo</h2>
<ol>
<li>初始化npm</li>
</ol>
<p><code v-pre>npm init</code></p>
<ol start="2">
<li>新建.npmrc配置文件</li>
</ol>
<p><code v-pre>registry=https://registry.npm.taobao.org</code></p>
<ol start="3">
<li>安装webpack</li>
</ol>
<p><code v-pre>npm i webpack webpack-cli -D</code></p>
<p>这里咱们用<code v-pre>&quot;webpack&quot;: &quot;^4.7.0&quot;</code>版本, 方面看chunk和bundle的关系.</p>
<ol start="4">
<li>创建src目录, 编写代码内容</li>
</ol>
<ul>
<li>add.js 加法</li>
<li>multiply.js 乘法(没有被任何模块引入)</li>
<li>common.js 公用函数, 打印输出</li>
<li>index.js 入口文件, 引用add和common模块</li>
</ul>
<ol start="5">
<li>新建webpack.config.js</li>
</ol>
<p>简单写点配置, index.js配置为entry.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"production"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">"./src/index.js"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"[name].js"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>运行webpack</li>
</ol>
<p><code v-pre>npx webpack</code></p>
<ol start="7">
<li>把运行命令添加到npm scripts中</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"rm -rf dist &amp;&amp; npx webpack"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>npm run build</code></p>
</div></template>
