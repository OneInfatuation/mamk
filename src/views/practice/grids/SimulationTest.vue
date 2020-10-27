<template>
  <div>
    <NavTitle></NavTitle>
    <van-dropdown-menu>
      <van-dropdown-item title="考试类型" v-model="value1">
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
      <van-dropdown-item title="考试状态" v-model="value2">
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
      <van-dropdown-item title="参考状态" v-model="value3">
        <template #default>
          <div>
            <p
              v-for="(item, index) in option3"
              :key="index"
              :class="
                value3 == item.value
                  ? 'waw_dropdown_box_active'
                  : 'waw_dropdown_box'
              "
              @click="onClickStatus(item.value)"
            >
              {{ item.text }}
            </p>
          </div>
        </template>
      </van-dropdown-item>
    </van-dropdown-menu>
     <van-empty class="custom-image">
      <template #image>
        <div class="waw_empty_img">
          <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
        </div>
      </template>
      <template #description>
        <div>
          <p><small>请稍等，模考正在赶来的路上啦</small></p>
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
      value1: 1,
      value2: "a",
      value3: "A",
      option1: [
        { text: "全部", value: 1 },
        { text: "模拟考试", value: 2 },
        { text: "正式考试", value: 3 },
      ],
      option2: [
        { text: "全部", value: "a" },
        { text: "未开始", value: "b" },
        { text: "进行中", value: "c" },
        { text: "已结束", value: "d" },
      ],
      option3: [
        { text: "全部", value: "A" },
        { text: "已做", value: "B" },
        { text: "未做", value: "C" },
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
    onClickStatus(value){
      this.value3 = value;
    }
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