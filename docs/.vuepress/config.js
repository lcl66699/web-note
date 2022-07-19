module.exports = {
  base: '/', //目标地址是：https://openhacking.github.io/vuepress-template/，所以需要配置base地址后缀
  // base: '/vuepress-blog/', //目标地址是：https://openhacking.github.io/vuepress-template/，所以需要配置base地址后缀
  // title: "橘子海",
  title: "前端笔记",
  description: "听橘子海，炫沙糖桔",
  footerHtml: true,
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }]
  ],
  plugins: [
    ['@vuepress/plugin-back-to-top'],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
  themeConfig: {
    logo: '/orange.png',//导航栏log Public 文件路径
    displayAllHeaders: false, // 显示所有页面的标题链接-默认值：false
    smoothScroll: true,//页面滚动效果
    // Service Worker 的配置
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新"
      }
    },
    navbar: [
      { text: 'js', link: '/views/js/' },
      { text: '网络', link: '/views/Http/' },
      { text: '工程化', link: '/views/engineering/' },
      {
        text: 'Vue',
        children: [
          { text: 'vue2基础', link: '/views/Vue/vue2-easy/' }, // 可不写后缀 .md
          { text: 'vue2进阶', link: '/views/Vue/vue2-mid/' },
          { text: 'vue-cli', link: '/views/Vue/vue-cli/' },
          { text: 'vue-理解', link: '/views/Vue/vue-hard/' },
          { text: 'vuex', link: '/views/Vue/vuex/' },
          { text: 'vue-router', link: '/views/Vue/vue-router/' },
        ]
      },
      {
        text: 'React',
        children: [
          { text: 'React基础', link: '/views/React/' }, // 可不写后缀 .md
        ]
      },
      {
        text: 'angular',link: '/views/angular/' 
        // children: [
        //   { text: 'angular', link: '/views/angular/' }, // 可不写后缀 .md
        // ]
      },
      { text: 'nodejs', link: '/views/nodejs/' },
      { text: '算法', link: '/views/Algorithm/' },
      { text: '个人空间', link: 'https://blog.numb.run' },
      {
        text: '其他',
        children: [
          { text: 'git', link: '/views/other/Git/', ariaLabel: '其他' },
          { text: '性能优化', link: '/views/other/performance/', ariaLabel: '其他' },
          { text: 'web安全', link: '/views/other/web-safe/', ariaLabel: '其他' },
          { text: 'typescript', link: '/views/other/typescript/', ariaLabel: '其他' },
          { text: '微前端', link: '/views/other/micro-web/', ariaLabel: '其他' },
          { text: '面试题', link: '/views/other/questions/', ariaLabel: '其他' },
          { text: '网络面试题', link: '/views/other/questions2/', ariaLabel: '其他' },
          { text: '我的CSDN', link: 'https://blog.csdn.net/qq_38594056?type=blog' },
        ],
      },
    ],
    sidebar: {
      //算法
      '/views/Algorithm/': [
        '',
      ],
      '/views/nodejs/': [
        '',
      ],
      //js
      '/views/js/': [
        'readme.md',
        'js模块化.md',
        'Es6.md',
        'Promise.md',
        'this指针-闭包-作用域.md',
        '面向对象与原型,原型链.md',
        'BOM.md',
        'jsBridge.md',
      ],
      '/views/Http/': [
        'readme.md',
      ],
      '/views/engineering/': [
        'readme.md',
      ],
      //vue 开始
      // 原理
      '/views/Vue/vue-hard/': [
        '',
      ],
      '/views/Vue/vuex/': [
        '',
      ],
      '/views/Vue/vue-router/': [
        'readme.md',
      ],
      '/views/Vue/vue2-easy/': [
        '',
      ],
      '/views/Vue/vue2-mid/': [
        '',
      ],
      '/views/Vue/vue-cli/': [
        '',
      ],
      //vue 结束
      // react
      '/views/React/': [
        '',
      ],
      // react
      '/views/angular/': [
        'readme.md',
      ],
      "/views/other/Git/": [
        ''
      ],
      "/views/other/performance/": [
        ''
      ],
      "/views/other/web-safe/": [
        ''
      ],
      "/views/other/typescript/": [
        ''
      ],
      //微前端
      "/views/other/micro-web/": [
        ''
      ],
      "/views/other/questions/": [
        ''
      ],
      "/views/other/questions2/": [
        'readme.md',
        '1.HTML篇.md',
        '2.CSS篇.md',
        '3.JavaScript篇（上）.md',
        '4.JavaScript篇（下）.md',
        '5.Vue篇（上）.md',
        '6.Vue篇（下）.md',
        '7.React篇（上）.md',
        '8.React篇（下）.md',
        '9.计算机网络篇.md',
        '10.浏览器原理篇.md',
        '11.前端性能优化篇.md',
        '12.手写代码篇.md',
        '13.代码输出结果篇.md',
        '14.从输入URL到页面加载的过程.md',
        '15.JS运行机制.md',
      ],
    },
    darkMode: true,//是否启用切换夜间模式的功能。
    sidebarDepth: 2,//设置根据页面标题自动生成的侧边栏的最大深度。
    // 最后更新时间
    lastUpdated: true,
    lastUpdatedText: '上次更新时间',
    contributors: true,
    contributorsText: '贡献者列表',
    toggleDarkMode: '切换主题',
    author: '刘成龙',
  },
  markdown: {
    lineNumbers: true//行号
  }
}