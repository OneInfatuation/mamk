<template>
  <div>
    <div class="zmy_nav">
<van-nav-bar
  title="课程订单"
>
<template #left>
    <van-icon name="arrow-left" size="18" @click="onClickLeft" />
  </template>
</van-nav-bar>
    </div>
    <div class="zmy_list">
    <van-tabs v-model="active" @click="onClick">
      <van-tab title="全部订单">
        <div class="c"></div>
        <!-- 跳转订单详情 -->
        <div class="zmy_order" @click="godingdan" v-for="(item,index) in listkecheng" :key="index">
          <p class="zmy_p1">
            <span class="zmy_sp2">订单编号：{{item.order_number}}</span>
            <span class="zmy_sp3">交易完成</span>
          </p>
          <ul class="zmy_p2">
            <li class="zmy_title">{{item.title}}</li>
            <li class="zmy_time">时间：{{item.created_at | times }}</li>
            <li class="zmy_time">
              <span>实付款</span>
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                alt=""
              />
              <span class="span">0</span>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="待支付">
        <van-empty
          class="custom-image"
          image="https://wap.365msmk.com/img/empty.0d284c2e.png"
          description="暂无订单"
        />
      </van-tab>
      <van-tab title="已完成">
           <div class="zmy_order" @click="godingdan(item.id)" v-for="(item,index) in listkecheng" :key="index">
          <p class="zmy_p1">
            <span class="zmy_sp2">订单编号：{{item.order_number}}</span>
            <span class="zmy_sp3">交易完成</span>
          </p>
          <ul class="zmy_p2">
            <li class="zmy_title">{{item.title}}</li>
            <li class="zmy_time">时间：{{item.created_at | times }}</li>
            <li class="zmy_time">
              <span>实付款</span>
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                alt=""
              />
              <span class="span">0</span>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="已取消">
        <van-empty
          class="custom-image"
          image="https://wap.365msmk.com/img/empty.0d284c2e.png"
          description="暂无订单"
        />
      </van-tab>
    </van-tabs>
  </div>
  <div class="yiyi-wei"></div>
  </div>
</template>

<script>
export default {
 
  data() {
    return {
      active: 0,
      listkecheng:[],
    };
  },
  mounted(){
    this.kechenglist()
  },
    // filters: {
    // timeFilter(value) {
    //   var date = new Date(value * 1000);
    //   var str = `${date.getHours()}时${date.getMinutes()}分${date.getSeconds()}分，${date.getFullYear()}年`;
    //   return str;
    // },
  // },
  
  methods: {
    onClickLeft(){
      this.$router.push("/mine")
    },
    // 跳转订单详情
    godingdan(id) {
      this.$router.push({
        path: "/ddxq",
       query: { id }
      });
    },
    onClick(name, title) {
      // Toast(title);
    this.kechenglist()

    },
    kechenglist(){
this.$ClientAPI.kechengdingdan({
        limit: 10,
        order_status: this.active,
        order_type: 2,
        page: 1
    }).then(res=>{
      console.log(res.data.data.list);
      this.listkecheng=res.data.data.list
    })
    },
  },
};
</script>

<style lang='scss' scoped>
.zmy_nav{
  width: 100%;
  height: 8vh;
  background: #fff;
  .van-nav-bar{
position: fixed;
width: 100%;
top:0px;
background: #fff;
z-index: 99999;
  // // height: 8vh;
}
}

// .zmy_list{
//   height: 92vh;
// }
.c {
  margin-top: 1rem;
}
.zmy_order {
  margin-top: 2rem;
  width: 95%;
  height:8rem;
  margin: 0 auto;
margin-top: 1.5rem;
  // border: 1px solid #eee;
  box-shadow: 0px 0px 4px rgb(211, 208, 208);
  border-radius: 5px;
  .zmy_p1 {
    width: 95%;
    margin: 0 auto;
    height: 2rem;
    border-bottom: 1px solid rgba(168, 165, 165, 0.507);
    .zmy_sp2 {
      font-size: 0.15rem;
      // margin-top: 0.2rem;
    }
    .zmy_sp3 {
      color: rgb(231, 134, 42);
      font-size: 0.4rem;
      margin-left: 2.5rem;
      // margin-top: 1rem;
      line-height: 2rem;
    }
  }
  .zmy_p2 {
    width: 95%;
    margin: 0 auto;
    .zmy_time {
      color: rgb(196, 193, 193);
      font-size: 0.3rem;
      img {
        width: 1rem;
        height: 1rem;
      }
      .span {
        color: #000;
        margin-left: 0.5rem;
      }
    }
  }
}
.yiyi-wei{
  height: 2rem;
}
.zmy_title{
  margin-top: 0.4rem;
  font-size: 0.5rem;
  color: rgb(46, 44, 44);
}
</style>