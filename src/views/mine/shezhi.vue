<template>
  <div>
<NavTitle></NavTitle>
<div class="shezhi_box">
<div class="shezhimm">

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
.shezhi_box{
    background: rgb(221, 220, 220);
    width: 100%;
    height: 91.5vh;
    .shezhimm{
     width: 100%;
     height:6rem;
     background: rgb(255, 253, 253);
     padding-top: 4rem;
    }
}
</style>