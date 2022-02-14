<template>
	<div>
		<u-button type="primary" text="确定" @click="login"></u-button>
	</div>
</template>

<script>
	export default{
		methods:{
			login(){
				let	data={
						username:'system',
						password:"123456"
					}
				this.$api.demo.login(data).then((res)=>{
					uni.setStorageSync("token",res.token)
					this.$store.commit("user/userInfo_fn", res.data) //保存用户信息到 vuex
				})
			}
		}
	}
</script>

<style>
</style>
