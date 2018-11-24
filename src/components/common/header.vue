<template>
	<div class="header">
		<div class="con" v-if="show">
			<div class="Top">
				<div class="topLeft" @click="login">登陆</div>
				<div class="topConter">
					<input type="text" value="搜索11111">
				</div>
				<div class="topBottom"></div>
			</div>
			<div class="Bottom"> 
				<ul>
					<li @click="goHome">推荐</li>
					<li v-for="(item,index) in navlist" :key="index" @click="goPage(item.categoryId)">{{item.name}}</li>
					<li>新品</li> 
				</ul>
			</div>
		</div>
		<div class="con1" v-if="hide">
			<div class="Top">
				<div class="topLeft" @click="login">登陆</div>
				<div class="topConter">
					<input type="text" value="搜索11111">
				</div>
				<div class="topBottom">购物车</div>
			</div>
			<div class="Bottom">
				<ul>
					<li>推荐</li>
					<li v-for="(item,index) in navlist" :key="index" @click="goPage(item.categoryId)">{{item.name}}</li>
					<!-- <li v-for="(item,index) in navlist" :key="index">{{item.name}}</li> -->
					<li>新品</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'Header',
		data(){
			return {
				navlist:[],
				show: true,
				hide: false
			}
		},
		methods: {
			getData(){
				//http://www.mei.com/appapi/silo/navigationAll/v3?timestamp=1542785877354&summary=5e8890f8255377421fe8af259848a500
				this.$axios.get('api/appapi/silo/navigationAll/v3')
					.then((res)=>{
						this.navlist = res.data.lists;
						// console.log(this.navlist);
					})
					.catch((err)=>{
						console.log(err);
					})
			},
			showHeader(){
				if(window.scrollY >= 88){
					this.show = false;
					this.hide = true;
				}
				else{
					this.show = true;
					this.hide = false;
				}
			},
			goPage(currentId){
				// 点击路由传参
				this.$router.push({
					name:'homeOverseas',
					params:{id: currentId}
				})
				console.log('点击');
			},
			goHome(){
				this.$router.push({path:'home'})
			},
			login(){
				this.$router.push({path: 'login'})
			}
		},
		created(){

			this.getData(),
			// this.showHeader();
			window.addEventListener('scroll',this.showHeader)

			// this.goPage()
		}
	}
</script>
<style lang="less" scoped>
	@import url('../../styles/main.less');
	
	.header{
		.con1{
			background: #fff;
			z-index: 900;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			width: 100%;
			.h(88);
			// background: rgba(0,0,0,0);
			.Top{
				height: 50%;
				width: 100%;
				.topLeft{
					width: 15%;
					height: 100%;
					float: left;
					.lh(44);
					text-align: center;
				}
				.topConter{
					width: 70%;
					height: 100%;
					float: left;
					input{
						background: #f5f5f5;
						.lh(34);
						.fs(14);
						.h(34);
						.w(255);
						.margin(6,0,0,4);
					}
				}
				.topBottom{
					width: 15%;
					height: 100%;
					float: left;
					.lh(44);
					text-align: center;
				}
			}
			.Bottom{
				height: 50%;
				width: 100%;
				ul{
					li{
						text-align: center;
						.lh(44);
						width: 12.5%;
						height: 100%;
						float: left;
					}
				}
			}
		}
		.con{
			z-index: 999;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			width: 100%;
			.h(88);
			color: #fff;
			background: rgba(0,0,0,0);
			.Top{
				height: 50%;
				width: 100%;
				.topLeft{
					width: 15%;
					height: 100%;
					float: left;
					.lh(44);
					text-align: center;
				}
				.topConter{
					width: 70%;
					height: 100%;
					float: left;
					// background: hsla(0,0%,100%,.3);
					input{
						background: hsla(0,0%,100%,.3);
						.lh(34);
						.fs(14);
						.h(34);
						.w(255);
						.margin(6,0,0,4);
					}
				}
				.topBottom{
					width: 15%;
					height: 100%;
					float: left;
					.lh(44);
					text-align: center;
				}
			}
			.Bottom{
				height: 50%;
				width: 100%;
				ul{
					li{
						text-align: center;
						.lh(44);
						width: 12.5%;
						height: 100%;
						float: left;
					}
				}
			}

		}
	}
</style>