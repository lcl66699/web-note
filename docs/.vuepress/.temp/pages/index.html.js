export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/homeSnow.jpg",
    "heroText": "橘子海",
    "actions": [
      {
        "text": "一键 内卷 →",
        "link": "/views/js/",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "笔记总结",
        "details": "记录学习中遇到的问题与经验总结。包含vue、react、http、webpack、nodejs、前端性能优化、算法等内容"
      },
      {
        "title": "一鲸落，万物生",
        "details": "世上最美好的事物是言论自由"
      },
      {
        "title": "生活万岁",
        "details": "衬衫的价格是九磅十五便士，所以你选择了C项"
      }
    ],
    "footerHtml": true,
    "footer": "<a href=\"https://blog.numb.run/#/\" target=\"_blank\">西瓜村 </a>| Copyright © QQ-768206581 | <a href=\"https://beian.miit.gov.cn\" target=\"_blank\">黑ICP备20003708号</a>"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1659064272000,
    "contributors": [
      {
        "name": "liuchenglong",
        "email": "768206581@qq.com",
        "commits": 7
      },
      {
        "name": "liuchenglong",
        "email": "liuchenglong@yoonuu.com",
        "commits": 3
      },
      {
        "name": "chenglong",
        "email": "768206581@qq.com",
        "commits": 2
      },
      {
        "name": "chenglong",
        "email": "768206581.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
