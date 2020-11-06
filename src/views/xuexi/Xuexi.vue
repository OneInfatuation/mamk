<template>
  <div>
    <!-- 表头 -->
    <van-nav-bar title="我的学习" left-text="" left-arrow>
      <template #right>
        <!-- <van-icon name="search" size="18" /> -->
        <van-icon name="apps-o" />
      </template>
    </van-nav-bar>
    <!--  -->

    <van-tabs >
      <van-tab>
        <ul class="zqd_ul"  >
          <!-- 直播课 -->
            <el-card >
              <li>
                <p class="p1"></p>
                <p class="p2">
                  <img
                    src=""
                    alt=""
                  />
                  <span>课时</span>
                </p>
                <div id="div">
                  <div></div>
                  <span>已学习%</span>
                </div>
              </li>
            </el-card>
        </ul>
        <!-- 如果没有课程就显示这个没有的ul -->
        <ul >
              <img src="https://wap.365msmk.com/img/empty@2x.a2fa524d.png" alt="" />
              <li>还没有课程，快去选择课程学习吧</li>
              <button >选择课程</button>
        </ul>
            <!-- 点播课 -->
            <ul  >
                  <!-- <template> -->
                  <el-card >
                    <li>
                      <p class="p1"></p>
                      <p class="p2">
                        <img
                          src=""
                          alt=""
                        />
                        <span>共课时</span>
                      </p>
                      <div id="div">
                        <div ></div>
                        <span>已学习%</span>
                      </div>
                    </li>
                  </el-card>
                <!-- </template> -->
            </ul>

        <ul  >
               <!-- 音频课 -->
          <!-- <template> -->
            <el-card >
              <li>
                <p class="p1"></p>
                <p class="p2">
                  <img
                    src=""
                    alt=""
                  />
                  <span>共课时</span>
                </p>
                <div id="div">
                  <div ></div>
                  <span>已学习%</span>
                </div>
              </li>
            </el-card>
          <!-- </template> -->
        </ul>



           <!-- 图文课 -->
            <ul >
              <!-- <template> -->
                <el-card >
                  <li>
                    <p class="p1"></p>
                    <p class="p2">
                      <img
                        src=""
                        alt=""
                      />
                      <span></span>
                    </p>
                    <div id="div">
                      <div ></div>
                      <span>已学习%</span>
                    </div>
                  </li>
                </el-card>
              <!-- </template> -->
            </ul>

             <!-- 面授课 -->
            <ul >
              <!-- <template> -->
                <el-card >
                  <li>
                    <p class="p1"></p>
                    <p class="p2">
                      <img
                        src=""
                        alt=""
                      />
                      <span>共课时</span>
                    </p>
                    <div id="div">
                      <div ></div>
                      <span>已学习%</span>
                    </div>
                  </li>
                </el-card>
              <!-- </template> -->
            </ul>

            <!-- 会员课 -->
            <ul >
              <!-- <template> -->
                <el-card >
                  <li>
                    <p class="p1"></p>
                    <p class="p2">
                      <img
                        src=""
                        alt=""
                      />
                      <span>共课时</span>
                    </p>
                    <div id="div">
                      <div ></div>
                      <span>已学习%</span>
                    </div>
                  </li>
                </el-card>
              <!-- </template> -->
            </ul>





        <!-- 内容 {{ index }} -->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// import { gets } from '../util/api';
// import { Button } from 'vant';
export default {
  data() {
    return {
      // 选项卡切换
      zqd_arr: [],
      // 数据
      zqd_list: [],
    };
  },
  created() {},
   mounted() {
// this.zqd_huo(2)
this.$ClientAPI.xuexi().then(res=>{
  console.log(res);
})
  },
  methods: {
    // 获取数据
  //  async zqd_huo(i){
  //       let { data } = await this.$ClientAPI.xuexi(i);
  //       // console.log(data.data);
  //       this.zqd_arr = data.data.typeNum;
  //       console.log(this.zqd_arr);
  //       this.zqd_list = data.data.courseList;
  //   },
    // 返回
    // zqd_go() {
    //   this.$router.go(-1);
    // },
    //   // 点击标签传递tpye值
    // ass(i){
    //   // console.log(i)
    // //  调用获取的方法在执行一次
    //   this.zqd_huo(i)
    // },
    // // 点击按钮跳转选择课程
    // zqd_xuanze(){
    //   this.$router.push('/course')
    //   sessionStorage.active=1
    // }

  },
  components: {},
};
</script>

<style scoped lang="scss">
.zqd_ul {
  width: 7.2rem;
  height: 2.8rem;
  box-sizing: border-box;
  // padding: 0.4rem 0.3rem;
  margin-left: 0.1rem;
  li {

    height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    // margin-top: 0.4rem;
    img {
      width: 0.26rem;
      height: 0.26rem;
    }
    .p1 {
      width: 6rem;
      font-size: 0.3rem;
    }
    .p2 {
      font-size: 0.25rem;
    }
    #div {
      display: flex;
      height: 0.5rem;
      line-height: 0.5rem;
      > div {
        width: 2.65rem;
        height: 0.07rem;
        background-color: #f5f5f5;
      }
    }
    // div {

    // }
  }
}
#div .active{
  background: orange !important;
  // z-index: 999;
}

#ul{
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  >img{
    width: 1.7rem;
    height: 2.3rem;

  }
  button{
    width: 1.68rem;
    height: .0.53rem;
    line-height: 0.53rem;
    background: #EB6100;
    color: #fff;
    border: 0;
    margin-top: 0.2rem;
  }
}
</style>
