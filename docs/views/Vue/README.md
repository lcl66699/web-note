# vue基础

## 安装

1. 全局安Vue脚手架工具


```
npm i -g @vue/cli
```
1.2 创建项目

```
vue create my-project
```

2. 目录结构

- src
    - assets: 放静态资源
    - static: 也是放静态资源的
    - components: 放置公共组件
    - App.vue: 入口组件
    - main.js : 入口js文件

3. Vue项目是怎么添加到页面中的main.js

   - 第一种 
    new Vue({
        render:(h)=>h(App),
        template:'<div></div>',
        el:'#app'   // el 属性指定添加到页面哪个容器中
    }) 
    - 第二种  
    new Vue({
        render:(h)=>h(App),
    }).$mount('#app')   // $mount 方法指定添加到页面哪个容器中


