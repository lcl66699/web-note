<template><div><h1 id="常见浏览器-js-对象常见-api-及用法" tabindex="-1"><a class="header-anchor" href="#常见浏览器-js-对象常见-api-及用法" aria-hidden="true">#</a> 常见浏览器 JS 对象常见  API 及用法</h1>
<p>https://segmentfault.com/a/1190000014212576</p>
<h2 id="什么是浏览器对象模型" tabindex="-1"><a class="header-anchor" href="#什么是浏览器对象模型" aria-hidden="true">#</a> 什么是浏览器对象模型</h2>
<p>BOM ：Browser Object Model（浏览器对象模型）,浏览器模型提供了独立于内容的、可以与浏览器窗口进行滑动的对象结构，就是浏览器提供的 API
其主要对象有：</p>
<ol>
<li>window 对象——BOM 的核心，是 js 访问浏览器的接口，也是 ES 规定的 Global 对象</li>
<li>location 对象：提供当前窗口中的加载的文档有关的信息和一些导航功能。既是 window 对象属 性，也是 document 的对象属性</li>
<li>navigation 对象：获取浏览器的系统信息</li>
<li>screen 对象：用来表示浏览器窗口外部的显示器的信息等</li>
<li>history 对象：保存用户上网的历史信息</li>
</ol>
<h2 id="window-对象" tabindex="-1"><a class="header-anchor" href="#window-对象" aria-hidden="true">#</a> Window 对象</h2>
<p>windows 对象是整个浏览器对象模型的核心，其扮演着既是接口又是全局对象的角色</p>
<p>alert()	
confirm()
prompt()
open()	
onerror()
setTimeout()
setInterval()</p>
<ul>
<li>窗口位置</li>
</ul>
<p>screenLeft
screenTop
screenX	
screenY	
moveBy(x,y)
moveTo(x,y)</p>
<ul>
<li>窗口大小</li>
</ul>
<p>innerWidth
innerHeight</p>
<p>outerWidth
outerHeight</p>
<p>resizeTo(width, height)
resizeBy(width, height)</p>
<ul>
<li>定时器</li>
</ul>
<p>setTimeout
setInterval</p>
<h2 id="location-对象" tabindex="-1"><a class="header-anchor" href="#location-对象" aria-hidden="true">#</a> Location 对象</h2>
<p>提供当前窗口中的加载的文档有关的信息和一些导航功能。既是 window 对象属性，也是 document 的对象属性</p>
<p>location 对象的主要属性：
hash
host
hostname
href
pathname
port
protocol
search</p>
<p>location 的应用场景： 讲课时补充</p>
<h2 id="navigation-对象" tabindex="-1"><a class="header-anchor" href="#navigation-对象" aria-hidden="true">#</a> Navigation 对象</h2>
<p>navigation 接口表示用户代理的状态和标识，允许脚本查询它和注册自己进行一些活动</p>
<h2 id="history-对象" tabindex="-1"><a class="header-anchor" href="#history-对象" aria-hidden="true">#</a> History 对象</h2>
<p>history 对象保存着用户上网的历史记录，从窗口被打开的那一刻算起，history 对象是用窗口的浏览历史用文档和文档状态列表的形式表示。</p>
<p>go()
back()
forword()
length</p>
</div></template>
