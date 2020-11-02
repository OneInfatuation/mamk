<template>
    
  <div class="dyb_home">
    <!-- 轮播图 -->
    <div class="dyb_swipe">
      <van-swipe class="my-swipe" :autoplay="1500" indicator-color="white">
        <van-swipe-item v-for="(item, index) in swiperData" :key="index"
          ><img :src="item.banner_img" style="width: 100%; height: 100%"
        /></van-swipe-item>
      </van-swipe>
    </div>
    <!-- 内容 -->
    <div class="dyb_content">
      <!-- 导航三大块 -->
      <div style="width: 100%; height: 12vh"></div>
      <div class="dyb_nav">
        <div>
          <div @click="onClickChange">
            <p>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA8CAYAAADSfGxZAAAFZUlEQVRoQ+1bW2xUVRRd68xMeZPaFESeBkuLhkekk6IfxDEEMQqUmWGMwcQPE5FEo9GYGONP/TIh8UH88BsNwTDObR0CGsUImGDAGVEQIn1JIBYqBSwtr5m5Z5tbaDLYoXPb28d8nPs1ybl7n7PXXWedk8leRN6zfv3pSr/f9wypN4uwlhAheJKQvVnNfblc2fkLFy72ptPBbH5cqf0OhcQ/ZcqJaWVl02dRsmtJrtPQywmQwG+AfJG1M98mk0s7+9dO50dDg6jjx5vrofE2qFYC4htYnPQC6gREpwl1BD5/KpF48DRAKQ0ghNFoexVsvVKAWlCCAJYDmDZwfbQBSYPqo2XLHoo3NFD3AbEp3FKvIZ8CmFesKBE4hfcQuASgTSi7/f7pTfH4AxeLxY7G+MaNV8qV6opSEBVIjQgqSU4FRBWbTwSdCmproqmqibG1Jyv05EBCgFCxwHuNk8hCuF+RO5Dhz7dU9koyWXMNoB5uzsJxomKxi5Ntu7tcCR63oV8g1NOATPAwz8GcrTczGm2Lira/BOD3kOxOaN82+UegjwE4qrRKZcVOJ5OLO7zk3rCh/X6lsisUVJ1QgnSoD84CpI/RHp8ciJcZibRaEB32mGxAuAhyJLodYEB1REQn/P7Md/H4koybuUKhH/0VFfNDgH4eIo8BmCki95EcgQ/2/xWovYyEW/4GZLabxXl/hx0UvHnmXHfjvU6eWEx8OtuyUYhtABZ6n9NNBl5gJNx8tbCyukkwrHe6QLXFsqoaC0WHw+1riNxOADOGlX14Qb0OI256FJuhT00esqxFTxQGonk/gdVDT+op4ta4AEHiWsKqnlpo6ZFwcw+AgmOeSh00mOMFBHXCWlTg0gZEIy22SPE7wMiCYoDoP/YNI24jYRhhGHG3xhhGGEYYRhQ8d83WMFvDbA2zNQa7lBuNMBphNMJohNEIF39dGLE0YmnE0oilEUsjli4QMGJpxNKIpRFLF1JhbpZGLI1YGrE0YmnE0gUC+WI55j1UIEuuUaTHaSY7BeBh9+h5f7MEgWhmJNKyGyIx7+W5zzAYEJFws9OtOxKNpO4XBCQZibRththOO9+YPSXHCGIrY+va5tsB+zCAOWOFRCkBIYIOZfMphkJ/Tawoz34G4kUARTvaRwKsUgHCcRoQ2JHT+vXbNoX69lVa5XaNFStKBQgAl0GELav6UB8QfQ3g5XNfA+XjkfjixXKUChCK8l7X5Y5tBw48mbtLnaPh5u0CbAEwsVgxXsZL4NS4CeJzy6p+pb+Ou4CIxQ5PyuUq3yL4BiCj1hQ+zoz4F4IPc1pvTyYXO+3Ofc+A89oBQzIzH9VKPgBk1Wic6eMEhGOqOQLiHZ9v0i/x+Lwb+ay+58XF8U3YduuzFHlVgKUQTAc5yY1Xqti2GQsg7pwI10H2CORPQH9y9mzNvnSaBR2Krm5wkcipBSKBOooESdQKuAKQ8uGyZRSBcL56twC/UyRFqKOiJGVZ1e1FP06xF/LHa2tTgTlzJlQEAhNna40QgSggdQACQ8kDoNdqrC5gQwSGaVPIkvhVNCz6yr6/caP3fGfnzUtD8ae6YsRgRcZirVW2Lc9BY5NAHLvkNBKDue4cw+QPVlP1mkJ5I+HT3wBcOzjbJCPCq1ToANhIqp2JxMJWLx5Uz0D0F+O4b2eUn1liq1wQIkEI60A8MsAdRLQqW1766uuanwoBEY22BSF6l4hU5Y87ZjkQfxBMQUuKwqNqwq2Tbs1yxRg7YkDkT+ScPJnMzMoyxQU29DpA6gHMFeCYz+d7v6vr7EHnElN4caLC4ZbVhLwL0HH1ngO4F0BSa7ZrPfnSnj2zrxcrbKjj/wFPducAYoibwgAAAABJRU5ErkJggg=="
                alt=""
              />
            </p>
            <span>特色课</span>
          </div>
          <div @click="$router.push('/coaching')">
            <p>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAYAAADRy2JxAAAEDElEQVRoQ+2aTWhUVxTH/+fNRyYmE78WirTQFgwiXSjFjWDRlR+k0CIOlJiaVk1VNGrGmBZaOy24EXSmlBqk2inUyaRZKM3MFFxoNt1VQXEhiogSSKwL48ckMTNz7yk3VQntTN7Me2HezJv3tveee+7vnnP+9773LgFAaGjIPZ4eeVsCX4KwCZKXgEhTbRX3EP4mxiXp1b46tfHjYTPzIwX+/PloO4i/AfCGmcHKZcsAa6ALYnKiIxzY9dioX+pOxJZL4Eq1gM8AfeRyy/dPbG67bRg+mIxFwWg3OoBldkTMLFaf+qDthtE5UDDRNwrwUqMDWGnHkKvMwQ/GBAiVKW46K2sePhFjK6NnxrcDb67mncibyT7LbJ20d9LeWPJR0KZq352KLmX2vguX5n+9NDmAmB7kXqTvh7ftHLMlfFeqv5lYXARjZZ6cEAD+AmG/LeGDidhBAJFCxaBejEAYtCV8VzL2NTG+m1UJCE9rFx6AA29so7DeqtAhp6i0dyJvw33eibye2jtp76S99cptZAaO2ud5pXUEzxG82YvJOd4aEZtKsHEEr0YFb0oKXhP+cPvN/2ZhLaj9XUHYGGlpvVcz8OoTFAETID7pn/AeDwUCmfLAT/8Wxp9EuE7M2XKLHhMxMacl+NaLSW/qdCCQzjeHuU97IgbzOZGRx0T92OOp4TpZbvhlzc0cWr9B/VWe9efqnMIzIEAUnwR39ra0jpUbulR/cwf/b8TPC4/siWxqGy11Ilb0nxt4VWPA2Vx26mjko0+fWAFixKdpeJXqBPSJXKazmsCnr9WNj/wiGa16C5f/bK+T6ocuRhdoLs8KaFSv56Cc7STIzRqvJaJOMC/S8/1/eAUO/klkMz35In7093N+ofl6AV4PaC49B2VtZ3U9D00gqgOritV7q0vGnoAxX3UrJtW/+CO+OivkNfX9T2/wSm+nI6l4J0vZw0ATgfpFRhyLbC2s6l2D51uIKFHpYMXMj7YNDHjfdE++xW6PJ+eWwz9s2f5sNkNbwRezQjP7dCV/20Ccu2yLtC8V/lAy9o6LoWp+Qam2lda/ZNHqSJyZ59caf4ZEoNqjXzK8it7h5K/rNNbOMrCcqlj1DcGrPfTwYP97mov3QvJmAEuq8f6uMfiXxbtv4MdGX8PiZaRhviayPstqmqlegrYQcIBR/CVqU/CWwRZwfCQR382QYQDzitEjW8F3XD3jaRpp3AtCiIGFesGxFbyCDQ1FfemJuh2QfFqvBGwH/yrawVTfLkiEAW4oVAK2hVcl4H/o30PM3xYqAdvCqwxoH4r6Fo97PyFGb74SsDX8qxLoTsY/E1J+D0LDjEOZrAn46V1gtPFzxvSV1Je7AN2pCfjXJZCu3wqSx8H8yEXo+Qf3I4hni2PDwwAAAABJRU5ErkJggg=="
                alt=""
              />
            </p>
            <span>一对一辅导</span>
          </div>
          <div @click="study">
            <p>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </p>
            <span>学习日历</span>
          </div>
        </div>
      </div>
      <!-- 数据列表 -->
      <section>
        <div v-for="(item, index) in listData" :key="index">
          <template
            v-if="item.channel_info.type == 3 && item.channel_info.id == 19"
          >
            <p class="home_op">
              <span class="Home_probably_P"></span>{{ item.channel_info.name }}
            </p>
            <div
              v-for="(items, indexs) in item.list"
              :key="indexs + 'a'"
              @click="Onclick(items)"
            >
              <div class="Home_teacher">
                <ul>
                  <li>
                    <img :src="items.teacher_avatar" alt="" />
                    <p class="Home_teacher_title">{{ items.teacher_name }}</p>
                    <p class="Home_teacher_p">{{ items.introduction }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </template>
          <!-- 精品课程 -->
          <template
            v-if="item.channel_info.type == 1 && item.channel_info.id == 15"
          >
            <p class="home_op">
              <span class="Home_probably_P"></span>{{ item.channel_info.name }}
            </p>
            <div
              class="hmwJP"
              v-for="(ele, i) in item.list"
              :key="i + 'b'"
              @click="hmwJumpXQ(ele)"
            >
              <div class="Home_course">
                <div class="Home_course_box">
                  <p class="hmwTitleJP">
                    每时每课特级教师-自主招生冲刺讲座知识点总结————{{
                      ele.title
                    }}
                  </p>
                  <div>
                    <img :src="ele.cover_img" alt="" class="Home_course_img" />
                    <p>{{ ele.teachers_list[0].teacher_name }}</p>
                  </div>

                  <p class="hmwJPfoot">
                    <span class="Home_course_title"
                      >{{ ele.sales_num }}人已报名
                      <span class="Home_course_p_title"
                        >￥{{ ele.total_periods }}</span
                      ></span
                    >
                  </p>
                </div>
              </div>
            </div>
          </template>
          <!-- 推荐课程 -->
          <template
            v-if="item.channel_info.type == 1 && item.channel_info.id == 18"
          >
            <p class="home_op">
              <span class="Home_probably_P"></span>{{ item.channel_info.name }}
            </p>
            <div
              v-for="(element, x) in item.list"
              :key="x + 'c'"
              @click="hmwJumpXQ(element)"
            >
              <div class="Home_course">
                <div class="Home_course_box">
                  <p class="hmwTitleJP">
                    每时每课特级教师-自主招生冲刺讲座知识点总结————{{
                      element.title
                    }}
                  </p>
                  <div>
                    <img
                      :src="element.cover_img"
                      alt=""
                      class="Home_course_img"
                    />
                    <p>{{ element.teachers_list[0].teacher_name }}</p>
                  </div>

                  <p class="hmwJPfoot">
                    <span class="Home_course_title"
                      >{{ element.sales_num }}人已报名
                      <span class="Home_course_p_title"
                        >￥{{ element.total_periods }}</span
                      ></span
                    >
                  </p>
                </div>
              </div>
            </div>
          </template>
          <!-- 明星讲师 -->
          <template
            v-if="item.channel_info.type == 3 && item.channel_info.id == 14"
          >
            <p class="home_op">
              <span class="Home_probably_P"></span>{{ item.channel_info.name }}
            </p>
            <div
              v-for="(eles, z) in item.list"
              :key="z + 'd'"
              @click="Onclick(eles)"
            >
              <div class="Home_teacher">
                <ul>
                  <li>
                    <img :src="eles.teacher_avatar" alt="" />
                    <p class="Home_teacher_title">{{ eles.teacher_name }}</p>
                    <p class="Home_teacher_p">{{ eles.introduction }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </div>
      </section>
      <!-- 如果没有token显示内容 -->
      <van-popup v-model="show" closeable class="Home_Prpup">
        <img
          src="https://wap.365msmk.com/img/feiji.decaf161.png"
          alt=""
          width="100%"
        />
        <p class="Home_Prpup_title">赶紧登录一下吧</p>
        <p class="Home_Prpup_titles">立即预约一对一辅导，浏览更多视频教程~</p>
        <van-button
          round
          type="info"
          color="rgb(235, 97, 0)"
          class="Home_Prpup_but"
          @click="Onpath"
          >立即登录</van-button
        >
      </van-popup>
      <div class="home_hidden"></div>
    </div>
  </div>
</template>


<script>
import { Dialog } from "vant";
export default {
  name: "",
  data() {
    return {
      listData: [], //列表数据
      swiperData: [], //轮播图数据
      show: false,
    };
  },
  created() {},
  mounted() {
    this.banner(); // 获取轮播图
    this.appIndex(); // 获取首页数据
  },
  methods: {
    // 获取轮播图
    async banner() {
      let { data: res } = await this.$ClientAPI.banner();
      // console.log(res.data);
      this.swiperData = res.data;
    },
    // 获取数据
    async appIndex() {
      let { data: res } = await this.$ClientAPI.appindex();
      this.listData = res.data;
      console.log(this.listData);
    },
    //点击跳转特色课
    onClickChange() {
      sessionStorage.setItem("mainIndex", 1);
      this.$router.push("/curriculum");
    },
    // 跳转学习日历的时候未登录弹出登录弹框
    study() {
      var token = localStorage.getItem("token");
      if (token) {
        this.$router.push("/study-calendar");
      } else {
        this.show = true;
      }
    },
    Onclick(item) {
      //点击进入讲师详情
      var token = localStorage.getItem("token");
      console.log(item.teacher_id);
      if (token) {
        this.$router.push({
          path: "/teacher",
          query: {
            id: item.teacher_id,
          },
        });
      } else {
        this.show = true;
      }
    },
    Onpath() {
      //点击弹出图片里面的按钮立即登录
      this.$router.push("/login");
    },
    // 跳转到详情页面
    hmwJumpXQ(item) {
      console.log(item);
      sessionStorage.removeItem("teacherId");
       sessionStorage.setItem("teacherId",item.teachers_list[0].id)
      this.$router.push({
        path: "/curriculumDetails",
        query: {
          id: item.teachers_list[0].course_basis_id,
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.dyb_home {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  margin-bottom: 2.5rem;
}
.dyb_swipe {
  width: 100%;
  height: 30vh;
}
.my-swipe .van-swipe-item {
  height: 30vh;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  background-color: #39a9ed;
}
.dyb_content {
  width: 100%;
  height: 100%;
  position: relative;
}
.dyb_nav {
  position: absolute;
  width: 100%;
  height: 16vh;
  top: -5vh;
  left: 0;
}
.dyb_nav > div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.dyb_nav > div > div {
  width: 29vw;
  height: 100%;
  background: #fff;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.dyb_nav > div > div > p {
  width: 0.75rem;
  height: 0.75rem;
  margin-bottom: 0.5rem;
}
.dyb_nav > div > div > span {
  font-size: 0.6rem;
  color: #8c8c8c;
}
.dyb_nav > div > div > p > img {
  width: 100%;
  height: 100%;
}
section {
  width: 100%;
}
.home_op {
  width: 100%;
  height: 2rem;
  display: inline-flex;
  align-items: center;
}
.Home_probably_P {
  width: 0.2rem;
  height: 1.5rem;
  background: rgb(235, 97, 0);
  margin-left: 1rem;
  margin-right: 0.5rem;
  float: left;
}
.Home_teacher {
  width: 90%;
  height: 5rem;
  margin-left: 5%;
  background: #fff;
  border-radius: 0.6rem;
}
.Home_teacher li {
  margin-top: 0.5rem;
}
.Home_teacher ul li img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-top: 1rem;
  float: left;
}
.Home_teacher_title {
  font-size: 1rem;
  line-height: 2.5rem;
  margin-left: 4rem;
}
.Home_teacher_p {
  color: gray;
  margin-left: 4rem;
  font-size: 0.8rem;
}
/* 精品课程 */
.Home_course {
  /* box-sizing: border-box; */
  width: 81%;
  height: 7.2rem;
  background: #fff;
  margin-left: 5%;
  margin-top: 1rem;
  border-radius: 0.3rem;
  padding: 1rem;
}
.Home_course_img {
  width: 2rem;
  height: 2rem;
  border-radius: 5rem;
  margin-top: 1rem;
}
.Home_course_title {
  color: gray;
  font-size: 0.7rem;
}
.Home_course_p_title {
  font-size: 0.8rem;
  color: red;
  float: right;
}
.Home_title {
  font-size: 0.6rem;
}
.img {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  width: 1.5rem;
}
.Home_advice li div {
  color: gray;
  font-size: 0.5rem;
}
.Home_Prpup {
  width: 18rem;
  height: 20rem;
  border-radius: 1rem;
  text-align: center;
}
.Home_Prpup img {
  width: 100%;
  height: 10rem;
}
.Home_Prpup_title {
  font-size: 0.9rem;
}
.Home_Prpup_titles {
  font-size: 0.7rem;
  color: gray;
}
.Home_Prpup_but {
  margin-top: 1rem;
  width: 80%;
}
/* 精品课程样式 */
/* 标题 */
.hmwTitleJP {
  margin: 0.5rem 0;
  font-size: 4.26667vw;
  color: #333;
}
/* 图文部分 */
.Home_course_box > div {
  display: flex;
  align-items: center;
}
.Home_course_box > div p {
  margin: 0.8rem 0 0 0.5rem;
  font-size: 3.2vw;
  color: #b7b7b7;
}
.home_hidden {
  width: 100%;
  height: 3vh;
}
</style>