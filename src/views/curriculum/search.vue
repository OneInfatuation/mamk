<template>
  <div>
      <div class="search_header">
          <p @click="goto"><img src="../../assets/curriculum/fanhui.png"></p>
          <p class="search_header_input"><input placeholder="请输入内容" v-model="kw" @input="change"></p>
          <p @click="goto" v-if="isShow">取消</p>
          <p @click="search" v-if="!isShow">搜索</p>
      </div>

    <h4 class="history_search">历史搜索 <span class="history_search_delete"><img src="../../assets/curriculum/shanchu.png"></span></h4>
    <!-- 搜索历史 -->
    <div></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            kw:'',
            isShow:true
        }
    },
    methods:{
        change(){
            if(this.kw===""){
                this.isShow = true
            }else{
                this.isShow = false
            }
        },
        search(){
            console.log("111`1")
        },  
        goto(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.search_header{
    width: 100%;
    height: 4rem;
    border-bottom:1px solid lightgrey;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1rem;
}
.search_header p{
    margin: 0px 15px;
}
.search_header img{
    width: 1.5rem;
    height: 1.5rem;
}
.search_header_input{
    width: 60%;
    height: 2rem;
    
}
.search_header_input input{
    width: 100%;
    height: 2rem;
    border-radius: 50px;
    background: lightgrey;
    padding-left: 10px;
    border: none;
}
.history_search{
    width: 90%;
    height: 1rem;
    line-height: 1rem;
    margin: 1rem auto;
}
.history_search_delete{
    float: right;
}
</style>