<template>
  <div class="login_container">
    <div class="login_logo">
      <img
        class="login_logo_img"
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
      />
    </div>
    <div class="login_from">
      <van-form>
        <van-field
          @click="gao(1)"
          :class="shiw == 1 ? 'van-field' : 'van-field-active'"
          v-model="username"
          name="手机号"
          placeholder="请输入手机号"
        >
         
        </van-field>
        <van-field
          @click="gao(2)"
          :class="shiw == 2 ? 'van-field' : 'van-field-active'"
          v-model="password"
          type="password"
          name="密码"
          placeholder="请输入密码"
        />
        <div class="login_from_tiaozhuan">
          <span @click="toPassword">找回密码</span>
          <span @click="toRegister">注册/验证码登录</span>
        </div>
        <div style="margin: 0.8rem; margin-top: 1rem">
          <van-button round block type="warning" @click="onSubmit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from "vant"; //引入文字提示
Vue.use(Toast);
export default {
  data() {
    return {
      username: "",
      password: "",
      shiw: 0,
    };
  },
  methods: {
    gao(i) {
      this.shiw = i;
    },
    onSubmit(values) {
      //点击登录
      // console.log("submit", values);
      if (this.username.length == 0 || this.password == 0) {
        Toast({
          message: "输入的手机号或密码不能为空！！！",
          position: "top",
        });
        return;
      }
      var obj = {
        mobile: this.username,
        password: this.password,
        type: 1,
      };
      // 请求登录接口并传递参数
      this.$ClientAPI
        .loginGetToken(obj)
        .then((res) => {
          console.log(res.data.data);
          var token = res.data.data.remember_token; //读取token
          var mobile = res.data.data.mobile;
          localStorage.setItem("mobile", mobile);
          localStorage.setItem("token", token); //保存token
          localStorage.setItem("value", "admin");
          Toast.success({
            message: "登录成功",
            position: "top",
          });
          this.$router.push("/mine"); //跳转到我的页面
        })
        .catch((err) => {
          console.log(err);
          Toast.fail({
            message: "登录失败",
            position: "top",
          });
        });
    },
    toPassword() {
      //点击跳转找回密码页面
      this.$router.push({
        path: "/pass",
      });
    },
    toRegister() {
      //点击跳转注册页面
      this.$router.push({
        path: "/register",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
}
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
.login_from {
  width: 95%;
  margin: 0 auto;
}
.login_from_tiaozhuan {
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 0.4rem;
  color: rgb(196, 193, 193);
  span {
    margin: 1rem;
  }
}
.van-field {
  border-bottom: 1px solid orange;
}
.van-field-active {
  border-bottom: 0px;
}
</style>