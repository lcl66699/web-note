<template><div><h1 id="jsbridge" tabindex="-1"><a class="header-anchor" href="#jsbridge" aria-hidden="true">#</a> jsBridge</h1>
<p>Hybrid 混合开发就是 native + h5 的双向通信</p>
<blockquote>
<p>native &lt;=&gt;jsbridge &lt;=&gt; h5</p>
</blockquote>
<p>native 通讯流程有两种方式：</p>
<ul>
<li>URL Schema， 客户端通过拦截 webview 请求来完成通讯</li>
<li>native 向 webview 中的 js 执行环境, 注入 API, 以此来完成通讯</li>
</ul>
<h2 id="url-schema" tabindex="-1"><a class="header-anchor" href="#url-schema" aria-hidden="true">#</a> URL Schema</h2>
<ul>
<li>客户端拦截 webview (所谓的 native 提供 h5 的容器)请求</li>
</ul>
<h4 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h4>
<ol>
<li>
<p>在 webview 中发出的网络请求，都会被客户端监听和捕获到。</p>
</li>
<li>
<p>定义自己的私有协议</p>
</li>
</ol>
<p>上面说过, 所有网络请求都会被监听到, 网络请求最常见的就是 http 协议, 比如https://a.b.com/fetchInfo, 这是一个很常见的请求。</p>
<p>webview 内的 H5 页面肯定有很多类似的 http 请求, 我们为了区别于业务请求, 需要定制一套 h5 和 native 进行交互的私有协议, 我们通常称呼为 URL Schema。</p>
<p>比如我们现在定义协议头为 mingzi://,</p>
<p>那么随后我们要在 webview 请求中都带上这个私有协议开头, 比如有一个请求是 setLeftButton, 实际发出的请求会是 mingzi://setLeftButton?params1=xxx&amp;params2=xxx.</p>
<p>这里大家记住, 这个协议的名称是我们自定义的, 只要 h5 和 native 协商好即可。
但是如果公司旗下有多个 app, 对于通用的业务一般会定义一个通用的协议头, 比如 common://；对于每个 app 自己比较独立的业务, 基本每个 app 都会自己定义一套协议, 比如 appa://, appb://, appc://.</p>
<ol start="3">
<li>请求的发送</li>
</ol>
<p>对于 webview 请求的发送, 我们一般使用 iframe 的方式。也可以使用 location.href 的方式, 但是这种方式不适用并行发请求的场景。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> doc <span class="token operator">=</span> window<span class="token punctuation">.</span>document<span class="token punctuation">;</span>
<span class="token keyword">const</span> body <span class="token operator">=</span> window<span class="token punctuation">.</span>document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
<span class="token keyword">const</span> iframe <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"iframe"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

iframe<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"none"</span><span class="token punctuation">;</span>
iframe<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">"mingzi://setLeftButton?param1=12313123"</span><span class="token punctuation">;</span>

body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>iframe<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>iframe<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而且考虑到安全性, 客户端中一般会设置域名白名单, 比如客户端设置了 mingzi.com 为白名单, 那么只有 mingzi.com 域下发出的请求, 才会被客户端处理。</p>
<p>这样可以避免自己 app 内部的业务逻辑, 被第三方页面直接调用。</p>
<ol start="4">
<li>客户端拦截协议请求</li>
</ol>
<p>iOS 和 Android 对 webview 请求的拦截方法不太相同。</p>
<ul>
<li>iOS: shouldStartLoadWithRequest</li>
<li>Android: shouldOverrideUrlLoading</li>
</ul>
<p>当客户端解析到请求的 URL 协议是约定要的 mingzi://时, 便会解析参数, 并根据 h5 传入的方法名比如 setLeftButton, 来进行相关操作（设置返回按钮的处理逻辑）。</p>
<ol start="5">
<li>请求处理完成后的回调</li>
</ol>
<p>因为咱们 webview 的请求本质上还是异步请求的过程, 当请求完成后, 我们需要有一个 callback 触发, 无论是通知 h5 执行结果，还是返回一些数据， 都离不开 callback 的执行。</p>
<p>我们可以使用 Js 自带的事件机制，window.addEventListener 和 window.dispatchEvent 这两个 API。</p>
<p>还是这个例子, 比如咱们现在要调用 setLeftButton 方法, 方法要传入一个 callback 来得知是否执行成功了。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>webview<span class="token punctuation">.</span><span class="token function">setLeftButton</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">params1</span><span class="token operator">:</span> <span class="token number">111</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"执行失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"执行成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 业务逻辑</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JsBridge 中具体的步骤应该是这样的：</p>
<ul>
<li>在 H5 调用 setLeftButton 方法时, 通过 webview_api 名称+参数 作为唯一标识,注册自定义事件</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> handlerId <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> eventName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">setLeftButton_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>handlerId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span>eventName<span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>errcode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"执行失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"执行成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 业务逻辑</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

JsBridge<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">mingzi://setLeftButton?handlerId=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>eventName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;params1=111</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>客户端在接收到请求, 完成自己的对应处理后, 需要调用 JsBridge 中的 dispatch, 携带回调的数据触发自定义事件。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>event<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">errcode</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注入-api" tabindex="-1"><a class="header-anchor" href="#注入-api" aria-hidden="true">#</a> 注入 API</h2>
<p>上述方式有个比较大的缺点, 就是参数如果太长会被截断。以前用这种方式主要是为了兼容 iOS6， 现在几乎已经不需要考虑这么低的版本了。</p>
<p>所以现在主流的实现是 native 向 js 的执行环境中注入 API.</p>
<p>具体怎么操作呢, 咱们分步骤来看：</p>
<ol>
<li>向 native 传递信息</li>
</ol>
<p>由于 native 已经向 window 变量注入了各种 api, 所以咱们可以直接调用他们。</p>
<p>比如现在 window.mingziWebview = { setLeftButton: (params) =&gt; {}} 就是 native 注入的对象 api。</p>
<p>我们可以直接这样调用, 就可以传参数给 native 了</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>mingziWebview<span class="token punctuation">[</span><span class="token string">"setLeftButton"</span><span class="token punctuation">]</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是为了安全性, 或者为了不要乱码等问题, 我们一般会对参数进行编码, 比如转换为 base64 格式。</p>
<ol start="2">
<li>准备接收 native 的回调</li>
</ol>
<p>咱们同样可以在 window 上声明接收回调的 api</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">[</span><span class="token string">"setLeftButton_Callback_1"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">errcode<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>errcode<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样为了安全性和参数传递的准确性, native 也会将回调的数据进行 base64 编码, 咱们需要在回调函数里进行解析。</p>
<ol start="3">
<li>native 调用回调函数</li>
</ol>
<p>native 怎么知道哪个是这次的回调函数呢? 他们确实不知道, 所以我们需要在调用的时候就告诉 native。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>mingziWebview<span class="token punctuation">[</span><span class="token string">"setLeftButton"</span><span class="token punctuation">]</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个 Params 中, 我们会加入一个属性叫做 trigger, 它的值是回调函数的名称, 比如</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> callbackName <span class="token operator">=</span> <span class="token string">"setLeftButton_Callback_1"</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>mingziWebview<span class="token punctuation">[</span><span class="token string">"setLeftButton"</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">trigger</span><span class="token operator">:</span> callbackName<span class="token punctuation">,</span>
  <span class="token operator">...</span>otherParams<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

window<span class="token punctuation">[</span>callbackName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">errcode<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>errcode<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时为了保证 callbackName 的唯一性, 我们一般会加入各种 Date.now() + id, 使其保证唯一。</p>
</div></template>
