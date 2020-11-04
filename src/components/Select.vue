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
                      v-for="item in taglist1"
                      :key="item.id"
                      :class="hmwActiveNum3 == item.id ? 'hmwSpanActive' : ''"
                      span="6"
                      @click="onClickClass(item.id)"
                    >
                      <span>{{ item.title }}</span>
                    </div>
                  </div>
                </div>
                <!-- 学科分类 -->
                <div class="selectBox">
                  <p>学科</p>
                  <div class="classiyTag">
                    <div
                      class="tag"
                      v-for="item in taglist2"
                      :key="item.id"
                      :class="hmwActiveNum4 == item.id ? 'hmwSpanActive' : ''"
                      span="6"
                      @click="onClickXk(item.id)"
                    >
                      <span>{{ item.title }}</span>
                    </div>
                  </div>
                </div>
                <!-- 按钮 -->
                <div>
                  <button class="selectBox_button">重置</button>
                  <button
                    class="selectBox_button"
                    style="background: orange; color: white"
                    @click="onSeacher"
                  >
                    确认
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      option: [
        { text: "综合排序", value: 0 },
        { text: "最新", value: 1 },
        { text: "最热", value: 2 },
        { text: "价格从低到高", value: 3 },
        { text: "价格从高到低", value: 4 },
      ],
      taglist1: [
        { title: "初一", id: 1 },
        { title: "初二", id: 2 },
        { title: "初三", id: 3 },
        { title: "高一", id: 4 },
        { title: "高二", id: 5 },
      ],
      taglist2: [{ title: "语文", id: 6 },
      { title: "数学", id: 7 },
      { title: "英语", id: 8 },
      { title: "物理", id: 9 },
      { title: "化学", id: 10},],
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

      messageList: [],
      list: [],
    };
  },
  mounted() {
    this.$ClientAPI
      .selectKc()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    onClickClass(id){//点击年级
      this.hmwActiveNum3 = id;
    },
    onClickXk(id){//点击学科
      this.hmwActiveNum4=id;
    },
    onSeacher(){//点击确认搜索数据
      if(this.hmwActiveNum3==0){
        this.hmwActiveNum3 = ""
      }
      if(this.hmwActiveNum4==0){
        this.hmwActiveNum4 = ""
      }
      var obj = {
        page: 1,
        limit: 10,
        course_type: 0,
        classify_id:this.hmwActiveNum4,
        attr_val_id: this.hmwActiveNum3,
      }
      
    }
  },
};
</script>

<style>
.curriculum_nav {
  width: 100%;
  margin-top: 3.9rem;
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
  margin: 2rem 0;
  color: lightgrey;
  font-size: 0.8rem;
}
.curriculum_list_content {
  width: 90%;
  height: 9rem;
  margin: 0.2rem auto;
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
  font-size: 0.8rem;
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

.newEnter {
  border-top: 1px solid lightgrey;
}
</style>