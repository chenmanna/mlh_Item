// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 引入axios（发起请求）== 
import Axios from 'axios' 
// axios 挂载到vue的实例上 这样他的拓展实例  组件也有$axios
Vue.prototype.$axios = Axios

// 安装less，引入全局配置的样式==
import './styles/main.less'

// 引入路由==
import router from './router'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
