<template>
  <div>
      <van-nav-bar title="我的学习卡" left-text="返回" left-arrow @click-left="clickLleft">
  <template #right>
    <div @click="toDuihuan">学习卡兑换</div>
  </template>
</van-nav-bar>
 <van-empty
  class="custom-image"
  image="https://wap.365msmk.com/img/empty.0d284c2e.png"
  description="暂无兑换记录"
/>
  </div>
</template>

<script>
export default {
methods:{
    toDuihuan(){
        this.$router.push({
            path:"/duihuan"
        })
    },
clickLleft(){
    this.$router.push({
            path:"/mine"
        })
}
}
}
</script>

<style>
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
</style>