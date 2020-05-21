<template>
  <div class="test animated bounceInRight">
    <span class="labeltitle">分类</span>
    <div class="label-container">
      <Label
        v-for="(item, index) in categorys"
        :key="index"
        :url="`/label/${item}`"
        :icon="`${icon[item]}`"
        :text="item"
      />
    </div>
  </div>
</template>

<script>
import Label from "../Label";
import axios from "@/utils/axios";
export default {
  data() {
    return {
      categorys: [],
      icon: {
        test: "icontest",
        Flutter: "iconFlutter",
        Git: "icongit"
      }
    };
  },
  created() {
    this.getAllCategory();
  },
  methods: {
    getAllCategory() {
      const _this = this;
      axios
        .get("/api/blogs/getAllCategory")
        .then(function(response) {
          _this.categorys = response.data.data || [];
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  components: {
    Label
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>