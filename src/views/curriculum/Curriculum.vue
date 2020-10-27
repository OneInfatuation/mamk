<template>
  <div>
      <!-- 标题 -->
      <div class="curriculum_header">
          特色课
          <p class="curriculum_header_search">
              <img src="../../assets/curriculum/sousuo2.png" @click="gotoSearch">
          </p>
      </div>

        <!-- 筛选处理 -->
        <Select></Select>

  </div>
</template>

<script>
import Select from "../../components/Select"
export default {
    components:{
        Select
    },
    methods:{
        gotoSearch(){
            this.$router.push("/search")
        }
    }
};
</script>
<style lang='scss' scoped>
.curriculum_header{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    border-bottom: 1px solid lightgrey;
    color: grey;
    background: white;
    font-size: 2rem;
    text-align: center;
    position: fixed;
    top: 0px;
    left: 0px;
}
.curriculum_header_search{
    width:2rem;
    height: 2rem;
    // background: red;
    position: absolute;
    right: 1rem;
    top: 0.3rem;
    margin: 0px;
}
.curriculum_header_search img{
    width: 2rem;
    height: 2rem;
}
</style>