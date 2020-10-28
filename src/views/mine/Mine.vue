<template>
  <div>
    <div class="BOX">
      <div class="mine_header">
        <div class="mine_header_background"></div>
        <div class="mine_header_personalData">
          <div class="toxian">
            <div class="toxian_box">
              <van-image
                round
                width="3rem"
                height="3rem"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <div @click="onClickLogin">
                <span v-show="user.length <= 0">登录 / 注册</span>
                <span v-show="user.length > 0">{{ user }}</span>
              </div>
            </div>
            <button class="button">去约课</button>
          </div>
          <van-grid clickable :column-num="3">
            <van-grid-item to="/">
              <template #default>
                <p class="main_cant">0.00</p>
                <p class="main_title">我的特色课</p>
                <p class="main_text">已购特色课程的学习</p>
              </template>
            </van-grid-item>
            <van-grid-item to="/">
              <template #default>
                <p class="main_cant">0.00</p>
                <p class="main_title">一对一辅导</p>
                <p class="main_text">我的一对一老师辅导</p>
              </template>
            </van-grid-item>
            <van-grid-item to="/">
              <template #default>
                <p class="main_cant">0.00</p>
                <p class="main_title">剩余学习币</p>
                <p class="main_text">查看剩余学习币</p>
              </template>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
      <!--  -->
      <div class="main_noticeBar_container">
        <div class="main_noticeBar_wrapper">
          <div class="main_noticeBar_wrapper_icon">
            <div class="noticeBar_icon">
              <van-icon name="envelop-o" size="33" />
            </div>
            <div class="noticeBar_text">
              <p>邀请好友注册APP,享多重好礼</p>
              <p>限时特惠，多邀多得</p>
            </div>
            <div class="noticeBar_icon2">
              <van-icon name="arrow" size="30" />
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="list">
        <div class="list_title">
          <p>课程相关</p>
        </div>
        <van-grid>
          <van-grid-item icon="friends-o" text="关注的老师" />
          <van-grid-item icon="star-o" text="我的收藏" />
        </van-grid>
        <div class="list_title"><p>订单相关</p></div>
        <van-grid>
          <van-grid-item icon="notes-o" text="课程订单" />
          <van-grid-item icon="notes-o" text="会员订单" @click="toHuiyuan" />
          <van-grid-item icon="notes-o" text="约课订单" @click="toYueke" />
        </van-grid>
        <div class="list_title"><p>我的账户</p></div>
        <van-grid>
          <van-grid-item icon="coupon-o" text="优惠券" @click="toYuiquan" />
          <van-grid-item icon="credit-pay" text="学习卡" @click="toXuexika" />
          <van-grid-item icon="diamond-o" text="会员" />
        </van-grid>
        <div class="list_title"><p>自助服务</p></div>
        <van-grid>
          <van-grid-item icon="volume-o" text="我的消息" />
          <van-grid-item icon="envelop-o" text="意见反馈" @click="toyijian" />
          <van-grid-item icon="friends-o" text="在线客服" @click="tokefu" />
          <van-grid-item icon="setting-o" text="设置" @click="toshezhi" />
        </van-grid>
      </div>
      <div class="wei"></div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    // 跳转至会员订单页
    toHuiyuan() {
      this.$router.push({
        path: "/huiyuan",
      });
    },
    toYueke() {
      this.$router.push({
        path: "/yueke",
      });
    },
    toYuiquan() {
      this.$router.push({
        path: "/youhuiquan",
      });
    },
    tokefu() {
      this.$router.push({
        path: "/emails",
      });
    },
    toXuexika() {
      this.$router.push({
        path: "/xuexika",
      });
    },
    toyijian() {
      this.$router.push({
        path: "/yijian",
      });
    },
    toshezhi() {
      this.$router.push({
        path: "/shezhi",
      });
    },
    onClickLogin() {
      //点击注册/登录
      var token = localStorage.getItem("token");
      if (token) {
        this.$router.push("/personalInformation");
      } else {
        this.$router.push("/login");
      }
    },
  },
  data() {
    return {
      user: "", //显示的用户名（手机号）
    };
  },
  mounted() {
    //读取用户名
    var users = localStorage.getItem("user");
    if (users) {
      this.user = users;
    }
  },
  beforeRouteEnter(to, from, next) {
    //组件级路由守卫
    var token = localStorage.getItem("token");
    // console.log(token);
    if (token) {
      next();
    } else {
      next("/login");
    }
  },
};
</script>
<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
}
.BOX {
  width: 100vw;
  height: 90vh;
  .mine_header {
    width: 100vw;
    height: 16rem;
    background: rgb(247, 244, 244);
    position: relative;
    overflow: hidden;
    .mine_header_background {
      width: 100%;
      height: 6.5rem;
      background: rgb(240, 97, 30);
      border-radius: 0px 0px 46px 46px;
      overflow: hidden;
    }
    .mine_header_personalData {
      width: 92%;
      height: 12rem;
      background: white;
      border-radius: 5px;
      position: absolute;
      top: 3rem;
      left: 0.8rem;
      .toxian {
        width: 100%;
        height: 45%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .toxian_box {
          width: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: space-around;
          span {
            font-size: 1rem;
          }
        }
      }
      .button {
        width: 5.5rem;
        height: 2rem;
        background: rgb(238, 110, 59);
        border: none;
        border-radius: 25px 0px 0px 25px;
      }
    }
  }
  .main_cant {
    color: red;
    text-align: center;
  }
  .main_title {
    font-size: 0.65rem;
  }
  .main_text {
    color: rgb(187, 184, 184);
    font-size: 0.7rem;
  }
  .main_noticeBar_container {
    width: 100%;
    height: 4.5rem;
    // background: #000;
    .main_noticeBar_wrapper {
      margin: 0 auto;
      width: 90%;
      height: 3.5rem;
      background: rgb(236, 123, 16);
      border-radius: 25px;
      margin-top: 0.7rem;
      // margin-left: 1.5rem;
      .main_noticeBar_wrapper_icon {
        display: flex;
        justify-content: space-between;

        .noticeBar_icon {
          margin-left: 1rem;
          margin-top: 0.6rem;
          color: #fff;
        }
        .noticeBar_text {
          font-size: 0.7rem;
          color: white;
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
          p {
            width: 100%;
          }
        }
        .noticeBar_icon2 {
          margin-right: 0.7rem;
          margin-top: 0.8rem;
          color: #fff;
        }
      }
    }
  }
  .list {
    width: 100%;
    .list_title {
      width: 90%;
      height: 2rem;
      margin-left: 1rem;
      // padding-left: 1rem;
      line-height: 2rem;
      font-size: 1.3rem;
      p {
        width: 100%;
        height: 100%;
      }
    }
  }
  .wei {
    height: 3rem;
    width: 100%;
    background: rgb(221, 220, 220);
  }
}
</style>