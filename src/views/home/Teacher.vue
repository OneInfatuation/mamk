<template>
    
  <div class="teacher">
    <!-- 头部 -->
    <div class="dyb_header">
      <header>
        <van-icon name="arrow-left" class="left" @click="$router.go(-1)" />
        <h3>讲师详情</h3>
      </header>
    </div>
    <!-- 讲师信息 -->
    <div class="teacher_info">
      <div class="ti_base">
        <img
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
          alt=""
        />
        <div>
          <p><span>杨德胜</span><font>M10</font></p>
          <p>男<span>30教龄</span></p>
        </div>
        <p>已关注</p>
      </div>
      <div class="ti_lable"></div>
    </div>
    <!-- 详细信息 -->
    <div class="com_box">
      <van-tabs>
        <van-tab title="讲师介绍">
          <ul class="teacher-tro">
            <li>
              <span>教学年龄</span>
              <font>30年</font>
            </li>
            <li>
              <span>授课价格</span>
              <font>400学习币</font>
            </li>
            <li>
              <span>老师简介</span>
              <font
                >　杨老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。
                　　特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。</font
              >
            </li>
          </ul>
        </van-tab>
        <van-tab title="主讲课程">
          <ul class="teacher_cd">
            <li>
              <p class="ii_title">
                每时每课特级教师-自主招生冲刺讲座10-二次函数4--存在性问题
              </p>
              <div class="ii_time">共1课时</div>
              <div class="ii_teacher">
                <div class="teacher_item">
                  <img
                    src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                    alt=""
                  />
                  <font>杨德胜</font>
                </div>
              </div>
              <p class="ii_info">
                <span>30人已报名</span>
                <font style="color: green">免费</font>
              </p>
            </li>
          </ul>
        </van-tab>
        <van-tab title="学员评价">
          <van-empty description="暂无评价" />
        </van-tab>
      </van-tabs>
    </div>
    <div class="waw_hidden"></div>
    <div class="button_bottom">
      <van-button type="danger" @click="onClickBooking">立即预约</van-button>
    </div>

  </div>
</template>


<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.teacher_id = this.$route.query.id;
  },
  methods: {
    onClickBooking() {
      //点击立即预约跳转
      this.$router.push("/bookingCourses");
    },
  },
};
</script>

<style  lang="scss" scoped>
.waw_hidden{
  width: 100%;
  height: 4rem;
}
.teacher {
  height: 100%;
  background: #eee;
}
.dyb_header {
  height: 26.66667vw;
  line-height: 11.73333vw;
  background: linear-gradient(180deg, #63b7fe, #4e7de3);
  > header {
    height: 11.73333vw;
    padding-right: 6.66667vw;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    > i {
      width: 6.66667vw;
      height: 100%;
      padding-left: 0.26667rem;
      padding-left: 2.66667vw;
      color: #fff;
      line-height: 11.73333vw;
    }
    > h3 {
      flex: 2;
      text-align: center;
      font-size: 0.48rem;
      font-size: 4.8vw;
      color: #fff;
    }
  }
}
.teacher_info {
  margin: -15.2vw auto 0;
  width: 94.66667vw;
  padding: 0 4vw;
  background: #fff;
  border-radius: 1.06667vw;
  box-sizing: border-box;
  > .ti_base {
    height: 20.26667vw;
    display: flex;
    align-items: center;
    > img {
      width: 10.66667vw;
      height: 1.06667rem;
      height: 10.66667vw;
      margin-right: 0.32rem;
      margin-right: 3.2vw;
      border-radius: 50%;
      flex: none;
    }
    > div {
      flex: 1;
      > p {
        padding-bottom: 0.8vw;
        > span {
          font-size: 4vw;
          color: #595959;
          line-height: 5.6vw;
          padding-right: 1.33333vw;
        }
        > font {
          font-size: 2.93333vw;
          color: #ea7a2f;
        }
      }
      > p:nth-child(2) {
        font-size: 3.2vw;
        color: #b7b7b7;
        line-height: 0.45333rem;
        line-height: 4.53333vw;
        > span {
          font-size: 3.2vw;
          color: #b7b7b7;
          line-height: 4.53333vw;
        }
      }
    }
    > P {
      font-size: 4vw;
      color: #b7b7b7;
    }
  }
  > .ti_lable {
    padding-bottom: 4vw;
  }
}
.com_box {
  margin-top: 2.66667vw;
  background: #fff;
}
.van-tab--line {
  padding-top: 12vw;
}
.teacher-tro {
  padding: 0 4vw;
  > li {
    display: flex;
    line-height: 10.66667vw;
    font-size: 3.46667vw;
    font-weight: 400;
    color: #8c8c8c;
    padding-top: 2.66667vw;
    > span {
      margin-left: 1.33333vw;
      margin-right: 5.33333vw;
    }
    > font {
      padding-top: 1.33333vw;
      line-height: 8vw;
      flex: 1;
    }
  }
}
.van-tabbar {
  background: orangered;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4.5333vw;
  height: 11.73333vw;
}
.teacher_cd {
  padding: 4vw;
  background: #fff;
  > li {
    background: #fff;
    box-shadow: 0 0 5px #eee;
    border-radius: 1.33333vw;
    padding: 0 3.73333vw;
    margin-bottom: 4vw;
    position: relative;

    > .ii_title {
      padding-top: 4vw;
      font-size: 4.26667vw;
      font-weight: 400;
      color: #333;
    }
    > .ii_time {
      height: 8vw;
      line-height: 8vw;
      font-size: 3.2vw;
      font-weight: 400;
      color: #666;
      padding-right: 4.53333vw;
      position: relative;
    }
    > .ii_teacher {
      height: 17.33333vw;
      display: flex;
      > .teacher_item {
        display: flex;
        height: 100%;
        align-items: center;
        > img {
          width: 7.2vw;
          height: 0.72rem;
          height: 7.2vw;
          border-radius: 50%;
        }
        > font {
          font-size: 3.2vw;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.45);
          margin-left: 2.26667vw;
          margin-right: 4.66667vw;
        }
      }
    }
    > .ii_info {
      border-top: 1px solid #f5f5f5;
      height: 11.73333vw;
      line-height: 11.73333vw;
      display: flex;
      font-size: 3.46667vw;
      > span {
        flex: 1;
      }
      > font {
        font-size: 4.26667vw;
      }
    }
  }
}
.button_bottom{
  width: 100%;
  height: 4rem;
  position: fixed;
  bottom: 0px;
  left: 0px;
  .van-button{
    width: 100%;
    height: 100%;
  }
}
</style>