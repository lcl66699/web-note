<template><div><!--
 * @Author: liuchenglong 768206581@qq.com
 * @Date: 2023-01-16 16:07:46
 * @LastEditors: liuchenglong 768206581@qq.com
 * @LastEditTime: 2023-04-13 19:35:45
 * @FilePath: /code-test/numbrun/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<hr>
<p>home: true
modules: # 指定首页展示模块</p>
<ul>
<li>bannerBrand</li>
</ul>
<h1 id="mdcontent" tabindex="-1"><a class="header-anchor" href="#mdcontent" aria-hidden="true">#</a> - MdContent</h1>
<ul>
<li>Footer</li>
</ul>
<p>banner: # banner 模块的配置
heroText: 几百前端
tagline: 几百龙的前端记录
heroImage: /homeSnow.jpg
heroImageStyle:
maxWidth: 200px
margin: 0 auto 2rem
bgImage: '/bg.svg'
bgImageStyle:
# height: 450px</p>
<p>bannerBrand: # bannerBrand 模块的配置
heroText: 前端笔记
tagline: 几百龙的前端记录
heroImage: /homeSnow.jpg
heroImageStyle:
maxWidth: '200px'
width: '100%'
display: block
margin: '0 auto 2rem'
borderRadius: '1rem'
bgImage: '/bg.svg'
buttons:
- { text: 一键 内卷 →, link: '/views/js/' }
# - { text: Default, link: '/docs/style-default-api/introduce', type: 'plain' }</p>
<p>isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
features:</p>
<ul>
<li>title: 过去
details: 开发一款看着开心、写着顺手的 vuepress 博客主题。</li>
<li>title: 当下
details: 帮助更多的朋友节省时间去用心书写内容，而不是仅仅配置一个博客去孤芳自赏。</li>
<li>title: 未来
details: 吸引更多的朋友参与到开发中来，继续强大功能。</li>
</ul>
<p>footer:</p>
<h1 id="record-域名备案文案" tabindex="-1"><a class="header-anchor" href="#record-域名备案文案" aria-hidden="true">#</a> - record: 域名备案文案</h1>
<h1 id="recordlink-域名备案地址" tabindex="-1"><a class="header-anchor" href="#recordlink-域名备案地址" aria-hidden="true">#</a> - recordLink: 域名备案地址</h1>
<h1 id="cybersecurityrecord-公安备案文案" tabindex="-1"><a class="header-anchor" href="#cybersecurityrecord-公安备案文案" aria-hidden="true">#</a> - cyberSecurityRecord: 公安备案文案</h1>
<h1 id="cybersecuritylink-公安备案地址" tabindex="-1"><a class="header-anchor" href="#cybersecuritylink-公安备案地址" aria-hidden="true">#</a> - cyberSecurityLink: 公安备案地址</h1>
<ul>
<li>startYear: 2021</li>
</ul>
<hr>
<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2>
<p><strong>npx</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
npx @vuepress-reco/theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>npm</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
<span class="token function">npm</span> <span class="token function">install</span> @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yarn</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
<span class="token function">yarn</span> global <span class="token function">add</span> @vuepress-reco/theme-cli@1.0.7
theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
