<template>
  <div class="waw_subject_container">
    <NavTitle></NavTitle>
    <div class="waw_sub_box">
      <div class="waw_sub">
        <div class="waw_check">
          <van-checkbox v-model="checked" shape="square">语文</van-checkbox>
        </div>
        <div class="waw_check">
          <van-checkbox v-model="checked" shape="square">数学</van-checkbox>
        </div>
        <div class="waw_check">
          <van-checkbox v-model="checked" shape="square">英语</van-checkbox>
        </div>
        <div class="waw_check">
          <van-checkbox v-model="checked" shape="square">物理</van-checkbox>
        </div>
        <div class="waw_check">
          <van-checkbox v-model="checked" shape="square">化学</van-checkbox>
        </div>
        <div class="waw_check">
          <van-checkbox v-model="checked" shape="square">政治</van-checkbox>
        </div>
        <div class="waw_check">
          <van-checkbox v-model="checked" shape="square">信息技术</van-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavTitle from "../../../components/navTitle/TitlePreservation";
export default {
  components: {
    NavTitle,
  },
  data() {
      return {
          checked:false,
      }
  },
};
</script>
<style lang='scss' scoped>
.waw_subject_container {
  width: 100%;
  height: 100vh;
  background: whitesmoke;
}
.waw_sub_box {
  width: 100%;
  margin-top: 0.5rem;
  background: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.waw_sub {
  width: 96%;
}
.waw_check {
    border-bottom: 1px solid lightgray;
  width: 100%;
  height:3rem;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
}
</style>