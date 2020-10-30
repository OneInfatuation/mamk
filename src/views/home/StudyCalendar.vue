<template>
    
  <div>
    <!-- 顶部导航栏 -->
    <van-nav-bar title="学习日历" left-arrow @click-left="$router.go(-1)" />
    <!-- 日历 -->
      <van-calendar
      style="height: 70vh"
      :show-confirm="false"
      :poppable="false"
      :show-title="false"
      @confirm="onConfirm"
    />
    <div class="waw_showdate">
      <span class="waw_showdata_color">{{ date }}</span>
      <span>当天0节课</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "",
  data() {
    return {
      show: false,
      date: "",
    };
  },
  created() {},
  mounted() {//进入页面的日期
    var d = new Date();
    var m = (d.getMonth() + 1)>9?d.getMonth() + 1:"0"+d.getMonth() + 1;
    var y = d.getDate() > 9 ? d.getDate() : "0" + d.getDate();
    this.date = `${m}月${y}日`;
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}月${date.getDate()}日`;
    },
    onConfirm(date) {//点击获取日期
      this.date = this.formatDate(date);
      // console.log(this.date);
    },
  },
};
</script>

<style scoped lang="scss">
.waw_showdate {
  width: 100%;
  height: 10vh;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
}
span {
  font-size: 0.7rem;
  color: gray;
  margin-left: 3%;
}
.waw_showdata_color {
  color: orange;
}
</style>