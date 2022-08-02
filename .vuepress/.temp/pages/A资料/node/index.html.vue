<template><div><h1 id="使用node-js实现一个带cli的爬虫应用" tabindex="-1"><a class="header-anchor" href="#使用node-js实现一个带cli的爬虫应用" aria-hidden="true">#</a> 使用Node.js实现一个带CLI的爬虫应用</h1>
<h2 id="写在前面" tabindex="-1"><a class="header-anchor" href="#写在前面" aria-hidden="true">#</a> 写在前面</h2>
<p>今天在线直播的课我们学习了如何通过命令行+爬虫来下载百度图片</p>
<p>也经历了非常多的反爬策略以及在线debug.</p>
<p>后面的下载视频就留给同学们做课后作业了, 这里给大家的代码是完整的包含视频的, 同学们可以先自己写着试试, 不行的话再来看代码.</p>
<p>然后因为下载视频和下载图片有很多共同之处, 所以我提取了很多方法到common.js里,</p>
<p>一步步的操作都在step.md里, 大家可以赏脸看一下~</p>
<h2 id="什么是爬虫" tabindex="-1"><a class="header-anchor" href="#什么是爬虫" aria-hidden="true">#</a> 什么是爬虫?</h2>
<p>是一种用来自动浏览万维网的网络机器人.</p>
<ul>
<li>比如网络引擎使用爬虫更新自身的网站内容或其对其他网站的索引;</li>
<li>比如个人使用爬虫去获取网站的内容</li>
</ul>
<p>其实归根结底, 都是利用程序在服务端来替自己访问网站, 更快更大范围的获取自己想要的内容.</p>
<h2 id="爬虫可以肆无忌惮的爬取所有网站内容吗" tabindex="-1"><a class="header-anchor" href="#爬虫可以肆无忌惮的爬取所有网站内容吗" aria-hidden="true">#</a> 爬虫可以肆无忌惮的爬取所有网站内容吗？</h2>
<p>不是的.</p>
<p>可以想一下, 爬虫访问网站的时候其实也会消耗网站的浏览, 占用网站的带宽, 占用网站服务器的资源对吧?</p>
<p>那如果爬虫可以毫无限制地访问所有网站的所有内容, 那可能对于小网站来说, 一个恶意的爬虫就能消耗掉大量的资源, 让网站不堪重负.</p>
<p>所以这里就要提到一个叫做robots.txt的文件了.</p>
<ol>
<li>robots.txt是放在哪里的文件?</li>
</ol>
<p>存在网站根目录下, 是一个ASCII编码的文本文件.</p>
<ol start="2">
<li>robots.txt的作用是什么?</li>
</ol>
<p>它来告诉爬虫, 这个网站里哪些内容你能爬, 哪些不允许你爬.</p>
<ol start="3">
<li>允许所有爬虫应该怎么写?</li>
</ol>
<p>User-agent: *
Disallow:</p>
<p>或者</p>
<p>User-agent: *
Allow:/</p>
<ol start="4">
<li>允许指定爬虫应该怎么写?</li>
</ol>
<p>User-agent: name_spider
Allow:</p>
<ol start="5">
<li>拦截所有机器人?</li>
</ol>
<p>User-agent: *
Disallow: /</p>
<ol start="6">
<li>禁止访问特定目录?</li>
</ol>
<p>User-agent: *
Disallow: /cgi-bin/
Disallow: /images/
Disallow: /tmp/
Disallow: /private/</p>
<h2 id="应该怎样开始一个爬虫应用" tabindex="-1"><a class="header-anchor" href="#应该怎样开始一个爬虫应用" aria-hidden="true">#</a> 应该怎样开始一个爬虫应用?</h2>
<ol>
<li>确定要爬去的网站/页面</li>
</ol>
<p>www.baidu.com</p>
<p>下载 视频/图片</p>
<p>视频页, 需要点击进入每一个视频Item, 才能进入视频播放页, 拿到视频链接</p>
<ol start="2">
<li>
<p>分析网页的数据和DOM结构</p>
</li>
<li>
<p>确定技术选型</p>
<ul>
<li>
<p>模拟浏览器端请求</p>
<ul>
<li>request (已经不再维护了)</li>
<li>superagent ✅</li>
</ul>
</li>
<li>
<p>解析DOM</p>
<ul>
<li>cheerio (类似于Jquery的API) ✅</li>
<li>jsdom</li>
</ul>
</li>
</ul>
</li>
<li>
<p>gogogogogogogo!!!</p>
</li>
</ol>
<h2 id="搭配cli食用" tabindex="-1"><a class="header-anchor" href="#搭配cli食用" aria-hidden="true">#</a> 搭配CLI食用?</h2>
<p>支持交互式命令行, 可以选择百度知道/视频/图片, 然后输入关键字, 最后开始执行程序</p>
</div></template>
