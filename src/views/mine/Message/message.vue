<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      title="消息通知"
      left-arrow
      @click-left="onClickLeft"
    />


        <!-- 空状态 主要内容 -->
    <!-- <van-empty
      class="custom-image"
      image="https://wap.365msmk.com/img/empty.0d284c2e.png"
      description="暂无消息"
    /> -->
     <div>
          <ul class="uuui">
              <li class="uu-li">
                  <img src="../../../assets/xiaoxi/youjian.png" alt="">
              </li>
              <li class="uu-li">
                  <p>课程通知</p>
                  <p class="uu-p">你报名的课程《李老师18号20号地理大课堂开课<br>啦》已经有3天没有学习了，快去学习吧</p>
              </li>
          </ul>
           <ul class="uuui">
              <li class="uu-li">
                  <img src="../../../assets/xiaoxi/youjian.png" alt="">
              </li>
              <li class="uu-li">
                  <p>系统通知</p>
                  <p class="uu-p">暂无消息</p>
              </li>
          </ul>
           <ul class="uuui">
              <li class="uu-li">
                  <img src="../../../assets/xiaoxi/shezi.png" alt="">
              </li>
              <li class="uu-li">
                  <p>订单通知</p>
                  <p class="uu-p">你的课程订单《》取消成功</p>
              </li>
          </ul>
           <ul class="uuui">
              <li class="uu-li">
                  <img src="../../../assets/xiaoxi/che.png" alt="">
              </li>
              <li class="uu-li">
                  <p>约课通知</p>
                  <p class="uu-p">暂无消息</p>
              </li>
          </ul>
           <ul class="uuui">
              <li class="uu-li">
                  <img src="../../../assets/xiaoxi/youjian.png" alt="">
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
  methods: {
    onClickLeft() {
      window.history.back();
    },
  },
};
</script>

<style>
.uuui{
    width: 100%;
    display: inline-flex;
    color: grey;
}
.uuui img{
    width: 3rem;
    height: 3rem;
    border-radius:50% ;
    position: relative;
    top:0.3rem
}
.uu-li{
    margin-left: 1rem;
    margin-top: 0.5rem;
}
.uu-p{
    font-size:0.5rem ;
}

</style>

