<template>
  <div>
      <NavTitle></NavTitle>
      <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" @search="onSeacher"/>
  </div>
</template>
<script>
import NavTitle from "../../../components/navTitle/TitleBack"; //引入导航子组件
export default {
  components:{
    NavTitle,
  },
  data() {
    return {
      value:"",//搜索关键字
    }
  },
  methods:{
    onSeacher(){//按下enter键搜索

    }
  }
};
</script>
<style lang='scss' scoped>
</style>