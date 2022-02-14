





// 全局请求路径，也就是后端的请求基准路径
const BASE_URL = 'http://localhost:880'


//暴露
export async function post(url, data = {}, other = {}) {
	let finnally_url = BASE_URL + url;
    if (other.tip) { //因为会触发catch，所以有tip的请求 必须判断 err 是不是 cancel ，		
		let res = await uni.showModal({
			title:"提示",
			content:other.tip,
			confirmText:"确定",
			cancelText:"取消"
		})
		if(res[1].confirm){
			return api('POST', finnally_url, data, other)
		}else{
			return Promise.reject("cancel")
		}
		
        

    } else {
        return api('POST', finnally_url, data, other)
    }
}

export async function get(url, data = {}, other = {}) {
	let finnally_url = BASE_URL + url;
    if (other.tip) { //因为会触发catch，所以有tip的请求 必须判断 err 是不是 cancel ，		
		await uni.showModal({
			title:"提示",
			content:other.tip,
			confirmText:"确定",
			cancelText:"取消"
		})
		
        return api('GET', finnally_url, data, other)

    } else {
        return api('GET', finnally_url, data, other)
    }
}




// 封装请求方法
const api = (method,url,data,other={})=>{
	let {
	    load={text:"加载中..."},//加载对象 , 每次都会使用这个对象 所以必须有默认值,默认的text 是 "正在加载中"
	    code = {}
	} = other
	let {successCode = 200, needSuccessCode = true } = code
	
	// 加载操作
	toggleLoading(load, true)
	
	
	// 请求头默认参数
	let header = {
		'Content-Type' : "application/json; charset=utf-8",
		"Authorization" : "Bearer " + uni.getStorageSync('token')
	}
	header = Object.assign(header,data.header)
	
	return new Promise((resolve,reject)=>{
		uni.request({
			url:url,                 // 传入的url地址
			method: method,         //请求方法 默认post
			data: data || {},                 // 请求数据可填可不填 默认空对象
			header,                                   //头部
			// timeout
			success: (res)=>{
				if (needSuccessCode &&  successCode != res.data.code) {//判断自定义code是否相同
					uni.showToast({
						title:res.data.info,
						duration: 3 * 1000
					})
				    reject(res.data)
				}else{
					resolve(res.data)//之所以不返回 res.data.data  是防止在页面中使用了res.data.!data
				}
			},
			fail: (err)=>{
				reject(err)
			},
			// 完成之后关闭加载效果
			complete:()=>{
				// uni.hideLoading();//关闭显示
				toggleLoading(load, false)
			}
		})
	})
}

function toggleLoading(load, val){
	if(load && load.no){
		return ;
	}
	if (load && load.obj) {//例如table的loading
	    load.loading = load.loading ? load.loading : 'loading'
	    load.obj[load.loading] = val
	}else{//整块main区域加载
		if(val){
			uni.showLoading({
				title: load.text,
				mask: true,
			});
		}else{
			uni.hideLoading();//关闭显示
		}
		
	}
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

 
 
 
 