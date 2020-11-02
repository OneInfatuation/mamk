<template>
  <div>
    <NavTitle></NavTitle>
    <van-search
      v-model="value"
      shape="round"
      placeholder="请输入搜索关键词"
      @search="onSeacher"
    />

    <!-- <div>
      <div></div>
    </div> -->

    <!-- 分类 二级导航 -->
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="求导题库" />
      <van-sidebar-item title="极限题库" />
      <van-sidebar-item title="生物" />
      <van-sidebar-item title="化学" />
      <van-sidebar-item title="数学" />
      <van-sidebar-item title="物理" />
      <van-sidebar-item title="英语" />
    </van-sidebar>
    
  </div>
</template>
<script>
import NavTitle from "../../../components/navTitle/TitleBack"; //引入导航子组件
export default {
  components: {
    NavTitle,
  },
  data() {
    return {
      value: "", //搜索关键字
      activeKey: 0, //索引值
    };
  },

  methods: {
    onSeacher() {
      //按下enter键搜索
    },
  },
};
</script>
<style lang='scss' scoped>
</style>