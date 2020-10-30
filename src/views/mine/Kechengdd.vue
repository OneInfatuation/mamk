<template>
  <div>
    <NavTitle></NavTitle>
    <van-tabs v-model="active">
      <van-tab title="全部订单">
        <div class="c"></div>
        <!-- 跳转订单详情 -->
        <div class="zmy_order" @click="godingdan">
          <p class="zmy_p1">
            <span class="zmy_sp2">订单编号：2020071713544868021</span>
            <span class="zmy_sp3">交易完成</span>
          </p>
          <ul class="zmy_p2">
            <li>李老师18号20号地理大课堂开课了</li>
            <li class="zmy_time">时间：220.07.17 13.54</li>
            <li class="zmy_time">
              <span>实付款</span>
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                alt=""
              />
              <span class="span">0</span>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="待支付">
        <van-empty
          class="custom-image"
          image="https://wap.365msmk.com/img/empty.0d284c2e.png"
          description="暂无订单"
        />
      </van-tab>
      <van-tab title="已完成">
        <div class="zmy_order" @click="godingdan">
          <p class="zmy_p1">
            <span class="zmy_sp2">订单编号：2020071713544868021</span>
            <span class="zmy_sp3">交易完成</span>
          </p>
          <ul class="zmy_p2">
            <li>李老师18号20号地理大课堂开课了</li>
            <li class="zmy_time">时间：220.07.17 13.54</li>
            <li class="zmy_time">
              <span>实付款</span>
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                alt=""
              />
              <span class="span">0</span>
            </li>
            <li>
              <button class="zmy_btn">加入学习</button>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="已取消">
        <van-empty
          class="custom-image"
          image="https://wap.365msmk.com/img/empty.0d284c2e.png"
          description="暂无订单"
        />
      </van-tab>
    </van-tabs>
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
      active: 0,
    };
  },
  methods: {
    // 跳转订单详情
    godingdan() {
      this.$router.push({
        path: "/ddxq",
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.c {
  margin-top: 1rem;
}
.zmy_order {
  margin-top: 2rem;
  width: 95%;
  height: 10rem;
  margin: 0 auto;
  // border: 1px solid #eee;
  box-shadow: 0px 0px 4px rgb(175, 172, 172);
  border-radius: 5px;
  .zmy_p1 {
    width: 95%;
    margin: 0 auto;
    height: 2rem;
    border-bottom: 1px solid rgb(168, 165, 165);
    .zmy_sp2 {
      font-size: 0.15rem;
      // margin-top: 0.2rem;
    }
    .zmy_sp3 {
      color: rgb(231, 134, 42);
      font-size: 0.4rem;
      margin-left: 2.5rem;
      // margin-top: 1rem;
      line-height: 2rem;
    }
  }
  .zmy_p2 {
    width: 95%;
    margin: 0 auto;
    .zmy_time {
      color: rgb(196, 193, 193);
      font-size: 0.3rem;
      img {
        width: 1rem;
        height: 1rem;
      }
      .span {
        color: #000;
        margin-left: 0.5rem;
      }
    }
  }
}
</style>