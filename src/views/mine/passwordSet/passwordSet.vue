<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      title="密码设置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 表单页面 -->
    <div class="mobile_content">
      <p>
        <input
          placeholder="请输入手机号"
          type="text"
          maxlength="11"
          v-model="iphone"
        />
        <span
          style="float: right; color: orange; font-size: 0.7rem"
          v-show="isShow"
          @click="getMessage"
          >获取验证码</span
        >
        <span
          style="float: right; color: orange; font-size: 0.7rem"
          v-show="!isShow"
          >{{count}} s </span
        >
      </p>
      <p><input placeholder="请输入验证码" type="text" v-model="yzMessage"/></p>
      <p><input placeholder="请输入密码" type="password" v-model="password"/></p>
    </div>

    <p class="submit_btn"><button @click="btn_true">确定</button></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      iphone: "",
      yzMessage:"",
      password:"",
      count:"",
      timer: null
    };
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
    // 获取验证码
    getMessage() {
      // 正则表达式
      var zz = /^1[3|4|5|7|8][0-9]{9}$/;
      //   手机号格式验证
      if (zz.test(this.iphone) == false) {
        alert("请正确填写手机号码!", { icon: 5, offset: "200px" });
        return false;
      } else {
        // 声明时间
        const TIME_COUNT = 60
        if(!this.timer){
          this.count = TIME_COUNT;
          this.isShow = false;
          this.timer = setInterval(()=>{
            if(this.count > 0 && this.count <= TIME_COUNT){
              this.count --
            }else{
              this.isShow = true;
              clearInterval(this.timer);
              this.timer = null
            }
          },1000)
        }
        
      }
    },
    // 确认按钮
    btn_true() {
      // 正则表达式
      var zz = /^1[3|4|5|7|8][0-9]{9}$/;
      //   手机号格式验证
      if (zz.test(this.iphone) == false) {
        alert("请正确填写手机号码!", { icon: 5, offset: "200px" });
        return false;
      }else{
          //验证是否格式正确
          if(this.yzMessage.trim() =="" && this.password.trim() == ""){
              alert("格式不正确")
          }else{
            // 手机号码是否注册验证
          }
      }
    


    },
  },
};
</script>

<style>
.mobile_content {
  height: 10rem;
  /* background: grey; */
  margin-top: 0.2rem;
}
.mobile_content p {
  width: 90%;
  height: 3rem;
  line-height: 3rem;
  margin: 0.5rem 5%;
  border-bottom: 1px solid lightgrey;
}
.mobile_content p input {
  width: 65%;
  height: 100%;
  border: none;
}
.mobile_content p:hover {
  border-bottom: 1px solid orange;
}
.submit_btn {
  height: 5.5rem;
}
.submit_btn button {
  width: 80%;
  height: 2.5rem;
  background: orange;
  border-radius: 5rem;
  border: none;
  margin: 3rem 10% 0rem;
  color: white;
}
</style>