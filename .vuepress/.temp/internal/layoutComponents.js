import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/runnumb/code-test/numbrun/node_modules/vuepress-theme-reco/lib/client/layouts/404.vue")),
  "Categories": defineAsyncComponent(() => import("/Users/runnumb/code-test/numbrun/node_modules/vuepress-theme-reco/lib/client/layouts/Categories.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/runnumb/code-test/numbrun/node_modules/vuepress-theme-reco/lib/client/layouts/Layout.vue")),
  "Post": defineAsyncComponent(() => import("/Users/runnumb/code-test/numbrun/node_modules/vuepress-theme-reco/lib/client/layouts/Post.vue")),
  "Timeline": defineAsyncComponent(() => import("/Users/runnumb/code-test/numbrun/node_modules/vuepress-theme-reco/lib/client/layouts/Timeline.vue")),
}
