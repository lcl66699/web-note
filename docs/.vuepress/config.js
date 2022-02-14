module.exports = {
  base: '/vuepress-blog/', //目标地址是：https://openhacking.github.io/vuepress-template/，所以需要配置base地址后缀
  title: "橘子海",
  description: "听橘子海，炫沙糖桔",
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }]
  ],
  // plugins: [
  //   '@vuepress/back-to-top',
  //   ['qrcode', {
  //     // "/" and "/zh/" correspond to the path set by locales
  //     labelText: {
  //       "/": "二维码",
  //     },
  //     size: 'small',
  //     channel: true
  //   }]
  // ],
  plugins: [
    // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    //   body: [
    //     {
    //       type: 'title',
    //       content: '欢迎加入QQ交流群 🎉🎉🎉',
    //       style: 'text-aligin: center;'
    //     },
    //     {
    //       type: 'image',
    //       src: '/rvcode_qq.png'
    //     }
    //   ],
    //   footer: [
    //     {
    //       type: 'button',
    //       text: '打赏',
    //       link: '/donate'
    //     },
    //     {
    //       type: 'button',
    //       text: '打赏',
    //       link: '/donate'
    //     }
    //   ]
    // }]
  ],
  themeConfig: {
    displayAllHeaders: false, // 显示所有页面的标题链接-默认值：false
    smoothScroll: true,//页面滚动效果
    // // 多语言下拉菜单的标题
    // selectText: '选择语言',
    // // 该语言在下拉菜单中的标签
    // label: '简体中文',
    // // 编辑链接文字
    // editLinkText: '在 GitHub 上编辑此页',
    // Service Worker 的配置
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新"
      }
    },
    // 当前 locale 的 algolia docsearch 选项
    algolia: {},
    logo: '/orange.png',//导航栏log
    nav: [
      { text: 'js', link: '/views/js/' },
      { text: 'http', link: '/views/Http/' },
      { text: '工程化', link: '/views/工程化/' },
      {
        text: 'Vue',
        items: [
          { text: 'vue基础', link: '/views/Vue/vue2.0基础' }, // 可不写后缀 .md
          { text: 'Vue高级用法', link: '/views/Vue/Vue高级用法' },
          { text: 'vue原理', link: '/views/Vue/原理篇/' },
        ]
      },
      {
        text: 'React',
        items: [
          { text: 'React基础', link: '/views/React/' }, // 可不写后缀 .md
        ]
      },
      { text: '算法', link: '/views/Algorithm/' },
      { text: '个人空间', link: 'http://39.106.5.96/' },
      {
        text: '其他',
        items: [
          { text: 'git', link: '/views/other/Git/', ariaLabel: '其他' },
          { text: '性能优化', link: '/views/other/性能优化/', ariaLabel: '其他' },
          { text: 'web安全', link: '/views/other/web安全/', ariaLabel: '其他' },
          { text: 'typescript', link: '/views/other/typescript/', ariaLabel: '其他' },
          { text: '面试题', link: '/views/other/面试题/', ariaLabel: '其他' }
        ],
      },
    ],
    sidebar: {
      //算法
      '/views/Algorithm/': [
        '',
      ],
      //js
      '/views/js/': [
        '',
        'js模块化',
        'Es6',
        'Promise',
        'BOM',
        'jsBridge'
      ],
      '/views/Http/': [
        '',
      ],
      '/views/工程化/': [
        '',
      ],
      //vue 开始
      // 原理
      '/views/Vue/原理篇/': [
        '',
      ],
      '/views/Vue/vue2.0基础/': [
        '',
      ],
      '/views/Vue/Vue高级用法/': [
        '',
      ],
      //vue 结束

      // react
      '/views/React/': [
        '',
      ],
      "/views/other/Git/": [
        ''
      ],
      "/views/other/性能优化/": [
        ''
      ],
      "/views/other/web安全/": [
        ''
      ],
      "/views/other/typescript/": [
        ''
      ],
      "/views/other/面试题/": [
        ''
      ],
      // '/views/sidebargroup/': [
      //   {
      //     title: '基础',
      //     collapsable: true,
      //     children: [
      //       '',
      //       'bar1'
      //     ]
      //   }
      // ]
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        // text: 'Categories' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        // text: 'Tags' // 默认 “标签”
      },
      socialLinks: [
        { icon: 'reco-github', link: 'https://github.com/recoluan' },
        { icon: 'fa-camera', link: 'https://www.npmjs.com/~reco_luan' }
      ]
    },
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    // sidebarDepth: 4,
    sidebarDepth: 2,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'numb',
    record: 'xxxx',//ICP备案号
    recordLink: 'http://www.baidu.com',//备案指向的链接
    cyberSecurityRecord: '2222',//公安部备案文案
    cyberSecurityLink: 'http://www.baidu.com',//公安部备案指向链接
    // 项目开始时间
    startYear: '2021',
    //该属性是用于设置友链的
    // friendLink: [
    //   {
    //     title: '午后南杂',
    //     desc: 'Enjoy when you can, and endure when you must.',
    //     email: '1156743527@qq.com',
    //     link: 'https://www.recoluan.com'
    //   },
    //   {
    //     title: 'vuepress-theme-reco',
    //     desc: 'A simple and beautiful vuepress Blog & Doc theme.',
    //     avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     link: 'https://vuepress-theme-reco.recoluan.com'
    //   },
    // ],

  },
  markdown: {
    lineNumbers: true//行号
  }
}