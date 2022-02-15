<script>
	const app = getApp()
	console.log(app.globalData,'app')
</script>
getApp() 函数用于获取当前应用实例，一般用于获取globalData 。

<1> 不要在定义于 App() 内的函数中，或调用 App 前调用 getApp() ，可以通过 this.$scope 获取对应的app实例
<2> 通过 getApp() 获取实例之后，不要私自调用生命周期函数。
<3> v3模式加速了首页nvue的启动速度，当在首页nvue中使用getApp()不一定可以获取真正的App对象。
对此v3版本提供了const app = getApp({allowDefault: true})用来获取原始的App对象，可以用来在首页对globalData等初始化