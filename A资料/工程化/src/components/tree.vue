<template>
  <div class="tree">
    <h1>我是tree</h1>
    <item v-for="(item,index) in options" :key="index">

    </item>
  </div>
</template>



<script>
import item from "./item";
export default {
  components: {
    item,
  },
  props: {
    //树形节点
    options: {
      type: Object,
      default: () => [],
    },
    //选中的节点
    value: Array,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>