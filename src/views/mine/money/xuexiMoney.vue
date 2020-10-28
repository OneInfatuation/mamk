<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      title="我的余额"
      left-text="返回"
      right-text="余额明细"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 我的余额 -->
    <p style="width:100%;height:2rem;line-height:2rem;padding-left:1rem">我的余额 &nbsp; &nbsp;&nbsp;<span style="color:red;"> 0 学习币</span></p>
    <div class="money_main">
      <div v-for="(item,index) in list" :key="index" class="money_main_list"
>
          <p class="money_main_list_content"
            :class="ActiveNum== index ? 'SpanActive' : ''"
           @click="ActiveNum = index">
            {{item}}学习币
            <span style="color:red;font-size:0.7rem;float:right">￥{{item}}</span>
          </p>
      </div>
    </div>
    <!-- 充值说明 -->
    <div class="money_cz">
      <p class="money_cz_title">充值说明</p>
    </div>

    <!-- 支付按钮 -->
      <p class="button"><button @click="cz_btn">立即充值</button></p>

  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[
          "30000.00","20000.00","10000.00","8000.00","5000.00","3000.00","0.01","100.00"
      ],
      ActiveNum:0
    }
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
    onClickRight() {
      this.$router.push("/mymoney");
    },
    cz_btn(){

    }
  },
};
</script>

<style scoped>
.money_main{
  /* width: 100%; */
  height: 29rem;
  background: rgba(238, 238, 238, 0.788);
}
.money_main_list{
  /* width: 100%; */
  height: 3rem;
  line-height: 3rem;
  border: 1px solid transparent;
  /* background: white; */
  margin: 0.3rem 0px;

}
.money_main_list_content{
  width: 95%;
  height: 3rem;
  margin: 0.5rem auto;
  background: white;
  border: 1px solid transparent;
  border-radius: 5px;
}
.money_cz{
  width: 100%;
  height: 5rem;
}
.money_cz_title{
  width: 90%;
  height: 2rem;
  padding-left: 1rem;
  margin: 0.5rem auto;
  border-left:2px solid red; 
  border-top: 1px solid transparent;
}
.button{
  width: 100%;
  height: 3rem;
  position: fixed;
  bottom: 0px;
  left: 0px;
}
.button button{
  width: 99%;
  height: 3rem;
  line-height: 3rem;
  color: white;
  text-align: center;
  background: tomato;
  border: none;
}
.SpanActive{
  border: 1px solid rgb(255, 123, 0);
  background: rgba(255, 166, 0, 0.452);
}
</style>