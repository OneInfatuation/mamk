<template>
  <div>
    <van-nav-bar title="我的学习" left-arrow @click-left="onClickLeft" >
      <template #right>
          <img src="../../../assets/rili.png" width="25rem" @click="gotoStudyTime">
      </template>
    </van-nav-bar>
    <div>
      <van-tabs v-model="active" @change="OnChangeItem">
        <van-tab
          v-for="item in listStyle"
          :title="item.name + '(' + item.num + ')'"
          :name="item.type"
          :key="item.type"
        >
          <div class="waw_list_box" v-show="showList.length > 0">
            <div class="waw_list_wrapper">
              <div
                class="waw_list_item_box"
                v-for="(ele, i) in showList"
                :key="i"
              >
                <div class="waw_list_item_wrapper">
                  <p>{{ ele.title }}</p>
                  <div class="waw_list_item_time">
                    {{ ele.start_play_date | filtersTime }} ~
                    {{ ele.end_play_date | filtersTime }}
                  </div>
                  <div class="waw_list_progress_box">
                    <div class="waw_progress_box">
                      <van-progress inactive :percentage="ele.progress_rate" />
                    </div>
                    <span> 已学习{{ ele.progress_rate }}% </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="waw_empty_box" v-show="showList.length == 0">
            <div class="waw_empty_img_box">
              <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
            </div>
            <p>还没有课程，快去选择课程学习吧</p>
            <div class="waw_empty_button"><van-button @click="$router.push('/curriculum')" type="warning">选择课程</van-button></div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listStyle: [], //分类数据
      active: 0,
      showList: [], //展示数据
      list: [
        {
          type: 5,
          name: "点播课",
          num: 0,
        },
        {
          type: 8,
          name: "音频课",
          num: 0,
        },
        {
          type: 10,
          name: "图文课",
          num: 0,
        },
        {
          type: 11,
          name: "会员课",
          num: 0,
        },
      ],
    };
  },
  filters: {
    //过滤时间
    filtersTime(val) {
      // console.log(val);
      let date = new Date(val * 1000);
      let m =
        date.getMonth() + 1 > 9
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1);
      let d = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
      let h = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
      let mm =
        date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
      let s =
        date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();

      let time = `${m}月${d}日 ${h}:${mm}:${s}`;
      return time;
    },
  },
  mounted() {
    // this.$Net.xue().then(res=>{
    //   console.log(res);
    // })

    this.$ClientAPI
      .myStyduQk(2)
      .then((res) => {
        console.log(res.data.data);
        this.listStyle = res.data.data.typeNum;
        this.list.forEach((ele) => {
          this.listStyle.push(ele);
        });
        this.showList = res.data.data.courseList;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    onClickLeft() {
      //点击返回上一页
      this.$router.go("-1");
    },
    OnChangeItem(index) {
      //点击切换
      // console.log(index);
      this.active = index;
      this.showList = [];
      this.$ClientAPI
        .myStyduQk(this.active)
        .then((res) => {
          // console.log(res.data.data);  
          this.showList = res.data.data.courseList;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 跳转到学习日历
    gotoStudyTime(){
      this.$router.push("/study-calendar")
    }
  },
};
</script>

<style scoped>
.waw_list_box {
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.waw_list_wrapper {
  width: 90%;
}
.waw_list_item_box {
  margin-top: 0.4rem;
  width: 100%;
  height: 10rem;
  border-radius: 0.5rem;
  border: 1px solid lightgray;
}
.waw_list_item_wrapper {
  width: 90%;
  margin-left: 5%;
  height: 100%;
}
.waw_list_item_wrapper p {
  width: 100%;
  height: 2.5rem;
  color: gray;
  display: inline-flex;
  align-items: center;
}
.waw_list_item_time {
  width: 100%;
  height: 2rem;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.7rem;
  color: gray;
}
.waw_list_progress_box {
  width: 100%;
  height: 4.5rem;
  display: inline-flex;
  align-items: center;
}
.waw_progress_box {
  width: 40%;
  height: 100%;
  display: inline-flex;
  align-items: center;
}
.waw_progress_box .van-progress {
  width: 100%;
}
.waw_list_progress_box span {
  font-size: 0.7rem;
  color: gray;
}
.waw_empty_box{
  width: 100%;
}
.waw_empty_img_box{
  width: 100%;
  height: 10rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.waw_empty_img_box img{
  width: 40%;
  height: 100%;
}
.waw_empty_box p{
  width: 100%;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: gray;
}
.waw_empty_button{
  width: 100%;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.waw_empty_button .van-button{
  padding: 0 0.4rem !important;
  height: 1.8rem;
}
</style>