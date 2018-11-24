<template>
	<div>
		<Header></Header>
		<div class="overseas">
			<!-- --------------- -->
			<div class="overseasTop">
			<div class="overseasImg">
				<div class="imgbox" v-for="(item,index) in img" :key="index">
					<img class="img1"  :src="item.main_image">
					<div class="imgText" >
						<div class="fontsize"></div>
						<div></div>
					</div>
				</div>
			</div>
			<div>
				<img src="" alt="">
			</div>
			<div class="imgList" >
				<div class="title"></div>
				<div class="imgs" >
					<img src="" alt="">
					<div class="imgText">
						<p></p>
						<p></p>
						<p></p>
					</div>
				</div>
			</div>
			<div class="imgList" >
				<div class="title"></div>
				<div class="imgs" >
					<img src="" alt="">
					<div class="imgText">
						<p>{</p>
						<p></p>
						<p>}</p>
					</div>
				</div>
			</div>
			
		</div>
			<!-- ---------- -->
		</div>
	</div>
	
</template>
<script>
	import Header from '../../common/header.vue';
	export default{
		name: 'Overseas',
		components: {
			Header
  		},
		data(){return {
			img:[]
		}},
		methods:{
			getData(){
				var id=this.$route.params.id
				console.log(id);
				//http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000011&platform_code=PLATEFORM_H5
				this.$axios.get(`api//appapi/home/mktBannerApp/v3?silo_id=${id}&platform_code=PLATEFORM_H5`)
				.then((res)=>{
					console.log(res); 
					this.img = res.data.banners;
					// var banners = res.data.banners;
					// for(var i=0;i<banners.lenght){
					// 	if(banners.lenght<=1){

					// 	}
					// }
					console.log(1111111111,this.img);
				})
				.catch((err)=>{
					console.log(err);
				})
			}
		},
		created(){
			this.getData();
			// console.log(this.$router);
			// console.log(this.$route);
		}

	}
</script>
<style lang="less" scoped>
	@import url('../../../styles/main.less');
	.overseasTop{
		div{
			img{
				width: 100%;
			}
		}
		width: 100%;
		height: 100%;
		.overseasImg{
			.w(375);
			.h(450);
			.margin(0,0,10,0);
			.imgbox{
				position: relative;
				.w(375);
				.h(450);
				.img1{
					.w(375);
					.h(450);
				}	
				.imgText{
					.w(375);
					.h(82);
					position: absolute;
					left: 0;
					.top(350);
					.fontsize{
						.fs(18);
					}
					div{
						color: #000;
						text-align: center;
						.margin(10,0,0,0);
						.fs(12);
					}
				}
			}
		}
		.imgList{
			width: 100%;
			.title{
				.padding(32,0,20,16);
				.fs(18);
			}
			.imgs{
				.w(345);
				.margin(0,15,10,15);
				position: relative;
				.imgText{
					.padding(0,0,0,10);
					position: absolute;
					.top(130);
				}
			}
		}
	}
</style>
