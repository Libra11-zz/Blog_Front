<template>
  <nuxt-link :to="url" class="mobile-label">
    <i class="iconfont" :class="icon"></i>
    <span class="title">{{title}}</span>
  </nuxt-link>
</template>

<script>
export default {
  props: ["icon", "title", "url"]
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>