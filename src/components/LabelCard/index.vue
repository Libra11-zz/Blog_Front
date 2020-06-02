<template>
  <div class="test animated bounceInRight">
    <span class="labeltitle">标签</span>
    <div class="label-container">
      <Label v-for="(item, index) in label" :key="index" :url="`/label/${item}`" :text="item" />
    </div>
  </div>
</template>

<script>
import Label from "../Label";
import axios from "@/utils/axios";
export default {
  data() {
    return {
      label: []
    };
  },
  created() {
    this.getAllTags();
  },
  methods: {
    getAllTags() {
      const _this = this;
      axios
        .get("/api/remote-search/getAllTags")
        .then(function(response) {
          console.log(response);
          _this.label = response.data.info || [];
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