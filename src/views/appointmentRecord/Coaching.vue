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

    <div
      class="box"
      v-for="(item, index) in list"
      :key="index"
      @click="gotoTeacher"
    >
      <div style="width: 2.5rem; height: 2.5rem; border-radius: 5rem">
        <img
          :src="item.img"
          width="100%"
          height="100%"
          style="border-radius: 5rem"
        />
      </div>
      <div>
        <p>
          {{ item.name }}
          <span style="font-size: 0.8rem; color: orangered">{{
            item.level
          }}</span>
        </p>
        <p style="font-size: 0.8rem; color: lightgrey">
          {{ item.constructor }}
        </p>
      </div>
      <div><button class="btn" @click="OnAbout(index)">预约</button></div>
    </div>
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
      list: [
        {
          img: "https://img.yzcdn.cn/vant/cat.jpeg",
          name: "杨德胜",
          constructor: " 男 30年教龄",
          level: "M20",
        },
      ],
    };
  },
  methods: {
    OnAbout(index) {
      console.log(index);
      // this.list.splice(index, 1);
    },
    gotoTeacher() {
      this.$router.push("/teacher");
    },
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