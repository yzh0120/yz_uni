<template>
	<div>
		<u-button type="primary" @click="delToken">删除token</u-button>
		<u-button type="primary" @click="goIndex">去首页</u-button>
		<u-button type="primary" @click="goFilter">筛选</u-button>
	</div>
</template>

<script>
	import mixin from "@/utils/mixin/mixin.js"
	export default{
		mixins:[
			//#ifdef MP-WEIXIN
			mixin
			//#endif
			],
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
			},
			goFilter(){
				this.$Router.push({
					path: '/pages/home/filter'
				})
			}
		}
	}
</script>

<style>
</style>
