<template>
  <div class="test animated bounceInRight">
    <span class="labeltitle">分类</span>
    <div class="label-container">
      <Label url="/searchDetail" icon="iconblockchain" text="Blockchain" />
      <Label url="/searchDetail" icon="icongo" text="Go" />
      <Label url="/searchDetail" icon="iconFlutter" text="Flutter" />
      <Label url="/searchDetail" icon="iconjava-script" text="JavaScript" />
      <Label url="/searchDetail" icon="iconReact" text="React" />
      <Label url="/searchDetail" icon="iconVue" text="Vue" />
      <Label url="/searchDetail" icon="iconnodejs" text="Node" />
      <Label url="/searchDetail" icon="iconcss" text="Css" />
      <!-- <Label icon="iconandroid" text="Android" />
      <Label icon="iconios" text="IOS" />-->
      <Label url="/search-detail" icon="icondatabase" text="Database" />
    </div>
  </div>
</template>

<script>
import Label from "../Label";
export default {
  components: {
    Label
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>