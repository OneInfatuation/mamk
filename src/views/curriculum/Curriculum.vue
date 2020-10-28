<template>
  <div>
    <!-- 标题 -->
    <div class="curriculum_header">
    <van-nav-bar title="特色课">
      <template #right>
        <van-icon name="search" size="18" @click="gotoSearch" />
      </template>
    </van-nav-bar>
    </div>

    <!-- <NavTitle></NavTitle> -->

    <!-- 筛选处理 -->
    <Select></Select>
  </div>
</template>

<script>
import NavTitle from "../../components/navTitle/TitleSearch"; //引入导航子组件
import Select from "../../components/Select";
export default {
  components: {
    NavTitle,
    Select,
  },
  methods: {
    gotoSearch() {
      this.$router.push("/search");
    },
  },
};
</script>
<style lang='scss' scoped>
.curriculum_header{
    width: 100%;
    height: 2.3rem;
    line-height: 2.3rem;
    border-bottom: 1px solid lightgrey;
    color: grey;
    background: white;
    text-align: center;
    position: fixed;
    font-size: 1.2rem;
    top: 0px;
    left: 0px;
    margin-bottom: 0.2rem;
}
.curriculum_header_search {
  width: 2.3rem;
  height: 2.3rem;
  // background: red;
  position: absolute;
  right: 1rem;
  top: 0.3rem;
  margin: 0px;
  color: grey;
}
.curriculum_header_search img {
  width: 1rem;
  height: 1rem;
}
</style>