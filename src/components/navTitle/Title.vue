<template>
  <div>
    <div class="title_top">
      <van-nav-bar :title="this.$route.meta.navTitle" :placeholder="true"/>
    </div>
    <div class="title_hide"></div>
  </div>
</template>
<script>
export default {
    
};
</script>
<style lang='scss' scoped>
.title_top{
  width: 100%;
  height: 2.3rem;
  position: fixed;
  top:0px;
  left:0px;
  z-index: 9999;
  background: white;
}
.title_hide{
  width: 100%;
  height: 2.3rem;
}
</style>