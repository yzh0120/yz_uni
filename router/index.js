import Vue from 'vue'
//这里仅示范npm安装方式的引入，其它方式引入请看最上面【安装】部分
import Router from 'uni-simple-router'

//vuex
import store from '@/add/vuex/store' 

//api
import  api   from '@/add/http/index.js'

Vue.use(Router)
//初始化
const router = new Router({
    routes:ROUTES //路由表
});

let whiteListName = ["pages/state/login", "pages/state/404", "pages/state/401"] //白名单

/* 
params: {}
path: "/pages/home/list"
query: {} 
 */
//全局路由前置守卫
router.beforeEach((to, from, next) => {
  // console.log(uni.getStorageSync("token"),"uni.getStorageSy")
  if (uni.getStorageSync("token")) { //如果浏览器有token

  	// if(true){
  	if (to.path === '/pages/login') { //如果去登录页 直接跳转首页
  		next({path: 'pages/home/index'})
  	} else { //有token 去非登录页 
  		if(!store.state.user.userInfo.username){//説明未登錄
				//token 在头部
				api.demo.get_user({token:uni.getStorageSync("token")},{}).then((res)=>{
					store.commit("user/userInfo_fn", res.data) //保存用户信息到 vuex
					next(`/pages/home/index`)
				})

  		} else {
  			next()//放行
  		}
  	}
  } else { //如果没有token
  	if (whiteListName.indexOf(to.name) !== -1) { //白名单
  		next()//放行
  	} else { //非白名单，跳转登录页
  		next(`/pages/state/login`)//中断当前导航的afterEach,又进入一次路由守卫的beforeEach,等待 next()放行
  	}
  }
  
})
// 全局路由后置守卫
// router.afterEach((to, from) => {
// })
export default router;