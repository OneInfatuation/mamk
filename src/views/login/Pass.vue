<template>
  <div>
    <div class="passWord_nav">
      <van-nav-bar title="找回密码">
        <template #left>
          <van-icon
            name="arrow-left"
            size="22"
            color="black"
            @click="toLogins"
          />
        </template>
      </van-nav-bar>
    </div>
    <div class="passWord_from">
      <van-form>
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          :class="showGao == 1 ? 'van-field' : 'van-field-active'"
          v-model="value1"
          @click="gao(1)"
          name="pattern"
          placeholder="请输入手机号"
        >
          <template #button>
            <van-button
              size="small"
              v-show="show"
              class="waw_button"
              @click="onClick"
              >发送验证码</van-button
            >
            <span v-show="!show" class="count">{{ count }} s</span>
          </template>
        </van-field>
        <!-- 通过 validator 进行函数校验 -->
        <van-field
          :class="showGao == 2 ? 'van-field' : 'van-field-active'"
          @click="gao(2)"
          v-model="value2"
          name="validator"
          placeholder="请输入验证码"
        />
        <!-- 通过 validator 进行异步函数校验 -->
        <van-field
          :class="showGao == 3 ? 'van-field' : 'van-field-active'"
          @click="gao(3)"
          v-model="value3"
          type="password"
          name="asyncValidator"
          placeholder="请输入密码"
        />
        <div style="margin: 0.8rem; margin-top: 1rem">
          <van-button round block type="warning" @click="onClickLogin">
            确定
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant"; //引入文字提示
Vue.use(Toast);
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      show: true,
      count: "",
      timer: null,
      showGao: 0, //点击显示高亮样式
    };
  },
  methods: {
    gao(id) {
      //点击显示高亮
      this.gaoShow = id;
    },
    onClickLogin() {
      //点击提交修改密码成功
      var obj = {
        mobile: this.value1,
        sms_code: this.value2,
        password: this.value3,
      };
      this.$ClientAPI
        .SetInitPassword(obj)
        .then((res) => {
          console.log(res.data);
          console.log(res.data.code);
          var code = res.data.code;
          if (code == 200) {
            Toast({
              message: "找回密码成功",
              position: "center",
            });
            this.$router.push("/mine");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 跳转至登录页
    toLogins() {
      this.$router.push("/login");
    },
    onClick() {
      //点击发送验证码
      var phone = /^[1]([3-9])[0-9]{9}$/;
      if (!phone.test(this.value1)) {
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
      }
      var obj = {
        mobile: Number(this.value1),
        sms_type: "getPassword",
      };
     
      this.$ClientAPI
        .VerificationCode(obj)
        .then((res) => {
          var code = res.data.code;
          if (code == 200) {
            Toast.success({
              message: "验证码已发送",
              position: "center",
            });
          } else {
            Toast(`${res.data.msg}`);
            this.show = true;
            return;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.waw_button {
  color: orange;
  border: none;
}
.passWord_from {
  width: 95%;
  margin: 0 auto;
}
.van-field {
  border-bottom: 1px solid orange;
}
.van-field-active {
  border-bottom: 0px;
}
</style>