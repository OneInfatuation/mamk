<template>
  <div class="guanzhu_html">
    <NavTitle></NavTitle>
    <!-- 跳转讲师详情 -->
    <div class="waw_empty" v-show="guanzhuList.length<=0">
      <div class="waw_img_box">
        <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
        <p>暂无关注</p>
      </div>
    </div>

    <div class="waw_box" v-show="guanzhuList.length>0">
      <div
        class="box"
        v-for="(item, index) in guanzhuList"
        :key="index"
        @click="gotoTeacher(item.teacher_id)"
      >
        <div style="width: 2.5rem; height: 2.5rem">
          <img :src="item.avatar" width="100%" height="100%" />
        </div>
        <div>
          <p class="waw_op">
            {{ item.teacher_name }}
            <span style="font-size: 0.8rem; color: orangered">M20</span>
          </p>
          <p style="font-size: 0.8rem; color: lightgrey">
            {{ item.introduction }}
          </p>
        </div>
        <div>
          <button class="btn" @click.stop="offAbout(item.teacher_id)">
            取消关注
          </button>
        </div>
      </div>
      <p
        style="
          font-size: 0.6rem;
          text-align: center;
          color: grey;
          margin: 0.3rem;
        "
      >
        没有更多了
      </p>
    </div>
  </div>
</template>

<script>
import NavTitle from "../../components/navTitle/TitleOnlyBack";
export default {
  components: {
    NavTitle,
  },
  data() {
    return {
      guanzhuList: [], //已关注数据
    };
  },
  mounted() {
    this.getGuanZhu(); //调用封装
  },
  methods: {
    offAbout(id) {
      //点击取消收藏
      this.$ClientAPI
        .TeacherShowHiden(id)
        .then((res) => {
          console.log(res.data);
          //  this.guanzhuList = res.data;
          this.getGuanZhu(); //调用封装
        })
        .catch((err) => {
          console.log(err);
        });
    },
    gotoTeacher(id) {
      //点击跳转到讲师详情
      this.$router.push({ path: "/teacher", query: { id } });
    },
    getGuanZhu() {
      //封装已关注老师的接口
      var obj = {
        page: 1,
        limit: 10,
        type: 2,
      };
      this.$ClientAPI
        .guanzhus(obj)
        .then((res) => {
          console.log(res.data.data);
          this.guanzhuList = res.data.data.list;
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
  height: 100%;
  background: rgba(211, 211, 211, 0.486);
}
.waw_empty{
  width: 100%;
  height: 92vh;
}
.waw_img_box{
  width: 100%;
  height: 30vh;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.waw_img_box img{
  width: 45%;
  height: 30vh;
}
.waw_img_box p{
  width: 100%;
  font-size: 0.7rem;
  margin-top: 4vh;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.waw_op {
  font-size: 0.7rem;
}
.box {
  width: 90%;
  height: 4rem;
  background: white;
  margin: 1rem 5% 0rem;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
.waw_box {
  width: 100%;
  height: 92vh;
  background: whitesmoke;
}
.box div {
  margin: 0.5rem 0.2rem;
}
.btn {
  width: 4rem;
  height: 1.7rem;
  border-radius: 1rem;
  font-size: 0.5rem;
  border: none;
  color: orangered;
  background: rgba(255, 166, 0, 0.315);
}
</style>