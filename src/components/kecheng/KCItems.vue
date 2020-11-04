<template>
  <div class="box_container">
    <div class="box_wrapper" @click="onClick(item.teachers_list[0].course_basis_id)">
      <div class="box_title">
        {{ item.title }}
      </div>
      <p class="waw_op">共1节课时</p>
       <div class="user">
        <img :src="item.teachers_list[0].teacher_avatar" />
        <span>
          {{ item.teachers_list[0].teacher_name }}
        </span>
      </div>
      <div class="sy-pp">
        {{ item.sales_num }}人已报名
        <b class="waw_price">{{
          item.price == 0 ? "免费" : "￥" + item.price
        }}</b>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        item:{
            type:Object,
            required:true,
        }
    },
    methods: {
        onClick(id){//点击进入课程详情
            this.$emit("onclickItem",id)
        }
    },

};
</script>
<style lang='scss' scoped>
.box_container{
    width: 100%;
    background: white;
    border-radius: 0.5rem;
}
.box_wrapper{
    width: 95%;
    height:26vh;
    margin: 0 auto;
    background: white;
    margin-top: 2vh;
    border-radius: 0.5rem;
}
.box_title{
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
    height: 5vh;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
}
.waw_op{
    width: 100%;
    font-size: 0.7rem;
}
.user{
    width: 100%;
    height: 12vh;
    display: inline-flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
}
.user img{
    width: 12%;
    height:50%;
    border-radius: 50%;
}
.user span{
    margin-left: 5%;
    font-size: 0.7rem;
    color: gray;
}
.sy-pp{
    width: 100%;
    height: 5vh;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.7rem;
}
.waw_price{
    color: orange;
}
</style>