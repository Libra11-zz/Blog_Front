<template>
  <div class="contact-container">
    <my-header></my-header>
    <div class="contact">
      <div class="contact-card">
        <contact-item></contact-item>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "@/components/Header";
import MyFooter from "@/components/Footer";
import ContactItem from "@/components/ContactItem";
export default {
  components: {
    MyHeader,
    MyFooter,
    ContactItem
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>