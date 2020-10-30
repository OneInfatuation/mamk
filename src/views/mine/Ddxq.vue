<template>
  <div>
    <div class="details_top">
      <!-- 头部导航 -->
      <van-nav-bar
        title="订单详情"
        left-arrow
        @click-left="onClickLeft"
        style="background: skyblue; color: white"
      />
      <p style="margin-top: 1rem">交易完成</p>
    </div>

    <!-- 数据 -->
    <div class="details_main">
      <div
        style="
          height: 2rem;
          line-height: 2rem;
          font-weight: 900;
          font-size: 0.8rem;
          border-bottom: 1px solid #eee;
        "
      >
        李老师地理大课堂开课啦
      </div>
      <div class="details_main_center">
        <p>订单编号：<span>2020102919582109703</span></p>
        <p>下单时间：<span>2020.10.29 19:58</span></p>
        <p>支付方式：<span>虚拟币支付</span></p>
      </div>
      <div class="details_main_bottom">
        <p>商品原价：<span><img src="../../assets/jinbi.png"> 0</span></p>
        <p>优惠券：<span><img src="../../assets/jinbi.png"> 0</span></p>
        <p class="totalPiece">实付金额：<span><img src="../../assets/jinbi.png"> 0</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      window.history.back();
    },
  },
};
</script>

<style>
body {
  background: rgba(238, 238, 238, 0.733);
}
.details_top {
  height: 6rem;
  background: skyblue;
  color: white;
  text-align: center;
}
.details_main {
  width: 90%;
  height: 14rem;
  background: white;
  border-radius: 0.5rem;
  margin: 1rem 5% 0rem 5%;
}
.details_main > div {
  width: 88%;
  margin: 0.3rem auto;
}
.details_main_center{
  height:5rem;
  border-bottom:1px solid #eee;
  font-size:0.7rem;
  color: rgb(190, 174, 174);
}
.details_main_center p{
  margin: 0.7rem auto;
}
.details_main_center p span{
  float: right;
}
.details_main_bottom{ 
    height:5rem;
  border-bottom:1px solid #eee;
  font-size:0.7rem;
  color: rgb(190, 174, 174);
}
.details_main_bottom p{
  margin: 0.7rem auto;
}
.details_main_bottom p span{
  float: right;
}
.totalPiece{
  color: black;
}
</style>