<template>
  <div class="dyb_footer">
    <router-view></router-view>
    <!-- 底部tab栏 -->
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
    changetab(a) {//保存active，（保存底部tab标签栏的值）刷新的时候还在原来的状态
      this.active = Number(a);
      sessionStorage.setItem("mainIndex", a);
    },
  }
}
</script>
<style lang='scss' scoped>
</style>
