<template>
  <div class="guanzhu_html">
    <NavTitle></NavTitle>
    <!-- 跳转讲师详情 -->
    <div class="box" v-for="(item,index) in list" :key="index" @click="gotoTeacher">
      <div style="width:2.5rem;height:2.5rem;border-radius:5rem">
        <img :src="item.img" width="100%" height="100%" style="border-radius:5rem">
      </div>
      <div>
        <p>{{item.name}} <span style="font-size:0.8rem;color:orangered">{{item.level}}</span></p>
        <p style="font-size:0.8rem;color:lightgrey">{{item.constructor}}</p>
      </div>
      <div><button class="btn" @click="offAbout(index)">取消关注</button></div>
    </div>
    <p style="font-size:0.6rem;text-align:center;color:grey;margin:0.3rem">没有更多了</p>
  </div>
</template>

<script>
import NavTitle from "../../components/navTitle/TitleOnlyBack";
export default {
  components: {
    NavTitle,
  },
  data() {
    return {
      list:[{img:"https://img.yzcdn.cn/vant/cat.jpeg",name:"杨德胜",constructor:"杨老师，特级教师，多次被中...",level:"M20"}]
    };
  },
  mounted(){
    
  },
  methods:{
    offAbout(index){
      console.log(index)
      this.list.splice(index,1)
    },
    gotoTeacher(){
      this.$router.push("/teacher")
    }
  }
};
</script>

<style scoped>
body{
  height: 100%;
  background: rgba(211, 211, 211, 0.486);
}
.box{
  width: 90%;
  height: 4rem;
  background: white;
  margin: 1rem 5% 0rem;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
.box div{
  margin: 0.5rem 0.2rem;
}
.btn{
  width: 4rem;
  height: 1.7rem;
  border-radius: 1rem;
  font-size:0.5rem;
  border: none;
  color: orangered;
  background: rgba(255, 166, 0, 0.315);
}
</style>