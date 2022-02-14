const TransformPages = require('uni-read-pages')
const {webpack} = new TransformPages()
module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					const tfPages = new TransformPages({
						includes: ['path', 'name', 'meta']
					});
					return JSON.stringify(tfPages.routes)
				}, true )
			})
		],
		resolve = { //配置别名和默认后缀
			// extensions: ['.js', '.json', '.vue'], //配置文件后缀 import demo from "index", 如果没有.js 就找.json ,然后.vue
			alias: { //配置解析别名,resolve遇到某一个参数是/开头就不会拼接绝对路径
				'@': path.resolve(__dirname, './src'),
				// '@components': path.resolve(__dirname, './src/components'),
			}
	},
	
}