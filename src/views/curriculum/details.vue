<template>
  <div>
    <!-- 导航栏 -->
    <div class="details_nav">
      <p @click="back"><img src="../../assets/curriculum/fanhui.png" /></p>
      <p>课程详情</p>
      <p>
        <!-- 分享遮罩层 -->
        <van-button @click="show = true" style="border:none">
          <template>
            <img src="../../assets/curriculum/fenxiang.png" />
          </template>
        </van-button>
        <van-overlay :show="show" @click="show = false">
          <div class="wrapper">
            <div
              class="block"
              style="
                text-align: center;
                width: 5rem;
                height: 5rem;
                line-height: 7rem;
              "
            >
              <img src="../../assets/curriculum/ico.png" width="50%" />
            </div>
          </div>
        </van-overlay>
      </p>
    </div>
    <div class="details_content">
      <!--  -->
      <div style="width: 100%; height: 1rem"></div>

      <!-- 主要数据 -->
      <div
        class="details_main"
        v-for="(item, index) in selectList"
        :key="index"
      >
        <div class="details_content_message">
          <h4>{{ item.title }}</h4>
          <p style="color: orange; font-size: 1.5rem">免费</p>
          <p>第8课时 | {{ item.browse_num }}人已报名</p>
          <p>开课时间：{{ item.end_play_date }}</p>
        </div>
        <!--  -->
        <div style="width: 100%; height: 1rem; background: #eee"></div>
        <!-- 教育团队 -->
        <div class="details_content_person">
          <p>教学团队</p>
          <div v-for="(message, index) in item.teachers_list" :key="index">
            <p><img :src="message.teacher_avatar" width="40rem" /></p>
            <p>{{ message.teacher_name }}</p>
          </div>
        </div>
        <!--  -->
        <div style="width: 100%; height: 1rem; background: #eee"></div>

        <!-- 课程介绍 -->
        <div style="width: 100%; height: 4rem">
          <p style="width: 90%; margin: 0.3rem auto; height: 3rem">课程介绍</p>
        </div>

        <!--  -->
        <div style="width: 100%; height: 1rem; background: #eee"></div>
        <!-- 课程大纲 -->
        <div style="width: 100%; height: 20rem">
          <p style="width: 90%; margin: 0.3rem auto; height: 3rem">课程大纲</p>
          <!-- 课程目录 -->
          <ul class="details_mune">
            <li></li>
          </ul>
        </div>
      </div>

      <!--  -->
      <div style="width: 100%; height: 1rem; background: #eee"></div>

      <div style="width: 100%; height: 30rem">
        <p style="width: 90%; margin: 0.3rem auto; height: 3rem">课程评论</p>
      </div>

      <div style="width: 100%; height: 3.5rem"></div>
      <!-- 立即报名 -->
      <div class="enter">
        <button @click="setenter">立即报名</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      list: [],
      selectList: [],
    };
  },
  mounted() {
    this.$ClientAPI.courseBasis().then((res) => {
      this.list = res.data.data.list;
      // console.log(this.$route.query.id)
      this.list.map((item) => {
        // let id =
        // console.log(id);
        if (item.id == this.$route.query.id) {
          // console.log(item)
          this.selectList.push(item);
        }
        // console.log(item.id)
      });
      console.log(this.selectList);
    });
  },
  methods: {
    setenter() {
      console.log(111);
    },
    back() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
.details_nav {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0px;
  left: 0px;
}
.details_content {
  width: 100%;
  margin-top: 3rem;
}
.details_content_message {
  width: 90%;
  height: 10rem;
  margin: 0 auto;
  background: white;
}
.details_content_message p,
h4 {
  margin: 10px 0px;
  border-top: 1px solid transparent;
}
.details_content_person {
  width: 90%;
  height: 7rem;
  margin: 10px auto;
}
.details_content_person p {
  margin: 10px 0px;
}
.enter {
  width: 100%;
  height: 3rem;
  background: red;
  position: fixed;
  bottom: 0px;
  left: 0px;
}
.enter button {
  width: 100%;
  height: 100%;
  background: orange;
  color: white;
  font-size: 1.5rem;
  border: none;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}

.details_mune {
  width: 96%;
  height: 12rem;
  margin: 0.3rem auto;
}
</style>