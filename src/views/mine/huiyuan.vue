<template>
  <div>
<NavTitle></NavTitle>
<div class="huiyuan_nav">
<van-tabs v-model="active">
  <van-tab title="全部订单">
      <van-empty
  class="custom-image"
  image="https://wap.365msmk.com/img/empty.0d284c2e.png"
  description="暂无订单"
/>
  </van-tab>
  <van-tab title="待支付">  <van-empty
  class="custom-image"
  image="https://wap.365msmk.com/img/empty.0d284c2e.png"
  description="暂无订单"
/></van-tab>
  <van-tab title="已完成">  <van-empty
  class="custom-image"
  image="https://wap.365msmk.com/img/empty.0d284c2e.png"
  description="暂无订单"
/></van-tab>
  <van-tab title="已取消">  <van-empty
  class="custom-image"
  image="https://wap.365msmk.com/img/empty.0d284c2e.png"
  description="暂无订单"
/></van-tab>
</van-tabs>
</div>
  </div>
</template>

<script>
import NavTitle from '../../components/navTitle/TitleOnlyBack'
export default {
components:{
    NavTitle
},
data(){
  return {
    active:0,
  }
}
}
</script>

<style>
.huiyuan_nav{
    width: 100%;
}
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
</style>