<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      title="我的收藏"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 空状态 主要内容 -->
    <van-empty
      class="custom-image"
      image="https://wap.365msmk.com/img/empty.0d284c2e.png"
      description="暂无收藏"
    />

    <div>

    </div>

    

  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[]
    }
  },
  mounted(){
      // 获取收藏数据
      // this.$ClientAPI.kechengShow().then((res)=>{
      //   console.log(res)
      // })

      // this.$keChengHide.CollectCancel().then((res)=>{
      //     // this.list = res
      //     console.log(res)
      // })
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
body{
  background: rgba(238, 238, 238, 0.808);
}
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
</style>