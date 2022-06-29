<template>
	<div>
		<u-button type="primary" @click="delToken">删除token</u-button>
		<u-button type="primary" @click="goIndex">去首页</u-button>
	</div>
</template>

<script>
	export default{
		onLoad(){
			
		},
		methods:{
			delToken(){
				uni.removeStorageSync("token")
			},
			goIndex(){
				this.$Router.pushTab({
					path: '/pages/home/index'
				})
			}
		}
	}
</script>

<style>
</style>
