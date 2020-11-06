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
      @click="gotoTeacher(item.teacher_id)"
    >
      <div
        style="width: 2.5rem; height: 2.5rem; border-radius: 5rem"
        class="box1"
      >
        <img
          :src="item.avatar"
          width="100%"
          height="100%"
          style="border-radius: 5rem"
        />
      </div>
      <div class="box2">
        <p>
          {{ item.real_name }}
        </p>
        <p style="font-size: 0.8rem; color: lightgrey">
          <span
            style="font-size: 0.8rem; color: orangered"
            v-if="item.sex === 0"
          >
            男
          </span>
          <span
            style="font-size: 0.8rem; color: orangered"
            v-if="item.sex === 1"
          >
            女
          </span>
           &nbsp;
           &nbsp;&nbsp;&nbsp;{{ item.teach_age }}年教龄
        </p>
      </div>
      <div class="box3">
        <button class="btn" @click="OnAbout(item.teacher_id)">预约</button>
      </div>
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
      list: [],
      lists: [],
    };
  },
  mounted() {
    var obj = {
      page: 1,
      limit: 10,
    };
    // this.$ClientAPI.otoCourse(obj).then((res)=>{
    //   this.lists = res.data
    //   console.log(res)
    // })
    this.$axios
      .get("https://www.365msmk.com/api/app/otoCourse", {
        params: {
          page: 1,
          limit: 10,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        this.list = res.data.data;
      });
  },
  methods: {
    OnAbout(index) {
      console.log(index);
    },
    gotoTeacher(id) {
      this.$router.push({
        path:"/teacher",
        query:{
          id:196
        }
      });
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
.box {
  width: 90%;
  height: 4rem;
  background: white;
  margin: 1rem 5% 0rem;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
}
.box div {
  margin: 0.5rem 0.2rem;
}
.box1 {
  flex: 1;
}
.box2 {
  flex: 5;
}
.box3 {
  flex: 2;
}
.btn {
  width: 4rem;
  height: 1.7rem;
  border-radius: 1rem;
  font-size: 0.5rem;
  border: none;
  color: orangered;
  background: rgba(255, 166, 0, 0.315);
}
</style>