<template>
  <div class="dyb_footer">
    <router-view></router-view>
    <van-tabbar
      v-model="active"
      active-color="orange"
      inactive-color="#000"
      @change="changetab"
    >
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="column" to="/curriculum">课程</van-tabbar-item>
      <van-tabbar-item icon="todo-list" to="/appointmentRecord"
        >约课记录</van-tabbar-item
      >
      <van-tabbar-item icon="comment" to="/practice">练习</van-tabbar-item>
      <van-tabbar-item icon="friends" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: JSON.parse(sessionStorage.getItem("mainIndex")) || 0,
    };
  },
  methods: {
    changetab(a) {
      this.active = Number(a);
      sessionStorage.setItem("mainIndex", a);
    },
  },
};
</script>
<style lang='scss' scoped>
.dyb_footer{
  height: 100%;
}
</style>
