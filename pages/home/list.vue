<template>
	<div>
		<u-button type="primary" @click="delToken">删除token</u-button>
		<u-button type="primary" @click="goIndex">去首页</u-button>
		<u-button type="primary" @click="goFilter">筛选</u-button>
	</div>
</template>

<script>
	import mixinDemo from "@/add/mixin/mixinDemo.js"
	export default{
		mixins:[mixinDemo],
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
