<template>
  <div>
    <van-nav-bar :title="this.$route.meta.navTitle" :placeholder="true">
        <template #left> 
            <van-icon name="arrow-left" @click="onClickBack"/>
        </template>
      <template #right>
        <van-icon name="search" size="18" @click="onClickSearch"/>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
    methods: {
        onClickBack(){//点击返回上一页
            this.$router.go(-1)
        },
        onClickSearch(){//点击进入搜索页面
            this.$router.push("/search")
        }
    },
};
</script>
<style lang='scss' scoped>
.van-nav-bar .van-icon{
    color:black !important;
}
</style>