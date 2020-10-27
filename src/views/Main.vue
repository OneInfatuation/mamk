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

    <div class="email" @click="gotoEmail">
        <img src="../assets/curriculum/youjian.png">
    </div>

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
    methods:{
      gotoEmail(){
        this.$router.push("/emails")
      }
    }
}
</script>
<style lang='scss' scoped>
.email{
  width: 3rem;
  height: 3rem;
  background: blue;
  border-radius: 50px;
  line-height: 4rem;
  position: fixed;
  bottom: 7rem;
  right: 0.2rem;
  text-align: center;
}
.email img{
  width: 1.7rem;
  height: 1.7rem;
}

</style>
