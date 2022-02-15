<template>
	<div>
		index
		<!-- <u-button type="primary" text="确定" @click="login"></u-button> -->
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
			// login(){
			// 	let	data={
			// 			username:'system',
			// 			password:"123456"
			// 		}
			// 	this.$api.demo.login(data).then((res)=>{
					
			// 	})
			// }
			
			login(){
				let other = {
				  code: {
				    successCode: 300,
				  },
				};
				this.$api.demo.notTwoHundred({}, other).then(
				  (res) => {
				    // this.$message.success(JSON.stringify(res));
							uni.showToast({
							    title: JSON.stringify(res),
							    duration: 2000,
								mask:true
							})
				  },
				  (err) => {
				    // this.$message.error(JSON.stringify(err));
							uni.showToast({
							    title: "错了",
							    duration: 2000,
								mask:true
							})
				  }
				);
			}
			
			// login(){
			// 	let other = {
			// 	  tip: "确认?",
			// 	};
			// 	//点击取消 会 执行第二个函数, 因为会触发catch，所以有tip的请求 必须判断 err 是不是 cancel
			// 	this.$api.demo.twoHundred({}, other).then(
			// 	  (res) => {
			// 		uni.showToast({
			// 		    title: JSON.stringify(res),
			// 		    duration: 2000,
			// 			mask:true
			// 		})
					
			// 	  },
			// 	  (err) => {
			// 	    if (err == "cancel") {
					  
			// 		  uni.showToast({
			// 		      title: "用户点击了取消按钮",
			// 		      duration: 2000,
			// 		  	mask:true
			// 		  })
			// 	    } else {
			// 	      uni.showToast({
			// 	          title: JSON.stringify(err),
			// 	          duration: 2000,
			// 	      	mask:true
			// 	      })
			// 	    }
			// 	  }
			// 	);
			// }
		}
	}
</script>

<style>
</style>
