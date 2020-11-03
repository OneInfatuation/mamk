<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      title="我的收藏"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 空状态 主要内容 -->
    <van-empty
      v-show="list.length <= 0"
      class="custom-image"
      image="https://wap.365msmk.com/img/empty.0d284c2e.png"
      description="暂无收藏"
    />

    <div class="waw_item_kc" v-show="list.length>0">
      <div class="waw_item_kc_box">
        <KeCItem
          v-for="(item, index) in list"
          :key="index"
          :item="item"
          @onclick="onClickDetails"
          @onClickStart="onClickStart"
        ></KeCItem>
      </div>
    </div>
  </div>
</template>

<script>
import KeCItem from "../../../components/kecheng/KCItem"; //引入收藏的课程
import {Toast} from "vant"
export default {
  components: {
    KeCItem,
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.getGuanZhu(); //调用接口
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
    onClickDetails(id) {
      //点击跳转详情
      this.$router.push({
        path: "/curriculumDetails",
        query: {
          id,
        },
      });
    },
    onClickStart(id){//点击取消收藏
      this.$ClientAPI
          .keChengHide(id)
          .then((res) => {
            // console.log(res.data.code)
            if (res.data.code == 200) {
              this.getGuanZhu();
            }
            var strTime = null;
            strTime = setTimeout(()=>{
              Toast.success("取消收藏");
              clearTimeout(strTime)
            },1000)
          })
          .catch((err) => {
            console.log(err);
          });
    },
    getGuanZhu() {
      //封装已关注老师的接口
      var obj = {
        page: 1,
        limit: 10,
        type: 1,
      };
      this.$ClientAPI
        .guanzhus(obj)
        .then((res) => {
          console.log(res.data.data);
          this.list = res.data.data.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
body {
  background: rgba(238, 238, 238, 0.808);
}
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
.waw_item_kc {
  width: 100%;
  height: 92vh;
  background: whitesmoke;
  display: inline-flex;
  justify-content: center;
}
.waw_item_kc_box {
  width: 95%;
}
</style>