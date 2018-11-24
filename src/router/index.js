// 路由文件的基本配置

import Vue from 'vue'
import VueRouter from 'vue-router';

 // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
 Vue.use(VueRouter)

import Home  from '../components/pages/home/home.vue'
import Header  from '../components/common/header.vue'
import HeaderImg  from '../components/common/headerImg.vue'
import Overseas  from '../components/pages/home/homeOverseas.vue'  
import Goodslist  from '../components/pages/goods/goodslist.vue'
import Login  from '../components/pages/login.vue'
import User  from '../components/pages/User.vue'


// const routes = [ 
// 			// 重新定义进入的页面，检测/进入的页面为/home
// 	{ path: '/',redirect: '/home'},//重定向，页面访问不用加home可以直接进入
//   	{ path: '/home', component: Home ,name:'home'}
//   	// { path: '/header', component: Header  ,name:'header' }
// ]
// const router = new VueRouter({
//   routes // (缩写) 相当于 routes: routes
  
// })

const router = new VueRouter({
  routes:[
   			// 重新定义进入的页面，检测/进入的页面为/home
	 { path: '/',redirect: '/home'},//重定向，页面访问不用加home可以直接进入
  	{ path: '/home', component: Home ,name:'home'},
  	{ path: '/header', component: Header ,name:'header'},
  	{ path: '/headerImg', component: HeaderImg ,name:'headerImg'},
  	{ path: '/homeOverseas', component: Overseas  ,name:'homeOverseas' },
  	{ path: '/goodslist', component: Goodslist  ,name:'goodslist' },
  	{ path: '/login', component: Login  ,name:'login' },
  	{ path: '/user', component: User  ,name:'user' }


  ]
})


export default router