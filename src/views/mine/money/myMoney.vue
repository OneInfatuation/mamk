<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      title="余额明细"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <p v-if="isShow" style="color：lightgrey;text-align:center;font-size:0.7rem">没有更多了</p>
    <div v-if="!isShow">欠款</div>

  </div>
</template>

<script>
export default {
    data(){
        return{
            isShow:true
        }
    },
  methods: {
    onClickLeft() {
      window.history.back();
        }
    }
}
</script>

<style>

</style>