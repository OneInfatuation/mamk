<template>
  <div>
    <div class="login_logo">
      <img
        class="login_logo_img"
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"/>
    </div>
    <div class="login_from">
      <van-form>
        <van-field
          v-model="username"
          name="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请输入手机号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请输入密码' }]"
        />
        <div class="login_from_tiaozhuan">
          <span @click="toPassword">找回密码</span>
          <span @click="toRegister">注册/验证码登录</span>
        </div>
        <div style="margin: 16px; margin-top: 70px">
          <van-button round block type="warning" @click="onSubmit">
            登录
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
    toPassword() {
      this.$router.push({
        path: "/password",
      });
    },
    toRegister() {
      this.$router.push({
        path: "/register",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login_logo {
  width: 100%;
  height: 6rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  .login_logo_img {
    width: 80%;
    height: 80%;
  }
}
.login_from {
  margin-top: 2.5rem;
}
.login_from_tiaozhuan {
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