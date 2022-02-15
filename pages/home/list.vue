<template>
	<div>
		<u-button type="primary" @click="delToken">删除token</u-button>
	</div>
</template>

<script>
	export default{
		methods:{
			delToken(){
				uni.removeStorageSync("token")
			},
		}
	}
</script>

<style>
</style>
