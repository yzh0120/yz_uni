const home = [
	{
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
      path: '/pages/home/index',
      aliasPath:'/',  //对于h5端你必须在首页加上aliasPath并设置为/
      name: 'tab-index',
        meta: {
	        title: '首页',
	    },
    },
    {
	    path: '/pages/home/list',
        name: 'tab-list',
        meta: {
	        title: '列表',
	    },
	},
	{
	    path: '/pages/state/login',
	    name: 'login',
	    meta: {
	        title: '登录',
	    },
	},
]
export default home