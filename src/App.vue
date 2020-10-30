<template>
  <div id="app">
    <router-view></router-view>
    <Drag></Drag>
  </div>
</template>

<script>
import Drag from "./components/drag/WebDrag"; //拖拽
export default {
  name: "app",
  components: {
    Drag,
  },
  watch:{
    $route(to){
      if(to.meta.navTitle){
        document.title=to.meta.navTitle
      } else{
        document.title="每时每课"
      }
      
    }
  }
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

body {
  font-size: 16px;
}
</style>