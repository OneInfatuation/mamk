<template>
  <div>
    <NavTitle></NavTitle>
    <div class="box">
      <div class="boxs">
        <van-field
          v-model="message"
          rows="2"
          autosize
          border
          type="textarea"
          maxlength="50"
          placeholder="请输入留言"
          show-word-limit
        />
      </div>
    </div>
    <div style="margin: 16px">
      <van-button type="warning" size="large" @click="ontijiao"
        >提交</van-button
      >
    </div>
  </div>
</template>

<script>
import NavTitle from "../../components/navTitle/TitleOnlyBack";
import Vue from "vue";
import { Toast } from "vant"; //引入文字提示
Vue.use(Toast);
export default {
  components: {
    NavTitle,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    ontijiao() {
      this.$ClientAPI.geRenpinglun({ content: this.message }).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          Toast("反馈成功");
          this.$router.push("/mine");
        }
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.box {
  margin-top: 2rem;
  width: 100%;
  height: 7rem;
  .boxs {
    margin: 0 auto;
    width: 90%;
    height: 7rem;
    border: 0.05rem solid rgb(218, 213, 213);
  }
}
</style>