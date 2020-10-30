<template>
  <div class="waw_record_container">
    <NavTitle></NavTitle>
    <van-tabs v-model="active">
      <van-tab>
        <template #title>
          <div :class="active == 0 ? 'waw_title_active' : 'waw_title_normal'">
            待上课
          </div>
        </template>
      </van-tab>
      <van-tab>
        <template #title>
          <div :class="active == 1 ? 'waw_title_active' : 'waw_title_normal'">
            已上课
          </div>
        </template>
      </van-tab>
      <van-tab>
        <template #title>
          <div :class="active == 2 ? 'waw_title_active' : 'waw_title_normal'">
            已取消
          </div>
        </template>
      </van-tab>
    </van-tabs>

    <van-empty
      class="custom-image"
    >
        <template #image>
            <div class="waw_empty_img">
                <img src="https://wap.365msmk.com/img/no-message.8d3ca5af.png">
            </div>
        </template>
        <template #description>
            <div v-show="token.length<=0">
                <p><small>请登录后查看相关内容</small></p>
                <div class="waw_button_box"><van-button color="#EB6100" @click="onClickLogin">登录/注册</van-button></div>
            </div>
             <div v-show="token.length>0">
                <p><small>还没有待上课记录哦</small></p>
                <!-- <p><small>还没有上课记录哦</small></p>
                <p><small>还没有取消上课记录哦</small></p> -->
                <div class="waw_button_box"><van-button color="#EB6100" @click="onClickLogin">立即约课</van-button></div>
            </div>
        </template>
    </van-empty>
  </div>
</template>
<script>
import NavTitle from "../../components/navTitle/Title"; //引入导航子组件
export default {
  components: {
    NavTitle, //注册导航子组件
  },
  data() {
    return {
      active: 0,
      token:"",
    };
  },
  mounted() {
      var token = localStorage.getItem("token");
      if(token){
          this.token = token;
      }
  },
  methods: {
      onClickLogin(){//点击判断去登录页面还是去约课页面
        if(this.token.length>0){
            this.$router.push("/coaching");
        }else{
            this.$router.push("/login");
        }
      }
  },
};
</script>
<style scoped>
.waw_title_active {
  color: orange;
}
.waw_title_normal {
  color: black;
}
.van-empty{
    padding: 0px !important;
}
.van-empty__description{
    margin-top:0px !important;
    line-height: 0px !important;
}
/* .waw_empty_img{
    width: 100%;
    height: 100%;
} */
.waw_empty_img img{
    margin-top: 20%;
    width: 100%;
    height: 80%;
}
.waw_button_box{
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
</style>