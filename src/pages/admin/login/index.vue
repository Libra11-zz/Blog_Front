<template>
  <div class="login-container">
    <div class="left">
      <el-image
        style="height: 100vh;width: 60vw;"
        src="https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/login-bg.png"
        fit="cover"
      ></el-image>
    </div>
    <div class="right">
      <span class="logo">
        <span class="logo-text">L</span>
      </span>
      <span class="sys-title">博客后台系统</span>
      <div class="login-form">
        <div class="form-item">
          <el-input
            class="login-input"
            placeholder="请输入用户名"
            suffix-icon="el-icon-user"
            v-model="userName"
          ></el-input>
        </div>
        <div class="form-item">
          <el-input
            class="login-input"
            show-password
            placeholder="请输入密码"
            suffix-icon="el-icon-lock"
            v-model="password"
          ></el-input>
        </div>
        <div class="form-item">
          <el-button class="login-button" type="primary" :loading="loading">登陆</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
      loading: false
    };
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>