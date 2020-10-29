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
<<<<<<< HEAD
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
=======
      <van-form>
        <van-field
          v-model="username"
          :class="gaoShow == 1 ? 'van-field' : 'van-field-active'"
          @click="gao(1)"
          name="用户名"
          placeholder="请输入手机号"
        >
          <template #button>
            <van-button
              v-show="show"
              class="waw_button"
              size="small"
              @click="getCode"
              >发送验证码</van-button
            >
            <span v-show="!show" class="count">{{ count }} s</span>
          </template>
        </van-field>
>>>>>>> d2479ac9c6926002de114b63efb84e688d03ac9e
        <van-field
          @click="gao(2)"
          :class="gaoShow == 2 ? 'van-field' : 'van-field-active'"
          v-model="password"
<<<<<<< HEAD
          type="password"
          name="验证码"
          placeholder="请输入短信验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
=======
          name="短信验证码"
          placeholder="请输入短信验证码"
>>>>>>> d2479ac9c6926002de114b63efb84e688d03ac9e
        />
        <div class="register_from_tiaozhuan">
          <span>*未注册的手机号将自动注册</span>
          <span @click="toLogins">使用密码登录</span>
        </div>
        <div style="margin: 0.8rem; margin-top: 1rem">
          <van-button round block type="warning" @click="onSubmit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import { Toast } from "vant";
=======
import Vue from "vue";
import { Toast } from "vant"; //引入文字提示
Vue.use(Toast);
>>>>>>> d2479ac9c6926002de114b63efb84e688d03ac9e
export default {
  data() {
    return {
      // 手机号
      username: "",
      password: "",
<<<<<<< HEAD
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
=======
      show: true,
      count: "",
      timer: null,
      gaoShow: 0,
    };
  },
  methods: {
    gao(id) {
      //点击显示高亮
      this.gaoShow = id;
    },
    onSubmit() {
      //点击登录
      var obj = {
        mobile: Number(this.username),
        sms_code: Number(this.password),
        type: 2,
        client: 1,
      };
      // 请求登录接口并传递参数
      this.$ClientAPI
        .loginGetToken(obj)
        .then((res) => {
          console.log(res);
          var token = res.data.data.remember_token; //读取token
          var mobile = res.data.data.mobile;
          localStorage.setItem("mobile", mobile);
          localStorage.setItem("token", token); //保存token
          var newMesg = res.data.data.is_new;
          if (newMesg == 1) {
            this.$router.push("/setPassword");
          } else if (newMesg == 2) {
            this.$router.push("/mine");
          }
          Toast.success({
            message: "登录成功",
            position: "top",
          });
        })
        .catch((err) => {
          console.log(err);
          Toast.fail({
            message: "登录失败",
            position: "top",
          });
        });
>>>>>>> d2479ac9c6926002de114b63efb84e688d03ac9e
    },
    // 回到账号密码登录
    toLogins() {
      //点击跳转登录页面
      this.$router.push({
        path: "/login",
      });
    },
<<<<<<< HEAD
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
=======
    getCode() {
      //点击发送验证码
      var phone = /^[1]([3-9])[0-9]{9}$/;
      if (!phone.test(this.username)) {
        Toast({
          message: "手机号码格式不正确！！！",
          position: "center",
        });
        return;
      } else {
      }
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
        var obj = {
          mobile: Number(this.username),
          sms_type: "login",
        };
        console.log(obj.mobile);
        this.$ClientAPI
          .VerificationCode(obj)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
>>>>>>> d2479ac9c6926002de114b63efb84e688d03ac9e
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
.register_from {
  width: 95%;
  margin: 0 auto;
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
<<<<<<< HEAD
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
=======
.waw_button {
  color: orange;
  border: none;
}
.van-field {
  border-bottom: 1px solid orange;
}
.van-field-active {
  border-bottom: 0px;
>>>>>>> d2479ac9c6926002de114b63efb84e688d03ac9e
}
</style>