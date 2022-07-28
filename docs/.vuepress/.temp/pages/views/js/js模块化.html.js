export const data = {
  "key": "v-548f55c0",
  "path": "/views/js/js%E6%A8%A1%E5%9D%97%E5%8C%96.html",
  "title": "js模块化",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "无模块化",
      "slug": "无模块化",
      "children": [
        {
          "level": 3,
          "title": "IIFE(语法侧的优化)",
          "slug": "iife-语法侧的优化",
          "children": []
        },
        {
          "level": 3,
          "title": "问题1：有额外依赖时候，怎么引入其他模块？",
          "slug": "问题1-有额外依赖时候-怎么引入其他模块",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "CJS - commonjs规范",
      "slug": "cjs-commonjs规范",
      "children": []
    },
    {
      "level": 2,
      "title": "AMD规范",
      "slug": "amd规范",
      "children": [
        {
          "level": 3,
          "title": "问题2：如果想在amdModule兼容已有代码呢？",
          "slug": "问题2-如果想在amdmodule兼容已有代码呢",
          "children": []
        },
        {
          "level": 3,
          "title": "问题3：AMD中使用revealing",
          "slug": "问题3-amd中使用revealing",
          "children": []
        },
        {
          "level": 3,
          "title": "问题4：兼容AMD & CJS/如何判断cjs和AMD",
          "slug": "问题4-兼容amd-cjs-如何判断cjs和amd",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "CMD规范",
      "slug": "cmd规范",
      "children": [
        {
          "level": 3,
          "title": "问题5：AMD和CMD区别？",
          "slug": "问题5-amd和cmd区别",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "ES6模块化",
      "slug": "es6模块化",
      "children": [
        {
          "level": 3,
          "title": "问题6：动态模块在加载时候怎么处理？",
          "slug": "问题6-动态模块在加载时候怎么处理",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "问题7：CommonJs和ES6区别",
      "slug": "问题7-commonjs和es6区别",
      "children": []
    },
    {
      "level": 2,
      "title": "前端工程化",
      "slug": "前端工程化",
      "children": [
        {
          "level": 3,
          "title": "工程化思想实现",
          "slug": "工程化思想实现",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1640599965000,
    "contributors": [
      {
        "name": "liuchenglong",
        "email": "liuchenglong@yoonuu.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "views/js/js模块化.md"
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
