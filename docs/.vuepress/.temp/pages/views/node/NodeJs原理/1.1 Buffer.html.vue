<template><h1 id="buffer" tabindex="-1"><a class="header-anchor" href="#buffer" aria-hidden="true">#</a> Buffer</h1>
<p>在讲Nodejs的Buffer之前, 先来看几个基本概念</p>
<h2 id="背景知识" tabindex="-1"><a class="header-anchor" href="#背景知识" aria-hidden="true">#</a> 背景知识</h2>
<ol>
<li>ArrayBuffer</li>
</ol>
<p>ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区。
ArrayBuffer 不能直接操作，而是要通过类型数组对象 或 DataView 对象来操作，它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。</p>
<p>你可以把它理解为一块内存, 具体存什么需要其他的声明。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span>

<span class="token comment">// 参数：length 表示要创建的 ArrayBuffer 的大小，单位为字节。</span>
<span class="token comment">// 返回值：一个指定大小的 ArrayBuffer 对象，其内容被初始化为 0。</span>
<span class="token comment">// 异常：如果 length 大于 Number.MAX_SAFE_INTEGER（>= 2 ** 53）或为负数，则抛出一个 RangeError 异常。</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>ex. 比如这段代码, 可以执行一下看看输出什么</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Int16Array</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>view<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2">
<li>Unit8Array</li>
</ol>
<p>Uint8Array 数组类型表示一个 8 位无符号整型数组，创建时内容被初始化为 0。
创建完后，可以以对象的方式或使用数组下标索引的方式引用数组中的元素。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 来自长度</span>
<span class="token keyword">var</span> uint8 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
uint8<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>uint8<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 42</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>uint8<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>uint8<span class="token punctuation">.</span><span class="token constant">BYTES_PER_ELEMENT</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>

<span class="token comment">// 来自数组</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">21</span><span class="token punctuation">,</span><span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 31</span>

<span class="token comment">// 来自另一个 TypedArray</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 21</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="3">
<li>ArrayBuffer 和 TypedArray的关系</li>
</ol>
<p>TypedArray: Unit8Array, Int32Array,Int16Array,这些都是TypedArray,
那些 Uint32Array 也好，Int16Array 也好，都是给 ArrayBuffer 提供了一个 “View”，
MDN上的原话叫做 “Multiple views on the same data”，对它们进行下标读写，最终都会反应到它所建立在的 ArrayBuffer 之上。</p>
<p>ArrayBuffer 本身只是一个 0 和 1 存放在一行里面的一个集合，ArrayBuffer 不知道第一个和第二个元素在数组中该如何分配。  // 看array-buffer.png</p>
<p>为了能提供上下文，我们需要将其封装在一个叫做 View 的东西里面。这些在数据上的 View 可以被添加进确定类型的数组，而且我们有很多种确定类型的数据可以使用。</p>
<p>3.1 例如，你可以使用一个 Int8 的确定类型数组来分离存放 8 位二进制字节。 // 看图 int8-array.png
3.2 例如，你可以使用一个无符号的 Int16 数组来分离存放 16 位二进制字节。 // 看图 unit16-array.png</p>
<ol start="4">
<li>总结</li>
</ol>
<p>总之, ArrayBuffer 基本上扮演了一个原生内存的角色.</p>
<h2 id="nodejs-buffer" tabindex="-1"><a class="header-anchor" href="#nodejs-buffer" aria-hidden="true">#</a> NodeJs Buffer</h2>
<p>Buffer 类以一种更优化、更适合 Node.js 用例的方式实现了 Uint8Array API.</p>
<p>Buffer 类的实例类似于整数数组，但 Buffer 的大小是固定的、且在 V8 堆外分配物理内存。 Buffer 的大小在被创建时确定，且无法调整。</p>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 创建一个长度为 10、且用 0 填充的 Buffer。</span>
<span class="token keyword">const</span> buf1 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">alloc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个长度为 10、且用 0x1 填充的 Buffer。 </span>
<span class="token keyword">const</span> buf2 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">alloc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个长度为 10、且未初始化的 Buffer。</span>
<span class="token comment">// 这个方法比调用 Buffer.alloc() 更快，</span>
<span class="token comment">// 但返回的 Buffer 实例可能包含旧数据，</span>
<span class="token comment">// 因此需要使用 fill() 或 write() 重写。</span>
<span class="token keyword">const</span> buf3 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">allocUnsafe</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。</span>
<span class="token keyword">const</span> buf4 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个包含 UTF-8 字节  的 Buffer。</span>
<span class="token keyword">const</span> buf5 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">'tést'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h4 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> tips</h4>
<ol>
<li>当调用 Buffer.allocUnsafe() 时，被分配的内存段是未初始化的（没有用 0 填充）。</li>
</ol>
<p>虽然这样的设计使得内存的分配非常快，但已分配的内存段可能包含潜在的敏感旧数据。 使用通过 Buffer.allocUnsafe() 创建的没有被完全重写内存的 Buffer ，在 Buffer内存可读的情况下，可能泄露它的旧数据。
虽然使用 Buffer.allocUnsafe() 有明显的性能优势，但必须额外小心，以避免给应用程序引入安全漏洞。</p>
<h3 id="buffer-与字符编码" tabindex="-1"><a class="header-anchor" href="#buffer-与字符编码" aria-hidden="true">#</a> Buffer 与字符编码</h3>
<p>Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。 通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> buf <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">,</span> <span class="token string">'ascii'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>

<span class="token comment">// 输出 68656c6c6f20776f726c64</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">'hex'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出 aGVsbG8gd29ybGQ=</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">'base64'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Node.js 目前支持的字符编码包括：</p>
<ol>
<li>'ascii' - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。</li>
<li>'utf8' - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。</li>
<li>'utf16le' - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。</li>
<li>'ucs2' - 'utf16le' 的别名。</li>
<li>'base64' - Base64 编码。当从字符串创建 Buffer 时，按照 RFC4648 第 5 章的规定，这种编码也将正确地接受 “URL 与文件名安全字母表”。</li>
<li>'latin1' - 一种把 Buffer 编码成一字节编码的字符串的方式（由 IANA 定义在 RFC1345 第 63 页，用作 Latin-1 补充块与 C0/C1 控制码）。</li>
<li>'binary' - 'latin1' 的别名。</li>
<li>'hex' - 将每个字节编码为两个十六进制字符。</li>
</ol>
<h3 id="buffer-内存管理" tabindex="-1"><a class="header-anchor" href="#buffer-内存管理" aria-hidden="true">#</a> Buffer 内存管理</h3>
<p>在介绍 Buffer 内存管理之前，我们要先来介绍一下 Buffer 内部的 8K 内存池。</p>
<h4 id="_8k-内存池" tabindex="-1"><a class="header-anchor" href="#_8k-内存池" aria-hidden="true">#</a> 8K 内存池</h4>
<ol>
<li>在 Node.js 应用程序启动时，为了方便地、高效地使用 Buffer，会创建一个大小为 8K 的内存池。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Buffer<span class="token punctuation">.</span>poolSize <span class="token operator">=</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span> <span class="token comment">// 8K</span>
<span class="token keyword">var</span> poolSize<span class="token punctuation">,</span> poolOffset<span class="token punctuation">,</span> allocPool<span class="token punctuation">;</span>

<span class="token comment">// 创建内存池</span>
<span class="token keyword">function</span> <span class="token function">createPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  poolSize <span class="token operator">=</span> Buffer<span class="token punctuation">.</span>poolSize<span class="token punctuation">;</span>
  allocPool <span class="token operator">=</span> <span class="token function">createUnsafeArrayBuffer</span><span class="token punctuation">(</span>poolSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
  poolOffset <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">createPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="2">
<li>在 createPool() 函数中，通过调用 createUnsafeArrayBuffer() 函数来创建 poolSize（即8K）的 ArrayBuffer 对象。createUnsafeArrayBuffer() 函数的实现如下：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createUnsafeArrayBuffer</span><span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  zeroFill<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建指定size大小的ArrayBuffer对象，其内容被初始化为0。</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    zeroFill<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>这里你只需知道 Node.js 应用程序启动时，内部有个 8K 的内存池即可。</p>
<ol start="3">
<li>那接下来我们要介绍哪个对象呢？在前面的预备知识部分，我们简单介绍了 ArrayBuffer 和 Unit8Array 相关的基础知识，而 ArrayBuffer 的应用在 8K 的内存池部分的已经介绍过了。那接下来当然要轮到 Unit8Array 了，我们再来回顾一下它的语法：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Uint8Array</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Uint8Array</span><span class="token punctuation">(</span>typedArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Uint8Array</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Uint8Array</span><span class="token punctuation">(</span>buffer <span class="token punctuation">[</span><span class="token punctuation">,</span> byteOffset <span class="token punctuation">[</span><span class="token punctuation">,</span> length<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>其实除了 Buffer 类外，还有一个 FastBuffer 类，该类的声明如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">FastBuffer</span> <span class="token keyword">extends</span> <span class="token class-name">Uint8Array</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> arg3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> arg3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>是不是知道 Uint8Array 用在哪里了，在 FastBuffer 类的构造函数中，通过调用 Uint8Array(buffer [, byteOffset [, length]]) 来创建 Uint8Array 对象。</p>
<ol start="4">
<li>那么现在问题来了，FastBuffer 有什么用？它和 Buffer 类有什么关系？带着这两个问题，我们先来一起分析下面的简单示例：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> buf <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">'semlinker'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;Buffer 73 65 6d 6c 69 6e 6b 65 72></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>为什么输出了一串数字, 我们创建的字符串呢? 来看一下源码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/</span>
Buffer<span class="token punctuation">.</span><span class="token function-variable function">from</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">from</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> encodingOrOffset<span class="token punctuation">,</span> length</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">fromString</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> encodingOrOffset<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 处理其它数据类型，省略异常处理等其它代码</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isAnyArrayBuffer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">fromArrayBuffer</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> encodingOrOffset<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token function">fromObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>可以看出 Buffer.from() 工厂函数，支持基于多种数据类型（string、array、buffer 等）创建 Buffer 对象。对于字符串类型的数据，内部调用 fromString(value, encodingOrOffset) 方法来创建 Buffer 对象。</p>
<p>是时候来会一会 fromString() 方法了，它内部实现如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fromString</span><span class="token punctuation">(</span><span class="token parameter">string<span class="token punctuation">,</span> encoding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> length<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> encoding <span class="token operator">!==</span> <span class="token string">"string"</span> <span class="token operator">||</span> encoding<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>string<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">FastBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 若未设置编码，则默认使用utf8编码。</span>
    encoding <span class="token operator">=</span> <span class="token string">"utf8"</span><span class="token punctuation">;</span> 
    <span class="token comment">// 使用 buffer binding 提供的方法计算string的长度</span>
    length <span class="token operator">=</span> <span class="token function">byteLengthUtf8</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
	<span class="token comment">// 基于指定的 encoding 计算string的长度</span>
    length <span class="token operator">=</span> <span class="token function">byteLength</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> encoding<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">errors<span class="token punctuation">.</span>TypeError</span><span class="token punctuation">(</span><span class="token string">"ERR_UNKNOWN_ENCODING"</span><span class="token punctuation">,</span> encoding<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>string<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">FastBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 当字符串所需字节数大于4KB，则直接进行内存分配</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">>=</span> Buffer<span class="token punctuation">.</span>poolSize <span class="token operator">>>></span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment">// 使用 buffer binding 提供的方法，创建buffer对象</span>
    <span class="token keyword">return</span> <span class="token function">createFromString</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> encoding<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 当剩余的空间小于所需的字节长度，则先重新申请8K内存</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">></span> poolSize <span class="token operator">-</span> poolOffset<span class="token punctuation">)</span>
    <span class="token comment">// allocPool = createUnsafeArrayBuffer(8K); poolOffset = 0;</span>
    <span class="token function">createPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token comment">// 创建 FastBuffer 对象，并写入数据。</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FastBuffer</span><span class="token punctuation">(</span>allocPool<span class="token punctuation">,</span> poolOffset<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> actual <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> encoding<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>actual <span class="token operator">!==</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// byteLength() may overestimate. That's a rare case, though.</span>
    b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FastBuffer</span><span class="token punctuation">(</span>allocPool<span class="token punctuation">,</span> poolOffset<span class="token punctuation">,</span> actual<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 更新pool的偏移</span>
  poolOffset <span class="token operator">+=</span> actual<span class="token punctuation">;</span>
  <span class="token function">alignPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>所以我们得到这样的结论</p>
<ol>
<li>当未设置编码的时候，默认使用 utf8 编码；</li>
<li>当字符串所需字节数大于4KB，则直接进行内存分配；</li>
<li>当字符串所需字节数小于4KB，但超过预分配的 8K 内存池的剩余空间，则重新申请 8K 的内存池；</li>
<li>调用 new FastBuffer(allocPool, poolOffset, length) 创建 FastBuffer 对象，进行数据存储，数据成功保存后，会进行长度校验、更新 poolOffset 偏移量和字节对齐等操作。</li>
</ol>
</template>
