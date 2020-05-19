<template>
  <div class="imSelector" @mouseleave="mouseleave">
    <p class="imSelectorTitle" @click="selectorToggle">
      {{value ? value : (title ? title : '-- 请选择 --')}}
      <i class="dh dhxiala"></i>
    </p>
    <el-collapse-transition>
      <div class="imSelectorMenu" v-show="show">
        <p @click="getMenu(null, mark)">{{title ? title : '-- 请选择 --'}}</p>
        <p v-for="(menu, index) in items" :key="index" @click="getMenu(menu, mark)">{{dataItem}}</p>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  name: "imSelector",
  props: ["title", "items", "show", "value", "mark"],
  methods: {
    selectorToggle: function(event) {
      this.$emit("click", event);
    },
    getMenu: function(value, mark) {
      this.$emit("chose", { data: value, mark: mark });
    },
    mouseleave: function(event) {
      this.$emit("mouseleave", event);
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>