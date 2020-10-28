<template>
  <div>
      <!-- 留言标题 -->
    <div class="emails_nav" @click="goto"> 
        <p>给我们留言 <span style="float:right"><img src="../assets/curriculum/down.png"></span></p>
    </div>
    <!-- 留言内容 -->
    <div class="emails_content">
        <p>你好，很抱歉我们暂时无法为你提供服务，如需帮助
            ，请留言，我们将尽快联系并解决你的问题</p>
        <p>手机</p>
        <input class="Iphone" placeholder="请输入" v-model="phone">
        <p>留言信息</p>
        <textarea class="Message" placeholder="请输入" v-model="talk"/>
        <p><van-button type="info" style="width:100%" @click="submit">提交</van-button></p>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            phone:"",
            talk:""
        }
    },
    methods:{
        submit(){
            if(this.phone==="" && this.talk===""){
                alert("至少要有一项数据")
            }else{
                alert("提交成功")
            }
        },
        goto(){
            window.history.back()
        }
    }
}
</script>

<style>
.emails_nav{
    width:100%;
    height: 3rem;
    background: blue;
    margin: 0px auto;
    line-height: 3rem;
    color: white;
}
.emails_nav p{
    width: 90%;
    height: 100%;
    margin: 0px auto;
}
.emails_content{
    width: 100%;
    height: 40rem;
    background: #eee;
    border: 1px solid transparent;
}
.emails_content p {
    width: 90%;
    margin: 10px auto;
}
.Iphone{
    width: 100%;
    height: 2.5rem;
    padding-left: 20px;
    border: none;
}
.Message{
    width: 100%;
    height: 70px;
    padding-left: 20px;
    border: none;
}
</style>