<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar title="消息通知" left-arrow @click-left="onClickLeft" />

    <!-- 空状态 主要内容 -->
    <!-- <van-empty
      class="custom-image"
      image="https://wap.365msmk.com/img/empty.0d284c2e.png"
      description="暂无消息"
    /> -->
    <div>
      <ul class="uuui" @click="onClick(1)">
        <li class="uu-li">
          <img src="../../../assets/xiaoxi/youjian.png" alt="" />
        </li>
        <li class="uu-li">
          <p>课程通知</p>
          <p class="uu-p" v-show="list.length != 0">
            你报名的课程《李老师18号20号地理大课堂开课<br />啦》已经有3天没有学习了，快去学习吧
          </p>
          <p class="uu-p" v-show="list.length == 0">暂无消息</p>
        </li>
      </ul>
      <ul class="uuui" @click="onClick(2)">
        <li class="uu-li">
          <img src="../../../assets/xiaoxi/youjian.png" alt="" />
        </li>
        <li class="uu-li">
          <p>系统通知</p>
          <p class="uu-p">暂无消息</p>
        </li>
      </ul>
      <ul class="uuui" @click="onClick(3)">
        <li class="uu-li">
          <img src="../../../assets/xiaoxi/shezi.png" alt="" />
        </li>
        <li class="uu-li">
          <p>订单通知</p>
          <p class="uu-p" v-show="list.length != 0">你的课程订单《》取消成功</p>
          <p class="uu-p" v-show="list.length == 0">暂无消息</p>
        </li>
      </ul>
      <ul class="uuui" @click="onClick(4)">
        <li class="uu-li">
          <img src="../../../assets/xiaoxi/che.png" alt="" />
        </li>
        <li class="uu-li">
          <p>约课通知</p>
          <p class="uu-p">暂无消息</p>
        </li>
      </ul>
      <ul class="uuui" @click="onClick(5)">
        <li class="uu-li">
          <img src="../../../assets/xiaoxi/youjian.png" alt="" />
        </li>
        <li class="uu-li">
          <p>考试通知</p>
          <p class="uu-p">暂无消息</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    onClickLeft() {
      //点击返回上一页
      window.history.back();
    },
    onClick(id) {
      //点击调转页面
      var path = "";
      switch (id) {
        case 1:
          path = "/kcTongzhi";
          break;
        case 2:
          path = "/xtTongzhi";
          break;
        case 3:
          path = "/ddTongzhi";
          break;
        case 4:
          path = "/ykTongzhi";
          break;
        case 5:
          path = "/ksTongzhi";
          break;
      }
      this.$router.push(path);
    },
  },
  mounted() {
    this.$ClientAPI.GetMessage().then((res) => {
      console.log(res.data.data);
      this.list = res.data.data;
    });
  },
};
</script>

<style>
.uuui {
  width: 100%;
  display: inline-flex;
  color: grey;
}
.uuui img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: relative;
  top: 0.3rem;
}
.uu-li {
  margin-left: 1rem;
  margin-top: 0.5rem;
}
.uu-p {
  font-size: 0.5rem;
}
</style>

