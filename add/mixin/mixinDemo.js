let whiteListName = ["pages/state/login", "pages/state/404", "pages/state/401"] //白名单

export default{
		onLoad(){
			console.log("onLoad")
		},
		onShow(){
			//#ifdef MP-WEIXIN
				if (uni.getStorageSync("token")) { //如果浏览器有token
					if (this.$Route.path === '/pages/state/login') { //如果去登录页 直接跳转首页
						
					} else { //有token 去非登录页 
						if(!this.$store.state.user.userInfo.username){//説明未登錄
								this.$api.demo.get_user({},{}).then((res)=>{
									this.$store.commit("user/userInfo_fn", res.data) //保存用户信息到 vuex
								})
				
						} else {
						
						}
					}
				} else { //如果没有token
				console.log(this.$Route.path,"this.$Route.path")
					if (whiteListName.includes(this.$Route.path)) { //白名单
						
					} else { //非白名单，跳转登录页
						// this.$Router.pushTab({path:`/pages/state/login`})
						uni.navigateTo({url:`/pages/state/login`})
						//next({path:`/pages/state/login`})//next({path:`/pages/state/login`,NAVTYPE: 'push'})//中断当前导航的afterEach,又进入一次路由守卫的beforeEach,等待 next()放行
					}
				}
			//#endif
		}
	}