<template>
  <div>
<NavTitle></NavTitle>
<div class="huiyuan_nav">
<van-tabs v-model="active">
  <van-tab title="未使用">
      <van-empty
  class="custom-image"
  image="https://wap.365msmk.com/img/empty.0d284c2e.png"
  description="暂无优惠券"
/>
  </van-tab>
  <van-tab title="已使用">  <van-empty
  class="custom-image"
  image="https://wap.365msmk.com/img/empty.0d284c2e.png"
  description="暂无优惠券"
/></van-tab>
  <van-tab title="已过期">  <van-empty
  class="custom-image"
  image="https://wap.365msmk.com/img/empty.0d284c2e.png"
  description="暂无优惠券"
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
}
}

</script>

<style>

</style>