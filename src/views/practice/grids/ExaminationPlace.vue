<template>
  <div>
    <NavTitle></NavTitle>
    <van-search
      v-model="value"
      shape="round"
      placeholder="请输入搜索关键词"
      @search="onSeacher"
    />

    <div>
      <div></div>
    </div>

    <!-- 分类 二级导航 -->
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="求导题库" >
        <template>
          <div>21323323ew</div>
        </template>
      </van-sidebar-item>
      <van-sidebar-item title="极限题库" />
      <van-sidebar-item title="生物" />
      <van-sidebar-item title="化学" />
      <van-sidebar-item title="数学" />
      <van-sidebar-item title="物理" />
      <van-sidebar-item title="英语" />
    </van-sidebar>

    <!-- <van-tabs v-model="active" >
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs> -->
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
      active: 2,
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