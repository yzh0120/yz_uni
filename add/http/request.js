





// 全局请求路径，也就是后端的请求基准路径
const BASE_URL = 'http://localhost:880'

// 封装请求方法，并向外暴露该方法
export const api = (options)=>{
	// 请求头默认参数
	let header = {
		'Content-Type' : "application/json; charset=utf-8",
		"Authorization" : "Bearer " + uni.getStorageSync('token')
	}
	header = Object.assign(header,options.header)
	
	// 显示加载中 效果
	uni.showLoading({
		title: "加载中",
		mask: true,
	});
	
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,                 // 传入的url地址
			method: options.method || 'GET',         //请求方法 默认post
			data: options.data || {},                 // 请求数据可填可不填 默认空对象
			header,                                   //头部
			// timeout
			success: (res)=>{
				if(res.statusCode !== 200){//如果后台返回的不是 200,则...
					statusCodeHandler(res.statusCode)
					reject(err)
				}else{
					resolve(res)
				} 
			},
			fail: (err)=>{
				reject(err)
			},
			// 完成之后关闭加载效果
			complete:()=>{
				uni.hideLoading();//关闭显示
			}
		})
	})
}


function statusCodeHandler(code){
	let message;
	            switch (code) {
	                case 400:
	                    message = '错误请求'
	                    break;
	                case 401:
	                    message = '未授权，请重新登录';
						uni.removeStorageSync('token');//删除token
						uni.showModal({
						    title: '提示',
						    content: '未授权，请重新登录',
							showCancel:false,
						    success: function (res) {
						        uni.navigateTo({
						        	// url : '/pages/index/two?id=navigateTo'
						        })
						    }
						});
	                    // MessageBox.alert("未授权，请重新登录", "提示", {
	                    //     confirmButtonText: '确定',
	                    //     callback: action => {
	                    //         Cookies.remove('userToken');
	                    //         router.push({
	                    //             name: 'Login'
	                    //         });
	                    //         window.location.reload();
	                    //     }
	                    // })
	                    break;
	                case 403:
	                    message = '拒绝访问'
	                    break;
	                case 404:
	                    message = '请求错误,未找到该资源'
	                    break;
	                case 405:
	                    message = '请求方法未允许'
	                    break;
	                case 408:
	                    message = '请求超时'
	                    break;
	                case 500:
	                    message = '服务器端出错'
	                    break;
	                case 501:
	                    message = '网络未实现'
	                    break;
	                case 502:
	                    message = '网络错误'
	                    break;
	                case 503:
	                    message = '服务不可用'
	                    break;
	                case 504:
	                    message = '网络超时'
	                    break;
	                case 505:
	                    message = 'http版本不支持该请求'
	                    break;
	                default:
	                    message = `连接错误${err.response.status}`
	            }
	
	        uni.showToast({
	            title: message,
	            duration: 2000
	        });
}


/* 
this.$request(obj).then(
				res => {
					console.log(res.data.data,'res')
				},
				err=>{
					console.log(res,'err')
				}) 
 
 */

 
 
 
 