import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  base: "/", //目标地址是：https://openhacking.github.io/vuepress-template/，所以需要配置base地址后缀
  // base: '/vuepress-blog/', //目标地址是：https://openhacking.github.io/vuepress-template/，所以需要配置base地址后缀
  title: '前端笔记',
  description: 'Just playing around',
  theme: recoTheme({
    // displayAllHeaders: false, // 显示所有页面的标题链接-默认值：false
    // smoothScroll: true, //页面滚动效果
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新",
      },
    },
    contributors: true,
    contributorsText: "贡献者列表",
    toggleDarkMode: "切换主题",
    // ----------------------- 分割线 上面为过去的配置项-----------------
    catalogTitle: '此页内容',
    style: '@vuepress-reco/style-default',
    logo: '/orange.png',//导航栏log
    author: '刘成龙',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '上次更新时间',
    autoSetCategory: true,         // 自动设置分类
    // autoAddCategoryToNavbar: true,  // 自动将首页、分类和标签 添加至头部导航条
    // series 为原 sidebar
    series: {
      //算法
      "/views/Algorithm/": [""],
      "/views/nodejs/": [""],
      //js
      "/views/js/": [
        "事件循环.md",
        "js模块化.md",
        "Es6.md",
        "Promise.md",
        "this指针-闭包-作用域.md",
        "面向对象与原型,原型链.md",
        "BOM.md",
        "jsBridge.md",
      ],
      "/views/Http/": ["readme.md"],
      "/views/engineering/": ["readme.md"],
      //vue 开始
      // 原理
      "/views/Vue/vue-hard/": [""],
      "/views/Vue/vuex/": [""],
      "/views/Vue/vue-router/": ["readme.md"],
      "/views/Vue/vue2-easy/": [""],
      "/views/Vue/vue2-mid/": [""],
      "/views/Vue/vue-cli/": [""],
      //vue 结束
      // react
      "/views/React/": [""],
      // react
      "/views/angular/": ["readme.md"],
      "/views/other/Git/": [""],
      "/views/other/performance/": [""],
      "/views/other/web-safe/": [""],
      "/views/other/typescript/": [""],
      //微前端
      "/views/other/micro-web/": [""],
      "/views/other/questions/": [""],
      "/views/other/questions2/": [
        "readme.md",
        "1.HTML篇.md",
        "2.CSS篇.md",
        "3.JavaScript篇（上）.md",
        "4.JavaScript篇（下）.md",
        "5.Vue篇（上）.md",
        "6.Vue篇（下）.md",
        "7.React篇（上）.md",
        "8.React篇（下）.md",
        "9.计算机网络篇.md",
        "10.浏览器原理篇.md",
        "11.前端性能优化篇.md",
        "12.手写代码篇.md",
        "13.代码输出结果篇.md",
        "14.从输入URL到页面加载的过程.md",
        "15.JS运行机制.md",
      ],
    },
    navbar: [
      { text: "js", link: "/views/js/" },
      { text: "网络", link: "/views/Http/" },
      { text: "工程化", link: "/views/engineering/" },
      {
        text: "Vue",
        children: [
          { text: "vue2基础", link: "/views/Vue/vue2-easy/" }, // 可不写后缀 .md
          { text: "vue2进阶", link: "/views/Vue/vue2-mid/" },
          { text: "vue-cli", link: "/views/Vue/vue-cli/" },
          { text: "vue-理解", link: "/views/Vue/vue-hard/" },
          { text: "vuex", link: "/views/Vue/vuex/" },
          { text: "vue-router", link: "/views/Vue/vue-router/" },
        ],
      },
      {
        text: "React",
        children: [
          { text: "React基础", link: "/views/React/" }, // 可不写后缀 .md
        ],
      },
      {
        text: "Angular",
        link: "/views/angular/",
        // children: [
        //   { text: 'angular', link: '/views/angular/' }, // 可不写后缀 .md
        // ]
      },
      { text: "nodejs", link: "/views/nodejs/" },
      { text: "算法", link: "/views/Algorithm/" },
      { text: "个人空间", link: "https://blog.numb.run/" },
      {
        text: "其他",
        children: [
          { text: "git", link: "/views/other/Git/", ariaLabel: "其他" },
          {
            text: "性能优化",
            link: "/views/other/performance/",
            ariaLabel: "其他",
          },
          {
            text: "web安全",
            link: "/views/other/web-safe/",
            ariaLabel: "其他",
          },
          {
            text: "typescript",
            link: "/views/other/typescript/",
            ariaLabel: "其他",
          },
          {
            text: "微前端",
            link: "/views/other/micro-web/",
            ariaLabel: "其他",
          },
          {
            text: "面试题",
            link: "/views/other/questions/",
            ariaLabel: "其他",
          },
          {
            text: "网络面试题",
            link: "/views/other/questions2/",
            ariaLabel: "其他",
          },
          {
            text: "我的CSDN",
            link: "https://blog.csdn.net/qq_38594056?type=blog",
          },
        ],
      },
    ],
    bulletin: {
      body: [
        {
          type: 'text',
          content: `🎉🎉🎉 全面升级vuepress-theme-reco主题，保留vuepress的2.x版本，更改全部内容与配置文件，笔记内容保持不变。后续笔记将会在新主题中记录。`,
          style: 'font-size: 14px;'
        },
        {
          type: 'hr',
        },
        {
          type: 'title',
          content: '其他',
        },
        {
          type: 'text',
          content: `
          <ul>
            <li><a style='color:#4954E6;' target="_blank" href="https://blog.numb.run/#/welcome">个人空间<a/></li>
            <li><a style='color:#4954E6;' target="_blank" href="https://gitee.com/numbrun">gitee<a/></li>
          </ul>`,
          style: 'font-size: 14px;'
        },
        {
          type: 'hr',
        },
        {
          type: 'buttongroup',
          children: [
            {
              text: '留言',
              // link: '/docs/others/donate.html'
            }
          ]
        }
      ],
    },
    //评论
    commentConfig: {
      type: 'valine',
      options: {
        appId: 'KIQRtSsv6seFXXznyLqblYUm-gzGzoHsz', // your appId
        appKey: 'Hm9lyXwdYw8Nq4pHaMcp89Im', // your appKey
        hideComments: false, // 全局隐藏评论，默认 false
        // serverURLs: 'https://RMUxnxp0.api.lncldglobal.com',//该配置适用于国内自定义域名用户, 海外版本会自动检测(无需手动填写) 
        serverURLs: 'https://kiqrtssv.lc-cn-n1-shared.com',//该配置适用于国内自定义域名用户, 海外版本会自动检测(无需手动填写) 
        placeholder: '说点啥好呢',
        visitor: true,
        enableQQ: true,// 阅读量统计
        avatar: 'robohash',//头像


      },
    },
  }),
})
// export default defineUserConfig({
//   title: 'vuepress-theme-reco',
//   description: 'Just playing around',
//   theme: recoTheme({
//     style: '@vuepress-reco/style-default',
//     logo: '/logo.png',
//     author: 'reco_luan',
//     docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
//     docsBranch: 'main',
//     docsDir: 'example',
//     lastUpdatedText: '',
//     // series 为原 sidebar
//     series: {
//       '/docs/theme-reco/': [
//         {
//           text: 'module one',
//           children: ['home', 'theme']
//         },
//         {
//           text: 'module two',
//           children: ['api', 'plugin']
//         }
//       ]
//     },
//     navbar:
//     [
//       { text: 'Home', link: '/' },
//       { text: 'Categories', link: '/categories/reco/1/' },
//       { text: 'Tags', link: '/tags/tag1/1/' },
//       { text: 'Docs',
//         children: [
//           { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
//           { text: 'vuepress-theme-reco', link: '/blogs/other/guide' }
//         ]
//       },
//     ],
//     bulletin: {
//       body: [
//         {
//           type: 'text',
//           content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
//           style: 'font-size: 12px;'
//         },
//         {
//           type: 'hr',
//         },
//         {
//           type: 'title',
//           content: 'QQ 群',
//         },
//         {
//           type: 'text',
//           content: `
//           <ul>
//             <li>QQ群1：1037296104</li>
//             <li>QQ群2：1061561395</li>
//             <li>QQ群3：962687802</li>
//           </ul>`,
//           style: 'font-size: 12px;'
//         },
//         {
//           type: 'hr',
//         },
//         {
//           type: 'title',
//           content: 'GitHub',
//         },
//         {
//           type: 'text',
//           content: `
//           <ul>
//             <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
//             <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
//           </ul>`,
//           style: 'font-size: 12px;'
//         },
//         {
//           type: 'hr',
//         },
//         {
//           type: 'buttongroup',
//           children: [
//             {
//               text: '打赏',
//               link: '/docs/others/donate.html'
//             }
//           ]
//         }
//       ],
//     },
//     // valineConfig 配置与 1.x 一致
//     // valineConfig: {
//     //   appId: 'xxx',
//     //   appKey: 'xxx',
//     //   placeholder: '填写邮箱可以收到回复提醒哦！',
//     //   verify: true, // 验证码服务
//     //   // notify: true,
//     //   recordIP: true,
//     //   // hideComments: true // 隐藏评论
//     // },
//   }),
//   // debug: true,
// })
