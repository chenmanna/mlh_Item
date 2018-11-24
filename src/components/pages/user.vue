<template>
	<div class="user">
		<div class="con"></div>
	</div>
</template>
<script>
	export default{
		name: 'User',
		methods:{
			getCookie(){
				document.querySelector('.con').innerHTML = document.cookie;
			}
		},
		mounted(){
			this.getCookie();
		}
	}
</script>