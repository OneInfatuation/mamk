<template>
  <div class="hmw">
    <!-- 这个是课程详情页面 -->
    <!-- 二维码 -->
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <div class="block">
          <p>分享</p>
          <div class="waw_img_pop">
            <img :src="imrUrl" />
          </div>
        </div>
      </div>
    </van-overlay>
    <!-- 吸顶试试 -->
    <van-sticky>
      <div class="hmw-top">
        <!-- 原生的导航 -->
        <van-icon name="arrow-left" @click="onClickLeft" />
        <p v-show="!hmwFlag">课程详情</p>
        <div class="hmwNav" v-show="hmwFlag">
          <span
            :class="hmwIndex == 0 ? 'hmwActiveTop' : ''"
            @click="hmwDian(0)"
            id="hmwKc"
            >课程介绍</span
          >
          <span
            :class="hmwIndex == 1 ? 'hmwActiveTop' : ''"
            @click="hmwDian(1)"
            id="hmwDg"
            >课程大纲</span
          >
          <span
            :class="hmwIndex == 2 ? 'hmwActiveTop' : ''"
            @click="hmwDian(2)"
            id="hmwPj"
            >课程评价</span
          >
        </div>
        <van-icon name="cluster-o" @click="showPopup" />
      </div>
    </van-sticky>

    <!-- 中间部分 -->
    <div class="hmw-center" style="background: #f0f2f5">
      <!-- 可滑动啥的 -->
      <van-list>
        <ol>
          <!-- 详情 -->
          <li class="hmwXQ">
            <div class="waw_hmwtop">
              <p class="hmwP1 hmwTOP1">
                每时每课特级教师-自主招生冲刺讲座知识点总结——sass
              </p>
              <van-icon
                class="hmwNo"
                v-show="listInfo.is_collect == 0"
                name="star-o"
                @click="onClickStart(listInfo.is_collect, listInfo.collect_id)"
              />
              <van-icon
                class="hmwNo"
                v-show="listInfo.is_collect != 0"
                color="orange"
                name="star"
                @click="onClickStart(listInfo.is_collect, listInfo.collect_id)"
              />
            </div>
            <p class="hmwP2">
              {{ listInfo.price == 0 ? "免费" : "￥" + listInfo.price }}
            </p>
            <p class="hmwP3">
              共课{{ listInfo.is_free }}时 |
              {{ listInfo.real_sales_num }}人已报名
            </p>
          </li>
          <!-- 教学团队 -->
          <li class="hmwTD" v-for="(item, index) in listTeacher" :key="index">
            <p class="hmwP1">教学团队</p>
            <div>
              <img :src="item.teacher_avatar" alt="" /><span>{{
                item.teacher_name
              }}</span>
            </div>
          </li>
          <!-- 课程介绍 -->
          <li class="hmwJS hmwSroll">
            <p class="hmwP1">课程介绍</p>
          </li>
          <!-- 课程大纲 -->
          <li class="hmwDG hmwSroll" style="padding-bottom: 2px">
            <p class="hmwP1">课程大纲</p>
            <!-- 无序列表 -->
            <ul>
              <li :key="index" v-for="(item, index) in 3">
                <p>
                  <span class="hmwS1" style="">回放</span
                  ><span class="hmwS2">第二讲第一课时</span>
                </p>
                <p class="hmwP3">共8课时 | 134人已报名</p>
              </li>
            </ul>
          </li>
          <!-- 课程评论 -->
          <li class="hmwPL hmwSroll">
            <p class="hmwP1">课程评论</p>
            <div v-show="listPJData.length==0" class="waw_empty_img_box">
              <img src="https://img.yzcdn.cn/vant/empty-image-default.png">
              <p>暂没评论</p>
            </div>
            <ul v-show="listPJData.length>0">
              <li :key="index" v-for="(item, index) in listPJData">
                <img
                  :src="item.avatar"
                />
                <div class="hmwPL-center">
                  <p class="hmwCP1">
                    <span>{{ item.nickname }}</span
                    ><van-rate
                      :size="14"
                      v-model="item.grade"
                      void-color="#eee"
                      color="rgb(234, 122, 47)"
                      readonly
                    />
                  </p>
                  <p class="hmwCP2">{{item.content}}</p>
                </div>
                <div class="hmwPL-right">{{item.created_at | filterTime}}</div>
              </li>
            </ul>
          </li>
        </ol>
      </van-list>
    </div>
    <!-- 底部按钮 -->
    <van-tabbar>
      <div class="hmw-foot">
        <van-button
          v-show="listInfo.is_buy == 0"
          type="primary"
          block
          @click="hmwStudyJump"
          >立即报名</van-button
        >
        <van-button
          v-show="listInfo.is_buy == 1"
          type="primary"
          block
          @click="hmwStudyJump"
          >立即学习</van-button
        >
      </div>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
import QRCode from "qrcode";
export default {
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      //    导航要求的--选中哪一个
      active: 2,
      startActive: 4,
      //   显示导航
      hmwFlag: false,
      // 导航选中了哪一个
      hmwIndex: 0,
      //   二维码是否出现
      hmwShow: false,
      // 底部按钮状态（有没有登录）
      hmwBtnFlag: false,
      // 弹出层是否显示
      show: false, //判断是否让遮罩层出现
      imrUrl: "", // 图片的地址
      // 是否收藏
      hmwSc: true,
      listDate: [], //详情数据
      listInfo: [], //详情标题
      listTeacher: [], //老师数据
      listPJData:[],//评价数据
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  filters:{
    filterTime(val){
       let date = new Date(val*1000);
      let y = date.getFullYear();
      let m = (date.getMonth() + 1)>9?(date.getMonth() + 1):'0'+(date.getMonth() + 1);
      let d = date.getDate()>9?date.getDate():'0'+date.getDate();
      let h = date.getHours()>9?date.getHours():'0'+date.getHours();
      let mm = date.getMinutes()>9?date.getMinutes():'0'+date.getMinutes();
      let s = date.getSeconds()>9?date.getSeconds():'0'+date.getSeconds();

      let time = `${y}-${m}-${d} ${h}:${mm}:${s}`;
      return time;
    }
  },
  // 组件方法
  methods: {
    //   nav是否显示判断事件
    scrollHandle: function (e) {
      var top = e.srcElement.scrollingElement.scrollTop; // 获取页面滚动高度
      if (top > 0) {
        this.hmwFlag = true;
      } else {
        this.hmwFlag = false;
      }
    },
    //   nav的点击事件
    hmwDian(index) {
      // // 样式的改变
      this.hmwIndex = index;
      console.log(this.hmwIndex);
      // 获取目标的 offsetTop
      // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
      const targetOffsetTop =
        document.querySelector(`.van-list>ol>li:nth-child(${index + 3})`)
          .offsetTop - 50;
      // 获取当前 offsetTop
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
      const STEP = 50;
      // 判断是往下滑还是往上滑
      if (scrollTop > targetOffsetTop) {
        // 往上滑
        smoothUp();
      } else {
        // 往下滑
        smoothDown();
      }
      // 定义往下滑函数
      function smoothDown() {
        // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
        if (scrollTop < targetOffsetTop) {
          // 如果和目标相差距离大于等于 STEP 就跳 STEP
          // 否则直接跳到目标点，目标是为了防止跳过了。
          if (targetOffsetTop - scrollTop >= STEP) {
            scrollTop += STEP;
          } else {
            scrollTop = targetOffsetTop;
          }
          // 这里应该是要跳到响应元素的位置

          document.body.scrollTop = scrollTop;
          document.documentElement.scrollTop = scrollTop;
          // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
          requestAnimationFrame(smoothDown);
        }
      }
      // 定义往上滑函数
      function smoothUp() {
        if (scrollTop > targetOffsetTop) {
          if (scrollTop - targetOffsetTop >= STEP) {
            scrollTop -= STEP;
          } else {
            scrollTop = targetOffsetTop;
          }
          document.body.scrollTop = scrollTop;
          document.documentElement.scrollTop = scrollTop;
          requestAnimationFrame(smoothUp);
        }
      }
    },
    // 立即学习点击事件
    hmwStudyJump() {
      if (this.listInfo.is_buy == 0 && this.listInfo.price == 0) {
        this.$ClientAPI
<<<<<<< HEAD
          .baoming({
            shop_id: this.listInfo.id,
            type: 5,
          })
=======
          .LIJIBAOMING({ shop_id: this.listInfo.id, type: 5 })
>>>>>>> 73834af059337585d28c218db7bc83f682236ed6
          .then((res) => {
            console.log(res);
            if (res.data.code == 200) {
              this.getDetails();
            }
            var time = null;
            time = setTimeout(() => {
              Toast.success(res.data.msg);
              clearTimeout(time);
            }, 1000);
<<<<<<< HEAD
=======
          })
          .catch((err) => {
            console.log(err);
>>>>>>> 73834af059337585d28c218db7bc83f682236ed6
          });
      } else if (this.listInfo.is_buy == 1) {
        this.$router.push({
          path: "/studyDetails",
          query: { id: this.listInfo.id },
        });
      } else if (this.listInfo.is_buy == 0 && this.listInfo.price != 0) {
<<<<<<< HEAD
=======
        this.$router.push({
          path: "/confirmOrder",
          query: {
            id: this.listInfo.id,
          },
        });

>>>>>>> 73834af059337585d28c218db7bc83f682236ed6
        Toast.success("请先购买课程");
      }

      document.documentElement.scrollTop = 0;
    },
    // 二维码弹出事件
    showPopup() {
      this.show = true;
      let url = location.href;
      // console.log(url);
      QRCode.toDataURL(url)
        //在这里拿到地址，把它赋值给data里面定义的值imrUrl
        .then((tpian) => {
          // console.log(tpian);
          this.imrUrl = tpian;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // 点击收藏
    onClickStart(id, collect_id) {
      // console.log(id);
      if (id == 0) {
        var obj = {
          course_basis_id: this.$route.query.id,
          type: 1,
        };
        this.$ClientAPI
          .kechengShow(obj)
          .then((res) => {
            // console.log(res.data)
            if (res.data.code == 200) {
              this.getDetails();
            }
            var time = null;
            time = setTimeout(() => {
              Toast.success("收藏成功");
              clearTimeout(time);
            }, 1000);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$ClientAPI
          .keChengHide(collect_id)
          .then((res) => {
            // console.log(res.data.code)
            if (res.data.code == 200) {
              this.getDetails();
            }
            var strTime = null;
            strTime = setTimeout(() => {
              Toast.success("取消收藏");
              clearTimeout(strTime);
            }, 1000);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    // 滚动监听器
    onScroll() {
      // 获取所有锚点元素
      const navContents = document.querySelectorAll(".hmwSroll");
      // console.log(navContents)
      // 所有锚点元素的 offsetTop
      const offsetTopArr = [];
      navContents.forEach((item) => {
        offsetTopArr.push(item.offsetTop);
      });
      // 获取当前文档流的 scrollTop
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollTop)
      // 定义当前点亮的导航下标
      let navIndex = 0;
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是n了
        if (scrollTop >= offsetTopArr[n] - 50) {
          navIndex = n;
        }
      }
      // 这里就是让导航样式随你的滚动而改变
      this.hmwIndex = navIndex;
      // console.log(this.hmwIndex)
      this.active = navIndex;
    },

    // 跳转到上一个页面
    onClickLeft() {
      this.$router.go(-1);
    },
    getDetails() {
      // 获取详情页的数据
      this.$ClientAPI
        .courseInfo(this.$route.query.id)
        .then((res) => {
          console.log(res.data.data);
          this.listDate = res.data.data;
          this.listInfo = res.data.data.info;
          this.listTeacher = res.data.data.teachers;
          // console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    document.documentElement.scrollTop = 0;
    window.addEventListener("scroll", this.scrollHandle); // 绑定页面的滚动事
    // 监听滚动事件
    window.addEventListener("scroll", this.onScroll, false);
    // 获取一下数据
    this.getDetails();

    // //   老师评价接口
    // var obj = {
    //   teacher_id: sessionStorage.getItem("teacherId"),
    //   limit: 10,
    //   page: 1,
    // };
    // this.$ClientAPI
    //   .PINGJIA(obj)
    //   .then((res) => {
    //     // console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

      // console.log(this.$route.query.id);
    // 课程评价
    var strObj = {
      id: this.$route.query.id,
      limit: 10,
      page: 1,
    };
    this.$ClientAPI
      .KCpingLun(strObj)
      .then((res) => {
        console.log(res.data.data.list);
        this.listPJData = res.data.data.list
      })
      .catch((err) => {
        console.log(err);
      });
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.onScroll);
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
body > div,
#app {
  height: 100%;
}
/* 大体布局----------------------------------------------------------- */
.hmw {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.van-overlay {
  width: 100%;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 70%;
  height: 40%;
  background-color: #fff;
}
.block p {
  width: 100%;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.waw_img_pop {
  width: 80%;
  margin-left: 10%;
}
.waw_img_pop img {
  width: 100%;
  height: 100%;
}
.waw_hmwtop {
  width: 100%;
  display: inline-flex;
  align-items: center;
}
.hmw-top {
  height: 3rem;
  padding: 0 1rem;
  background: white;
  border-bottom: 0.01rem solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.waw_empty_img_box{
  width: 100%;
  height: 12rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.waw_empty_img_box img{
  width: 60% !important;
  height: 8rem!important;
}
.waw_empty_img_box p{
  width: 100%;
  height: 2rem;
  font-size: 0.7rem;
  color: gray;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.hmw-center {
  /* min-height: 4rem; */
  flex: 1;
  margin-bottom: 2.8rem;
}
.hmw-foot {
  /* background: darkseagreen; */
  width: 100%;
  height: 2.8rem;
  z-index: 99999;
}
/* 头部导航的布局 ------------------------------------------------------------------*/
/* 原生写导航的布局 */

.hmw-top .van-icon {
  font-size: 1.4rem;
  /* margin-top: 0.8rem; */
  color: #646464;
}
.hmw-top p {
  font-size: 4.8vw;
  color: #595959;
}
.hmwNav {
  display: flex;
  width: 80%;
}
.hmwNav span {
  flex: 1;
  text-align: center;
  font-size: 4vw;
  font-weight: 400;
  color: #8c8c8c;
}
.hmwNav .hmwActiveTop {
  flex: 1;
  text-align: center;
  color: #333;
  font-weight: 500;
  font-size: 4.26667vw;
}
/* 中间部分布局 -------------------------------------------------------------------------------------*/
.hmw-center ol > li {
  background: white;
  padding: 1rem;
  margin-bottom: 1rem;
}
.hmw-center ol > li > p,
.hmw-center ol > li > .hmwTOP1 {
  padding-bottom: 0.5rem;
}
/* 第一行文本 */
.hmw-center .hmwP1 {
  width: 80%;
  padding-bottom: 1rem;
  font-size: 4.26667vw;
}
.hmwP2 {
  color: #eb6100;
  font-size: 4.53333vw;
}
.hmwP3 {
  font-size: 4vw;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
}
.hmwP4 {
  color: #eb6100;
  font-size: 4.53333vw;
}
/* 最上面li的样式 */
.hmw-center .hmwXQ {
  position: relative;
}
.hmwXQ .hmwNo {
  position: absolute;
  top: 0.5rem;
  right: 0.7rem;
  font-size: 1.2rem;
  color: #646464;
  font-weight: bold;
}
.hmwXQ .hmwYes {
  position: absolute;
  top: 0.5rem;
  right: 0.7rem;
  font-size: 1.2rem;
  color: #eb6100;
  font-weight: bold;
}
/* 教学团队 */
.hmwTD > div {
  display: flex;
  flex-direction: column;
  font-size: 3.2vw;
  font-weight: 400;
  color: #595959;
  align-items: center;
  width: 4.5rem;
}
.hmwTD img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2rem;
}
.hmwPL img {
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 1rem;
}
.hmwTD span {
  padding: 2.13333vw 0.8vw 0;
  padding-top: 1vw;
  padding-bottom: 1rem;
}
/* 课程大纲 */
.hmwDG ul > li {
  list-style: disc;
  color: #eb6100;
  margin: 0 2rem;
  margin-bottom: 1rem;
}
/* span部分 */
.hmwS1 {
  padding: 0.2rem 0.4rem;
  font-size: 0.1rem;
  background: #ea7a2f;
  color: white;
  border-radius: 0.2rem;
  margin-right: 0.5rem;
}
.hmwS2 {
  font-size: 3.2vw;
  font-weight: 400;
  color: #595959;
}
.hmwDG .hmwP3 {
  font-size: 3.6vw;
  padding: 0.5rem;
}
/* 课程讲评 */
.hmwPL li {
  display: flex;
  justify-content: space-between;
  padding-left: 0.7rem;
  padding-bottom: 1rem;
}
.hmwPL-center .hmwCP1 {
  display: flex;
  flex-wrap: nowrap;
  font-size: 3.73333vw;
  font-weight: 400;
  color: #333;
}
.hmwPL-center .hmwCP1 span {
  margin-right: 0.5rem;
}
.hmwCP2 {
  padding: 0.8rem 0;
  line-height: 3.4vw;
  color: #999;
  font-size: 3.2vw;
}
.hmwPL-right {
  font-size: 3.2vw;
  font-weight: 400;
  color: #999;
  text-align: right;
}
.hmwPL .hmwP1 {
  padding-bottom: 0.5rem;
}
/* 评分小图标样式 */
.hmwPL .van-rate__item {
  padding-left: 0;
}
/* 底部的按钮 -----------------------------------------------------------------------------------------*/
.hmw-foot .van-button {
  background: #eb6100;
  color: white;
  border: none;
  height: 2.8rem;
  font-size: 1.2rem;
}
.van-tabbar {
  height: 2.8rem;
}
/* 二维码弹框的样式 */
.van-popup {
  padding: 0.8rem 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.van-popup img {
  width: 11.5rem;
}
.van-popup p {
  text-align: center;
  margin-bottom: 1.5rem;
}
</style>
