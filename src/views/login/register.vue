<template>
  <div>
    <div class="login_logo">
      <img
        class="login_logo_img"
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
        alt=""
      />
    </div>
    <div class="register_from">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          placeholder="请输入短信验证码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="register_from_tiaozhuan">
          <span>*未注册的手机号将自动注册</span>
          <span @click="toLogins">使用密码登录</span>
        </div>
        <div style="margin: 0.8rem; margin-top: 1rem">
          <van-button round block type="warning" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    toLogins() {
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login_logo {
  width: 100%;
  height: 30vh;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  .login_logo_img {
    width: 70%;
    height: 40%;
  }
}
.register_from_tiaozhuan {
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.4rem;
  color: rgb(196, 193, 193);
  span {
    margin: 1rem;
  }
}
</style>