<template>
	<page>
		<HM-filterDropdown 
			:menuTop="100" 
			:filterData="filterData" 
			:defaultSelected="defaultSelected"
			:updateMenuName="true" 
			@confirm="confirm" 
			dataFormat="Object">
		</HM-filterDropdown>
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
	data() {
		return {
			defaultSelected:[],
			filterData:[
				{
					"name":'样式1',
					"type": 'hierarchy-column',
					"submenu": [{
							"name": '全部分类',
							"value": "全部分类",
							"submenu": [{
								"name": "全部分类",
								"value": "全部分类"
							}, ]
						},
						{
							"name": '美食',
							"value": "美食",
							"submenu": [{
						"name": "全部美食",
						"value": "全部美食"
					},
					{
						"name": "快餐小吃",
						"value": "快餐小吃",
						"submenu": [{
							"name": "中式快餐",
							"value": "中式快餐"
						}, {
							"name": "西式快餐",
							"value": "西式快餐"
						}, {
							"name": "熟食",
							"value": "熟食"
						}, {
							"name": "面馆面食",
							"value": "面馆面食"
						}, {
							"name": "地方小吃",
							"value": "地方小吃"
						}, {
							"name": "米粉米线",
							"value": "米粉米线"
						}, {
							"name": "粥",
							"value": "粥"
						}, {
							"name": "汤",
							"value": "汤"
						}, {
							"name": "麻辣烫",
							"value": "麻辣烫"
						}, {
							"name": "素食轻餐",
							"value": "素食轻餐"
						}]
					},]
						}
					]
				},
				{
					"name":'样式2',
					"type": 'hierarchy',
					"submenu":[
							{
								"name": '全部分类',
								"value": "全部分类",
								"submenu": [{
									"name": "全部分类",
									"value": "全部分类"
								}, ]
							},
							{
								"name": '美食',
								"value": "美食",
								"submenu":[
										{
											"name": "全部美食",
											"value": "全部美食"
										},
										{
											"name": "休闲茶饮",
											"value": "休闲茶饮",
											"submenu": [{
												"name": "奶茶",
												"value": "奶茶"
											}, {
												"name": "果汁饮品",
												"value": "果汁饮品"
											}]
										},
								]
							}
					]
				},
				{
					name:'附近',
					"type": 'hierarchy',
					"submenu": [{
							"name": '附近',
							"value": "附近",
							"submenu": [
				
							]
						},
						{
							"name": '热门商圈',
							"value": "热门商圈",
							"submenu": [{
									"name": "全部商圈",
									"value": "全部商圈"
								},
								{
									"name": "燕岭/五山",
									"value": "燕岭/五山"
								},
								{
									"name": "天河城/体育中心",
									"value": "天河城/体育中心"
								}
							]
						},
						{
							"name": '天河区',
							"value": "天河区",
							"submenu": [{
									"name": "全部",
									"value": "全部"
								},
								{
									"name": "燕岭/五山",
									"value": "燕岭/五山"
								},
								{
									"name": "天河城/体育中心",
									"value": "天河城/体育中心"
								},

							]
						},
					]
				},
				{
					"name":'多选',
					"type": 'filter',
					"submenu":[{
							"name": "优惠",
							"submenu":[
								{
										"name": "满减活动",
										"value": "满减活动"
								},{
								"name": "打折优惠",
								"value": "打折优惠"
								},
							]
						},
						{
							"name": "服务",
							"submenu":[
								{
										"name": "满减活动",
										"value": "满减活动"
								},{
								"name": "打折优惠",
								"value": "打折优惠"
								},
							]
						}
					]
				},
				{
					"name":'单选',
					"type": 'radio',
					"submenu":[{
						"name": "优惠",
						"submenu":[
								{
										"name": "满减活动",
										"value": "满减活动"
								},{
								"name": "打折优惠",
								"value": "打折优惠"
								},
							]
						},
						{
							"name": "服务",
							"submenu":[
								{
										"name": "满减活动",
										"value": "满减活动"
								},{
								"name": "打折优惠",
								"value": "打折优惠"
								},
							]
						}
					]
				}
			],
		};
	},
	
	methods: {
		confirm(e) {
			// this.indexArr = e.index;
			// this.valueArr = e.value;
			console.log(e)
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