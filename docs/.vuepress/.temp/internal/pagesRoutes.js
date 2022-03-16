import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-3fb5c60c","/views/Algorithm/",{"title":"数据结构与算法"},["/views/Algorithm/index.html","/views/Algorithm/readme.md"]],
  ["v-b75cd794","/views/engineering/",{"title":"webpack"},["/views/engineering/index.html","/views/engineering/readme.md"]],
  ["v-3292d5e6","/views/Http/",{"title":"网络和并发"},["/views/Http/index.html","/views/Http/readme.md"]],
  ["v-eb100d76","/views/js/BOM.html",{"title":"BOM"},["/views/js/BOM","/views/js/BOM.md"]],
  ["v-0b3c5ebd","/views/js/Es6.html",{"title":"ES6"},["/views/js/Es6","/views/js/Es6.md"]],
  ["v-6b103f5b","/views/js/jsBridge.html",{"title":"jsBridge"},["/views/js/jsBridge","/views/js/jsBridge.md"]],
  ["v-548f55c0","/views/js/js%E6%A8%A1%E5%9D%97%E5%8C%96.html",{"title":"js模块化"},["/views/js/js模块化.html","/views/js/js%E6%A8%A1%E5%9D%97%E5%8C%96","/views/js/js模块化.md","/views/js/js%E6%A8%A1%E5%9D%97%E5%8C%96.md"]],
  ["v-074f24ca","/views/js/Promise.html",{"title":"Promise"},["/views/js/Promise","/views/js/Promise.md"]],
  ["v-bca6fbe8","/views/js/",{"title":"事件循环"},["/views/js/index.html","/views/js/readme.md"]],
  ["v-783d2c5c","/views/js/this%E6%8C%87%E9%92%88-%E9%97%AD%E5%8C%85-%E4%BD%9C%E7%94%A8%E5%9F%9F.html",{"title":"this指针-闭包-作用域"},["/views/js/this指针-闭包-作用域.html","/views/js/this%E6%8C%87%E9%92%88-%E9%97%AD%E5%8C%85-%E4%BD%9C%E7%94%A8%E5%9F%9F","/views/js/this指针-闭包-作用域.md","/views/js/this%E6%8C%87%E9%92%88-%E9%97%AD%E5%8C%85-%E4%BD%9C%E7%94%A8%E5%9F%9F.md"]],
  ["v-c66d7ba6","/views/js/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%8E%E5%8E%9F%E5%9E%8B,%E5%8E%9F%E5%9E%8B%E9%93%BE.html",{"title":"面向对象及原型和原型链"},["/views/js/面向对象与原型,原型链.html","/views/js/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%8E%E5%8E%9F%E5%9E%8B,%E5%8E%9F%E5%9E%8B%E9%93%BE","/views/js/面向对象与原型,原型链.md","/views/js/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%8E%E5%8E%9F%E5%9E%8B,%E5%8E%9F%E5%9E%8B%E9%93%BE.md"]],
  ["v-37b6ec6c","/views/nodejs/",{"title":"nodejs"},["/views/nodejs/index.html","/views/nodejs/readme.md"]],
  ["v-683d3365","/views/other/webpack.html",{"title":"webpack 基础知识整理"},["/views/other/webpack","/views/other/webpack.md"]],
  ["v-bfea8db0","/views/other/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E5%B8%B8%E8%80%83%E6%8A%80%E6%9C%AF%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93.html",{"title":"浏览器工作流程"},["/views/other/前端面试常考技术问题总结.html","/views/other/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E5%B8%B8%E8%80%83%E6%8A%80%E6%9C%AF%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93","/views/other/前端面试常考技术问题总结.md","/views/other/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E5%B8%B8%E8%80%83%E6%8A%80%E6%9C%AF%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93.md"]],
  ["v-005056ea","/views/React/",{"title":"【讲义】React基础"},["/views/React/index.html","/views/React/index.md"]],
  ["v-005056ea","/views/React/",{"title":"React"},["/views/React/index.html","/views/React/README.md"]],
  ["v-25a3c47f","/views/category1/2018/121501.html",{"title":"first page in category1"},["/views/category1/2018/121501","/views/category1/2018/121501.md"]],
  ["v-2203eb9d","/views/category1/2019/092101.html",{"title":"sidebar test1111"},["/views/category1/2019/092101","/views/category1/2019/092101.md"]],
  ["v-1c8689ea","/views/Algorithm/js-algorithm/",{"title":"js-algorithm"},["/views/Algorithm/js-algorithm/index.html","/views/Algorithm/js-algorithm/README.md"]],
  ["v-89cffcd4","/views/other/Git/",{"title":"git"},["/views/other/Git/index.html","/views/other/Git/readme.md"]],
  ["v-38ec0e46","/views/other/micro-web/",{"title":"微前端"},["/views/other/micro-web/index.html","/views/other/micro-web/readme.md"]],
  ["v-7a552fd8","/views/other/performance/",{"title":"性能优化"},["/views/other/performance/index.html","/views/other/performance/readme.md"]],
  ["v-8f4076ca","/views/other/questions/",{"title":"面试题"},["/views/other/questions/index.html","/views/other/questions/readme.md"]],
  ["v-764fe0c1","/views/other/questions2/1.HTML%E7%AF%87.html",{"title":"HTML篇"},["/views/other/questions2/1.HTML篇.html","/views/other/questions2/1.HTML%E7%AF%87","/views/other/questions2/1.HTML篇.md","/views/other/questions2/1.HTML%E7%AF%87.md"]],
  ["v-fe5918a4","/views/other/questions2/10.%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8E%9F%E7%90%86%E7%AF%87.html",{"title":"浏览器原理篇"},["/views/other/questions2/10.浏览器原理篇.html","/views/other/questions2/10.%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8E%9F%E7%90%86%E7%AF%87","/views/other/questions2/10.浏览器原理篇.md","/views/other/questions2/10.%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8E%9F%E7%90%86%E7%AF%87.md"]],
  ["v-5e5c2100","/views/other/questions2/11.%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E7%AF%87.html",{"title":"前端性能优化篇"},["/views/other/questions2/11.前端性能优化篇.html","/views/other/questions2/11.%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E7%AF%87","/views/other/questions2/11.前端性能优化篇.md","/views/other/questions2/11.%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E7%AF%87.md"]],
  ["v-7f0b4512","/views/other/questions2/12.%E6%89%8B%E5%86%99%E4%BB%A3%E7%A0%81%E7%AF%87.html",{"title":"手写代码篇"},["/views/other/questions2/12.手写代码篇.html","/views/other/questions2/12.%E6%89%8B%E5%86%99%E4%BB%A3%E7%A0%81%E7%AF%87","/views/other/questions2/12.手写代码篇.md","/views/other/questions2/12.%E6%89%8B%E5%86%99%E4%BB%A3%E7%A0%81%E7%AF%87.md"]],
  ["v-11a92972","/views/other/questions2/13.%E4%BB%A3%E7%A0%81%E8%BE%93%E5%87%BA%E7%BB%93%E6%9E%9C%E7%AF%87.html",{"title":"代码输出结果篇"},["/views/other/questions2/13.代码输出结果篇.html","/views/other/questions2/13.%E4%BB%A3%E7%A0%81%E8%BE%93%E5%87%BA%E7%BB%93%E6%9E%9C%E7%AF%87","/views/other/questions2/13.代码输出结果篇.md","/views/other/questions2/13.%E4%BB%A3%E7%A0%81%E8%BE%93%E5%87%BA%E7%BB%93%E6%9E%9C%E7%AF%87.md"]],
  ["v-feb1e9a2","/views/other/questions2/14.%E4%BB%8E%E8%BE%93%E5%85%A5URL%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E7%9A%84%E8%BF%87%E7%A8%8B.html",{"title":"从输入URL到页面加载的过程"},["/views/other/questions2/14.从输入URL到页面加载的过程.html","/views/other/questions2/14.%E4%BB%8E%E8%BE%93%E5%85%A5URL%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E7%9A%84%E8%BF%87%E7%A8%8B","/views/other/questions2/14.从输入URL到页面加载的过程.md","/views/other/questions2/14.%E4%BB%8E%E8%BE%93%E5%85%A5URL%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E7%9A%84%E8%BF%87%E7%A8%8B.md"]],
  ["v-4f31e1b1","/views/other/questions2/15.JS%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6.html",{"title":"JS运行机制"},["/views/other/questions2/15.JS运行机制.html","/views/other/questions2/15.JS%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6","/views/other/questions2/15.JS运行机制.md","/views/other/questions2/15.JS%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6.md"]],
  ["v-867724c4","/views/other/questions2/2.CSS%E7%AF%87.html",{"title":"CSS"},["/views/other/questions2/2.CSS篇.html","/views/other/questions2/2.CSS%E7%AF%87","/views/other/questions2/2.CSS篇.md","/views/other/questions2/2.CSS%E7%AF%87.md"]],
  ["v-6a354626","/views/other/questions2/3.JavaScript%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89.html",{"title":"JavaScript篇（上）"},["/views/other/questions2/3.JavaScript篇（上）.html","/views/other/questions2/3.JavaScript%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89","/views/other/questions2/3.JavaScript篇（上）.md","/views/other/questions2/3.JavaScript%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89.md"]],
  ["v-9c090ea2","/views/other/questions2/4.JavaScript%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89.html",{"title":"JavaScript篇（下）"},["/views/other/questions2/4.JavaScript篇（下）.html","/views/other/questions2/4.JavaScript%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89","/views/other/questions2/4.JavaScript篇（下）.md","/views/other/questions2/4.JavaScript%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89.md"]],
  ["v-3c4824ea","/views/other/questions2/5.Vue%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89.html",{"title":"Vue篇（上）"},["/views/other/questions2/5.Vue篇（上）.html","/views/other/questions2/5.Vue%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89","/views/other/questions2/5.Vue篇（上）.md","/views/other/questions2/5.Vue%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89.md"]],
  ["v-4f9b1cca","/views/other/questions2/6.Vue%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89.html",{"title":"Vue篇（下）"},["/views/other/questions2/6.Vue篇（下）.html","/views/other/questions2/6.Vue%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89","/views/other/questions2/6.Vue篇（下）.md","/views/other/questions2/6.Vue%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89.md"]],
  ["v-545d4b62","/views/other/questions2/7.React%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89.html",{"title":"React篇（上）"},["/views/other/questions2/7.React篇（上）.html","/views/other/questions2/7.React%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89","/views/other/questions2/7.React篇（上）.md","/views/other/questions2/7.React%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89.md"]],
  ["v-6977666f","/views/other/questions2/8.React%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89.html",{"title":"React篇（下）"},["/views/other/questions2/8.React篇（下）.html","/views/other/questions2/8.React%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89","/views/other/questions2/8.React篇（下）.md","/views/other/questions2/8.React%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89.md"]],
  ["v-1f4e0fb4","/views/other/questions2/9.%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E7%AF%87.html",{"title":"计算机网络篇"},["/views/other/questions2/9.计算机网络篇.html","/views/other/questions2/9.%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E7%AF%87","/views/other/questions2/9.计算机网络篇.md","/views/other/questions2/9.%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E7%AF%87.md"]],
  ["v-5398cf51","/views/other/questions2/",{"title":"网络上的面试题整理"},["/views/other/questions2/index.html","/views/other/questions2/readme.md"]],
  ["v-5511ab51","/views/other/typescript/",{"title":"TypeScript"},["/views/other/typescript/index.html","/views/other/typescript/readme.md"]],
  ["v-be200160","/views/other/web-safe/",{"title":"前端安全"},["/views/other/web-safe/index.html","/views/other/web-safe/README.md"]],
  ["v-a9d28642","/views/React/react-mid/",{"title":"react 高级用法"},["/views/React/react-mid/index.html","/views/React/react-mid/readme.md"]],
  ["v-4cb3c239","/views/Vue/vue-cli/",{"title":"vue-cli"},["/views/Vue/vue-cli/index.html","/views/Vue/vue-cli/readme.md"]],
  ["v-4a0622ba","/views/Vue/vue-hard/",{"title":"原理篇"},["/views/Vue/vue-hard/index.html","/views/Vue/vue-hard/readme.md"]],
  ["v-0a1cea9c","/views/Vue/vue-router/",{"title":"vue-router"},["/views/Vue/vue-router/index.html","/views/Vue/vue-router/readme.md"]],
  ["v-ca7f5562","/views/Vue/vue2-easy/",{"title":"vue2 基础"},["/views/Vue/vue2-easy/index.html","/views/Vue/vue2-easy/readme.md"]],
  ["v-4f5445c5","/views/Vue/vue2-mid/",{"title":"vue进阶用法"},["/views/Vue/vue2-mid/index.html","/views/Vue/vue2-mid/readme.md"]],
  ["v-611d7c02","/views/Vue/vue3/",{"title":""},["/views/Vue/vue3/index.html","/views/Vue/vue3/readme.md"]],
  ["v-611d6b4c","/views/Vue/vuex/",{"title":"vuex状态管理"},["/views/Vue/vuex/index.html","/views/Vue/vuex/readme.md"]],
  ["v-5cd4f9f8","/views/Vue/vuex/vuex_ssr(1).html",{"title":"Vuex & SSR"},["/views/Vue/vuex/vuex_ssr(1)","/views/Vue/vuex/vuex_ssr(1).md"]],
  ["v-3acf3a4c","/views/Http/%E8%AF%BE%E7%A8%8B/Deploy/",{"title":"部署"},["/views/Http/课程/Deploy/","/views/Http/%E8%AF%BE%E7%A8%8B/Deploy/index.html","/views/Http/课程/Deploy/index.md","/views/Http/%E8%AF%BE%E7%A8%8B/Deploy/index.md"]],
  ["v-1bce1980","/views/Http/%E8%AF%BE%E7%A8%8B/Internet/",{"title":"网络"},["/views/Http/课程/Internet/","/views/Http/%E8%AF%BE%E7%A8%8B/Internet/index.html","/views/Http/课程/Internet/index.md","/views/Http/%E8%AF%BE%E7%A8%8B/Internet/index.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
