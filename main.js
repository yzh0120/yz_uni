// import Vue from 'vue'
// import App from './App'

// Vue.config.productionTip = false

// App.mpType = 'app'

// const app = new Vue({
//     ...App
// })
// app.$mount()

// main.js
import Vue from 'vue'
import App from './App'
import router from './router'
import { RouterMount } from 'uni-simple-router'

App.mpType = 'app' //会出现再 getApp().$options中

//ui
import uView from "uview-ui";
Vue.use(uView);

// import api from "@/axios/index"
import  index   from './utils/http/index.js'
Vue.prototype.$api = index

//全局mixin
// import mixinDemo from './add/mixin/mixinDemo.js'
// Vue.mixin(mixinDemo)

//vuex
import store from './utils/vuex/store.js'

//基础的自定义组件
import * as baseComponents from '@/components/index'
Object.keys(baseComponents).forEach(key => {
  Vue.use(baseComponents[key])
})


const app = new Vue({
	store,
	...App
})
//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,'#app');
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
