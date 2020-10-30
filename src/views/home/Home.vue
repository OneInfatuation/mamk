<template>
    
  <div class="dyb_home">
    <!-- 轮播图 -->
    <div class="dyb_swipe">
      <van-swipe class="my-swipe" :autoplay="1500" indicator-color="white">
        <van-swipe-item
          ><img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg"
            alt=""
            style="width: 100%; height: 100%"
        /></van-swipe-item>
        <van-swipe-item
          ><img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019LnKumseuhw1569839569.jpg"
            alt=""
            style="width: 100%; height: 100%"
        /></van-swipe-item>
        <van-swipe-item
          ><img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20193KAjU2cB6h1569839562.jpg"
            alt=""
            style="width: 100%; height: 100%"
        /></van-swipe-item>
        <van-swipe-item
          ><img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20197Cxc53hktC1569839552.jpg"
            alt=""
            style="width: 100%; height: 100%"
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
          <div
            @click="$router.push('/study-calendar')"
            v-if="token ? true : false"
          >
            <p>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAYAAADRy2JxAAAHAElEQVRoQ+1bfWydVR1+nvO+vb392NptHStjwW3QtdsK6D6MUSPORAlEiQZBJZrFaDZjcPQrTP8wuUqIxLK26yLREqMxEAgzCJosmvDHEIKyTEeXguvHoNsQgl3XFvpx73vf9zzmbVdk3W3vbdc7+8d7/mvv+f3O7znn93XPfQ6RYfQdbNzuW9QDWkewDFCBgBTAYVBvG6HHgMcRU1daheNlBYMT1+7tmCCgTPoW+39v/2pPcXKiaJkPtxrCJyzsTgA3glxDYIWEgOAEiHOC/kWrg9UNrcdm2sFMhnW3NO4W9dusRhOjEPsA2wei01j93aZjr9Ts//n7WWXnOeHllvqiCjifErRD0DYY7IB0PUAnmyqKe6sbDnQsLvhLtfkEBgWcI/AkAv6uuunA+WyGZfv8zUQinlo+eido7yOwScBKAAXZ5D78+dUAP8MenSWd5mQaT3cfOzN4z+HDQa4GS2B/W11ZAOezAZQAcJMAk6v8ZSd8FU5+FtvYDdpfx6XH19e3vZMNQNcvvl9akC7+BmS/JeDTADKGZjY9/+eTn1qehCQkAfSIwf7NdQf/Mpvh3e0NtyhgC6CdgEonpRdhzOr23W2NT07rD8iHttz/SFfOCW+ehhGYMORPXQW/3FDfNjwt3tncVBIv0G5JDwEon6farNOnwfe0PrBZ9H88LcBTrQ0flCcj+/lNDW3P5wv8xUXTBI7YgA9ubjrwj57Wuo8K5gERX4EQz4pkAROmwfe21N8akEfnBn+wcbdsDqVuAYZMiUgAe0H8QcIXCW1ZLBfPZNL8wOda5xcM/uoKRuAbDnTk5vbRyecz5sMvARonMAawGEBJPgNhSbl9CNwl98LqhGhuttBj+dyAJQUexNnq+1vWX2yA2N3W8AaA9fk6/aUFHuivqW/ZMA22u62xT9INEfg87EB08kuo1EVuH8U8gCjhRdk+D6k+vFC5eI21VHr7KOFFCS9KeFF7G/X2+cj3UbaPevtcrq7zf4cX1fmozkd1PqrzUZ2P6vwi70DU5ERNTtTkZCEnRB1eXn+ljdrbqL2N2tsl1N72ttffGlgegRCyJvIxrlrMh9w/yty5qeGR53O6t+9K3B1zV6z7HISbCKyBzDWAKgFcI2EjiGVXuCOXgD/V2nAawMaF6aRHolNAF4GQ/f1vS15wrJISXMdlKjl45qXaxGEvJ/BzGaFEwvStfL/GBthOcptkd0qTrIpSASWknGycOgFna+rmy8wIuXuYgDgKg7do9Zxx8cKNlTjGe1onctm4ucGD+0ScgLWTnFcrBjHK84CU77rjsN5oadmKkQ3fToRc2mk6Ic+01VV6wtaQXyOyFlbbQGwGEMtICgxdkaiX1QnQ3AyoXUDRbHMBnYTwMh0cD3k8VSPl3UwkrBIJ983yoVUeCssdeSXWYQmtiVtrHUPHAS0lG8AYD4E8Q9YGwKPT61xCPwUQ8uO9KaZzuNG0IVtSYkDCB5GG5AEcAvkGYV8jzMmYgq6QUR3SKk82NxU7Bd6qOAu3+Na/F+RdmXKHoFECwxDLMoWRAJ/Qs4amQ9a+blz/vOPFKn3X7JCC7QJrJa0jVQwx3GQXhAvBCX+c+5/3KfzDCrAEXQGrZwOfi/dknENiAOIRAn+U7Cvj1NjwyKujVRVby8aCwkZYfE3CWnBOfm24wedp8SfSbVUQDMgJqgHzZQp3gKi5Et79TMNnnvyCwc8QDBnVnQ55HIYvTIyNvRQrXVZEP7gD0tfFSR594QcnAAQCOg3wTBDwzzR2NY35AoRdmuTlZg6fKzU2X+An7ZpyNw0R5jUhOPTUSPkz3ywZrUg7we0kfwbgWgDDJJsDH0/Q2OUhJR3AJyVUgAt/XZHLxrD/UNOGVDrwYE3KxDzPFBazOGVifkEyNjrOEscxKyBUEHaNL37EQBtFbAJQSSB+MVGFycrNviCPOrL3nfjbW6c+86WPx8eG/rPWMvmue2GVly5/b7eVHgaYjW/vA5OPF5KC0iSTEM6K6KFwzhgOWGnQJc77MoOO4VghOeG51g/GZE3Mo+vEHXhOfMEvGU4/vL/MFvvX+b69wZBVk/FosQ3A1tnjOnw9w34DtFXdsvxR7kr4oR6/yH/QWvsdTlFRLx/UOMTXCb4q2R7RnHZh+q38d9PvlQ3UJhJhkp73WDD4mSsdT+wpLltZuNJXwfVG+irEexU2SBmHRgX+nkZ/peVtFriLGTyHwAiB3wQwT7te6lxJeerC2r0d4/NGOYvAooGfqb+3/UergyD1PZJ7rOwagjk+BwubGXOBwFPG8X5Ste/QwGKBvSzb50vxtN7ulvrrQH5X4B5Aa7OtR+CYDH74ztA/X9yVOBrGd95G3k7+wxb3tv+gMI2CjzkBntAcPbygXtdxb6/a1xz2+nkf/wX17ObGsfXZpQAAAABJRU5ErkJggg=="
                alt=""
              />
            </p>
            <span>学习日历</span>
          </div>
          <div v-if="token ? false : true" @click="study">
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
        <!-- 名师阵容 -->
        <ul class="dyb_ming">
          <p class="dyb_section_title">{{ homeArr[4].channel_info.name }}</p>
          <li
            v-for="(item, index) in homeArr[4].list"
            :key="index"
            v-show="token?true:false"
            @click="$router.push(`/teacher?id=${item.teacher_id}`)"
          >
            <img :src="item.teacher_avatar" alt="" />
            <div>
              <p class="dyb_title">{{ item.teacher_name }}</p>
              <p class="dyb_text">
                {{ item.introduction }}
              </p>
            </div>
          </li>
          <li
            v-for="(item, index) in homeArr[4].list"
            :key="index"
            v-show="token?false:true"
            @click="study"
          >
            <img :src="item.teacher_avatar" alt="" />
            <div>
              <p class="dyb_title">{{ item.teacher_name }}</p>
              <p class="dyb_text">
                {{ item.introduction }}
              </p>
            </div>
          </li>
        </ul>
        <!-- 精品课程 -->
        <ul class="dyb_jing">
          <p class="dyb_section_title">{{ homeArr[1].channel_info.name }}</p>
          <li
            v-for="(item, index) in homeArr[1].list"
            :key="index"
            @click="$router.push(`/course-detail?id=${item.id}`)"
          >
            <p class="dyb_title">
              {{ item.title }}
            </p>
            <p class="dyb_time">共{{ item.sales_base }}课时</p>
            <div class="dyb_thear">
              <img :src="item.teachers_list[0].teacher_avatar" alt="" />
              <span>{{ item.teachers_list[0].teacher_name }}</span>
            </div>
            <div class="dyb_info">
              <span>{{ item.sales_num }}人报名</span>
              <p
                style="color: green; font-size: 0.14rem"
                v-if="item.price == 0"
              >
                免费
              </p>
              <p style="color: red; font-size: 0.14rem" v-if="item.price > 0">
                {{ item.price }}.00
              </p>
            </div>
            <img :src="item.cover_img" alt="" v-if="token ? true : false" />
          </li>
        </ul>
        <!-- 推荐课程 -->
        <ul class="dyb_jing">
          <p class="dyb_section_title">{{ homeArr[3].channel_info.name }}</p>
          <li
            v-for="(item, index) in homeArr[3].list"
            :key="index"
            @click="$router.push(`/course-detail?id=${item.id}`)"
          >
            <p class="dyb_title">
              {{ item.title }}
            </p>
            <p class="dyb_time">共{{ item.sales_base }}课时</p>
            <div class="dyb_thear">
              <img :src="item.teachers_list[0].teacher_avatar" alt="" />
              <span>{{ item.teachers_list[0].teacher_name }}</span>
            </div>
            <div class="dyb_info">
              <span>{{ item.sales_num }}人报名</span>
              <p
                style="color: green; font-size: 0.14rem"
                v-if="item.price == 0"
              >
                免费
              </p>
              <p style="color: red; font-size: 0.14rem" v-if="item.price > 0">
                {{ item.price }}.00
              </p>
            </div>
          </li>
        </ul>
        <!-- 明星讲师 -->
        <ul class="dyb_xing">
          <p class="dyb_section_title">{{ homeArr[0].channel_info.name }}</p>
          <li
            v-for="(item, index) in homeArr[0].list"
            :key="index"
            v-show="token?false:true"
            @click="study"
          >
            <img :src="item.teacher_avatar" alt="" />
            <div>
              <div>{{ item.teacher_name }}<span>M10</span></div>
              <p>
                {{ item.introduction }}
              </p>
            </div>
          </li>
          <li
            v-for="(item, index) in homeArr[0].list"
            :key="index"
            v-show="token?true:false"
            @click="$router.push(`/teacher?id=${item.teacher_id}`)"
          >
            <img :src="item.teacher_avatar" alt="" />
            <div>
              <div>{{ item.teacher_name }}<span>M10</span></div>
              <p>
                {{ item.introduction }}
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>


<script>
import { Dialog } from "vant";
export default {
  name: "",
  data() {
    return {
      // 首页数据
      homeArr: [],
      // 获取token
      token: localStorage.getItem("token"),
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
    },
    // 获取数据
    async appIndex() {
      let { data: res } = await this.$ClientAPI.appindex();
      this.homeArr = res.data;
      console.log(res);
    },
    //点击跳转特色课
    onClickChange() {
      sessionStorage.setItem("mainIndex", 1);
      this.$router.push("/curriculum");
    },
    // 跳转学习日历的时候未登录弹出登录弹框
    study() {
      Dialog.confirm({
        message: "未登录，请先登录",
      })
        .then(() => {
          this.$router.push("/login");
        })
        .catch(() => {
          // on cancel
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
  height: 8.5rem;
}
.my-swipe .van-swipe-item {
  height: 8.5rem;
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
  min-height: 25rem;
}
.dyb_ming {
  padding: 0 0.5rem;
  min-height: 12.5rem;
}
.dyb_section_title {
  text-indent: 0.5rem;
  font-size: 0.7rem;
  border-left: 0.15rem solid #eb6100;
  color: #595959;
  margin: 0.5rem 0;
}
.dyb_ming > li {
  width: 100%;
  height: 3.5rem;
  background: #fff;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  border-radius: 0.25rem;
}
.dyb_ming > li > img {
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  margin-left: 0.75rem;
}
.dyb_ming > li > div {
  width: 11.7rem;
  margin-left: 0.5rem;
}
.dyb_ming > li > div > .dyb_text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.6rem;
  color: #b7b7b7;
}
.dyb_ming > li > div > .dyb_title {
  font-size: 0.7rem;
}
.dyb_jing {
  min-height: 10rem;
  padding: 0 0.6rem;
}
.dyb_jing li {
  background: #fff;
  height: 9rem;
  position: relative;
  padding: 0 0.55rem;
  margin-top: 0.6rem;
  border-radius: 0.5rem;
}
.dyb_jing li > img {
  position: absolute;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  top: 13.33333vw;
  right: 4vw;
}
.dyb_jing li .dyb_title {
  padding-top: 1rem;
  font-size: 0.7rem;
  height: 2rem;
}
.dyb_jing li .dyb_time {
  font-size: 0.6rem;
  height: 1.25rem;
  line-height: 1.25rem;
  color: #666;
}
.dyb_jing li .dyb_thear {
  display: flex;
  align-items: center;
  height: 2.6rem;
}
.dyb_jing li .dyb_thear span {
  color: rgba(0, 0, 0, 0.45);
  font-size: 0.6rem;
  margin-left: 0.5rem;
}
.dyb_jing li .dyb_thear img {
  width: 1.15rem;
  height: 1.15rem;
  border-radius: 50%;
}
.dyb_jing li .dyb_info {
  border-top: 0.05rem solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1.75rem;
}
.dyb_jing li .dyb_info span {
  font-size: 0.6rem;
  color: rgba(0, 0, 0, 0.45);
}
.dyb_xing {
  padding: 0.25rem 0.4rem 0.85rem 0.4rem;
  min-height: 10rem;
}
.dyb_xing li {
  height: 3.5rem;
  border-radius: 0.25rem;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 0.7rem;
  margin-bottom: 0.5rem;
}
.dyb_xing li > div {
  width: 10.17rem;
}
.dyb_xing li > div > p {
  color: #b7b7b7;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.6rem;
}
.dyb_xing li > img {
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  margin-right: 0.5rem;
}
.dyb_xing li > div {
  font-size: 0.7rem;
}
.dyb_xing li > div > div > span {
  margin-left: 0.5rem;
  color: #ea7a2f;
}
#app {
  margin-bottom: 2.5rem;
}
</style>