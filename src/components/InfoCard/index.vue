<template>
  <div class="my">
    <div class="header-info">
      <div class="avatar">
        <img src="https://libra321.oss-cn-huhehaote.aliyuncs.com/avatar.jpg" alt class="avatar-img" />
      </div>
      <span class="name">Libra</span>
      <i class="mail">libra085925@gmail.com</i>
      <div class="statistics">
        <span class="articles">
          {{totalCount}}
          <i class="white">&nbsp;文章</i>
        </span>
        <span class="verticle-line white">|</span>
        <span class="link">
          <span id="busuanzi_container_site_uv">
            <span id="busuanzi_value_site_uv"></span>&nbsp;访问
          </span>
        </span>
      </div>
      <div class="more">更多</div>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/axios";
export default {
  data() {
    return {
      totalCount: 0
    };
  },
  mounted() {
    this.getBlogsCount();
  },
  methods: {
    getBlogsCount() {
      const _this = this;
      console.log(_this);
      axios
        .get("/api/blogs/getAllBlogsCount")
        .then(function(response) {
          console.log(_this.totalCount);
          _this.totalCount = response.data.total || 0;
        })
        .catch(function(error) {
          console.log(_this);
          console.log(error);
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>