<template>
  <div>
    <div class="details_nav">
      <p @click="back"><img src="../../assets/curriculum/fanhui.png" /></p>
      <p>课程详情</p>
      <p><img src="../../assets/curriculum/fenxiang.png" /></p>
    </div>
    <div class="details_content">
      <!-- 主要数据 -->
      <div class="details_content_message">
        <h3>{{ title }}</h3>
        <p style="color:orange;font-size:1.5rem">免费</p>
        <p>{{details}} | {{number}}人已报名</p>
        <p>开课时间：{{date}}</p>
      </div>
    </div>
    <!--  -->
    <div style="width:100%;height:1rem;background:#eee"></div>
    <!-- 教育团队 -->
    <div class="details_content_person">
        <p>教学团队</p>
        <div>
            <p><img :src="pic" width="40rem"></p>
            <p>{{name}}</p>
        </div>
    </div>
    <!--  -->
    <div style="width:100%;height:1rem;background:#eee"></div>


    <div style="width:100%;height:4rem"></div>
    <!-- 立即报名 -->
    <div class="enter">
        <button @click="setenter">立即报名</button>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
        title:"",
        date:"",
        name:"",
        details:"",
        number:"",
        pic:""
    };
  },
  mounted() {
    this.title = this.$route.query.title;
    this.date = this.$route.query.date;
    this.name = this.$route.query.name;
    this.details = this.$route.query.details;
    this.number = this.$route.query.number;
    this.pic = this.$route.query.pic;
  },
  methods:{
      setenter(){
          console.log(111)
      },
      back(){
          window.history.back();
      }
  }
};
</script>

<style>
.details_nav {
  width: 100%;
  height: 3rem;
  margin: 0px 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #eee;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0px;
  left: 0px;
}
.details_content {
  width: 100%;
  margin-top: 3rem;
}
.details_content_message {
  width: 90%;
  height: 10rem;
  margin: 0 auto;
  background: white;
}
.details_content_message p,h5{
    margin: 10px 0px;
    border-top: 1px solid transparent;
}
.details_content_person{
    width: 90%;
    height: 10rem;
    margin: 0px auto;
}
.enter{
    width: 100%;
    height: 3rem;
    background: red;
    position: fixed;
    bottom: 0px;
    left: 0px;
}
.enter button{
    width: 100%;
    height: 100%;
    background: orange;
    color: white;
    font-size: 1.5rem;
}
</style>