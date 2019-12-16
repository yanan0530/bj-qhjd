<template>
	<div>
		<el-table :data="tableData" style="width: 100%" v-loading="loading">
			<el-table-column prop="id" label="商品Id" width="180">
			</el-table-column>
			<el-table-column prop="num" label="编号">
			</el-table-column>
			<el-table-column prop="spec" label="名称" width="">
			</el-table-column>
			<el-table-column prop="year" label="年份" width="">
			</el-table-column>
			<el-table-column prop="isepq" label="EPQ" width="">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import {repeatListApi} from "@/api"
	export default {
		watch: {
			tableData(newValue, oldValue) {
				this.loading =false
			}
		},
		data() {
			return {
				tableData: [],
				loading:true
			}
		},
		async mounted(){
			this.tableData=await repeatListApi()
		}
	}
</script>

<style>
</style>
