import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  // base: "/", //目标地址是：https://openhacking.github.io/vuepress-template/，所以需要配置base地址后缀
  base: '/web-note/', //目标地址是：https://openhacking.github.io/vuepress-template/，所以需要配置base地址后缀
  /**指定 vuepress build 命令的输出目录。 */
  dest:'docs',
  /**是否在开发服务器启动后打开浏览器 */
  open:true,
  title: '几百前端',
  description: 'Just playing around',
  theme: recoTheme({
    componentsDir: './showHtml/demo',
    vuePreviewsDir: './showHtml/demo',//展示的vue组件
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
    author: '百事可口',
    // docsRepo: 'https://fanyi.baidu.com/?aldtype=16047#auto/zh',
    docsRepo: 'https://gitee.com/numbrun/numbrun',//git的地址
    docsBranch: 'master',//分支
    docsDir: '', //文档对应文件夹
    lastUpdatedText: '上次更新时间',
    // autoSetCategory: true,         // 自动设置分类
    // autoAddCategoryToNavbar: true,  // 自动将首页、分类和标签 添加至头部导航条
    // series 为原 sidebar
    series: {
      //算法
      "/views/Algorithm/": [""],
      "/views/nodejs/": [""],
      //js
      "/views/js/": [
        "readme.md",
        "EventLoop.md",
        "jsExport.md",
        "Es6.md",
        "Promise.md",
        "this.md",
        "prototype.md",
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
      "/views/angular/": ["angular.md","rxjs.md"],
      "/views/other/Git/": [""],
      "/views/other/performance/": [""],
      "/views/other/web-safe/": [""],
      "/views/other/typescript/": [""],
      //微前端
      "/views/other/micro-web/": [""],
      "/views/other/questions/": [""],
      "/views/other/questions2/": [
        // "readme.md",
        "1.HTML.md",
        "2.CSS.md",
        "3.JavaScript1.md",
        "4.JavaScript2.md",
        "5.Vue1.md",
        "6.Vue2.md",
        "7.React1.md",
        "8.React2.md",
        "9.http.md",
        "10.browser.md",
        "11.xingnengyouhua.md",
        "12.shouxie.md",
        "13.log.md",
        "14.url.md",
        "15.JSyunxing.md",
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
        link: "/views/React/",
        // children: [
        //   { text: "React基础", link: "/views/React/" }, // 可不写后缀 .md
        // ],
      },
      {
        text: "Angular",
        link: "/views/angular/angular",
        // children: [
        //   { text: 'angular', link: '/views/angular/' }, // 可不写后缀 .md
        // ]
      },
      { text: "nodejs", link: "/views/nodejs/" },
      { text: "算法", link: "/views/Algorithm/" },
      { text: "软考", link: "/views/examination/" },
      { text: "个人空间", link: "https://blog.numb.run/" },
      {
        text: "其他",
        children: [
          { text: "git", link: "/views/other/Git/", ariaLabel: "其他" },
          { text: "留言板", link: "/views/other/message/", ariaLabel: "其他" },
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
            <li><a style='color:#4954E6;' target="_blan4k" href="https://gitee.com/numbrun">gitee<a/></li>
            <li><a style='color:#4954E6;' target="_blank" href="https://blog.csdn.net/qq_38594056?type=blog">我的CSDN<a/></li>
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
              link: '/views/other/message/'
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
        placeholder: '说点啥好呢',
        serverURLs: 'https://kiqrtssv.lc-cn-n1-shared.com',//该配置适用于国内自定义域名用户, 海外版本会自动检测(无需手动填写) 
        visitor: true,//文章访问量统计。
        enableQQ: true,// 阅读量统计
        avatar: 'robohash',//头像
        recordIP: true,//是否记录评论者IP
        hideComments: false, // 全局隐藏评论，默认 false
      },
    },
  }),
})
