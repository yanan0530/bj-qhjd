<template>
	<el-container>
		<el-aside style="width: 200px !important;">
			<part-menu />
		</el-aside>
		<el-container>
			<el-main style="height: 100vh;">
				<bread-crumb/>
				<el-card class="box-card" style="margin-top: 50px;">
					<router-view />
				</el-card>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	
	import PartMenu from "@/components/parts/PartMenu.vue"
	import BreadCrumb from "@/components/BreadCrumb.vue"
	export default {
		components: {
			PartMenu,BreadCrumb
		},
		
	}
</script>
