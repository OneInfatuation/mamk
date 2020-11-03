<template>
  <div class="hmw">
    <!-- 这个是课程详情页面 -->
    <van-popup v-model="show">
      <p>分享</p>
      <img
        src="data:image/png;base64,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"
        alt=""
      />
    </van-popup>
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
            <p class="hmwP2">{{listInfo.price==0?'免费':'￥'+listInfo.price}}</p>
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
            <ul>
              <li :key="index" v-for="(item, index) in 5">
                <img
                  src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                  alt=""
                />
                <div class="hmwPL-center">
                  <p class="hmwCP1">
                    <span>admin{{ index + 1 }}</span
                    ><van-rate
                      :size="14"
                      v-model="startActive"
                      void-color="#eee"
                      color="rgb(234, 122, 47)"
                      readonly
                    />
                  </p>
                  <p class="hmwCP2">好</p>
                </div>
                <div class="hmwPL-right">2020-07-15 21:32</div>
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
          v-show="listInfo.is_join_study==0"
          type="primary"
          block
          @click="hmwStudyJump()"
          >立即报名</van-button
        >
        <van-button
           v-show="listInfo.is_join_study==1"
          type="primary"
          block
          @click="hmwStudyJump()"
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
      show: false,
      // 是否收藏
      hmwSc: true,
      listDate: [], //详情数据
      listInfo: [], //详情标题
      listTeacher: [], //老师数据
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
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
      if(this.listInfo.is_join_study==1){
        this.$router.push("/studyDetails");
      }else{
        this.listInfo.is_join_study=1;
      }
      document.documentElement.scrollTop = 0;
    },
    // 二维码弹出事件
    showPopup() {
      this.show = true;
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
            tiem = setTimeout(()=>{
              Toast.success("收藏成功");
              clearTimeout(time)
            },1000)
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
            strTime = setTimeout(()=>{
              Toast.success("取消收藏");
              clearTimeout(strTime)
            },1000)
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
          // console.log(res.data.data);
          this.listDate = res.data.data;
          this.listInfo = res.data.data.info;
          this.listTeacher = res.data.data.teachers;
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

    //   评价接口
    var obj = {
      teacher_id: sessionStorage.getItem("teacherId"),
      limit: 10,
      page: 1,
    };
    this.$ClientAPI
      .PINGJIA(obj)
      .then((res) => {
        // console.log(res.data);
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
