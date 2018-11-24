<!-- html模板块 -------------------->
<template>
  <div id="app">
  	<!-- <Header></Header> -->
    <!-- 引入路由 -->
    <router-view></router-view>
  </div>
</template>
<!-- js操作--------------------- -->
<script>
// import Header from './components/common/header.vue'
export default {
  name: 'App', 
  components: {
  	// Header
  }
}
</script>
<!-- css样式--------------------- -->
<style>
</style>
