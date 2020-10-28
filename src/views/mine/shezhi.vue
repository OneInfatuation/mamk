<template>
  <div>
<NavTitle></NavTitle>
<div class="shezhi_box">
<div class="shezhimm">
<van-cell >
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
<van-button type="warning" size="large">警告按钮</van-button>
</div>
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
.box-button{
  width: 90%;
margin: 0 auto;
margin-top: 4rem;
}

</style>