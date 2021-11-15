<template>
  <div id="app">
    <!--  路由占位符  -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {}
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body, #app {
  height: 100vh;
  font-size: 100%;
  color: #434343;
}
</style>
