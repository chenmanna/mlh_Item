<template>
	<div class="login">
		<div v-show="showLogin">
			<div class="close">
				<span @click="Close">&times;</span>
			</div>
			<div class="info">
				<div class="loginUser"> 
					<p class="text">登陆/注册</p>
					<p>注册即送2600元新人红包</p>
					<div>
						<input type="text" placeholder="账号" class="user">
						<br>
						<p>
							<input type="text" class="num"></input>验证码:<span class="code" @click="randomNum">11</span>
						</p>
						<input type="button" value="登陆" @click="setUser">
					</div>
					
					<span @click="show">切换密码登陆</span>
				</div>
				<div class="pay">
					<a href="">淘</a>
					<a href="">支</a>
					<a href="">微博</a>
				</div>
			</div>
		</div>
		<!-- ========================= -->
		<div v-show="hideLogin">
			<div class="close">
				<span>&times;</span>
			</div>
			<div class="info">
				<div class="loginUser"> 
					<p class="text">账号密码登陆</p>
					<p>注册即送2600元新人红包</p>
					<div>
						<input type="text" placeholder="账号" class="user">
						<input type="text" placeholder="密码" class="password">
						<br>
						<p>
							<input type="text" class="num"></input>验证码:<span class="code" @click="randomNum">11</span>
						</p>
						<input type="button" value="登陆" @click="setUser">
					</div>
					
					<span class="left" @click="show">通过验证登陆</span>
					<span>忘记密码</span>
				</div>
				<div class="pay">
					<a href="">淘</a>
					<a href="">支</a>
					<a href="">微博</a>
				</div>
			</div>
		</div>
		<!-- ======================== -->
	</div>
</template>
<script>
	export default{
		name: 'login',
		data(){
			return{
				showLogin: true,
				hideLogin: false, 
				userinfo: ''
			}
		},
		methods:{
			number(){
				document.querySelector('.code').innerHTML = parseInt(Math.random()*1000);
			},
			show(){
				
				this.showLogin =! this.showLogin;
				// this.number();

				this.hideLogin =! this.hideLogin;
				// parent.location.reload();
				// this.number();
			},
			// 随机验证码
			randomNum(){
				var number = parseInt(Math.random()*1000);
				document.querySelector('.code').innerHTML = number;
			},
			
			// 信息存入cookie
			setUser(){
				this.userinfo = document.querySelector('.user').value;
				if(this.userinfo && (document.querySelector('.num').value==document.querySelector('.code').innerHTML)){
					document.cookie = 'user=' + this.userinfo;
					this.$router.push({path:'home'}); 
				}else{
					alert('信息不正确');
				}
			},
			Close(){
				this.$router.push({path:'home'});
			}
			
		},
		mounted(){

			this.number();
		}
	}
</script>
<style lang="less" scoped>
@import url('../../styles/main.less');
.user{
	border: 1px solid #ccc;
	margin-bottom: 0;
}
.login{
	width: 100%;
	height: 100%;
	.close{
		.h(60);
		width: 100%;
		text-align: right;
		span{
			display: block;
			// .lh(60);
			.h(50);
			.w(50);
			text-align: center;
			float: right;
			.padding(0,15,0,15);
			.fs(36);
		}
	}
	.info{
		height: 100%;
		width: 100%;
		.padding(0,35,0,30);
		.loginUser{
			.fs(12);
			.left{
				display: inline-block;
				.margin(0,180,0,0);
			}
			.text{
				.fs(18);
			}
			p{
				.padding(0,0,10,0);
			}
			div{
				.padding(80,0,0,0);
				p{
					.h(30);
					span{
						.lh(30);
						.padding(8,20,8,20);
					}
					.num{
						.h(25);
						.w(50);
						border: 1px solid #ccc;
					}
				}
				input{
					.w(295);
					.h(60);
					.margin(0,0,8,0);
					.padding(0,0,0,10);
					box-shadow: #ccc 1px 1px 1px 1px ;
				}
			}
		}
		.pay{
			.margin(80,0,0,0);
			a{
				color: #000;
				.fs(24);
				.padding(6,20,6,20);
			}
		}
		
	}

}
	
</style>