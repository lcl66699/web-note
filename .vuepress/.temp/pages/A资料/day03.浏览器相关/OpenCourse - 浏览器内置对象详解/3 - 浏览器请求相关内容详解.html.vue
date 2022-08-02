<template><div><h1 id="ajax-及-fetch-api-详解" tabindex="-1"><a class="header-anchor" href="#ajax-及-fetch-api-详解" aria-hidden="true">#</a> ajax  及 fetch API 详解</h1>
<ol>
<li>
<p>XMLHTTPRequest</p>
</li>
<li>
<p>fetch</p>
</li>
</ol>
<ul>
<li>默认不带cookie</li>
<li>错误不会reject</li>
<li>不支持超时设置</li>
<li>需要借用AbortController中止fetch</li>
</ul>
<h1 id="常见的浏览器请求-响应头-错误码解析" tabindex="-1"><a class="header-anchor" href="#常见的浏览器请求-响应头-错误码解析" aria-hidden="true">#</a> 常见的浏览器请求/响应头/错误码解析</h1>
<h2 id="request-header" tabindex="-1"><a class="header-anchor" href="#request-header" aria-hidden="true">#</a> request header</h2>
<p>:method: GET
:path:
:scheme: https
accept: application/json, text/plain, <em>/</em>
accept-encoding: gzip, deflate, br
cache-control: no-cache
cookie: deviceId=c12;
origin:
referer:
user-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1</p>
<h2 id="response-header" tabindex="-1"><a class="header-anchor" href="#response-header" aria-hidden="true">#</a> response header</h2>
<p>access-control-allow-credentials: true
access-control-allow-origin:
content-encoding: gzip
content-type: application/json;charset=UTF-8
date: Thu, 06 Aug 2020 08:15:05 GMT
set-cookie: sess=QvrAQ0Cq+EcDQQPTer2X;
status: 200</p>
<h2 id="status" tabindex="-1"><a class="header-anchor" href="#status" aria-hidden="true">#</a> status</h2>
<p>200	get 成功
201 post 成功
301 永久重定向
302	临时重定向
304 协商缓存 服务器文件未修改
400	客户端请求有语法错误，不能被服务器识别
403	服务器受到请求，但是拒绝提供服务，可能是跨域
404	请求的资源不存在
405 请求的method不允许
500	服务器发生不可预期的错误</p>
<h1 id="发送请求的示例-以及封装一个多浏览器兼容的请求函数" tabindex="-1"><a class="header-anchor" href="#发送请求的示例-以及封装一个多浏览器兼容的请求函数" aria-hidden="true">#</a> 发送请求的示例，以及封装一个多浏览器兼容的请求函数</h1>
<p>看代码</p>
</div></template>
