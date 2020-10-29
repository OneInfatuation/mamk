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
        <div class="get_reg">
          <van-field
            v-model="username"
            name="手机号"
            placeholder="请输入手机号"
            :rules="[{ required: true, message: '请填写手机号' }]"
          />
          <font @click="getReg"
            >获取验证码
            <van-count-down
              time="60000"
              v-if="flag"
              format="ss"
              @change="rm_time"
          /></font>
        </div>
        <van-field
          v-model="password"
          type="password"
          name="验证码"
          placeholder="请输入短信验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
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
import { Toast } from "vant";
export default {
  data() {
    return {
      // 手机号
      username: "",
      password: "",
      // 是否开启倒计时
      flag: false,
    };
  },
  methods: {
    // 登录按钮
    async onSubmit(values) {
      let { data: res } = await axios.post(
        "http://120.53.31.103:84/api/app/login",
        {
          mobile: this.username,
          sms_code: this.password,
          client: 1,
          type: "2",
        }
      );
      console.log(res);
      if (res.code != 200) {
        Toast(res.msg);
      } else {
        Toast("登录成功");
        localStorage.setItem("token", res.data.remember_token);
        if (res.data.is_new == 1) {
          this.$router.push("/setpass");
          return false;
        }
        this.$router.push("/");
      }
    },
    // 回到账号密码登录
    toLogins() {
      this.$router.push({
        path: "/login",
      });
    },
    // 获取验证码
    async getReg() {
      let { data: res } = await axios.post(
        "http://120.53.31.103:84/api/app/smsCode",
        {
          mobile: this.username,
          sms_type: "login",
        }
      );
      console.log(res);
      if (res.code != 200) {
        Toast(res.msg);
      } else {
        this.flag = true;
        Toast("获取验证码成功，注意查收短信");
      }
    },
    // 在倒计时期间移除点击事件
    rm_time() {
      let font = document.getElementsByTagName("font")[0];
      font.style.color = "#eee";
      document.getElementsByClassName("van-count-down")[0].style.color = "#eee";
    },
    // 在倒计时结束后恢复
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
  position: relative;
  span {
    margin: 1rem;
  }
}
.register_from {
  .get_reg {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;
    font {
      font-size: 0.7rem;
      color: orange;
      padding-right: 0.5rem;
      width: 5rem;
      .van-count-down {
        color: orange;
        display: inline;
      }
    }
  }
}
</style>