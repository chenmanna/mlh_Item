<template>
	<div class="home">
		<Header></Header>
		<HeaderImg></HeaderImg>
	</div>
</template>
<script>
	import Header from '../../common/header.vue';
	import HeaderImg from '../../common/headerImg.vue';

	export default{ 
		name:'Home',
		components: {
			Header,
			HeaderImg
  		},
  		methods:{	                   
  		}
	}
</script>
<style lang="less" scoped>
	// @import url('../../styles/main.less');
	.home{
		height: 3000px;
	}
</style>