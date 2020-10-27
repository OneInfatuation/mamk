<template>
  <div>
    <van-nav-bar
      :title="this.$route.meta.navTitle"
      :placeholder="true"
      @click-left="onClickRight"
    >
      <template #right>
        <van-icon name="search" color="black" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
    methods: {
        onClickRight(){//点击跳转搜索页面
            this.$router.push("/search")
        }
    },
};
</script>
<style lang='scss' scoped>
</style>