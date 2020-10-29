<template>
  <div>
    <NavTitle></NavTitle>
    <van-dropdown-menu>
      <van-dropdown-item title="选取上课时间" v-model="value1">
        <van-cell center title="日期">
          <template #default>
            <van-calendar @confirm="onConfirm" />
          </template>
        </van-cell>
      </van-dropdown-item>
      <van-dropdown-item title="选取老师条件" v-model="value2" />
    </van-dropdown-menu>

    
  </div>
</template>
<script>
import NavTitle from "../../components/navTitle/TitleBack"; //引入导航组件
export default {
  components: {
    NavTitle,
  },
  data() {
    return {
      data: "",
      value1: 0,
      value2: "a",
      option1: [{ text: "选取上课时间", value: 0 }],
      option2: [{ text: "选取老师条件", value: "a" }],
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.date = this.formatDate(date);
    },
  },
};
</script>
<style lang='scss' scoped>
</style>