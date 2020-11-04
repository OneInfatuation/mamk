<template>
  <div class="hmwBox">
    <!-- 顶部 -->
    <van-sticky>
      <div class="hmw-top">
        <van-nav-bar
          title="每时每课特级教师-自主招生"
          @click-left="onClickLeft"
          @click-right="onClickRight"
        >
          <!-- 这里分别是nav两侧图标 -->
          <template #right>
            <van-icon color="#595959" name="notes-o" size="22" />
          </template>
          <template #left>
            <van-icon color="#595959" name="arrow-left" size="22" />
          </template>
        </van-nav-bar>
      </div>
    </van-sticky>
    <!-- 中间主体部分 -->
    <div class="hmw-center">
      <van-list>
        <!-- 主题的上部分 -->
        <div class="hmwC-top">
          <p>共{{ list.length }}时</p>
          <van-progress inactive :percentage="0" />
          <p>已学习0%</p>
        </div>
        <!-- 列表部分 -->
        <ul>
          <div :key="index" v-for="(item, index) in list">
            <li>
              <p>
                <span class="hmwS2">{{ item.periods_title }}</span>
              </p>
              <p class="hmwP3">
                <span>{{ item.teachers[0].teacher_name }}</span
                ><span class="waw_margin">开始时间：{{ item.start_play }}</span>
              </p>
              <p class="hmwJD">
                <van-progress inactive :percentage="item.progress_rate" />
                <span>已观看0%</span>
              </p>
            </li>
          </div>
        </ul>
      </van-list>
    </div>
    <div class="home_hidden"></div>
    <!-- 底部 -->
    <van-tabbar>
      <div class="hmw-foot">
        <p @click="hmwShow">
          <van-icon size="18" name="edit" /><span>写评论</span>
        </p>
        <p
          @click="
            $router.push({
              path: '/curriculumDetails',
              query: { id: listID.course_id },
            })
          "
        >
          <van-icon size="18" name="apps-o" /><span>课程详情</span>
        </p>
        <p @click="hmwDian">
          <van-icon size="18" name="delete" /><span>移除列表</span>
        </p>
      </div>
    </van-tabbar>

    <van-popup v-model="show">
      <div class="home_pop">
        <div class="home_rate">
          <span>星级：</span><van-rate v-model="value" />
        </div>
        <div class="home_textarea">
          <span>内容：</span><textarea v-model="PLvalue"></textarea>
        </div>
        <div class="home_button">
          <van-button type="warning" @click="onClickFB">发布</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      //    底部导航
      active: 0,
      show: false, //默认隐藏
      value: 5, //默认评星数
      list: [], //学习内容
      listID: [], //获取id
      PLvalue:"",//评论内容
    };
  },
  mounted() {
    this.getWatch();
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    //   导航部分事件
    onClickLeft() {
      //点击返回上一页
      this.$router.go(-1);
    },
    onClickRight() {
      //点击跳转到日历页面
      this.$router.push("/study-calendar");
    },
    hmwShow() {
      //点击显示弹出层
      this.show = true;
    },
    onClickFB() {
      // //点击发布评论
      // console.log(this.listID);
      // console.log(this.listID.course_id);
      var obj = {
        content: this.PLvalue,
        course_id: this.listID.course_id,
        grade: this.value,
        type: 1,
      };
      console.log(obj);
      this.$ClientAPI
        .myStudentComment(obj)
        .then((res) => {
          console.log(res.data.code);
          if(res.data.code==200){
            Toast.success("评论成功")
          }else{
            Toast(res.data.msg)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    hmwDian() {
      //点击移出列表
      Toast.success({
        message: "移出成功",
        position: "center",
      });
    },
    getWatch() {
      //获取观看数据
      this.$ClientAPI
        .myStudy(this.$route.query.id)
        .then((res) => {
          console.log(res.data);
          // console.log(res.data.data.periods);
          this.list = res.data.data.periods;
          this.listID = res.data.data.course;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
html,
body,
.hmwBox {
  height: 100%;
}
.waw_margin {
  margin-left: 5%;
}
/* 大体布局 */
.hmwBox {
  display: flex;
  flex-direction: column;
}
.hmw-top {
  /* height: 4rem; */
  height: 11.73333vw;
  background: white;
  border-bottom: 1px solid #f5f5f5;
}
.hmw-center {
  flex: 1;
}
.hmw-foot {
  height: 9.86667vw;
  background-color: #fff;
  z-index: 999;
  width: 100%;
  border-top: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 主体部分----------------------------------------------------------------------------- */
/* 主题的上半部分 */
.hmwC-top {
  font-size: 3.46667vw;
  color: #595959;
  height: 13.86667vw;
  line-height: 13.86667vw;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
/* 进度条 */
.van-progress {
  width: 14rem;
}
/* 列表部分 */
.hmw-center ul li {
  list-style: disc;
  color: #eb6100;
}
.hmw-center ul > div {
  margin: 0 1rem;
  margin-top: 1rem;
  border: 0.53333vw solid #e9e9e9;
  border-radius: 1.06667vw;
  padding: 4vw 4vw 4vw 7vw;
  /* width: 90%; */
}
/* span部分 */
.hmwS1 {
  /* padding: 0.2rem 0.4rem; */
  font-size: 0.1rem;
  color: #ea7a2f;
  border-radius: 0.2rem;
  margin-right: 0.4rem;
}
.hmwS2 {
  font-size: 0.7rem;
  font-weight: 400;
  color: #595959;
}
.hmw-center .hmwP3 {
  font-size: 0.7rem;
  padding: 0.5rem;
}
.hmwP3 {
  font-size: 0.7rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
}
/* 主体的进度条部分 */
.hmwJD {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.hmwJD span {
  color: #8c8c8c;
  font-size: 0.2rem;
}
/* 底部导航布局------------------------------------------------------------------------- */
.hmw-foot {
  width: 100%;
  height: 100%;
}
.hmw-foot p {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  color: #8c8c8c;
  vertical-align: middle;
  margin-left: 1.33333vw;
  height: 100%;
}
.hmw-foot p span {
  margin-left: 0.2rem;
}
.van-tabbar {
  height: 10vh;
  display: inline-flex;
  align-items: center;
}
.home_hidden {
  width: 100%;
  height: 10vh;
}
.van-popup {
  width: 90%;
  height: 30vh;
  border-radius: 0.4rem;
}
.home_pop {
  width: 100%;
  height: 100vh;
  font-size: 0.7rem;
}
.home_rate {
  width: 80%;
  height: 10vh;
  margin-left: 10%;
  display: inline-flex;
  align-items: center;
}
.home_textarea {
  width: 80%;
  height: 10vh;
  margin-left: 10%;
  display: inline-flex;
  align-items: center;
}
.home_button {
  width: 100%;
  height: 10vh;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.home_button .van-button {
  width: 18%;
  height: 2rem;
  line-height: 2rem;
  font-size: 0.7rem;
}
</style>
