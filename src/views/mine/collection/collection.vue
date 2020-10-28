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
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
</style>