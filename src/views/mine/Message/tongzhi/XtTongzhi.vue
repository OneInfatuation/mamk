<template>
  <div>
      <NavTitlt></NavTitlt>
       <div class="waw_msg_box">
      <div class="waw_msg_img">
        <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
      </div>
      <div class="waw_msg_title">暂无消息通知</div>
    </div>
  </div>
</template>
<script>
import NavTitlt from "../../../../components/navTitle/TitleOnlyBack";
export default {
  components: {
    NavTitlt,
  },
   mounted() {
    var obj = {
      limit: 10,
      message_classify: "system",
      page: 1,
    };
    this.$ClientAPI
      .getMessageSend(obj)
      .then((res) => {
        console.log(res.data);
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
</style>