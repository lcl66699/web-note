<template><div><h1 id="bom" tabindex="-1"><a class="header-anchor" href="#bom" aria-hidden="true">#</a> BOM</h1>
<p>BOM:Browser Object Model 浏览器对象模型，提供了独立于内容的，可以与浏览器窗口进行滑动的对象结构，浏览器提供的API</p>
<h2 id="主要对象" tabindex="-1"><a class="header-anchor" href="#主要对象" aria-hidden="true">#</a> 主要对象</h2>
<ol>
<li>window 对象 BOM核心，js访问浏览器的接口，也是es规定的global对象</li>
<li>location 对象 提供当前窗口中加载的文档有关的信息和一些导航功能，即是window也是document属性</li>
<li>navigation 对象 获取浏览器系统信息</li>
<li>screen 对象 用来表示浏览器窗口外部的显示器信息</li>
<li>history 对象保存用户上网的历史信息，存浏览历史等</li>
</ol>
<h3 id="window-对象" tabindex="-1"><a class="header-anchor" href="#window-对象" aria-hidden="true">#</a> window 对象</h3>
<ul>
<li>alert()</li>
<li>confirm()</li>
<li>prompt()</li>
<li>open() 可用于打开新浏览器窗口</li>
<li>onerror()
<ul>
<li>监听一些全局的监控</li>
<li>addEventListener('error')</li>
</ul>
</li>
<li>setTimeout()</li>
<li>setInterval()</li>
</ul>
<h4 id="窗口位置" tabindex="-1"><a class="header-anchor" href="#窗口位置" aria-hidden="true">#</a> 窗口位置</h4>
<ul>
<li>screenLeft 窗口相对于左边的屏幕左侧位置 适用于Chrome、IE、Safari</li>
<li>screenTop</li>
<li>screenX	窗口相对于左边的位置 适用于FireFox</li>
<li>screenY</li>
<li>moveBy(x,y) 在水平和垂直方向上移动的像素|移动窗口</li>
<li>moveTo(x,y) 接收的是新位置的x和y坐标值</li>
</ul>
<h4 id="窗口大小" tabindex="-1"><a class="header-anchor" href="#窗口大小" aria-hidden="true">#</a> 窗口大小</h4>
<ul>
<li>
<p>innerWidth 获取可视窗口大小，视图区(不包含浏览器边框和工具栏)</p>
</li>
<li>
<p>innerHeight</p>
</li>
<li>
<p>outerWidth 返回浏览器自身的大小</p>
</li>
<li>
<p>outerHeight</p>
</li>
<li>
<p>resizeTo(width, height) 接收浏览器窗口的新宽度和新高度</p>
</li>
<li>
<p>resizeBy(width, height)</p>
</li>
</ul>
<h4 id="视口位置" tabindex="-1"><a class="header-anchor" href="#视口位置" aria-hidden="true">#</a> 视口位置</h4>
<ul>
<li>scroll()</li>
<li>scrollTo()</li>
<li>scrollBy()</li>
</ul>
<h3 id="location-对象" tabindex="-1"><a class="header-anchor" href="#location-对象" aria-hidden="true">#</a> Location 对象</h3>
<p>提供当前窗口中的加载的文档有关的信息和一些导航功能。既是 window 对象属性，也是 document 的对象属性</p>
<p>location 对象的主要属性：</p>
<ul>
<li>hash</li>
<li>host 服务器及端口号</li>
<li>hostname 服务器名</li>
<li>href 当前加载页面完整url</li>
<li>pathname url路径或文件名</li>
<li>port 请求的端口</li>
<li>protocol 页面使用的协议</li>
<li>search 拿到整体url参数 包括问号</li>
<li>origin url源地址</li>
</ul>
<p>location 的应用场景： 比如区分环境用host</p>
<h3 id="navigation-对象" tabindex="-1"><a class="header-anchor" href="#navigation-对象" aria-hidden="true">#</a> Navigation 对象</h3>
<p>navigation 接口表示用户代理的状态和标识，允许脚本查询它和注册自己进行一些活动,包括各种当前浏览器的信息</p>
<p>isOnline 检测当前网络是否在线</p>
<h3 id="screen-对象" tabindex="-1"><a class="header-anchor" href="#screen-对象" aria-hidden="true">#</a> screen 对象</h3>
<p>浏览器窗口外面的客户端显示器信息,比如像素宽度,像素高速.</p>
<h3 id="history-对象" tabindex="-1"><a class="header-anchor" href="#history-对象" aria-hidden="true">#</a> History 对象</h3>
<p>history 对象保存着用户上网的历史记录，从窗口被打开的那一刻算起，history 对象是用窗口的浏览历史用文档和文档状态列表的形式表示。</p>
<ul>
<li>
<p>go()</p>
</li>
<li>
<p>back()</p>
</li>
<li>
<p>forword()</p>
</li>
<li>
<p>length</p>
</li>
<li>
<p>pushState</p>
</li>
<li>
<p>onPopState</p>
</li>
<li>
<p>利用pushState和replaceState去劫持url的变化从而阻止浏览器刷新， 然后又利用popstate完成前端路由的逻辑。用vue-router时是用router.push()来实现跳转的，不是直接pushstate。router.push里面可以调用pushstate来改变url，然后再手动调用方法来更新页面，这里改变页面不需要监听popstate</p>
</li>
</ul>
<h2 id="事件捕获和冒泡机制" tabindex="-1"><a class="header-anchor" href="#事件捕获和冒泡机制" aria-hidden="true">#</a> 事件捕获和冒泡机制</h2>
<ul>
<li>捕获是从window到目标元素</li>
<li>冒泡是目标元素到window</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">12312</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token comment">//false 冒泡阶段</span>
<span class="token comment">//true 捕获阶段</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="addeventlistener执行顺序" tabindex="-1"><a class="header-anchor" href="#addeventlistener执行顺序" aria-hidden="true">#</a> addEventListener执行顺序</h3>
<ul>
<li>addEventListener先从事件捕获开始执行,也就是第三个参数为true,先从window开始,到parent,再到son</li>
<li>紧接着开始执行事件冒泡,也就是默认的false.先从子元素开始执行,然后到parent,最后到window</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<h4 id="e-target-nodename-指的是当前点击元素" tabindex="-1"><a class="header-anchor" href="#e-target-nodename-指的是当前点击元素" aria-hidden="true">#</a> <code v-pre>e.target.nodeName</code> 指的是当前点击元素</h4>
<h4 id="e-currenttarget-nodename-指的是绑定事件监听的元素" tabindex="-1"><a class="header-anchor" href="#e-currenttarget-nodename-指的是绑定事件监听的元素" aria-hidden="true">#</a> <code v-pre>e.currentTarget.nodeName</code> 指的是绑定事件监听的元素</h4>
</div>
<h3 id="详解浏览器事件捕获-冒泡" tabindex="-1"><a class="header-anchor" href="#详解浏览器事件捕获-冒泡" aria-hidden="true">#</a> 详解浏览器事件捕获，冒泡</h3>
<p>浏览器事件模型中的过程主要分为三个阶段：捕获阶段、目标阶段、冒泡阶段。</p>
<h2 id="阻止事件传播" tabindex="-1"><a class="header-anchor" href="#阻止事件传播" aria-hidden="true">#</a> 阻止事件传播</h2>
<ul>
<li>e.stopPropagation()</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个方法不只能阻止冒泡，还能阻止捕获阶段的传播。</p>
<ul>
<li>stopImmediatePropagation()
如果有多个相同类型事件的事件监听函数绑定到同一个元素，当该类型的事件触发时，它们会按照被添加的顺序执行。如果其中某个监听函数执行了 event.stopImmediatePropagation() 方法，则当前元素剩下的监听函数将不会被执行。</li>
</ul>
<h2 id="阻止默认行为" tabindex="-1"><a class="header-anchor" href="#阻止默认行为" aria-hidden="true">#</a> 阻止默认行为</h2>
<p>e.preventDefault()</p>
<p>e.preventDefault()可以阻止事件的默认行为发生，默认行为是指：点击a标签就转跳到其他页面、拖拽一个图片到浏览器会自动打开、点击表单的提交按钮会提交表单等等，因为有的时候我们并不希望发生这些事情，所以需要阻止默认行为</p>
<h2 id="事件委托-绑定事件的运用" tabindex="-1"><a class="header-anchor" href="#事件委托-绑定事件的运用" aria-hidden="true">#</a> 事件委托 绑定事件的运用</h2>
<p>常见的一个面试题可能是ul + li，点击每个li alert对应的索引，这里就写一下看看</p>
<ul>
<li>
<p>先来给每个li绑定事件</p>
</li>
<li>
<p>再来写一个事件委托的方式</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'list'</span><span class="token punctuation">)</span>
list<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> target <span class="token operator">=</span> e<span class="token punctuation">.</span>target
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>tagName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">'li'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> lilist <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token comment">//伪数组</span>
        <span class="token comment">// 伪数组不能直接用indexOf</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>lilist<span class="token punctuation">,</span> target<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">内容为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>target<span class="token punctuation">.</span>innerHtml<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,下标是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性" aria-hidden="true">#</a> 兼容性</h2>
<p>attachEvent——兼容：IE7、IE8； 不支持第三个参数来控制在哪个阶段发生，默认是绑定在冒泡阶段
addEventListener——兼容：firefox、chrome、IE、safari、opera；</p>
<h2 id="封装一个多浏览器兼容的绑定事件函数" tabindex="-1"><a class="header-anchor" href="#封装一个多浏览器兼容的绑定事件函数" aria-hidden="true">#</a> 封装一个多浏览器兼容的绑定事件函数</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">BomEvent</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>element <span class="token operator">=</span> element<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">addEvent</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//事件类型、需要执行的函数、是否捕捉</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">'on'</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">handler</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">[</span><span class="token string">'on'</span> <span class="token operator">+</span> type<span class="token punctuation">]</span> <span class="token operator">=</span> handler<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">removeEvent</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span>removeEnentListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span><span class="token function">removeEnentListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>datachEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span><span class="token function">detachEvent</span><span class="token punctuation">(</span><span class="token string">'on'</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">[</span><span class="token string">'on'</span> <span class="token operator">+</span> type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)</span>
<span class="token keyword">function</span> <span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ev<span class="token punctuation">.</span>stopPropagation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ev<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 标准w3c</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        ev<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// IE</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 取消事件的默认行为</span>
<span class="token keyword">function</span> <span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>preventDefault<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 标准w3c</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// IE</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
