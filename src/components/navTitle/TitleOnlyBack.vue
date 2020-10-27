<template>
  <div>
    <van-nav-bar :title="this.$route.meta.navTitle" :placeholder="true">
      <template #left>
        <van-icon name="arrow-left" color="black" @click="onClickBack" />
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  methods: {
    onClickBack() {
      //点击返回上一页
      this.$router.go(-1);
    },
  },
};
</script>
<style lang='scss' scoped>
</style>