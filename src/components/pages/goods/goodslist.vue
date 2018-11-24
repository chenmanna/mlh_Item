<template>
	<div class="Goods">
		<div class="goodslist">
			<div>
				<div class="top">
					<div>
						<i class="fa fa-arrow-left" aria-hidden="true"></i>返回
					</div>
					<input class="top_c" :value="goodsdata.eventName"></input>
					<div class="more" @click="user">...
						<div class="userinfo" v-show="showuser">
							<p @click="home">首页</p>
							<p>购物袋</p>
							<p @click="isLogin">个人中心</p>
						</div>
					</div>
				</div>
				<div class="bottom">
					<ul>
						<li>人气</li>
						<li>折扣</li>
						<li>价格</li>
						<li>筛选</li>
					</ul>
				</div>
			</div>
			<div class="list">
				<ul>
					<div>全场满888包邮</div>
					<li v-for="(item,index) in goodsdata.products" :key="index">
						<div class="imgBox">
							<img :src="item.imageUrl" alt="">
						</div>
						
						<p><span>{{item.tagListDto.tag}}</span><span></span></p>
						<p>{{item.brandName}}</p>
						<p>{{item.productName}}</p>
						<p>{{item.price}}</p>
					</li>
					
				</ul>
				<!-- <div>没有更多数据了</div> -->
			</div>	
		</div>
		<div class="toCar_Top" v-if="show">
			<div>购物车</div>
			<div class="toTop" @click="toTop">顶部</div>
		</div>
	</div>
	
</template>
<script>
	export default{
		name: 'Goodslist',
		data(){
			return {
				goodsdata:[],
				show: false,
				showuser: false
			}
		},
		methods:{
			getData(){
				
				var currentId = this.$route.params.id;
				//http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=2040204090000005946&key=&sort=&timestamp=1542886384526&summary=d49195b2deadaddc4cb16d80c9cbe7d2&platform_code=H5
				this.$axios.get(`api/appapi/event/product/v3?pageIndex=1&categoryId=${currentId}&key=&sort=&timestamp=1542886384526&summary=d49195b2deadaddc4cb16d80c9cbe7d2&platform_code=H5`)// &key=&sort=&timestamp=1542886384526&summary=d49195b2deadaddc4cb16d80c9cbe7d2&platform_code=H5
				.then((res)=>{
					console.log(res);
					console.log(res.data);
					this.goodsdata = res.data;
				})
				.catch((err)=>{
					console.log(err);
				})
			},
			// 返回顶部
			toTop(){
				window.scrollTo(0,0);
			},
			// 显示隐藏图标
			showBox(){
				if(window.scrollY>=200){
					// console.log(11111);
					this.show = true;
				}else{
					// console.log(222222);
					this.show = false;
				}
			},
			user(){
				this.showuser =!this.showuser;
			},
			home(){
				this.$router.push({path: 'home'})
			},
			isLogin(){
				if(document.cookie.length>0){
					this.$router.push({path: 'user'});
				}else{
					this.$router.push({path: 'login'});
				}
			}
		},
		created(){
			this.getData();
			window.addEventListener('scroll',this.showBox)
		}
	}
</script>
<style lang="less" scoped>
	@import url('../../../styles/main.less');
	.Goods .goodslist div .top .more{
		position: relative;
	 .userinfo{
			position: absolute;
			.top(44);
			.w(80);
			.h(120);
			right: 0;
			border: 1px solid #ccc;
			background: #ccc
		}
	}
	.Goods{
		position: relative;
		height: 100%;
		.goodslist{		
			div{
				.top{
					.h(44);
					width: 100%;
					text-align: center;
					.lh(44);
					div{
						.w(51);
						height: 100%;
						float: left;
					}
					.top_c{
						.w(265);
						float: left;
						text-align: center;
						.lh(44);
						.fs(16);
					}
				}
				.bottom{
					width: 100%;
					.h(40);
					ul{
						.margin(0,0,30,0);
						li{
							text-align: center;
							.lh(40);
							width: 25%;
							height: 100%;
							float: left;
						}
					}
					div{
						text-align: center;
					}
				}
			}
			.list{
				ul{
					width: 100%;
					div{
						.padding(25,15,0,18);
					}
					li{
						width: 49%;
						float: left;

						.imgBox{
							.padding(25,15,0,18);
							.w(155);
							.h(130);
							img{
								.w(100);
								.h(140);
							}
						}
						p{
							.padding(5,15,0,18);
						}
					}
				}
			}
			
		}
		.toCar_Top{ 
			.w(45);
			height: 100%;
			position: fixed;
			.top(530);
			.right(20);
			div{
				width: 100%;
				border: 1px solid #ccc;
				border-radius: 50%;
				.h(45);
				.margin(0,0,15,0);
				i{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	
	
</style>