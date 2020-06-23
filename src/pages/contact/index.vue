<template>
  <div class="contact-container">
    <my-header></my-header>
    <div class="contact">
      <div class="contact-content">
        <div class="content-header-container">
          <div class="contact-header">
            <img
              class="header-img"
              src="https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/myself.jpeg"
              alt
            />
          </div>
        </div>
        <div class="hello">Hello There!</div>
        <div class="detail">
          Thank you for visiting my blog
          <br />Hope we can make progress together
        </div>
      </div>
      <div class="contact-bottom">
        <a href="tencent://message/?uin=97220040&Site=Sambow&Menu=yes" class="icon-container">
          <i class="iconfont iconQQ"></i>
        </a>
        <a class="icon-container weixin">
          <i class="iconfont iconweixin"></i>
          <div class="qrcode">
            <img src="https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/weixin-qrcode.png" alt />
          </div>
        </a>
        <a class="icon-container email">
          <i class="iconfont iconemailFilled"></i>
          <div class="email-content">libra085925@gmail.com</div>
        </a>
        <a href="https://github.com/Libra11" class="icon-container">
          <i class="iconfont icongithub"></i>
        </a>
      </div>
      <!-- <div class="contact-card"> -->
      <!-- <contact-item :isLink="false" icon="QQ" content="97220040" />
        <contact-item :isLink="false" icon="emailFilled" content="libra085925@gmail.com" />
        <contact-item :isLink="false" icon="weixin" content="WX_LIBRA_CODE" />
      <contact-item :isLink="true" icon="github" content />-->
      <!-- </div> -->
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