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

    <!-- 筛选处理 -->
    <Select></Select>
    <div style="width: 100%; height: 6rem; background: whitesmoke"></div>
    <!-- 展示数据 -->
    <div class="waw_vant_list">
      <div class="waw_vant_list_wrapper"></div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="waw_pop_item">
          <KeCItem
            v-for="(item, index) in list"
            :key="index"
            :item="item"
            @onclickItem="onclickItem"
          ></KeCItem>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import NavTitle from "../../components/navTitle/TitleSearch"; //引入导航子组件
import Select from "../../components/Select";
import KeCItem from "../../components/kecheng/KCItems";
export default {
  components: {
    NavTitle,
    Select,
    KeCItem,
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1, //页数
      num: 0, //记录数据长度
    };
  },
  mounted() {
    this.getKSk();
  },
  methods: {
    gotoSearch() {
      //点击跳转搜索页面
      this.$router.push("/search");
    },
    onclickItem(id) {
      //点击跳转课程详情页
      this.$router.push({
        path: "/curriculumDetails",
        query: {
          id,
        },
      });
    },
    getKSk() {
      // 特色课数据获取
      var obj = {
        page: this.page,
        limit: 10,
      };
      this.$ClientAPI.courseBasis(obj).then((res) => {
        this.list = res.data.data.list;
        this.num = this.list.length;
        console.log(this.list);
      });
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   // 加载状态结束
      //   this.loading = false;
      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
      
    },
  },
};
</script>
<style lang='scss' scoped>
.curriculum_header {
  width: 100%;
  border-bottom: 1px solid lightgrey;
  color: grey;
  background: white;
  text-align: center;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9999;
}
.curriculum_header_search {
  width: 2.3rem;
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
.waw_vant_list {
  width: 100%;
  height: 86vh;
  background: whitesmoke;
  overflow: scroll;
}
.waw_vant_list_wrapper {
  width: 100%;
  background: whitesmoke;
}
.waw_pop_item {
  width: 95%;
  height: 100%;
  margin: 0 auto;
}
</style>