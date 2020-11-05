<template>
  <div>
    <van-tabs v-model="activeName">
      <!-- 直播课 -->
      <van-tab :title="`直播课 (${list1.length})`" name="1">
        <van-empty
          description="还没有课程,快去选择课程学习吧"
          image="https://wap.365msmk.com/img/empty.0d284c2e.png"
          v-show="isShow1"
        >
          <van-button
            round
            type="warning"
            class="bottom-button"
            @click="gotoSelect"
          >
            选择课程
          </van-button>
        </van-empty>
        <div
          v-show="!isShow1"
          class="study_details"
          v-for="(item, index) in list1"
          :key="index"
        >
          <p class="study_details_title">{{ item.title }}</p>
          <p>
            <img src="../../../assets/curriculum/time.png" width="11rem" />
            {{ item.start_date }} ~ {{ item.end_date }} | 共{{
              item.ClassNum
            }}课时
          </p>
          <p>
            <van-progress pivot-text="橙色" color="#f2826a" :percentage="25" />
            已学习{{ item.study_level }}%
          </p>
        </div>
      </van-tab>
      <!-- 点播课 -->
      <van-tab :title="`点播课 (${list2.length})`" name="2">
        <van-empty
          v-show="isShow2"
          description="还没有课程,快去选择课程学习吧"
          image="https://wap.365msmk.com/img/empty.0d284c2e.png"
        >
          <van-button
            round
            type="warning"
            class="bottom-button"
            @click="gotoSelect"
          >
            选择课程
          </van-button>
        </van-empty>
        <div
          v-show="!isShow2"
          class="study_details"
          v-for="(item, index) in list2"
          :key="index"
        >
          <p class="study_details_title">{{ item.title }}</p>
          <p>
            <img src="../../../assets/curriculum/time.png" width="11rem" />
            {{ item.start_date }} ~ {{ item.end_date }} | 共{{
              item.ClassNum
            }}课时
          </p>
          <p>
            <van-progress pivot-text="橙色" color="#f2826a" :percentage="25" />
            已学习{{ item.study_level }}%
          </p>
        </div>
      </van-tab>
      <!-- 音频课 -->
      <van-tab :title="`音频课 (${list3.length})`" name="3">
        <van-empty
          v-show="isShow3"
          description="还没有课程,快去选择课程学习吧"
          image="https://wap.365msmk.com/img/empty.0d284c2e.png"
        >
          <van-button
            round
            type="warning"
            class="bottom-button"
            @click="gotoSelect"
          >
            选择课程
          </van-button>
        </van-empty>
        <div
          v-show="!isShow3"
          class="study_details"
          v-for="(item, index) in list3"
          :key="index"
        >
          <p class="study_details_title">{{ item.title }}</p>
          <p>
            <img src="../../../assets/curriculum/time.png" width="11rem" />
            {{ item.start_date }} ~ {{ item.end_date }} | 共{{
              item.ClassNum
            }}课时
          </p>
          <p>
            <van-progress pivot-text="橙色" color="#f2826a" :percentage="25" />
            已学习{{ item.study_level }}%
          </p>
        </div>
      </van-tab>
      <!-- 图文课 -->
      <van-tab :title="`图文课 (${list4.length})`" name="4">
        <van-empty
          v-show="isShow4"
          description="还没有课程,快去选择课程学习吧"
          image="https://wap.365msmk.com/img/empty.0d284c2e.png"
        >
          <van-button
            round
            type="warning"
            class="bottom-button"
            @click="gotoSelect"
          >
            选择课程
          </van-button>
        </van-empty>
        <div
          v-show="!isShow4"
          class="study_details"
          v-for="(item, index) in list4"
          :key="index"
        >
          <p class="study_details_title">{{ item.title }}</p>
          <p>
            <img src="../../../assets/curriculum/time.png" width="11rem" />
            {{ item.start_date }} ~ {{ item.end_date }} | 共{{
              item.ClassNum
            }}课时
          </p>
          <p>
            <van-progress pivot-text="橙色" color="#f2826a" :percentage="25" />
            已学习{{ item.study_level }}%
          </p>
        </div>
      </van-tab>
      <!-- 面授课 -->
      <van-tab :title="`面授课 (${list5.length})`" name="5">
        <van-empty
          v-show="isShow5"
          description="还没有课程,快去选择课程学习吧"
          image="https://wap.365msmk.com/img/empty.0d284c2e.png"
        >
          <van-button
            round
            type="warning"
            class="bottom-button"
            @click="gotoSelect"
          >
            选择课程
          </van-button>
        </van-empty>
        <div
          v-show="!isShow5"
          class="study_details"
          v-for="(item, index) in list5"
          :key="index"
        >
          <p class="study_details_title">{{ item.title }}</p>
          <p>
            <img src="../../../assets/curriculum/time.png" width="11rem" />
            {{ item.start_date }} ~ {{ item.end_date }} | 共{{
              item.ClassNum
            }}课时
          </p>
          <p>
            <van-progress pivot-text="橙色" color="#f2826a" :percentage="25" />
            已学习{{ item.study_level }}%
          </p>
        </div>
      </van-tab>
      <!-- 会员课 -->
      <van-tab :title="`会员课 (${list6.length})`" name="6">
        <van-empty
          v-show="isShow6"
          description="还没有课程,快去选择课程学习吧"
          image="https://wap.365msmk.com/img/empty.0d284c2e.png"
        >
          <van-button
            round
            type="warning"
            class="bottom-button"
            @click="gotoSelect"
          >
            选择课程
          </van-button>
        </van-empty>
        <div
          v-show="!isShow6"
          class="study_details"
          v-for="(item, index) in list6"
          :key="index"
        >
          <p class="study_details_title">{{ item.title }}</p>
          <p>
            <img src="../../../assets/curriculum/time.png" width="11rem" />
            {{ item.start_date }} ~ {{ item.end_date }} | 共{{
              item.ClassNum
            }}课时
          </p>
          <p>
            <van-progress pivot-text="橙色" color="#f2826a" :percentage="25" />
            已学习{{ item.study_level }}%
          </p>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
        //数据列表
      list1: [
        {
          title: "初中数学自主招生专题",
          start_date: "12月13日 14:10",
          end_date: "12月13日 20：30",
          ClassNum: 1,
          study_level: 0,
        },
      ],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      list6: [],
    //   显示隐藏判断
      isShow1: true,
      isShow2: true,
      isShow3: true,
      isShow4: true,
      isShow5: true,
      isShow6: true,
      activeName: "1",
    };
  },
  mounted(){
    //   判断isShow1
      if(this.list1.length != 0){
        this.isShow1 =false
      }else{
          this.isShow1 =true
      }
          //   判断isShow2
      if(this.list2.length != 0){
        this.isShow2 =false
      }else{
          this.isShow2 =true
      }
          //   判断isShow3
      if(this.list3.length != 0){
        this.isShow3 =false
      }else{
          this.isShow3 =true
      }
          //   判断isShow4
      if(this.list4.length != 0){
        this.isShow4 =false
      }else{
          this.isShow4 =true
      }
          //   判断isShow5
      if(this.list5.length != 0){
        this.isShow5 =false
      }else{
          this.isShow5 =true
      }
          //   判断isShow6
      if(this.list6.length != 0){
        this.isShow6 =false
      }else{
          this.isShow6 =true
      }
  },
  methods: {
    gotoSelect() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.bottom-button {
  width: 100px;
  height: 40px;
}
.study_details {
  width: 90%;
  height: 7rem;
  border: 1px solid rgba(238, 238, 238, 0.644);
  margin: 0.5rem auto 0rem;
}
.study_details p {
  width: 94%;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.8rem;
  margin: 0.5rem auto;
}
</style>