<template>
  <div>
    <NavTitle></NavTitle>
    <van-dropdown-menu>
      <van-dropdown-item title="套卷分类" v-model="value1">
        <template #default>
          <div>
            <van-row>
              <van-col span="6">
                <van-sidebar v-model="activeKey">
                  <van-sidebar-item
                    v-for="(item, index) in option1"
                    :key="index"
                    :title="item.text"
                  />
                </van-sidebar>
              </van-col>
              <van-col span="18"></van-col>
            </van-row>
          </div>
        </template>
      </van-dropdown-item>
      <van-dropdown-item title="套卷状态" v-model="value2">
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
          <p><small>请稍等，套卷正在赶来的路上啦</small></p>
        </div>
      </template>
    </van-empty>
  </div>
</template>
<script>
import NavTitle from "../../../components/navTitle/TitleBack";
export default {
  components: {
    NavTitle,
  },
  data() {
    return {
      activeKey: 1,
      value1: 1,
      value2: "a",
      option1: [
        { text: "全部", value: 0 },
        { text: "中考真题", value: 1 },
        { text: "化学", value: 2 },
        { text: "英语", value: 3 },
      ],
      option2: [
        { text: "全部", value: "a" },
        { text: "已做", value: "b" },
        { text: "未做", value: "c" },
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