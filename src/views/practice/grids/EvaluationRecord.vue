<template>
  <div>
    <NavTitle></NavTitle>
    <van-dropdown-menu>
      <van-dropdown-item title="类型不限" v-model="value1">
        <template #default>
          <div>
            <p
              v-for="(item, index) in option1"
              :key="index"
              :class="
                value1 == item.value
                  ? 'waw_dropdown_box_active'
                  : 'waw_dropdown_box'
              "
              @click="onClick(item.value)"
            >
              {{ item.text }}
            </p>
          </div>
        </template>
      </van-dropdown-item>
      <van-dropdown-item title="时间" v-model="value2">
        <template #default>
          <div>
            <p
              v-for="(item, index) in option2"
              :key="index"
              :class="
                value2 == item.value
                  ? 'waw_dropdown_box_active'
                  : 'waw_dropdown_box'
              "
              @click="onClickTime(item.value)"
            >
              {{ item.text }}
            </p>
          </div>
        </template>
      </van-dropdown-item>
    </van-dropdown-menu>
    <!-- https://wap.365msmk.com/img/empty.0d284c2e.png -->
    <van-empty class="custom-image">
      <template #image>
        <div class="waw_empty_img">
          <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
        </div>
      </template>
      <template #description>
        <div>
          <p><small>该时段您没有留下测评记录哦！</small></p>
        </div>
      </template>
    </van-empty>
  </div>
</template>
<script>
import NavTitle from "../../../components/navTitle/TitleOnlyBack"; //引入导航子组件
export default {
  components: {
    NavTitle,
  },
  data() {
    return {
      value1: 1,
      value2: "a",
      option1: [
        { text: "全部", value: 1 },
        { text: "套卷练习", value: 2 },
        { text: "仿真模考", value: 3 },
        { text: "专点专练", value: 4 },
      ],
      option2: [
        { text: "全部", value: "a" },
        { text: "今天", value: "b" },
        { text: "7天", value: "c" },
      ],
    };
  },
  methods: {
    onClick(value) {
      this.value1 = value;
    },
    onClickTime(value) {
      this.value2 = value;
    },
  },
};
</script>
<style lang='scss' scoped>
.waw_dropdown_box {
  width: 100%;
  height: 2.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.waw_dropdown_box_active {
  color: orange;
  width: 100%;
  height: 2.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>