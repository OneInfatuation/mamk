<template>
      <div>
      <div
        v-for="(item, index) in selectList"
        :key="index"
        class="searchMessage"
      >
        <div class="searchMessage_main">
          <p>
            <!-- 标题 -->
            <span style="color: black">{{ item.title }}</span>
          </p>
          <!-- 时间 -->
          <p>
            <img
              src="../../assets/curriculum/time.png"
              style="width: 0.8rem; height: 0.8rem"
            />
            {{ item.start_play_date | timefn }}
            {{ item.end_play_date | timefn }}
          </p>
          <!-- 老师 -->
          <div
            class="curriculum_list_content_name"
            v-for="(message, index) in item.teachers_list"
            :key="index"
          >
            <p
              style="
                display: inline-block;
                width: 2rem;
                height: 2rem;
                margin-right: 1rem;
              "
            >
              <img
                :src="message.teacher_avatar"
                width="100%"
                style="border-radius: 1rem"
              />
            </p>
            <p>{{ message.teacher_name }}</p>
          </div>
          <!-- 报名 -->
          <p class="newEnter">
            {{ item.browse_num }}人已报名
            <span class="free"
              ><img src="../../assets/jinbi.png" />{{ item.price }}</span
            >
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:{
        selectList:Array
    }
}
</script>

<style scoped>
.searchMessage {
  width: 100vw;
  height: 12rem;
  background: rgba(238, 238, 238, 0.842);
  border-top: 1px solid transparent;
}

.searchMessage_main {
  width: 94%;
  height: 11rem;
  margin: 0.5rem auto 0.5rem;
  background: white;
  border-top: 1px solid transparent;
}
.searchMessage_main p {
  width: 90%;
  margin: 0.2rem auto;
  color: lightgrey;
}

/* 数据 */
.curriculum_list_content_name {
  width: 100%;
  height: 4rem;
  margin: 3px 1.5rem;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
}
.free {
  float: right;
  color: green;
  font-size: 0.8rem;
}
.newEnter {
  padding-top: 1rem;
  border-top: 1px solid lightgrey;
}
</style>