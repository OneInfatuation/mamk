<template>
  <div>
    <van-nav-bar title="设置密码" left-arrow @click-left="onClickLeft" />
    <van-form>
      <van-field
        v-model="text"
        type="password"
        name="密码"
        placeholder="请输入密码"
        @blur="onBlur"
      />
      <van-field
        @blur="onBlurConfirm"
        v-model="password"
        type="password"
        name="密码"
        placeholder="请再次输入密码"
      />
      <div style="margin: 16px">
        <van-button round native-type="submit" @click="onLogin">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant"; //引入文字提示
Vue.use(Toast);
export default {
  data() {
    return {
      text: "",
      password: "",
    };
  },
  methods: {
    onBlur() {
      //验证密码
      var reg = /^[\w]{6,12}$/; //这个是正则表达式
      if(this.text.length<=0){
          Toast.fail({
          message: "密码不能为空",
          position: "center",
        });
        return;
      }
      if (reg.test(this.text)) {
      } else {
        Toast.fail({
          message: "密码格式错误",
          position: "center",
        });
        return;
      }
    },
    onBlurConfirm() {//验证确认密码
        if(this.password.length<=0){
          Toast.fail({
          message: "确认密码不能为空",
          position: "center",
        });
        return;
      }
      if(this.text != this.password){
          Toast.fail({
          message: "确认密码与密码不一致",
          position: "center",
        });
        return;
      }
    },
    onLogin() {
        var obj ={
            mobile:localStorage.getItem("mobile"),
            password:this.password
        }
        this.$ClientAPI.SetInitPassword(obj).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    },
    onClickLeft() {
      //点击返回上一页
      this.$router.go("-1");
    },
  },
};
</script>

<style scoped>
.van-button {
  width: 100%;
  height: 3rem;
  background-color: #ff9248;
  margin-top: 25px;
  color: white;
}
</style>