<template>
  <div class="waw_nickname_container">
    <NavTitle @onClickRight="onClickRight"></NavTitle>
    <div class="waw_nickname_box">
      <van-cell-group>
        <van-field v-model="value" placeholder="请输入用户名" />
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import NavTitle from "../../../components/navTitle/TitlePreservation";
export default {
  components: {
    NavTitle,
  },
  mounted() {
    // 获取个人修改
  },
  data() {
    return {
      value: this.$route.query.name, //昵称，
    };
  },
  methods: {
    onClickRight() {
      //点击保存更改昵称
      this.$ClientAPI
        .UserChange({ nickname: this.value })
        .then((res) => {
          console.log(res.data.code);
        })
        .catch((err) => {
          console.log(err);
        });
      this.$router.go(-1);
      this.getUser();
    },
    getUser() {
      this.$ClientAPI.PersonMessage().then((res) => {});
    },
  },
};
</script>
<style lang='scss' scoped>
.waw_nickname_container {
  width: 100%;
  height: 100vh;
  background: whitesmoke;
}
.waw_nickname_box {
  width: 100%;
  height: 2.5rem;
  margin-top: 0.4rem;
  background: white;
}
</style>