<template>
  <div>
<NavTitle></NavTitle>
<div class="shezhi_box">
<div class="shezhimm">
<van-cell @click="gotoPwdSet">
  <!-- 使用 title 插槽来自定义标题 -->
  <template #title>
    <span class="custom-title">设置密码</span>
  </template>
   <template #right-icon>
    <van-icon name="arrow" class="search-icon" />
  </template>
</van-cell>
</div>
<div class="box-button">
<van-button type="warning" size="large" @click="backLogin">退出登录</van-button>
</div>
</div>
  </div>
</template>

<script>
import NavTitle from '../../components/navTitle/TitleOnlyBack'
export default {
components:{
    NavTitle
},
methods:{
  // 退出登录
  backLogin(){
    localStorage.removeItem("token");
    this.$router.push("/login")
  },
  // 跳转密码设置
  gotoPwdSet(){
    this.$router.push("/updatapwd")
  }
}
}
</script>

<style lang='scss' scoped>
.box-button{
  width: 90%;
margin: 0 auto;
margin-top: 4rem;
}

</style>