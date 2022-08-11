import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("C:/nxin/x-nxin/numbrun/node_modules/vuepress-theme-reco/lib/client/layouts/404.vue")),
  "Categories": defineAsyncComponent(() => import("C:/nxin/x-nxin/numbrun/node_modules/vuepress-theme-reco/lib/client/layouts/Categories.vue")),
  "Layout": defineAsyncComponent(() => import("C:/nxin/x-nxin/numbrun/node_modules/vuepress-theme-reco/lib/client/layouts/Layout.vue")),
  "Post": defineAsyncComponent(() => import("C:/nxin/x-nxin/numbrun/node_modules/vuepress-theme-reco/lib/client/layouts/Post.vue")),
  "Timeline": defineAsyncComponent(() => import("C:/nxin/x-nxin/numbrun/node_modules/vuepress-theme-reco/lib/client/layouts/Timeline.vue")),
}
