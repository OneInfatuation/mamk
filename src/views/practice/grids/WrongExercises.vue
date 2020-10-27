<template>
  <div>
    <NavTitle></NavTitle>
    <van-row>
      <van-col span="8">
        <van-dropdown-menu>
      <van-dropdown-item title="类型不限" v-model="value1">
        <template #default>
          <div>
            <p
              v-for="(item, index) in option1"
              :key="index"
              :class="
                value1 == item.value
                  ? 'waw_dropdown_box_active'
                  : 'waw_dropdown_box'
              "
              @click="onClick(item.value)"
            >
              {{ item.text }}
            </p>
          </div>
        </template>
      </van-dropdown-item>
      </van-dropdown-menu>
      </van-col>
      <van-col span="8">
        <div class="waw_nav_box">
          巩固全部错题
        </div>
      </van-col>
      <van-col span="8">
        <div class="waw_nav_box">移出错题</div>
      </van-col>
    </van-row>
    
      
    
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
      option1: [
        { text: "全部", value: 1 },
        { text: "套卷练习", value: 2 },
        { text: "考点专练", value: 3 },
        { text: "仿真模考", value: 4 },
      ],
    };
  },
  methods: {
    onClick(value) {
      this.value1 = value;
    },
  },
};
</script>
<style lang='scss' scoped>
.waw_nav_box{
  width: 100%;
  height: 2.9rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 0.65rem;
  color: gray;
}
.waw_dropdown_box {
  width: 100%;
  height: 2.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.waw_dropdown_box_active {
  color: orange;
  width: 100%;
  height: 2.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>