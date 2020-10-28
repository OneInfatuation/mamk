<template>
  <div>
    <!-- 引入封装表头 -->
    <TitleBack></TitleBack>

    <!-- 排序 -->
    <van-dropdown-menu>
      <van-dropdown-item title="题目类型">
        <van-cell>
          <template>
            <div
              v-for="(item, index) in option"
              :key="index"
              :class="ActiveNum == index ? 'SpanActive' : ''"
              span="6"
              @click="ActiveNum = index"
              style="
                width: 100%;
                height: 2rem;
                line-height: 2rem;
                text-align: center;
              "
            >
              <span>{{ item }}</span>
            </div>
          </template>
        </van-cell>
      </van-dropdown-item>
    </van-dropdown-menu>

    <!-- 空状态 -->
    <van-empty
      class="custom-image"
      image="https://wap.365msmk.com/img/empty.0d284c2e.png"
      description="暂无收藏记录"
    />
  </div>
</template>
<script>
// 引入数据
import TitleBack from "../../../components/navTitle/TitleBack";
export default {
  components: {
    TitleBack,
  },
  data() {
    return {
      
      value: 0,
      option: ["单选", "多选", "判断", "连线"],
      ActiveNum: 0,
      show: true,
    };
  },
};
</script>
<style lang='scss' scoped>
.SpanActive span {
  color: red;
}
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
</style>