<template>
  <div>
    <!-- 头部 -->
    <TitleBack></TitleBack>
    <!-- 导航栏 -->
    <div class="err_nav">
      <!-- 分类 -->
      <div>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
      <!-- 巩固错题 -->
      <div><img src="../../../assets/fuxigonggu.png" /> 巩固全部错题</div>
      <!-- 移除错题 -->
      <div style="color: red" @click="delError">
        <img src="../../../assets/shanchuwenjian.png" /> 移除错题
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog , Toast} from "vant";
import TitleBack from "../../../components/navTitle/TitleBack";
export default {
  data() {
    return {
      value1: 0,
      option1: [
        { text: "类型不限", value: 0 },
        { text: "套卷练习", value: 1 },
        { text: "考点专练", value: 2 },
        { text: "仿真模考", value: 3 },
      ],
    };
  },
  components: {
    TitleBack,
  },
  methods: {
    delError() {
      Dialog.confirm({
        message: "是否做对题目后自动移除该错题",
      })
        .then(() => {
          // loading加载
          Toast.loading({
            duration: 0,
            message: "加载中...",
            forbidClick: true,
          });
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>

<style>
.err_nav {
  width: 99.99%;
  height: 2.5rem;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.8rem;
}
</style>