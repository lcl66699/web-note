<template><h1 id="全局对象解析" tabindex="-1"><a class="header-anchor" href="#全局对象解析" aria-hidden="true">#</a> 全局对象解析</h1>
<p>JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。</p>
<p>在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。</p>
<p>在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。</p>
<h2 id="全局对象和全局变量" tabindex="-1"><a class="header-anchor" href="#全局对象和全局变量" aria-hidden="true">#</a> 全局对象和全局变量</h2>
<p>global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条 件的变量是全局变量：</p>
<p>在最外层定义的变量；
全局对象的属性；
隐式定义的变量（未定义直接赋值的变量）。
当你定义一个全局变量时，这个变量同时也会成为全局对象的属性，反之亦然。需要注 意的是，在 Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文。</p>
<p>注意： 永远使用 var 定义变量以避免引入全局变量，因为全局变量会污染 命名空间，提高代码的耦合风险。</p>
<h2 id="filename" tabindex="-1"><a class="header-anchor" href="#filename" aria-hidden="true">#</a> __filename</h2>
<p>__filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> __filename <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="dirname" tabindex="-1"><a class="header-anchor" href="#dirname" aria-hidden="true">#</a> __dirname</h2>
<p>__dirname 表示当前执行脚本所在的目录。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> __dirname <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="settimeout-cb-ms" tabindex="-1"><a class="header-anchor" href="#settimeout-cb-ms" aria-hidden="true">#</a> setTimeout(cb, ms)</h2>
<p>setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。</p>
<p>返回一个代表定时器的句柄值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">printHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">"Hello, World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 两秒后执行以上函数</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span>printHello<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="cleartimeout" tabindex="-1"><a class="header-anchor" href="#cleartimeout" aria-hidden="true">#</a> clearTimeout</h2>
<h2 id="setinterval" tabindex="-1"><a class="header-anchor" href="#setinterval" aria-hidden="true">#</a> setInterval</h2>
<h2 id="clearinterval" tabindex="-1"><a class="header-anchor" href="#clearinterval" aria-hidden="true">#</a> clearInterval</h2>
<h2 id="console" tabindex="-1"><a class="header-anchor" href="#console" aria-hidden="true">#</a> console</h2>
<h2 id="process" tabindex="-1"><a class="header-anchor" href="#process" aria-hidden="true">#</a> process</h2>
<p>process 是一个全局变量，即 global 对象的属性。</p>
<p>它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。通常在你写本地命令行程序的时候，少不了要 和它打交道。下面将会介绍 process 对象的一些最常用的成员方法。</p>
<ol>
<li>
<p>exit
当进程准备退出时触发。</p>
</li>
<li>
<p>beforeExit
当 node 清空事件循环，并且没有其他安排时触发这个事件。通常来说，当没有进程安排时 node 退出，但是 ‘beforeExit’ 的监听器可以异步调用，这样 node 就会继续执行。</p>
</li>
<li>
<p>uncaughtException
当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，默认的操作（打印堆栈跟踪信息并退出）就不会发生。</p>
</li>
<li>
<p>Signal 事件
当进程接收到信号时就触发。信号列表详见标准的 POSIX 信号名，如 SIGINT、SIGUSR1 等。</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'exit'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 以下代码setTimeout永远不会执行，已经退出了</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"该代码不会执行"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'退出码为:'</span><span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"程序执行结束"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="退出的状态码" tabindex="-1"><a class="header-anchor" href="#退出的状态码" aria-hidden="true">#</a> 退出的状态码</h3>
<ol>
<li>Uncaught Fatal Exception
有未捕获异常，并且没有被域或 uncaughtException 处理函数处理。</li>
</ol>
<p>3	Internal JavaScript Parse Error
JavaScript的源码启动 Node 进程时引起解析错误。非常罕见，仅会在开发 Node 时才会有。</p>
<p>4	Internal JavaScript Evaluation Failure
JavaScript 的源码启动 Node 进程，评估时返回函数失败。非常罕见，仅会在开发 Node 时才会有。</p>
<p>5	Fatal Error
V8 里致命的不可恢复的错误。通常会打印到 stderr ，内容为： FATAL ERROR</p>
<p>6	Non-function Internal Exception Handler
未捕获异常，内部异常处理函数不知为何设置为on-function，并且不能被调用。</p>
<p>7	Internal Exception Handler Run-Time Failure
未捕获的异常， 并且异常处理函数处理时自己抛出了异常。例如，如果 process.on(‘uncaughtException’) 或 domain.on(‘error’) 抛出了异常。</p>
<p>9	Invalid Argument
可能是给了未知的参数，或者给的参数没有值。</p>
<p>10	Internal JavaScript Run-Time Failure
JavaScript的源码启动 Node 进程时抛出错误，非常罕见，仅会在开发 Node 时才会有。</p>
<p>12	Invalid Debug Argument
设置了参数–debug 和/或 –debug-brk，但是选择了错误端口。</p>
<blockquote>
<p>128	Signal Exits
如果 Node 接收到致命信号，比如SIGKILL 或 SIGHUP，那么退出代码就是128 加信号代码。这是标准的 Unix 做法，退出信号代码放在高位。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输出到终端</span>
process<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span> <span class="token operator">+</span> <span class="token string">"\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// 通过参数读取</span>
process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token string">': '</span> <span class="token operator">+</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// 获取执行路局</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>execPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// 平台信息</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>platform<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="看看这段代码输出什么" tabindex="-1"><a class="header-anchor" href="#看看这段代码输出什么" aria-hidden="true">#</a> 看看这段代码输出什么</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// this in NodeJS global scope is the current module.exports object, not the global object.</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// {}</span>

module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// { foo:5 }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
