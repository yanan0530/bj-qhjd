<template>
	<div>
		<el-table :data="data" style="width: 100%">
			<el-table-column prop="userId" label="用户Id">
			</el-table-column>
			<el-table-column prop="userName" label="用户名称">
			</el-table-column>
			<el-table-column prop="userRealName" label="用户名称"></el-table-column>
			<el-table-column prop="userPhone" label="用户电话"></el-table-column>
			<el-table-column prop="userEmail" label="邮箱"></el-table-column>
		</el-table>
	</div>
</template>

<script>
	import {
		userList
	} from "@/api"
	export default {
		data() {
			return {
				data: []
			}
		},
		mounted() {
			userList().then(res => {
				this.data=res
			})
		}
	}
</script>