<template>
  <div class="member_html">
    <!-- 头部导航 -->
    <van-nav-bar
      title="开通会员"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 开通会员用户名 -->
    <div class="member">
      <div class="member_img">
        <img
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2020x0pX1sz1i21603882583.jpg"
        />
      </div>
      <div>
        <p>用户名</p>
        <p style="color: lightgrey; font-size: 0.7rem">开通会员免费学习</p>
      </div>
    </div>

    <!-- 开通会员金额 -->
    <div class="memberMoney">
      <p>
        购买会员<span
          style="font-size: 0.7rem; color: lightgrey; margin: 0px 1rem"
          >购买会员后可免费观看会员课程</span
        >
      </p>
      <div class="memberBuy">
        <div
          class="memberBuy_piece"
          v-for="(item, index) in list"
          :key="index"
          :class="ActiveNum == index ? 'SpanActive' : ''"
          @click="ActiveNum = index"
        >
          <p
            style="
              width: 100%;
              height: 1rem;
              margin: 1rem 0px;
              text-align: center;
              font-size: 0.6rem;
            "
          >
            <b>{{ item.title }}</b>
          </p>
          <p class="memberBuy_piece_jinbi">
            <img src="../../../assets/jinbi.png" /> {{ item.piece }}
          </p>
        </div>
      </div>
    </div>

    <!-- 支付按钮 -->
    <p class="submit_btn">
      <button @click="submit">立即支付</button>
    </p>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      list: [
        { title: "季度会员", piece: "40.00" },
        { title: "半年会员", piece: "75.00" },
        { title: "月会员", piece: "15.00" },
      ],
      ActiveNum: 0,
    };
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
    submit() {
        // 是否购买会员
      Dialog.confirm({
        title: "提示",
        message: "您确定购买此会员吗？",
      })
        .then(() => {
          console.log("111");
            // 余额充足直接返回

            // 余额不足弹出
          Dialog.confirm({
            title: "提示",
            message: "您的余额不足，请去充值",
          })
            .then(() => {
              this.$router.push("/xueximoney")
            })
            .catch(() => {});
        })
        .catch(() => {});
    },
  },
};
</script>

<style>
.member_html {
  width: 100%;
  height: 50rem;
  background: rgba(238, 238, 238, 0.671);
}
.member {
  /* width: 100%; */
  height: 4rem;
  border-bottom: 1px solid lightgrey;
  border-top: 1px solid lightgrey;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: white;
}
.member_img {
  width: 3rem;
  height: 3rem;
  margin: 0.5rem 1rem 0.5rem 2rem;
}
.member_img img {
  width: 100%;
  height: 100%;
  border-radius: 5rem;
}
.memberMoney {
  width: 88%;
  height: 10rem;
  /* background: red; */
  margin: 2.2rem 6%;
}
.memberBuy {
  width: 100%;
  height: 8rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.memberBuy_piece {
  width: 6rem;
  height: 6rem;
  border: 1px solid lightgrey;
  border-radius: 0.4rem;
  background: white;
}
.memberBuy_piece_jinbi {
  text-align: center;
  color: orange;
  font-size: 1.6rem;
}
.SpanActive {
  border: 1px solid orange;
  background: lightyellow;
}
.submit_btn {
  width: 90%;
  height: 3rem;
  position: fixed;
  bottom: 2.5rem;
  left: 1.5rem;
}
.submit_btn button {
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  background: rgba(246, 144, 11, 0.671);
  border: none;
  text-align: center;
  line-height: 100%;
  color: white;
}
</style>