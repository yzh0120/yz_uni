<template>
	<div>
		index
		<u-button type="primary" text="确定" @click="login"></u-button>
	</div>
</template>

<script>
	export default{
		// onShow(){
		// 	this.$Router.pushTab(
		// 		{ path: '/pages/home/list', query: { plan: 'private' }}
		// 	)
		// },
		methods:{
			login(){
				let	data={
						username:'system',
						password:"123456"
					}
				this.$api.demo.login(data).then((res)=>{console.log(res)})
			}
		}
	}
</script>

<style>
</style>
