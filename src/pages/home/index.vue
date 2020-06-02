<template>
  <div id="home">
    <my-header></my-header>
    <div class="content">
      <span class="content-text header-text animated slow bounceInLeft">Libra</span>
      <span class="content-text sub-text animated slow lightSpeedIn">在生活里，我们永远是初学者</span>
      <router-link to="/contact" class="contact">
        <i class="iconfont iconcontact"></i>
        联系我
      </router-link>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import MyHeader from "@/components/Header";
import MyFooter from "@/components/Footer";
export default {
  components: {
    MyHeader,
    MyFooter
  }
};
</script>
<style lang="less">
@import "./index.less";
</style>
