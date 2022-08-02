<template><div><h1 id="详解浏览器事件捕获-冒泡" tabindex="-1"><a class="header-anchor" href="#详解浏览器事件捕获-冒泡" aria-hidden="true">#</a> 详解浏览器事件捕获，冒泡</h1>
<p>浏览器事件模型中的过程主要分为三个阶段：捕获阶段、目标阶段、冒泡阶段。
这里先看一下这张经典的图</p>
<h2 id="第三个参数" tabindex="-1"><a class="header-anchor" href="#第三个参数" aria-hidden="true">#</a> 第三个参数</h2>
<p>这里要注意addEventListener的第三个参数, 如果为true，就是代表在捕获阶段执行。如果为false，就是在冒泡阶段进行
空口这么说可能不好理解，咱们来看一下代码。</p>
<h2 id="阻止事件传播" tabindex="-1"><a class="header-anchor" href="#阻止事件传播" aria-hidden="true">#</a> 阻止事件传播</h2>
<ul>
<li>e.stopPropagation()</li>
</ul>
<p>大家经常听到的可能是阻止冒泡，实际上这个方法不只能阻止冒泡，还能阻止捕获阶段的传播。</p>
<ul>
<li>stopImmediatePropagation()
如果有多个相同类型事件的事件监听函数绑定到同一个元素，当该类型的事件触发时，它们会按照被添加的顺序执行。如果其中某个监听函数执行了 event.stopImmediatePropagation() 方法，则当前元素剩下的监听函数将不会被执行。</li>
</ul>
<p>看一下代码</p>
<h2 id="阻止默认行为" tabindex="-1"><a class="header-anchor" href="#阻止默认行为" aria-hidden="true">#</a> 阻止默认行为</h2>
<p>e.preventDefault()</p>
<p>e.preventDefault()可以阻止事件的默认行为发生，默认行为是指：点击a标签就转跳到其他页面、拖拽一个图片到浏览器会自动打开、点击表单的提交按钮会提交表单等等，因为有的时候我们并不希望发生这些事情，所以需要阻止默认行为</p>
<p>看一下代码</p>
<h2 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性" aria-hidden="true">#</a> 兼容性</h2>
<p>attachEvent——兼容：IE7、IE8； 不支持第三个参数来控制在哪个阶段发生，默认是绑定在冒泡阶段
addEventListener——兼容：firefox、chrome、IE、safari、opera；</p>
<h1 id="绑定事件的运用-以及封装一个多浏览器兼容的绑定事件函数" tabindex="-1"><a class="header-anchor" href="#绑定事件的运用-以及封装一个多浏览器兼容的绑定事件函数" aria-hidden="true">#</a> 绑定事件的运用，以及封装一个多浏览器兼容的绑定事件函数</h1>
<p>大家常见的一个面试题可能是ul + li，点击每个li alert对应的索引，这里就给大家来写一下看看</p>
<ul>
<li>
<p>先来给每个li绑定事件</p>
</li>
<li>
<p>再来写一个事件委托的方式</p>
</li>
</ul>
<h2 id="封装一个多浏览器兼容的绑定事件函数" tabindex="-1"><a class="header-anchor" href="#封装一个多浏览器兼容的绑定事件函数" aria-hidden="true">#</a> 封装一个多浏览器兼容的绑定事件函数</h2>
</div></template>
