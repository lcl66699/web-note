<template><div><h1 id="stream" tabindex="-1"><a class="header-anchor" href="#stream" aria-hidden="true">#</a> Stream</h1>
<p>在构建较复杂的系统时，通常将其拆解为功能独立的若干部分。这些部分的接口遵循一定的规范，通过某种方式相连，以共同完成较复杂的任务。譬如，shell通过管道|连接各部分，其输入输出的规范是文本流。</p>
<p>在Node.js中，内置的Stream模块也实现了类似功能，各部分通过.pipe()连接。</p>
<p>Stream提供了以下四种类型的流：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> Stream <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'stream'</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> Readable <span class="token operator">=</span> Stream<span class="token punctuation">.</span>Readable
<span class="token keyword">var</span> Writable <span class="token operator">=</span> Stream<span class="token punctuation">.</span>Writable
<span class="token keyword">var</span> Duplex <span class="token operator">=</span> Stream<span class="token punctuation">.</span>Duplex
<span class="token keyword">var</span> Transform <span class="token operator">=</span> Stream<span class="token punctuation">.</span>Transform

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用Stream可实现数据的流式处理，如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>
<span class="token comment">// `fs.createReadStream`创建一个`Readable`对象以读取`bigFile`的内容，并输出到标准输出</span>
<span class="token comment">// 如果使用`fs.readFile`则可能由于文件过大而失败</span>
fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>bigFile<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>stdout<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="readable" tabindex="-1"><a class="header-anchor" href="#readable" aria-hidden="true">#</a> Readable</h2>
<p>创建可读流。</p>
<p>实例：流式消耗迭代器中的数据。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use strict'</span>
<span class="token keyword">const</span> Readable <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'stream'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Readable

<span class="token keyword">class</span> <span class="token class-name">ToReadable</span> <span class="token keyword">extends</span> <span class="token class-name">Readable</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">iterator</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>iterator <span class="token operator">=</span> iterator
  <span class="token punctuation">}</span>

  <span class="token comment">// 子类需要实现该方法</span>
  <span class="token comment">// 这是生产数据的逻辑</span>
  <span class="token function">_read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 数据源已枯竭，调用`push(null)`通知流</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 通过`push`方法将数据添加到流中</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">'\n'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> ToReadable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际使用时，new ToReadable(iterator)会返回一个可读流，下游可以流式的消耗迭代器中的数据。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">iterator</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">limit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>limit<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> limit <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">1e10</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> readable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ToReadable</span><span class="token punctuation">(</span>iterator<span class="token punctuation">)</span>

<span class="token comment">// 监听`data`事件，一次获取一个数据</span>
readable<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token parameter">data</span> <span class="token operator">=></span> process<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 所有数据均已读完</span>
readable<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'end'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> process<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'DONE'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上述代码，将会有100亿个随机数源源不断地写进标准输出流。</p>
<p>创建可读流时，需要继承Readable，并实现_read方法。</p>
<ul>
<li>_read方法是从底层系统读取具体数据的逻辑，即生产数据的逻辑。</li>
<li>在_read方法中，通过调用push(data)将数据放入可读流中供下游消耗。</li>
<li>在_read方法中，可以同步调用push(data)，也可以异步调用。</li>
<li>当全部数据都生产出来后，必须调用push(null)来结束可读流。</li>
<li>流一旦结束，便不能再调用push(data)添加数据。</li>
</ul>
<p>可以通过监听data事件的方式消耗可读流。</p>
<ul>
<li>在首次监听其data事件后，readable便会持续不断地调用_read()，通过触发data事件将数据输出。</li>
<li>第一次data事件会在下一个tick中触发，所以，可以安全地将数据输出前的逻辑放在事件监听后（同一个tick中）。</li>
<li>当数据全部被消耗时，会触发end事件。</li>
</ul>
<p>上面的例子中，process.stdout代表标准输出流，实际是一个可写流。下小节中介绍可写流的用法。</p>
<h2 id="writable" tabindex="-1"><a class="header-anchor" href="#writable" aria-hidden="true">#</a> Writable</h2>
<p>创建可写流。</p>
<p>前面通过继承的方式去创建一类可读流，这种方法也适用于创建一类可写流，只是需要实现的是_write(data, enc, next)方法，而不是_read()方法。</p>
<p>有些简单的情况下不需要创建一类流，而只是一个流对象，可以用如下方式去做：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Writable <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'stream'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Writable

<span class="token keyword">const</span> writable <span class="token operator">=</span> <span class="token function">Writable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 实现`_write`方法</span>
<span class="token comment">// 这是将数据写入底层的逻辑</span>
writable<span class="token punctuation">.</span><span class="token function-variable function">_write</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> enc<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 将流中的数据写入底层</span>
  process<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">// 写入完成时，调用`next()`方法通知流传入下一个数据</span>
  process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 所有数据均已写入底层</span>
writable<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'finish'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> process<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'DONE'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 将一个数据写入流中</span>
writable<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'a'</span> <span class="token operator">+</span> <span class="token string">'\n'</span><span class="token punctuation">)</span>
writable<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'b'</span> <span class="token operator">+</span> <span class="token string">'\n'</span><span class="token punctuation">)</span>
writable<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'c'</span> <span class="token operator">+</span> <span class="token string">'\n'</span><span class="token punctuation">)</span>

<span class="token comment">// 再无数据写入流时，需要调用`end`方法</span>
writable<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>上游通过调用writable.write(data)将数据写入可写流中。write()方法会调用_write()将data写入底层。</li>
<li>在_write中，当数据成功写入底层后，必须调用next(err)告诉流开始处理下一个数据。</li>
<li>next的调用既可以是同步的，也可以是异步的。</li>
<li>上游必须调用writable.end(data)来结束可写流，data是可选的。此后，不能再调用write新增数据。</li>
<li>在end方法调用后，当所有底层的写操作均完成时，会触发finish事件。</li>
</ul>
<h2 id="duplex" tabindex="-1"><a class="header-anchor" href="#duplex" aria-hidden="true">#</a> Duplex</h2>
<p>创建可读可写流。</p>
<p>Duplex实际上就是继承了Readable和Writable的一类流。 所以，一个Duplex对象既可当成可读流来使用（需要实现_read方法），也可当成可写流来使用（需要实现_write方法）。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> Duplex <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'stream'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Duplex

<span class="token keyword">var</span> duplex <span class="token operator">=</span> <span class="token function">Duplex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 可读端底层读取逻辑</span>
duplex<span class="token punctuation">.</span><span class="token function-variable function">_read</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>_readNum <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_readNum <span class="token operator">||</span> <span class="token number">0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_readNum <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">''</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_readNum<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 可写端底层写逻辑</span>
duplex<span class="token punctuation">.</span><span class="token function-variable function">_write</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">buf<span class="token punctuation">,</span> enc<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// a, b</span>
  process<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'_write '</span> <span class="token operator">+</span> buf<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'\n'</span><span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 0, 1</span>
duplex<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token parameter">data</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'ondata'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

duplex<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span>
duplex<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span>
duplex<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'x'</span><span class="token punctuation">)</span>


duplex<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中实现了_read方法，所以可以监听data事件来消耗Duplex产生的数据。 同时，又实现了_write方法，可作为下游去消耗数据。</p>
<p>因为它既可读又可写，所以称它有两端：可写端和可读端。 可写端的接口与Writable一致，作为下游来使用；可读端的接口与Readable一致，作为上游来使用。</p>
<h2 id="transform" tabindex="-1"><a class="header-anchor" href="#transform" aria-hidden="true">#</a> Transform</h2>
<p>在上面的例子中，可读流中的数据（0, 1）与可写流中的数据（’a’, ‘b’）是隔离开的，但在Transform中可写端写入的数据经变换后会自动添加到可读端。 Tranform继承自Duplex，并已经实现了_read和_write方法，同时要求用户实现一个_transform方法。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use strict'</span>

<span class="token keyword">const</span> Transform <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'stream'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Transform

<span class="token keyword">class</span> <span class="token class-name">Rotate</span> <span class="token keyword">extends</span> <span class="token class-name">Transform</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 将字母移动`n`个位置</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>offset <span class="token operator">=</span> <span class="token punctuation">(</span>n <span class="token operator">||</span> <span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">26</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 将可写端写入的数据变换后添加到可读端</span>
  <span class="token function">_transform</span><span class="token punctuation">(</span><span class="token parameter">buf<span class="token punctuation">,</span> enc<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> res <span class="token operator">=</span> buf<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> code <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">>=</span> <span class="token string">'a'</span> <span class="token operator">&amp;&amp;</span> c <span class="token operator">&lt;=</span> <span class="token string">'z'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        code <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offset
        <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">></span> <span class="token string">'z'</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          code <span class="token operator">-=</span> <span class="token number">26</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">>=</span> <span class="token string">'A'</span> <span class="token operator">&amp;&amp;</span> c <span class="token operator">&lt;=</span> <span class="token string">'Z'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        code <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offset
        <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">></span> <span class="token string">'Z'</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          code <span class="token operator">-=</span> <span class="token number">26</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>

    <span class="token comment">// 调用push方法将变换后的数据添加到可读端</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token comment">// 调用next方法准备处理下一个</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">var</span> transform <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rotate</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
transform<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token parameter">data</span> <span class="token operator">=></span> process<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
transform<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'hello, '</span><span class="token punctuation">)</span>
transform<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'world!'</span><span class="token punctuation">)</span>
transform<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2>
<p>前面几节的例子中，经常看到调用data.toString()。这个toString()的调用是必需的吗？</p>
<p>在shell中，用管道（|）连接上下游。上游输出的是文本流（标准输出流），下游输入的也是文本流（标准输入流）</p>
<p>对于可读流来说，push(data)时，data只能是String或Buffer类型，而消耗时data事件输出的数据都是Buffer类型。对于可写流来说，write(data)时，data只能是String或Buffer类型，_write(data)调用时传进来的data都是Buffer类型。</p>
<p>也就是说，流中的数据默认情况下都是Buffer类型。产生的数据一放入流中，便转成Buffer被消耗；写入的数据在传给底层写逻辑时，也被转成Buffer类型。</p>
<p>但每个构造函数都接收一个配置对象，有一个objectMode的选项，一旦设置为true，就能出现“种瓜得瓜，种豆得豆”的效果。</p>
<ol>
<li>Readable未设置objectMode时：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Readable <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'stream'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Readable

<span class="token keyword">const</span> readable <span class="token operator">=</span> <span class="token function">Readable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

readable<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span>
readable<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span>
readable<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

readable<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token parameter">data</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>Readable设置objectMode后：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Readable <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'stream'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Readable

<span class="token keyword">const</span> readable <span class="token operator">=</span> <span class="token function">Readable</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">objectMode</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

readable<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span>
readable<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span>
readable<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
readable<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

readable<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token parameter">data</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见，设置objectMode后，push(data)的数据被原样地输出了。此时，可以生产任意类型的数据。</p>
</div></template>
