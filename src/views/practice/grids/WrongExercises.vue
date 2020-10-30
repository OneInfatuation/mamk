<template>
    
  <div>
    <!-- 头部 -->
    <header>
      <div class="left" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
      </div>
      <h3>错题练习</h3>
      <div class="right" @click="$router.push('/search')">
        <van-icon name="search" />
      </div>
    </header>
    <div class="header"></div>
    <div class="nav">
      <div class="left">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value" :options="option" />
        </van-dropdown-menu>
      </div>
      <div class="right">
        <div class="error1"></div>
        <div class="error2"></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "",
  data() {
    return {
      value: 0,
      option: [
        { text: "全部", value: 0 },
        { text: "套卷练习", value: 1 },
        { text: "考点专练", value: 2 },
        { text: "仿真模考", value: 3 },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    onConfirm() {
      // this.$refs.item.toggle();
    },
  },
};
</script>

<style scoped lang="scss">
header {
  height: 11.73333vw;
  position: fixed;
  z-index: 999;
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.05rem solid #eee;
  > .left {
    padding-left: 1rem;
    font-size: 1rem;
    color: #000;
  }
  > h3 {
    font-size: 1rem;
  }
  > .right {
    padding-right: 1rem;
    font-size: 1rem;
  }
}
.header {
  height: 11.73333vw;
}
.nav {
  height: 11.73333vw;
  display: flex;
  > .left {
    width: 33.33333vw;
  }
  > .right {
    flex: 1;
    display: flex;
    align-items: center;
    
  }
}
</style>