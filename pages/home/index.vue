<template>
	<page>

	</page>
</template>

<script>
export default {
	data() {
		return {
			showSex: false,
			model1: {
				userInfo: {
					name: 'uView UI',
					sex: '',
				},
			},
			actions: [{
				name: '男',
				},
				{
					name: '女',
				},
				{
					name: '保密',
				},
			],
			rules: {
				'userInfo.name': {
					type: 'string',
					required: true,
					message: '请填写姓名',
					trigger: ['blur', 'change']
				},
				'userInfo.sex': {
					type: 'string',
					max: 1,
					required: true,
					message: '请选择男或女',
					trigger: ['blur', 'change']
				},
			},
			radio: '',
			switchVal: false
		};
	},
	methods: {
		sexSelect(e) {
			this.model1.userInfo.sex = e.name
			this.$refs.form1.validateField('userInfo.sex')
		},
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