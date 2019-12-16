<template>
	<div>
		<el-button @click="add">添加</el-button>
		<el-input v-model="search" placeholder="输入关键字搜索" style=" float: right; width: 260px;" />
		<el-table :data="tableData.list" border style="width: 100%;margin-top: 16px;" v-loading="loading">
			<el-table-column prop="id" label="Id" width="100">
			</el-table-column>
			<el-table-column prop="pinming" label="品名">
			</el-table-column>
			<el-table-column prop="mz" label="面值" width="100">
			</el-table-column>
			<el-table-column prop="nf" label="年份" width="130">
			</el-table-column>
			<el-table-column prop="gg" label="规格" width="200"></el-table-column>
			<el-table-column prop="jdpj" label="评级编号" width="180"></el-table-column>
			<el-table-column prop="pjbh" label="鉴定编号" width="200"></el-table-column>
			<el-table-column prop="isepq" label="EPQ" width="50">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="150">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
					<el-button @click="changeTime(scope.row.id)" type="text" size="small">时间</el-button>
					<el-button type="text" size="small" @click="del(scope.row.id)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination @current-change="handleCurrentChange" @size-change="handleSizeChange" :page-sizes="[10, 20, 50, 100,200]"
		 :page-size="pageSize" :current-page="currentPage" style="float: right; margin-top: 8px;margin-bottom: 8px;" layout="total,sizes, prev, pager, next, jumper"
		 :total="tableData.total"></el-pagination>
		<EGoods ref="save" :form="formData"></EGoods>
		<e-time ref="times"></e-time>
	</div>
</template>

<script>
	import {
		getGoodsList2Api,
		delGoodApi,
		searchListGoodsApi
	} from "@/api"
	import EGoods from "@/components/dialog/EGoods.vue"
	import eTime from "@/components/dialog/ETime.vue"
	export default {
		watch: {
			search(newValue) {
				this.currentPage = 1
				this.pageSize = 10
				this.loadTableData(this.currentPage, this.pageSize, newValue);
			}
		},
		computed: {

		},
		data() {
			return {
				tableData: [],
				formData: {},
				currentPage: 1,
				pageSize: 10,
				search: "",
				loading: true,
			}
		},
		mounted() {
			this.loadTableData();
		},
		methods: {
			loadTableData(pageNum = 1, pageSize = 10, search = "") {
				this.loading = true
				getGoodsList2Api(pageNum, pageSize, search).then(res => {
					this.tableData = res
					this.loading = false
				})
			},
			handleClick(row) {
				this.$refs.save.dialogFormVisible = true
				row.typeid = row.typeid + ""
				row.pjbh = row.pjbh.replace(/[^0-9]/ig, "").toString();
				this.formData = row
			},
			handleSizeChange(val) {
				this.pageSize = val
				this.loadTableData(this.currentPage, val)
			},
			handleCurrentChange(val) {
				this.currentPage = val
				this.loadTableData(val, this.pageSize)
			},
			add() {
				this.$refs.save.dialogFormVisible = true
			},
			del(id) {
				this.$confirm('此操作将永久删除商品, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					delGoodApi({
						id
					}).then(res => {
						console.info(res)
						if (res) {
							this.loadTableData()
							this.$notify({
								title: '删除成功',
								type: 'success'
							});
						}
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});

			},
			changeTime(id) {
				this.$refs.times.id = id
				this.$refs.times.timeVisible = true
			}
		},
		components: {
			EGoods,
			eTime
		},
	}
</script>
