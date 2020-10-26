<template>
  <div>
      <router-view></router-view>
    <van-tabbar v-model="active" active-color="orange" inactive-color="#000">
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="column" to="/curriculum">课程</van-tabbar-item>
      <van-tabbar-item icon="todo-list" to="/appointmentRecord">约课记录</van-tabbar-item>
      <van-tabbar-item icon="comment" to="/practice">练习</van-tabbar-item>
      <van-tabbar-item icon="friends" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
    data() {
        return {
            active:0
        }
    },
};
</script>
<style lang='scss' scoped>
</style>