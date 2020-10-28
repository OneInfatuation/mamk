<template>
  <div>
<NavTitle></NavTitle>
<van-tabs v-model="active">
  <van-tab title="全部订单"></van-tab>
  <van-tab title="待支付"></van-tab>
  <van-tab title="已完成"></van-tab>
  <van-tab title="已取消"></van-tab>
</van-tabs>
  </div>
</template>

<script>
import NavTitle from '../../components/navTitle/TitleOnlyBack'
export default {
components:{
    NavTitle
},
data(){
    return{
        active:0,
    }
}
}
</script>

<style>

</style>