<template>
  <div>
<NavTitle></NavTitle>
<div class="box">
    <div class="boxs">
<van-field
  v-model="message"
  rows="2"
  autosize
  border
  type="textarea"
  maxlength="50"
  placeholder="请输入留言"
  show-word-limit
/>
    </div>
</div>
 <div style="margin: 16px;">
   <van-button type="warning" size="large">立即兑换</van-button>
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

<style lang='scss' scoped>
.box{
    margin-top: 2rem;
    width: 100%;
    height: 7rem;
    .boxs{
        margin: 0 auto;
        width: 90%;
        height: 7rem;
        border: 0.05rem solid rgb(218, 213, 213);
    }
}

</style>