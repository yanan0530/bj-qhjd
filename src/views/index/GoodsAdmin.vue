<template>
	<div>
		<el-button @click="add">添加</el-button>
		<el-input v-model="search" placeholder="输入关键字搜索" style=" float: right; width: 260px;" />
		<el-table :data="datas" height="500" border style="width: 100%;margin-top: 16px;" v-loading="loading">
			<el-table-column prop="id" label="Id">
			</el-table-column>
			<el-table-column prop="pinming" label="品名">
			</el-table-column>
			<el-table-column prop="mz" label="面值">
			</el-table-column>
			<el-table-column prop="nf" label="年份">
			</el-table-column>
			<el-table-column prop="gg" label="规格"></el-table-column>
			<el-table-column prop="jdpj" label="评级编号"></el-table-column>
			<el-table-column prop="pjbh" label="鉴定编号"></el-table-column>
			<el-table-column prop="isepq" label="EPQ" width="50">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="100">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
					<!-- <el-button type="text" size="small">编辑</el-button> -->
					<el-button type="text" size="small" @click="del(scope.row.id)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
		 :page-sizes="[10, 50, 100]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
		</el-pagination>
		<EGoods ref="save" :form="formData"></EGoods>
	</div>
</template>

<script>
	import {
		getGoodsListApi,
		delGoodApi
	} from "@/api"
	import EGoods from "@/components/dialog/EGoods.vue"
	export default {
		data() {
			return {
				tableData: [],
				formData: {},
				currentPage: 1,
				pageSize: 10,
				search: "",
				loading:true
			}
		},
		mounted() {
			this.loadTableData();
		},
		computed: {
			datas() {
				let a = this.currentPage * this.pageSize
				let b = a - this.pageSize
				console.info(this.search)
				if (this.search != "") {
					let data = this.tableData.filter(data => data.pjbh.includes(this.search))
					return data.slice(b, a)
				}
				return this.tableData.slice(b, a)
			}
		},
		methods: {
			loadTableData() {
				getGoodsListApi().then(res => {
					this.tableData = res
					this.loading=false
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
			},
			handleCurrentChange(val) {
				this.currentPage = val
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

			}
		},
		components: {
			EGoods
		},
	}
</script>
