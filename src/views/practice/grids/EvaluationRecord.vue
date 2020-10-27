<template>
  <div>
    <NavTitle></NavTitle>
    <van-dropdown-menu>
      <van-dropdown-item title="类型不限" v-model="value1" @change="onChange">
          <template #default>
              <div>
                  <p v-for="(item,index) in option1" :key="index"
                  :class="value1 == item.value?'waw_dropdown_box_active':'waw_dropdown_box'" 
                  >{{item.text}}</p>
              </div>
          </template>
      </van-dropdown-item>
      <van-dropdown-item title="时间" v-model="value2">
           <template #default>
              <div>
                  <p v-for="(item,index) in option2" :key="index"
                  :class="value2 == item.value?'waw_dropdown_box_active':'waw_dropdown_box'" 
                  >{{item.text}}</p>
              </div>
          </template>
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>
<script>
import NavTitle from "../../../components/navTitle/TitleBack"; //引入导航子组件
export default {
  components: {
    NavTitle,
  },
  data() {
    return {
      value1: 1,
      value2: 'a',
      option1: [
        { text: "全部", value: 1 },
        { text: "套卷练习", value: 2 },
        { text: "仿真模考", value: 3 },
        { text: "专点专练", value: 4 },
      ],
      option2:[
          {text: "全部", value: "a" },
          {text: "今天", value: "b" },
          {text: "7天",  value: "c" },
      ]
    };
  },
  methods: {
      onChange(value){
          console.log(value);
      }
  },
};
</script>
<style lang='scss' scoped>
.waw_dropdown_box{
    width: 100%;
    height: 1.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.waw_dropdown_box_active{
    color: orange;
     width: 100%;
    height: 1.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
</style>