<template>
  <div>
    <div class="curriculum_nav">
      <van-dropdown-menu>
        <!-- 分类 -->
        <van-dropdown-item title="分类">
          <van-cell>
            <template>
              <div>
                <!-- 年级分类 -->
                <div class="selectBox">
                  <p>年级</p>
                  <div class="classiyTag">
                    <div
                      class="tag"
                      v-for="(item, index) in taglist1"
                      :key="index"
                      :class="hmwActiveNum3 == index ? 'hmwSpanActive' : ''"
                      span="6"
                      @click="hmwActiveNum3 = index"
                    >
                      <span>{{ item }}</span>
                    </div>
                  </div>
                </div>
                <!-- 学科分类 -->
                <div class="selectBox">
                  <p>学科</p>
                  <div class="classiyTag">
                    <div
                      class="tag"
                      v-for="(item, index) in taglist2"
                      :key="index"
                      :class="hmwActiveNum4 == index ? 'hmwSpanActive' : ''"
                      span="6"
                      @click="hmwActiveNum4 = index"
                    >
                    <span>{{ item }}</span>
                    </div>
                  </div>
                </div>
                <!-- 按钮 -->
                <div>
                  <button class="selectBox_button">重置</button>
                  <button
                    class="selectBox_button"
                    style="background: orange; color: white"
                  >
                    选择
                  </button>
                </div>
              </div>
            </template>
          </van-cell>
        </van-dropdown-item>
        <!-- 排序 -->
        <van-dropdown-item title="综合排序">
          <van-cell center>
            <template>
              <div
                v-for="(item, index) in option"
                :key="index"
                :class="hmwActiveNum2 == index ? 'hmwSpanActive' : ''"
                span="6"
                @click="hmwActiveNum2 = index"
                style="
                  width: 100%;
                  height: 2rem;
                  line-height: 2rem;
                  text-align: center;
                "
              >
                <span>{{ item.text }}</span>
              </div>
            </template>
          </van-cell>
        </van-dropdown-item>
        <!-- 筛选 -->
        <van-dropdown-item title="筛选" ref="item">
          <van-cell center>
            <template #right-icon>
              <div class="selectTag">
                <div
                  class="tag"
                  v-for="(item, index) in selectList"
                  :key="index"
                  :class="hmwActiveNum1 == index ? 'hmwSpanActive' : ''"
                  span="6"
                  @click="hmwActiveNum1 = index"
                >
                  <span>{{ item }}</span>
                </div>
              </div>
            </template>
          </van-cell>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>

    <div style="width: 100%; height: 4rem"></div>
<!-- 数据 -->
    <div class="curriculum_list">
      <div
        v-for="(item, index) in messageList"
        :key="index"
        class="curriculum_list_content"
        @click="gotoDetials(item.id)"
      >
        <p>
          <!-- 标题 -->
          <b style="color:black">{{ item.title }}</b>
        </p>
        <!-- 时间 -->
        <p><img src="../assets/curriculum/time.png" style="width:0.8rem;height:0.8rem" /> {{ item.end_play_date }}</p>
        <!-- 老师 -->
        <div class="curriculum_list_content_name" v-for="(message,index) in item.teachers_list" :key="index">
          <p style="display: inline-block; width: 2rem;height: 2rem;margin-right:1rem">
            <img :src="message.teacher_avatar" width="100%" />
          </p>
          <p>{{ message.teacher_name }}</p>
        </div>
        <!-- 报名 -->
        <p class="newEnter">{{ item.browse_num }}人已报名 <span class="free">免费</span></p>
      </div>
    </div>
    <div style="width:100%;height:0.2rem;background:rgba(238, 238, 238, 0.835);"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classList:[],
      value: 0,
      option: [
        { text: "综合排序", value: 0 },
        { text: "最新", value: 1 },
        { text: "最热", value: 2 },
        { text: "价格从低到高", value: 3 },
        { text: "价格从高到低", value: 4 },
      ],
      taglist1: ["初一", "初二", "初三", "高一", "高二"],
      taglist2: ["语文", "数学", "英语", "物理", "化学"],
      selectList: [
        "全部",
        "大班课",
        "小班课",
        "公开课",
        "点播课",
        "面授课",
        "音频课",
        "系统课",
        "图文课",
        "会员课",
      ],
      hmwActiveNum1: 0,
      hmwActiveNum2: 0,
      hmwActiveNum3: 0,
      hmwActiveNum4: 0,

      messageList:[],
      list:[]
    };
  },
  mounted(){
    // 分类获取端口数据
    // this.$ClientAPI.courseClassify().then((res)=>{
    //   this.classList =res.data.data.attrclassify
    //   console.log(this.classList)
    // })
    // 特色课数据获取
    this.$ClientAPI.courseBasis().then((res)=>{
      this.messageList = res.data.data.list 
      console.log(this.messageList)
    })
    // this.$ClientAPI.contentCollect().then((res)=>{
    //   this.list = res.data
    //   console.log(this.list)
    // })

  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    gotoDetials(id) {
      this.$router.push({
        path: "/details",
        query: {
          // title: item.title,
          // date: item.end_play_date,
          // name: item.teachers_list.teacher_name,
          // // details: item.details,
          // number: item.browse_num,
          // pic: item.teachers_list.teacher_avatar,
          id:id
        },
      });
      // console.log(id)
    },
  },
};
</script>

<style>
.curriculum_nav {
  width: 100%;
  margin-top: 3rem;
  position: fixed;
  top: -1rem;
  left: 0px;
  font-size: 1.5rem;
}
.curriculum_list {
  width: 100%;
  height: 100%;
  background: rgba(238, 238, 238, 0.835);
  border-top: 1px solid transparent;
  margin: 1rem 0;
  color: lightgrey;
  font-size: 0.7rem;
}
.curriculum_list_content {
  width: 90%;
  height: 9rem;
  margin:0.2rem auto;
  margin-bottom: 1rem;
  background: white;
  border-radius: 0.5rem;
  border: 1px solid transparent;
}
.curriculum_list_content > p,
hr {
  width: 95%;
  margin: 0 auto;
}
.curriculum_list_content_name {
  width: 100%;
  height: 4rem;
  margin: 3px 1.5rem;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
}
/* .curriculum_list_content h4{

} */
.free {
  float: right;
  color: green;
  font-size: 20px;
}
.selectTag {
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.selectTag .tag {
  width: 4rem;
  height: 2rem;
  margin: 8px 15px;
  text-align: center;
  background: #f5f5f5;
}
.classiyTag {
  width: 100%;
  height: 6rem;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.selectBox {
  width: 90%;
  height: 8rem;
  border-bottom: 1px solid lightgrey;
  margin: 10px auto;
}
.selectBox .tag {
  width: 4rem;
  height: 1.5rem;
  margin: 5px 10px;
  background: #eee;
  text-align: center;
}
.selectBox_button {
  width: 45%;
  height: 2.4rem;
  margin: 10px 5px;
  border-radius: 5px;
  border: none;
}
.hmwSpanActive span {
  color: red;
}

.newEnter{
  border-top: 1px solid lightgrey;
}
</style>