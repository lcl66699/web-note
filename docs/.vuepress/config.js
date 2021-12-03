module.exports = {
  base: '/blog-note/', //目标地址是：https://openhacking.github.io/vuepress-template/，所以需要配置base地址后缀
  title: "学习小木屋",
  description: "欢迎来到随风飞的技术小木屋",
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }]
  ],
  plugins: [
    '@vuepress/back-to-top',
    ['qrcode', {
      // "/" and "/zh/" correspond to the path set by locales
      labelText: {
        "/": "二维码",
      },
      size: 'small',
      channel: true
    }]
  ],
  themeConfig: {
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
    // logo: '/img/yy.png',//导航栏log
    nav: [
      { text: '指南q22', link: '/guide/', ariaLabel: '指南' },
      { text: '学习2', link: 'https://lwebapp.com', ariaLabel: '学习' },
      { text: 'Github', link: 'https://github.com/openHacking/vuepress-template' }
    ],
    sidebar: {
      '/guide/': [
        '',
        'theme',
        'plugin'
      ],
      '/zh/resource/': [],
    },
  },

}