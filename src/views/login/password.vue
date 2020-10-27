<template>
  <div>
      <div class="passWord_nav">
<van-nav-bar
  title="找回密码"
>
 <template #left>

  <van-icon name="arrow-left"  size="22" color="black"  @click="toLogins" />
  </template>
</van-nav-bar>
</div>
<div class="passWord_from">
      <van-form validate-first @failed="onFailed">
  <!-- 通过 pattern 进行正则校验 -->
  <van-field
    v-model="value1"
    name="pattern"
    placeholder="请输入手机号"
    :rules="[{ pattern, message: '请输入正确内容' }]"
  />
  <!-- 通过 validator 进行函数校验 -->
  <van-field
    v-model="value2"
    name="validator"
    placeholder="请输入验证码"
    :rules="[{ validator, message: '请输入正确内容' }]"
  />
  <!-- 通过 validator 进行异步函数校验 -->
  <van-field
    v-model="value3"
    name="asyncValidator"
    placeholder="请输入密码"
    :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
  />
  <div style="margin: 16px;margin-top: 70px;">
    <van-button round block type="warning" native-type="submit">
     确定
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
      value1: '',
      value2: '',
      value3: '',
      pattern: /\d{6}/,
    };
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading('验证中...');

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
    // 跳转至登录页
    toLogins(){
this.$router.push({
    path:"/logins"
})
    }
  },
}
</script>

<style>

</style>