<template>
	<el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
	 active-text-color="#ffd04b" :router='true' style="overflow: hidden;min-height: 100vh; max-height: 100% !important;">
		<el-menu-item index="1" :route="{name:'print'}">
			<i class="el-icon-menu"></i>
			<span slot="title">打印列表</span>
		</el-menu-item>
		<el-menu-item index="2" :route="{name:'user'}">
			<i class="el-icon-document"></i>
			<span slot="title">用户信息</span>
		</el-menu-item>
		<el-menu-item index="3" :route="{name:'repeat'}">
			<i class="el-icon-menu"></i>
			<span slot="title">重复产品</span>
		</el-menu-item>
		<el-menu-item index="4" :route="{name:'import'}">
			<i class="el-icon-menu"></i>
			<span slot="title">上传</span>
		</el-menu-item>
		<el-menu-item index="5" :route="{name:'cplist'}">
			<i class="el-icon-menu"></i>
			<span slot="title">藏品展示</span>
		</el-menu-item>
		<el-menu-item index="6" :route="{name:'print2'}">
			<i class="el-icon-menu"></i>
			<span slot="title">打印列表新</span>
		</el-menu-item>
		<el-menu-item index="7" :route="{name:'cplist2'}">
			<i class="el-icon-menu"></i>
			<span slot="title">藏品展示新</span>
		</el-menu-item>
		<el-menu-item index="8" :route="{name:'import2'}">
			<i class="el-icon-menu"></i>
			<span slot="title">上传 新</span>
		</el-menu-item>
	</el-menu>
</template>

<script>
	export default {

	}
</script>
