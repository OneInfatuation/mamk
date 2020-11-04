<template>
  <div>
    <van-nav-bar :placeholder="true">
      <template #title>
        <div>
          <van-search
            v-model="value"
            shape="round"
            placeholder="请输入搜索关键词"
            @keydown.enter="search"
            @input="change"
          />
        </div>
      </template>
      <template #left>
        <van-icon name="arrow-left" color="lightgray" @click="onClickBack" />
      </template>
      <template #right>
        <div @click="onSearch">
          <small v-show="value.length == 0">取消</small>
          <small v-show="value.length > 0" @click="search">搜索</small>
        </div>
      </template>
    </van-nav-bar>
    <!-- 搜索数据渲染 -->
    <div v-show="!isShow">
      <div
        v-for="(item, index) in selectList"
        :key="index"
        class="searchMessage"
      >
        <div class="searchMessage_main">
          <p>
            <!-- 标题 -->
            <span style="color: black">{{ item.title }}</span>
          </p>
          <!-- 时间 -->
          <p>
            <img
              src="../../assets/curriculum/time.png"
              style="width: 0.8rem; height: 0.8rem"
            />
            {{ item.start_play_date | timefn }}
            {{ item.end_play_date | timefn }}
          </p>
          <!-- 老师 -->
          <div
            class="curriculum_list_content_name"
            v-for="(message, index) in item.teachers_list"
            :key="index"
          >
            <p
              style="
                display: inline-block;
                width: 2rem;
                height: 2rem;
                margin-right: 1rem;
              "
            >
              <img
                :src="message.teacher_avatar"
                width="100%"
                style="border-radius: 1rem"
              />
            </p>
            <p>{{ message.teacher_name }}</p>
          </div>
          <!-- 报名 -->
          <p class="newEnter">
            {{ item.browse_num }}人已报名
            <span class="free"
              ><img src="../../assets/jinbi.png" />{{ item.price }}</span
            >
          </p>
        </div>
      </div>
    </div>

    <!-- 历史搜索模块 -->
    <div v-show="isShow">
      <h4 class="history_search">
        历史搜索
        <span class="history_search_delete" @click="del"
          ><img src="../../assets/curriculum/shanchu.png"
        /></span>
      </h4>
      <!-- 搜索历史 -->
      <div class="searchList">
        <p
          v-for="(item, index) in searchList"
          :key="index"
          @click="addValue(item)"
        >
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      searchList: [],
      selectList: [],
      isShow: true,
    };
  },
  mounted() {
    // 获取搜索历史
    let searchList = localStorage.searchList;
    if (searchList) {
      this.searchList = JSON.parse(searchList);
    }
  },
  methods: {
    // 搜索
    search() {
      var obj = {
        limit: 10,
        page: 1,
        course_type: 0,
        keywords: this.value,
      };
      // 拿端口数据
      this.$ClientAPI.ClassSearch({ obj }).then((res) => {
        console.log(res.data.data.list);
        this.list = res.data.data.list;

        this.selectList = [];
        this.list.map((item) => {
          if (item.title.trim().includes(this.value.trim())) {
            this.selectList.push(item);
          }
        });
        console.log(this.selectList);
      });
      //判断数据是否相同
      var flag = false;
      this.searchList.map((item) => {
        if (item == this.value) {
          flag = true;
        }
      });
      if (!flag) {
        this.searchList.push(this.value);
        localStorage.searchList = JSON.stringify(this.searchList);
      }
      // this.searchList.push(this.value.trim());
      // localStorage.searchList = JSON.stringify(this.searchList);
    },
    //input框数据更改
    change() {
      var obj = {
        limit: 10,
        page: 1,
        course_type: 0,
        keywords: this.value,
      };

      // 拿端口数据
      this.$ClientAPI.ClassSearch({ obj }).then((res) => {
        console.log(res.data.data.list);
        this.list = res.data.data.list;

        this.selectList = [];
        this.list.map((item) => {
          if (item.title.trim().includes(this.value.trim())) {
            this.selectList.push(item);
          }
        });
        // console.log(this.selectList);
      });

      if (this.value.length == 0) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    // 删除搜索记录
    del() {
      this.searchList = [];
      localStorage.searchList = JSON.stringify(this.searchList);
    },
    //点击搜索历史
    addValue(item) {
      this.value = item;
      this.change()
    },
    onSearch() {
      if (this.value.length > 0) {
        // console.log(111);
        this.value = "";
      } else {
        this.onClickBack();
      }
    },
    onClickBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.search_header {
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid lightgrey;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
}
.search_header p {
  margin: 0px 15px;
}
.search_header img {
  width: 1.5rem;
  height: 1.5rem;
}
.search_header_input {
  width: 60%;
  height: 2rem;
}
.search_header_input input {
  width: 100%;
  height: 2rem;
  border-radius: 50px;
  background: lightgrey;
  padding-left: 10px;
  border: none;
}
.history_search {
  width: 90%;
  height: 1rem;
  line-height: 1rem;
  margin: 1rem auto;
}
.history_search_delete {
  float: right;
}
/* 搜索历史页面 */
.searchList {
  width: 96%;
  margin: 1rem auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.searchList p {
  background: #eee;
  border-radius: 0.2rem;
  margin: 0.25rem 0.3rem;
  text-align: center;
  font-size: 0.9rem;
}

.searchMessage {
  width: 100vw;
  height: 12rem;
  background: rgba(238, 238, 238, 0.842);
  border-top: 1px solid transparent;
}

.searchMessage_main {
  width: 94%;
  height: 11rem;
  margin: 0.5rem auto 0.5rem;
  background: white;
  border-top: 1px solid transparent;
}
.searchMessage_main p {
  width: 90%;
  margin: 0.2rem auto;
  color: lightgrey;
}

/* 数据 */
.curriculum_list_content_name {
  width: 100%;
  height: 4rem;
  margin: 3px 1.5rem;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
}
.free {
  float: right;
  color: green;
  font-size: 0.8rem;
}
.newEnter {
  padding-top: 1rem;
  border-top: 1px solid lightgrey;
}
</style>