<template>
  <div id="app">
    <router-view></router-view>
    <div class="email" @click="gotoEmail">
      <img src="./assets/curriculum/youjian.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  methods: {
    gotoEmail() {
      this.$router.push("/emails");
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
#app {
  margin-bottom: 2.5rem;
}
body {
  font-size: 16px;
}
.email {
  width: 30px;
  height: 30px;
  background: blue;
  border-radius: 50px;
  line-height: 40px;
  position: fixed;
  bottom: 7rem;
  right: 0.2rem;
  text-align: center;
}
.email img {
  width: 20px;
  height: 20px;
}
</style>