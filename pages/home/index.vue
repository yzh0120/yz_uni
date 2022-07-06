<template>
	<page>
		
	</page>
</template>

<script>
	import mixinDemo from "@/utils/mixin/mixinDemo.js"
export default {
	mixins:[
		//#ifdef MP-WEIXIN
		mixinDemo
		//#endif
		],
	data(){
		return {
			
		}
	},
	
	methods: {
		
	},
};
</script>

<!-- 
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
 -->