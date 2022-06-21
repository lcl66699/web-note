<template><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> git</h1>
<ol>
<li>
<p>git
Git 是目前世界上最先进的分布式版本控制系统
特点：</p>
<ol>
<li>分布式版本控制</li>
<li>非常方便的可以对比不同版本的区别</li>
<li>多人协作时，可以快速检测是否有代码冲突</li>
<li>和集中式版本控制 svn 对比，更稳定，更安全</li>
</ol>
</li>
<li>
<p>安装</p>
<ol>
<li>windows 下载安装包,安装(全部下一步)</li>
<li>因为 Git 是分布式版本控制系统，所以，每个机器都必须自报家门
<ul>
<li><code>git config --global user.name &quot;Your Name&quot;</code></li>
<li><code>git config --global user.email &quot;email@example.com&quot;</code></li>
</ul>
</li>
<li>查看 git 配置信息
<ul>
<li><code>git config --list</code>(想修改执行上面操作)</li>
</ul>
</li>
</ol>
</li>
</ol>
<div class="custom-container warning"><p class="custom-container-title">注意：</p>
<ol>
<li>如果对配置进行修改，重复上面命令</li>
<li>配置只需要执行一次</li>
</ol>
</div>
<h2 id="git-命令" tabindex="-1"><a class="header-anchor" href="#git-命令" aria-hidden="true">#</a> git 命令</h2>
<ol>
<li><code>git init</code> : 初始化 , 生成 git 仓库</li>
<li><code>git add</code> : 把文件添加到仓库(在暂存区)
<ul>
<li>可以跟的值：file.xx 某一个文件</li>
<li>. / -A 代表所有文件</li>
</ul>
</li>
<li><code>git commit -m '提示提交的说明'</code> : 把文件提交到仓库(提交到版本库)</li>
<li><code>git status</code> : 查看暂存区的工作状态</li>
<li><code>git reset HEAD &lt;file&gt;</code> : 可以把暂存区的修改撤销掉（unstage），重新放回工作区</li>
<li><code>git checkout -- file</code> : 可以丢弃工作区的修改,(可以把仓库中的文件下载到本地)</li>
<li><code>git reset --hard HEAD^</code> : 版本回退
<ul>
<li>一个&quot;^&quot;代表一层版本</li>
</ul>
</li>
<li><code>git log </code>: 查看提交记录
<ul>
<li>运行后鼠标会悬挂，输入字母'q'退出</li>
</ul>
</li>
<li><code>git reflog</code> : 查看所有历史记录</li>
<li><code>git rm</code> : 删除命令</li>
</ol>
<h2 id="git分支" tabindex="-1"><a class="header-anchor" href="#git分支" aria-hidden="true">#</a> git分支</h2>
<ol>
<li>不在源代码上直接修改，可以开启具体相同代码的分支，在分支上进行开发，开发完成后再合并到主分支即可</li>
<li><code> git checkout -b name</code> : 开启一个分支，并切换到这个分支下
<code>git branch name </code>: 开启一个分支
<code>git checkout name</code> : 切换分支</li>
<li><code>git branch</code> : 查看分支 (分支前有*符号就是当前所在分支)</li>
<li><code>git branch -a</code> : 查看所有分支，包括远程</li>
<li><code>git merge</code> : 分支合并,合并指定分支到当前分支</li>
<li>分支合并时的冲突
解决方案：1. 保存其中某一份 1. 全保存
<code>git log --graph</code> 可以看到分支合并图</li>
<li><code>git branch -d name</code> 删除分支（记得不要在当前分支下删，会删除失败）</li>
<li><code>git checkout -b [本地分支名] [origin/远程分支名]</code> 从远程仓库拉本地不存在的分支</li>
</ol>
<h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h2>
<ol>
<li><code>git tag vx.x.x</code> : 创建</li>
<li><code>git tag</code> : 查看标签</li>
<li><code>git show &lt;tagname&gt;</code> : 查看标签详情</li>
</ol>
<h2 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h2>
<ol>
<li>克隆功能
<code>git clone git@gitee.com:gavinzhulei/vue-form-making.git</code></li>
<li>本地已经有clone下来的仓库了，需要关联远程仓库（比如公司的仓库）
<code>git remote add origin https://gitee.com/numbrun/vuepress-blog.git</code>
<ul>
<li>origin 是默认，关联多个仓库的时候可以替换别的名字，比如 company</li>
</ul>
</li>
<li><code>git remote -v</code> 查看远程仓库地址</li>
<li>推送功能
本地向远程仓库推送代码： <code>git push oigin develop</code></li>
<li>拉取功能
从远程仓库把代码下载到本地 : <code>git pull company develop</code></li>
<li>标签
<ol>
<li><code>git push origin &lt;tagname&gt;</code> : 向远程仓库推送 tag</li>
<li><code>git push origin --tags</code> : 一次性推送全部尚未推送到远程的本地标签</li>
<li><code>git tag -d name</code> : 删除本地 tag</li>
<li><code>git push origin :refs/tags/name To github.com:michaelliao/learngit.git</code> :删除远程仓库中的 tag</li>
</ol>
</li>
</ol>
<h2 id="git-stash" tabindex="-1"><a class="header-anchor" href="#git-stash" aria-hidden="true">#</a> git stash</h2>
<ol>
<li><code>git stash save</code> 能够将所有未提交的修改（工作区和暂存区）保存至堆栈中，用于后续恢复当前工作目录。</li>
<li><code>git stash pop</code> 将当前stash中的内容弹出，并应用到当前分支对应的工作目录上。</li>
<li><code>git stash list</code> 所有保存的记录列表</li>
<li><code>git stash clear</code> 删除所有保存</li>
</ol>
<h2 id="我的git提交步骤" tabindex="-1"><a class="header-anchor" href="#我的git提交步骤" aria-hidden="true">#</a> 我的git提交步骤</h2>
<div class="language-git ext-git line-numbers-mode"><pre v-pre class="language-git"><code>git clone 自己的仓库地址.git
git remote add company 公司的仓库地址.git

//写完代码
git stash save
git pull company develop
git stash pop

// 有冲突解决冲突，解决完成后
git add . 
git commit -m <span class="token string">'提交的信息'</span>
git push origin develop   

//提交到自己的仓库后，在gitlab上操作->与公司仓库进行合并



</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></template>
