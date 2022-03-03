<template><h1 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h1>
<p>做性能优化的目的？</p>
<ol>
<li>首屏时间（比如刷新后的白屏）</li>
<li>首次可交互时间 （比如输入框验证码）</li>
<li>首次有意义内容渲染时间</li>
</ol>
<h2 id="前端的性能优化" tabindex="-1"><a class="header-anchor" href="#前端的性能优化" aria-hidden="true">#</a> 前端的性能优化</h2>
<p>页面性能检测: https://developers.google.com/speed/pagespeed/insights/</p>
<ol>
<li>
<p>只请求当前需要的资源
路由异步加载, 图片懒加载, polyfill的优化(可以做低版本适配)</p>
<p><a href="https://polyfill.io/v3/url-builder/" target="_blank" rel="noopener noreferrer">(只引入需要的，cnd链接,实现对polyfill的按需加载)<ExternalLinkIcon/></a></p>
</li>
<li>
<p>缩减资源体积</p>
<ul>
<li>打包压缩 webpack4已经内置了</li>
<li>gzip 一种压缩的算法，压缩静态资源的，后端node或者nginx可以开启</li>
<li>图片格式优化, 压缩(https://tinypng.com/), 根据屏幕分辨率展示不同分辨率的图片,webp可以无损压缩</li>
<li>尽量控制cookie大小(每一个请求都会带cookie)</li>
</ul>
</li>
<li>
<p>时序优化</p>
<ul>
<li>js中promise.all去并发的发请求</li>
<li>ssr-把打包放在服务端进行渲染，也方便seo</li>
<li>prefetch、prerender、preload</li>
<li>
<link rel="dns-prefetch" href="xxxxxx" /> 立刻去请求dns
</li>
<li>
<link rel="preconnect" href="xxxxxxx" /> 域连接，访问域名的时候
</li>
<li>
<link rel="preload" as="image" href="xxxxxxxxx" /> 预加载
</li>
</ul>
</li>
<li>
<p>合理利用缓存
cdn cdn预热（不通过访问，提前预热） cdn刷新（原站更新了，强制去cdn）
http缓存
localStorage, sessionStorage</p>
</li>
</ol>
<h3 id="如果一段js执行时间非常长-怎么去分析" tabindex="-1"><a class="header-anchor" href="#如果一段js执行时间非常长-怎么去分析" aria-hidden="true">#</a> 如果⼀段js执行时间非常长, 怎么去分析?</h3>
<p>装饰器装饰一下</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">measure</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> oldValue <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>value<span class="token punctuation">;</span>

  descriptor<span class="token punctuation">.</span><span class="token function-variable function">value</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">oldValue</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> descriptor<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//使用</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">longTimefn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">measure</span></span>
    <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">longTimefn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="阿里云oss支持通过链接后拼参数实现图片格式转换-尝试写一下-把图片转为webp格式-需要注意什么" tabindex="-1"><a class="header-anchor" href="#阿里云oss支持通过链接后拼参数实现图片格式转换-尝试写一下-把图片转为webp格式-需要注意什么" aria-hidden="true">#</a> 阿⾥云oss⽀持通过链接后拼参数实现图⽚格式转换, 尝试写⼀下, 把图⽚转为webp格式? 需要注意什么?</h3>
<p>首先判断浏览器支不支持webp,处理边界
<a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">caniuse<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">checkWebp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            document
                <span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span><span class="token comment">//创建canvas元素</span>
                <span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">'image/webp'</span><span class="token punctuation">)</span><span class="token comment">//转成base64</span>
                <span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'data:image/webp'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token comment">//转成之后查找有没有data:image/webp，有就是转成了</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> supportWebp <span class="token operator">=</span> <span class="token function">checkWebp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getWebpImageUrl</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>url<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token string">'url不能为空'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'data:'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//是否是base64格式</span>
        <span class="token keyword">return</span> url<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>supportWebp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> url<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> url <span class="token operator">+</span> <span class="token string">'?x-oss-process=image/format,webp'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="如果有巨量的图片需要展示在页面-除了懒加载这种方式-还有什么好的方法限制其同一时间加载的数量" tabindex="-1"><a class="header-anchor" href="#如果有巨量的图片需要展示在页面-除了懒加载这种方式-还有什么好的方法限制其同一时间加载的数量" aria-hidden="true">#</a> 如果有巨量的图片需要展示在页面, 除了懒加载这种方式, 还有什么好的方法限制其同一时间加载的数量?</h3>
<pre><code>代码题, 使用promise实现并发控制
</code></pre>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">limitLoad</span><span class="token punctuation">(</span><span class="token parameter">urls<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> limit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对数组做一个拷贝</span>
    <span class="token keyword">const</span> sequence <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>urls<span class="token punctuation">)</span>
    <span class="token keyword">let</span> promises <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//执行池子</span>

    <span class="token comment">//并发请求到最大数</span>
    promises <span class="token operator">=</span> sequence<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里返回的 index 是任务在 promises 的脚标，</span>
        <span class="token comment">//用于在 Promise.race 之后找到完成的任务脚标</span>
        <span class="token keyword">return</span> <span class="token function">handler</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> index
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//传入promise数组，返回第一个执行成功的结果</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> sequence<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        p <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            promises<span class="token punctuation">[</span>res<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">handler</span><span class="token punctuation">(</span>sequence<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> res
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> urls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">'link1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token number">3000</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">'link2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token number">2000</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">'link3'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token number">5000</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">'link4'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token number">1000</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">'link5'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token number">1200</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">'link6'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token number">2000</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">'link7'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token number">800</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">'link8'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token number">3000</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 设置我们要执行的任务</span>
<span class="token keyword">function</span> <span class="token function">loadImg</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"----"</span> <span class="token operator">+</span> url<span class="token punctuation">.</span>info <span class="token operator">+</span> <span class="token string">" start!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>info <span class="token operator">+</span> <span class="token string">" OK!!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>time<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">limitLoad</span><span class="token punctuation">(</span>urls<span class="token punctuation">,</span> loadImg<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div><h2 id="前端的内存处理" tabindex="-1"><a class="header-anchor" href="#前端的内存处理" aria-hidden="true">#</a> 前端的内存处理</h2>
<p>内存声明周期：分配，使用，垃圾回收机制回收</p>
<h3 id="js-的垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#js-的垃圾回收机制" aria-hidden="true">#</a> js 的垃圾回收机制</h3>
<ul>
<li>
<p>引用计数法</p>
<ul>
<li>看一个对象是否有指向他的引用。如果没有其他对象指向他了，说明这个对象不再被需要了</li>
<li>但是如果是循环引用，引用计数法会无法识别，导致内存泄露</li>
</ul>
</li>
<li>
<p>标记清除法</p>
<ul>
<li>
<p>标记清除算法将“不再使用的对象”定义为“无法达到的对象”。</p>
</li>
<li>
<p>简单来说，就是从根部（在 JS 中就是全局对象）出发定时扫描内存中的对象。 凡是能从根部到达的对象，都是还需要使用的。 那些无法由根部出发触及到的对象被标记为不再使用，稍后进行回收。</p>
<ol>
<li>垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记。</li>
<li>从根部出发将能触及到的对象的标记清除。</li>
<li>那些还存在标记的变量被视为准备删除的变量。</li>
<li>最后垃圾收集器会执行最后一步内存清除的工作，销毁那些带标记的值并回收它们所占用的内存空间。</li>
</ol>
</li>
</ul>
</li>
</ul>
<h3 id="常见的内存泄露" tabindex="-1"><a class="header-anchor" href="#常见的内存泄露" aria-hidden="true">#</a> 常见的内存泄露</h3>
<ol>
<li>
<p>万恶的全局变量</p>
</li>
<li>
<p>未被清理的定时器和回调函数</p>
</li>
<li>
<p>闭包
一个内部函数，有权访问外部函数的变量</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> theThing <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">replaceThing</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> originalThing <span class="token operator">=</span> theThing<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>originalThing<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> <span class="token function-variable function">unused</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//没被用到</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>originalThing<span class="token punctuation">)</span>
      <span class="token comment">// 对于 'originalThing'的引用</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  theThing <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">longStr</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function-variable function">someMethod</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span>replaceThing<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>定时器每次调用 replaceThing 的时候，会得到很长的 longStr 字符串和一个对于新闭包 someMethod 对象</p>
<p>关键在于，闭包之间是共享作用域的，nused 引用了 originalThing，虽然 unused 可能一直没有被调用，但是 someMethod 可能会被调用，
就会导致无法对其内存进行回收。 当这段代码被反复执行时，内存会持续增长。</p>
</li>
<li>
<p>DOM 引用</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> elements <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">image</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"image"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  elements<span class="token punctuation">.</span>image<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">"http://example.com/image_name.png"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">removeImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"image"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 这个时候我们对于 #image 仍然有一个引用, Image 元素, 仍然无法被内存回收.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>上述案例中，即使我们对于 image 元素进行了移除，但是仍然有对 image 元素的引用，依然无法对齐进行内存回收。</p>
<h3 id="避免内存泄露" tabindex="-1"><a class="header-anchor" href="#避免内存泄露" aria-hidden="true">#</a> 避免内存泄露？</h3>
<ul>
<li>尽量减少全局变量，使用严格模式避免意外创建全局变量。</li>
<li>使用完数据后，及时解除引用（闭包中的变量，dom 引用，定时器清除）。</li>
</ul>
<h3 id="实现一个-sizeof-函数。接收一个对象-计算传入的对象占用的字节数" tabindex="-1"><a class="header-anchor" href="#实现一个-sizeof-函数。接收一个对象-计算传入的对象占用的字节数" aria-hidden="true">#</a> 实现一个 sizeOf 函数。接收一个对象，计算传入的对象占用的字节数</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">calculator</span><span class="token punctuation">(</span><span class="token parameter">object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> testObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1111</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">"ccc"</span><span class="token punctuation">,</span>
  <span class="token number">2222</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">calculator</span><span class="token punctuation">(</span>testObj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote>
<p>解答</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myWeakSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">objSize</span><span class="token punctuation">(</span><span class="token parameter">object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>object <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> bytes <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> properties <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//拿到key</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> properties<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> properties<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> object<span class="token punctuation">[</span>element<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">"object"</span> <span class="token operator">&amp;&amp;</span> object<span class="token punctuation">[</span>element<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>myWeakSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>object<span class="token punctuation">[</span>element<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      myWeakSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>object<span class="token punctuation">[</span>element<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    bytes <span class="token operator">+=</span> <span class="token function">calculator</span><span class="token punctuation">(</span>object<span class="token punctuation">[</span>element<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//value</span>
    bytes <span class="token operator">+=</span> <span class="token function">calculator</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//key</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> bytes<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">calculator</span><span class="token punctuation">(</span><span class="token parameter">object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * string 每个长度占2字节
   * number 8字节
   * boolean 4字节
   * 数组：数组内的元素相加
   * 对象：分别拿到key和value分别计算 判断value的时候需要判断：
   *      是不是两个key引用的同一个对象
   */</span>
  <span class="token keyword">let</span> objType <span class="token operator">=</span> <span class="token keyword">typeof</span> object<span class="token punctuation">;</span>

  <span class="token keyword">switch</span> <span class="token punctuation">(</span>objType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">"string"</span><span class="token operator">:</span>
      <span class="token keyword">return</span> object<span class="token punctuation">.</span>length <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">"number"</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token number">8</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">"boolean"</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">"object"</span><span class="token operator">:</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//map中的calculator等于： item => { return calculator(item) }</span>
        <span class="token keyword">return</span> object<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>calculator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">objSize</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">A</span><span class="token operator">:</span> <span class="token number">132</span><span class="token punctuation">,</span>
  <span class="token constant">B</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//占用 2+8+2+24=36</span>

<span class="token keyword">const</span> testObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> obj2<span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> obj2<span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">calculator</span><span class="token punctuation">(</span>testObj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div></template>
