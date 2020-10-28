<template>
    
  <div class="dyb_course_deatail">
    <!-- 顶部 -->
    <van-nav-bar
      title="课程详情"
      left-arrow
      @click-left="$router.go(-1)"
      @click-right="showShare = true"
    >
      <template #right>
        <van-icon name="share-o" size="18" />
      </template>
    </van-nav-bar>
    <!--   分享面板 -->
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
    />
    <!-- 课程详情 -->
    <div class="dyb_cd_info">
      <p class="info_title">
        初中重点几何知识点——第九讲： 用描点法画出二次函数y＝－x^2的图象
      </p>
      <i class="info-collect"></i>
      <p class="info-price">1.00</p>
      <div>共1课时 | 127人已报名</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "",
  data() {
    return {
      // 课程id
      c_id: "",
      // 分享面板
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
    };
  },
  created() {},
  mounted() {
    this.coursedetail();
  },
  methods: {
    // 获取课程详情信息
    async coursedetail() {
      this.c_id = this.$route.query.id;
      // let { data: res } = await this.$ClientAPI.coursedetail({ basis_id: this.c_id });
    },
  },
};
</script>

<style scoped lang="scss">
.dyb_course_deatail {
  height: 100%;
  background: #f0f2f5;
}
.dyb_cd_info {
  height: 5.1rem;
  padding: 0.7rem;
  background: #fff;
  position: relative;
  >.info_title {
    font-size: 4.26667vw;
    font-weight: 400;
    padding-right: 1.9rem;
  }
  > .info-price {
    font-size: 4.53333vw;
    font-weight: 500;
    color: #ee1f1f;
    line-height: 8.53333vw;
  }
  > div {
    font-size: 4vw;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.45);
    line-height: 0.8rem;
    line-height: 8vw;
  }
  >i{
    position: absolute;
    right: 2.66667vw;
    top: 1.33333vw;
    width: 6.66667vw;
    height: 6.66667vw;
    background: url(data:image/png;base64,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) no-repeat 50%;
    background-size: 4.8vw 4.8vw;
  }
}
</style>