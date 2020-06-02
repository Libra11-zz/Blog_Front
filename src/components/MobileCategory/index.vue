<template>
  <router-link :to="url" class="mobile-category">
    <i class="iconfont" :class="icon"></i>
    <span class="title">{{title}}</span>
  </router-link>
</template>

<script>
export default {
  props: ["icon", "title", "url"]
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>