<template>
  <div>
    <van-nav-bar
      :title="this.$route.meta.navTitle"
      :placeholder="true"
      @click-left="onClickRight"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
    
};
</script>
<style lang='scss' scoped>
</style>