<template>
  <div>
    <NavTitlt></NavTitlt>
    <div class="waw_msg_box" v-show="list.length == 0">
      <div class="waw_msg_img">
        <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
      </div>
      <div class="waw_msg_title">暂无消息通知</div>
    </div>
    <div  class="waw_list_container"  v-show="list.length != 0">
      <div class="waw_list_box" v-for="i in 5" :key="i">
          <div class="waw_time_box"><span>10月10日 20:00</span></div>
          <div class="waw_title_box">司法局开始放假到数据库谁打就输出开始的水电费胜多负少的放得开杜甫</div>
      </div>
    </div>
  </div>
</template>
<script>
import NavTitlt from "../../../../components/navTitle/TitleOnlyBack";
export default {
  components: {
    NavTitlt,
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    var obj = {
      limit: 10,
      message_classify: "course",
      page: 1,
    };
    this.$ClientAPI
      .getMessageSend(obj)
      .then((res) => {
        console.log(res.data);
        this.list = res.data.data.list;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style lang='scss' scoped>
.waw_msg_box {
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.waw_msg_img {
  width: 50%;
  height: 10rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.waw_msg_img img {
  width: 80%;
  height: 100%;
}
.waw_msg_title {
  width: 100%;
  height: 2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  color: gray;
}
.waw_list_container {
  width: 100%;
}
.waw_list_box {
  width: 90%;
  height: 5rem;
  margin-left: 5%;
  margin-top: 0.4rem;
  border-bottom: 1px solid lightgray;
}
.waw_time_box{
    width: 100%;
    height: 2rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.waw_time_box span{
    display: inline-block;
    width: 30%;
    padding: 0.4rem;
    background: gray;
    color: white;
    font-size: 0.7rem;
}
.waw_title_box{
    width: 100%;
    font-size: 0.8rem;
    color: gray;
}
</style>