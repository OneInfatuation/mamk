<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
}
body{
  font-size: 16px;
}
#app{
  margin-bottom: 0.5rem;
}
</style>
