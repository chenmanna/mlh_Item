<template>
	<div class="header">
		<div class="headerImg">
			<div v-for="(item,index) in header_Img" :key="index" class="imgbox">
				<img class="img1"  :src="item.main_image">
				<div class="imgText" >
					<div class="fontsize">{{item.main_title}}</div>
					<div>{{item.sub_title}}</div>
				</div>
			</div> 
		</div>
		<div >
			<img :src="boonImg.img" alt="">
		</div>
		<div class="imgList" v-for="item in newGoods">
			<div class="title">{{item.name}}</div>
			<div class="imgs" v-for="(item,index) in item.events" :key="index" @click="getId(item.categoryId)">
				<img :src="item.imageUrl" alt="">
				<div class="imgText">
					<p>{{item.englishName}}</p>
					<p>{{item.chineseName}}</p>
					<p>{{item.discountText}}</p>
				</div>
			</div>
		</div>
		<div class="imgList" v-for="item in saleGoods">
			<div class="title">{{item.name}}</div>
			<div class="imgs" v-for="(item,index) in item.events" :key="index"  @click="getId(item.categoryId)">
				<!-- @click="getId(item.categoryId)" -->
				
				<img :src="item.imageUrl" alt="">
				<div class="imgText">
	<!-- 				<p>1111111111111</p>
					<p>{{item.categoryId}}</p> -->
					<p>{{item.englishName}} </p>
					<p>{{item.chineseName}}</p>
					<p>{{item.discountText}}</p>
				</div>
			</div>
		</div>
		
	</div>
	
</template>
<script>
	export default{
		name:'HeaderImg',
		data(){
			return {
				header_Img:[],
				boonImg: [],
				IMGLIST :[],
				newGoods:[],
				saleGoods:[]
			}
		},
		methods:{
			getImg(){
				// http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5
				this.$axios.get('api/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5')
				.then((res)=>{
					
					this.header_Img = res.data.banners;
					// console.log(res.data.banners);
				})
				.catch((err)=>{
					console.log(err);
				})
			}
			,
			boon(){
				// http://www.mei.com/appapi/home/newZoneEntrance/v3?credential=
				this.$axios.get('api/appapi/home/newZoneEntrance/v3?credential=')
				.then((res)=>{
					this.boonImg = res.data;
				})
				.catch((err)=>{
					console.log(err);
				})
			},
			getImgList(){
				//http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1542850918681&summary=47d491361eb8e11bb7ff2d6f3eef9eaf&platform_code=H5
				this.$axios.get('api/appapi/home/eventForH5?params=%7B%7D&timestamp=1542850918681&summary=47d491361eb8e11bb7ff2d6f3eef9eaf&platform_code=H5')
				.then((res)=>{
					console.log(res);
					this.IMGLIST = res.data.lists;
					for(var i=0;i<this.IMGLIST.length;i++){
						if(i==0){
							this.newGoods.push(this.IMGLIST[i]);
						}else if(i==1){
							this.saleGoods.push(this.IMGLIST[i]);
						}
					}
					console.log(this.newGoods);
				})
				.catch((err)=>{
					console.log(err);
				})
			},
			getId(currentId){
				this.$router.push({
					name:'goodslist',
					params:{
					id: currentId}
				})
					
				// this.$router.push({
				// 	name:'homeOverseas',
				// 	params:{id: currentId}
				// })
			}
			
		},
		created(){
			this.getImg();
			this.boon();
			this.getImgList();
			// this.getId();
		}
	}
</script>
<style lang="less" scoped>
	@import url('../../styles/main.less');
	.header{
		div{
			img{
				width: 100%;
			}
		}
		width: 100%;
		height: 100%;
		.headerImg{
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