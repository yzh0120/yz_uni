  

  const modulesFilesFn = require.context('./api', true, /\.js$/)//modulesFilesFn 是一个函数
  
  const modules = modulesFilesFn.keys().reduce((preRes, currentItem) => {
    const moduleNameString = currentItem.replace(/^\.\/(.*)\.\w+$/, '$1')//.replace(/^\.\/(.*)\.\w+$/, '$1') 是剥去了./ 和 .js,只剩下文件名
    const ES6module = modulesFilesFn(currentItem)//返回一个文件的暴露的modules
    preRes[moduleNameString] = ES6module // 这里是 export default才会有default,如果是export  就没有default了
    return preRes
  }, {})
  
	// let obj ={}
	// for(let keys of Object.keys(modules)){
	// 	obj = Object.assign({},modules[keys])
	// }
  
  
  
  export default modules