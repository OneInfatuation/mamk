<template>
  <div>
    <NavTitle></NavTitle>
    <!-- 点击事件 -->
    <div class="select">
      <p @click="timeShow">选择上课时间</p>
      <p @click="teacherShow">选择老师条件</p>
    </div>

    <!-- 上课时间 -->
    <div v-show="isShowTime">
      <van-calendar
        :poppable="false"
        :show-confirm="false"
        :style="{ height: '500px' }"
      />
      <!-- 按钮 -->
      <div class="buttonlist">
        <button class="submit">重置</button>
        <button class="confirm">确认</button>
      </div>
    </div>

    <div v-show="isShowTeacher" class="selectTeacher">
      <!-- 老师类型 -->
      <div class="teacherType">
        <p>老师类型</p>
        <div class="teacherType_icon_div">
          <p
            class="teacherType_icon"
            v-for="(item, index) in typelist"
            :key="index"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <!-- 只看 -->
      <div
        style="
          width: 94%;
          height: 3.5rem;
          margin: 0.3rem auto;
          font-size: 0.8rem;
        "
      >
        <p>只看</p>
        <div>
          <input type="checkbox" />已关注 <input type="checkbox" />上过课的
        </div>
      </div>
      <!-- 性别 -->
      <div class="teacherSex">
        <p>性别</p>
        <div class="teacherSex_icon_div">
          <p class="teacherSex_icon">男</p>
          <p class="teacherSex_icon">女</p>
        </div>
      </div>
      <!-- 年级 -->
      <div class="classNum">
        <p>年级</p>
        <div class="classNum_icon_div">
          <p
            class="classNum_icon"
            v-for="(item, index) in classList"
            :key="index"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <!-- 学科 -->
      <div class="subject">
        <p>学科</p>
        <div class="subject_icon_div">
          <p
            class="subject_icon"
            v-for="(item, index) in subjectList"
            :key="index"
          >
            {{ item }}
          </p>
        </div>
      </div>

      <!-- 按钮 -->
      <div class="buttonlist">
        <button class="submit">重置</button>
        <button class="confirm">确认</button>
      </div>
    </div>

    <!-- 预约角色 -->
    <div
      v-show="isShow"
      class="box"
      v-for="(item, index) in list"
      :key="index"
      @click="gotoTeacher"
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
          &nbsp; &nbsp;&nbsp;&nbsp;{{ item.teach_age }}年教龄
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
      list: [],
      lists: [],
      // 是否展示上课时间
      isShowTime: false,
      // 是否展示预约老师
      isShow: true,
      // 是否展示老师条件
      isShowTeacher: false,
      typelist: [
        "M1",
        "M2",
        "M3",
        "M4",
        "M5",
        "M6",
        "M7",
        "M8",
        "M9",
        "M10",
        "M11",
        "M12",
        "M13",
        "M14",
        "M15",
        "M16",
        "M17",
        "M18",
        "M19",
        "M20",
      ],
      classList: [
        "小学一年级",
        "小学二年级",
        "小学三年级",
        "小学四年级",
        "小学五年级",
        "小学六年级",
        "初一",
        "初二",
        "初三",
        "高一",
        "高二",
        "高三",
      ],
      subjectList: ["语文", "数学", "英语", "物理", "化学", "生物", "信息技术"],
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
      // this.list.splice(index, 1);
    },
    gotoTeacher(id) {
      this.$router.push({
        path: "/teacher",
        query: {
          id,
        },
      });
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    // 选择上课时间
    timeShow() {
      if (this.isShowTime) {
        this.isShowTime = false;
        this.isShow = true;
      } else {
        this.isShowTime = true;
        this.isShow = false;
        this.isShowTeacher = false;
      }
    },
    // 选择老师条件
    teacherShow() {
      if (this.isShowTeacher) {
        this.isShowTeacher = false;
        this.isShow = true;
      } else {
        this.isShowTeacher = true;
        this.isShow = false;
        this.isShowTime = false;
      }
    },
    // onConfirm(date) {
    //   this.date = this.formatDate(date);
    // },
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

// 筛选事件
.select {
  width: 100vw;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
}
.select p {
  flex: 1;
  text-align: center;
}

// 选择老师
.selectTeacher {
  width: 100vw;
}
.selectTeacher > div {
  border-bottom: 1px solid rgba(238, 238, 238, 0.609);
}
// 教师类型
.teacherType {
  width: 94%;
  height: 15rem;
  font-size: 0.8rem;
  margin: 0.5rem auto 0rem;
}
.teacherType_icon_div {
  width: 100%;
  height: 12rem;

  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
// 教师性别
.teacherSex {
  width: 94%;
  height: 4rem;
  font-size: 0.8rem;
  margin: 0.5rem auto 0rem;
}
.teacherSex_icon_div {
  width: 100%;
  height: 2rem;

  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
// 年级
.classNum {
  width: 94%;
  height: 10rem;
  font-size: 0.8rem;
  margin: 0.5rem auto 0rem;
}
.classNum_icon_div {
  width: 100%;
  height: 2rem;

  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
// 学科
.subject {
  width: 94%;
  height: 10rem;
  font-size: 0.8rem;
  margin: 0.5rem auto 0rem;
}
.subject_icon_div {
  width: 100%;
  height: 2rem;

  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}

.teacherType_icon,
.teacherSex_icon,
.classNum_icon,
.subject_icon {
  width: 20%;
  height: 2rem;
  line-height: 2rem;
  background: rgba(238, 238, 238, 0.561);
  text-align: center;
  margin-right: 5%;
  margin-top: 0.4rem;
  color: #646464;
  border-radius: 0.3rem;
}

//按钮列表
.buttonlist button {
  width: 50vw;
  height: 3rem;
  border: none;
}
.submit {
  position: fixed;
  bottom: 0rem;
  left: 0rem;
  background: white;
  color: #eb6100;
}
.confirm {
  position: fixed;
  bottom: 0rem;
  left: 50vw;
  background: #eb6100;
  color: white;
}
</style>