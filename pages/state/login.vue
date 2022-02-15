<template>
	<div class="box" :style="{width:windowWidth + `px`,height:windowHeight+ `px`}">
		<div class="login">
			<u--form labelPosition="left" :model="userInfo"  ref="form1">

				<u-form-item label="姓名" borderBottom prop="username" >
					<u--input v-model="userInfo.username" border="none"></u--input>
				</u-form-item>
				
				
				
				<u-form-item label="密码" borderBottom prop="password" >
					<u--input v-model="userInfo.password" border="none" password></u--input>
				</u-form-item>
			</u--form>
			<u-button @click="submit" type="primary">提交</u-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {

			return {
				
				userInfo: {
					username: '',
					password: '',
				},
				
				windowHeight: 0,
				windowWidth: 0
			}
		},
		mounted() {
			this.$refs.form1.setRules({
				username: [
									{
										required: true,
										message: '请输入姓名',
										trigger: ['blur', 'change']
									}
								]
			})
			let self = this
			uni.getSystemInfo({
				success: function(res) {
					self.windowWidth = res.windowWidth
					self.windowHeight = res.windowHeight
				}
			});
		},
		methods:{
			submit(){
				this.$api.demo.login(this.userInfo).then((res)=>{
					uni.setStorageSync("token",res.token)
					this.$store.commit("user/userInfo_fn", res.data) //保存用户信息到 vuex
					this.$Router.push({
						path: '/pages/home/index'
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.box {
		background-image: url(../../static/loginBG.jpg);
		background-size: 100% 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.login {
			padding:20rpx;
			width: 80%;
			background-color: white;
			
		}
	}
</style>


<!-- 
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
 
 -->
