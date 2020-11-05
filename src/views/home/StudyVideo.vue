<template>
  <div>
    <div class="nav">
      <div class="nav1" @click="back"><img src="../../assets/curriculum/fanhui.png" /></div>
      <div class="nav2">自主招生冲刺讲座</div>
      <div class="nav3"></div>
    </div>
    <!-- 视频 -->
    <div style="width:100vw;height:3rem">
      <video width="100%" controls autoplay>
        <source src="https://v.youku.com/v_show/id_XMzQ3OTQ4Njc0NA==.html" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.query.videoId);
    console.log(this.$route.query.kcId);
    // this.$ClientAPI.myStydyVideo(this.$route.query.videoId,this.$route.query.kcId).then(res=>{
    //   console.log(res);
    // }).catch(err=>{
    //   console.log(err);
    // })
  },
  methods:{
      back(){
          window.history.back()
      }
  }
};
</script>

<style>
.nav {
  width: 100vw;
  height: 3rem;
  background: #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.nav1 {
  flex: 1;
  height: 1.5rem;
}
.nav2 {
  flex: 5;
  overflow: hidden;
  height: 1.5rem;
}
.nav3 {
  height: 1.5rem;
  flex: 1;
}
</style>