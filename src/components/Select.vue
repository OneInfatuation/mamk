<template>
  <div>
    <div class="curriculum_nav">
      <van-dropdown-menu close-on-click-overlay close-on-click-outside>
        <!-- 分类 -->
        <van-dropdown-item title="分类" ref="fenlei">
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
                  <button class="selectBox_button" @click="onClickRest">重置</button>
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
        <van-dropdown-item title="排序" ref="sort">
          <van-cell center>
            <template>
              <div
                v-for="item in option"
                :key="item.value"
                :class="hmwActiveNum2 == item.value ? 'hmwSpanActive' : ''"
                span="6"
                @click="OnChangeSort(item.value)"
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
                  v-for="item in selectList"
                  :key="item.id"
                  :class="hmwActiveNum1 == item.id ? 'hmwSpanActive' : ''"
                  span="6"
                  @click="OnClickClass(item.id)"
                >
                  <span>{{ item.title }}</span>
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
      taglist2: [{ title: "语文", id: 7 },
      { title: "数学", id: 8 },
      { title: "英语", id: 9 },
      { title: "物理", id: 12 },
      { title: "化学", id: 13},],
      selectList: [
        { title: "全部", id: 0},
        { title: "大班课", id: 2},
        { title: "小班课", id: 3},
        { title: "公开课", id: 4},
        { title: "点播课", id: 5},
        { title: "面授课", id: 7},
        { title: "音频课", id: 8},
        { title: "系统课", id: 9},
        { title: "图文课", id: 10},
        { title: "会员课", id: 1},
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
      var temp = "";
      if(this.hmwActiveNum3>0 && this.hmwActiveNum3!=0 && this.hmwActiveNum4==0){
        temp = this.hmwActiveNum3
      }else if(this.hmwActiveNum3>0 && this.hmwActiveNum3!=0 && this.hmwActiveNum4>0){
        temp = this.hmwActiveNum3+","+this.hmwActiveNum4
      }
      var obj = {
        page: 1,
        limit: 10,
        course_type: 0,
        classify_id:"",
        order_by: "",
        attr_val_id: temp,
        is_vip: 0
      }
      this.$emit("onSeacher",obj);
      this.$refs.fenlei.toggle()
    },
    onClickRest(){//点击重置
      this.hmwActiveNum3 = 0;
      this.hmwActiveNum4 = 0;
      this.$refs.fenlei.toggle()
    },
    OnChangeSort(index){//排序
      console.log(index);
      this.hmwActiveNum2=index;
      var obj = {
        page: 1,
        limit: 10,
        course_type: 0,
        classify_id:"",
        order_by: this.hmwActiveNum2,
        attr_val_id: "",
        is_vip: 0
      }
      this.$emit("OnChangeSort",obj);
      this.$refs.sort.toggle()
    },
    OnClickClass(id){//点击学科
      this.hmwActiveNum1 = id;
      var obj = {
        page: 1,
        limit: 10,
        course_type: this.hmwActiveNum1==1?"":this.hmwActiveNum1,
        classify_id:"",
        order_by:"",
        attr_val_id: "",
        is_vip: this.hmwActiveNum1==1?this.hmwActiveNum1:0
      }
      this.$emit("OnClickClass",obj)
      this.$refs.item.toggle();
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