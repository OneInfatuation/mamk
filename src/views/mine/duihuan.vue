<template>
  <div>
      <NavTitle></NavTitle>
      <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="卡号"
    label="卡号"
    placeholder="请输入学习卡号"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="请输入学习卡密码"
  />
  <div style="margin: 16px;">
   <van-button type="warning" size="large">立即兑换</van-button>
  </div>
</van-form>
  </div>
</template>

<script>
import NavTitle from '../../components/navTitle/TitleOnlyBack'
export default {
components:{
    NavTitle
}
}
</script>

<style>
*{

}
</style>