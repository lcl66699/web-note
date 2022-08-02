<template><div><h1 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h1>
<h2 id="服务器" tabindex="-1"><a class="header-anchor" href="#服务器" aria-hidden="true">#</a> 服务器</h2>
<p>谈到部署, 肯定得先有一个自己的服务器. 因为咱们是上课教学, 我就随便找个便宜的演示一下..</p>
<p>https://www.aliyun.com/daily-act/ecs/activity_selection?userCode=fyhp3q4t</p>
<p>选ecs服务器, 按量付费/月/年 都行, 随便选个镜像即可.</p>
<h2 id="linux安装nodejs" tabindex="-1"><a class="header-anchor" href="#linux安装nodejs" aria-hidden="true">#</a> Linux安装Nodejs</h2>
<ol>
<li>下载安装包</li>
</ol>
<p><code v-pre>wget https://nodejs.org/dist/v10.9.0/node-v10.9.0-linux-x64.tar.xz </code></p>
<ol start="2">
<li>解压</li>
</ol>
<p><code v-pre>tar xf  node-v10.9.0-linux-x64.tar.xz </code></p>
<ol start="3">
<li>设置软链接</li>
</ol>
<p><code v-pre>ln -s /root/node-v10.9.0-linux-x64/bin/node   /usr/local/bin/node</code>
<code v-pre>ln -s /root/node-v10.9.0-linux-x64/bin/npm   /usr/local/bin/npm</code></p>
<ol start="4">
<li>查看Node版本和npm版本</li>
</ol>
<p><code v-pre>node -v</code>
<code v-pre>npm -v</code></p>
<ol start="5">
<li>设置npm源</li>
</ol>
<p><code v-pre>npm config set registry  https://registry.npm.taobao.org</code></p>
<ol start="6">
<li>服务器安装pm2</li>
</ol>
<p><code v-pre>npm install -g pm2</code>
<code v-pre>ln -s /root/node-v10.9.0-linux-x64/bin/pm2 /usr/local/bin/</code></p>
<ol start="7">
<li>配置ssh</li>
</ol>
<ul>
<li>本地生成秘钥对: <code v-pre>ssh-keygen -t rsa</code>  demo_id_rsa</li>
<li>将公钥放到服务器上: <code v-pre>scp ~/.ssh/demo_id_rsa.pub root@39.107.238.161:/root/.ssh/authorized_keys</code></li>
<li>修改ssh配置 <code v-pre>vi ~/.ssh/config</code></li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Host lubai
HostName 39.107.238.161
User root
Port 22
IdentityFile ~/.ssh/demo_id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>服务器上修改ssh配置 <code v-pre>vim /etc/ssh/sshd_config</code></li>
</ul>
<p>PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys</p>
<ul>
<li>最后就可以ssh登录了! <code v-pre>ssh lubai</code></li>
</ul>
<ol start="8">
<li>将本地代码同步到服务器</li>
</ol>
<p><code v-pre>rsync -avzp -e &quot;ssh&quot; ./Internet/ lubai:/root/app</code></p>
<ol start="9">
<li>服务器上启动http</li>
</ol>
<p><code v-pre>pm2 start /root/app/http-server.js</code></p>
<ol start="10">
<li>本地修改发布命令</li>
</ol>
<p>10.1 新建deploy.sh文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">HOST</span><span class="token operator">=</span>lubai

<span class="token function">rsync</span> -avzp -e <span class="token string">"ssh"</span> ./Internet/ <span class="token variable">$HOST</span>:/root/app
<span class="token function">ssh</span> <span class="token variable">$HOST</span> <span class="token string">"pm2 restart /root/app/http-server.js"</span>

<span class="token builtin class-name">echo</span> <span class="token string">'deploy success'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>10.2 初始化npm命令</p>
<p><code v-pre>npm init</code>
新增scripts &quot;deploy&quot;: &quot;./deploy.sh&quot;</p>
<p>10.3 发布</p>
<p><code v-pre>npm run deploy</code></p>
<ol start="11">
<li>修改http-server的监听host</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> host <span class="token operator">=</span> <span class="token string">'0.0.0.0'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">80</span><span class="token punctuation">;</span>
http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/plain'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'Hello World'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> host<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Server running at http://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>host<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12">
<li>ECS安全组添加80端口</li>
<li>查看服务器上是否已正常监听80端口</li>
</ol>
<p><code v-pre>netstat -tpln</code></p>
<ol start="14">
<li>通过ip+端口访问</li>
</ol>
<p>39.107.238.161:80</p>
</div></template>
