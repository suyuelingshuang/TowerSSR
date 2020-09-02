<template>
  <div id="app">
    <div class="header">
      <router-view></router-view>
    </div>
    <div class="foot">
      <div class="foot-list">
        <router-link to="/home" class="foot-title">我的</router-link>
        <router-link to="/project" class="foot-title">项目</router-link>
        <router-link to="/dynamic" class="foot-title">动态</router-link>
        <router-link to="/notice" class="foot-title">通知</router-link>
        <router-link to="/team" class="foot-title">团队</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
