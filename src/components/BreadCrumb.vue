<template>
	<el-breadcrumb separator-class="el-icon-arrow-right">
		<el-breadcrumb-item v-for="(item,index) in data" :key="index" :to="{name:item.name}">{{item.meta.title}}</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script>
	export default{
		data() {
			return {
				data: [],
			}
		},
		watch: {
			$route: 'get'
		},
		mounted() {
			this.get();
		},
		methods: {
			get() {
				this.data=this.$route.matched
			}
		},
	}
</script>

<style>
</style>
