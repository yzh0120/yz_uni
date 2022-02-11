<template>
	<div>
		index
		<u-button type="primary" text="确定"></u-button>
	</div>
</template>

<script>
	export default{
		onShow(){
			this.$Router.pushTab(
				{ path: '/pages/home/list', query: { plan: 'private' }}
			)
		}
	}
</script>

<style>
</style>
