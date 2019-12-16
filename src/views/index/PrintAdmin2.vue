<template>
	<div>
		<div style="margin-top: 20px;margin-bottom: 20px;">
			<el-form :inline="true" class="demo-form-inline">
				<el-form-item label="打印Id">
					<el-input v-model="idarray" type="Array" placeholder="请输入内容" style="width: 50vw !important;"></el-input>
					<el-button @click="print" style="margin-left: 5px;">打印</el-button>
				</el-form-item>
				<el-form-item label="打印Code">
					<el-input v-model="codearray" type="Array" placeholder="请输入内容" style="width: 50vw !important;"></el-input>
					<el-button @click="printNum" style="margin-left: 5px;">打印鉴定编号</el-button>
				</el-form-item>
				<el-form-item>
					<el-button @click="toggleSelection()">取消选择</el-button>
					<el-button @click="exportExcel">导出</el-button>
				</el-form-item>
			</el-form>
		</div>
		<el-table id="out-table" ref="multipleTable" border v-loading="loading" :data="tableData.list" tooltip-effect="dark"
		 @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55"></el-table-column>
			<el-table-column prop="spec" label="名称"></el-table-column>
			<el-table-column prop="goodsName" label="面值" width="100"></el-table-column>
			<el-table-column prop="year" label="年份" width="210"></el-table-column>
			<el-table-column prop="size" label="规格" width="180"></el-table-column>
			<el-table-column prop="talk" label="评级编号" width="80"></el-table-column>
			<el-table-column prop="num" label="鉴定编号" width="150"></el-table-column>
			<el-table-column prop="isepq" label="EPQ" width="50"></el-table-column>
			<el-table-column prop="printUrl" label="Url"></el-table-column>
		</el-table>
		<el-pagination @current-change="handleCurrentChange" @size-change="handleSizeChange" :page-sizes="[10, 20, 50, 100,200]"
		 :page-size="pageSize" :current-page="currentPage" style="float: right; margin-top: 8px;margin-bottom: 8px;" layout="total,sizes, prev, pager, next, jumper"
		 :total="tableData.total"></el-pagination>
		</el-pagination>
	</div>
</template>
<script>
	import {
		printList2
	} from "@/api"
	import FileSaver from 'file-saver'
	import XLSX from 'xlsx'
	export default {
		data() {
			return {
				tableData: [],
				multipleSelection: [],
				dialogVisible: false,
				idarray: "",
				loading: true,
				codearray: "",
				currentPage: 1,
				pageSize: 10,
			}
		},
		watch: {
			multipleSelection(newValue) {
				let arrays = new Array()
				for (var i = 0; i < newValue.length; i++) {
					arrays[i] = newValue[i].id
				}
				this.idarray = arrays + ""
			},
		},
		computed: {
			datas() {
				let a = this.currentPage * this.pageSize
				let b = a - this.pageSize
				return this.tableData.slice(b, a)
			}
		},
		mounted() {
			this.loadTableData()
		},
		methods: {
			loadTableData(pageNum = 1, pageSize = 10) {
				this.loading = true
				printList2(pageNum, pageSize).then(res => {
					this.tableData = res
					this.loading = false
				})
			},
			//取消选择
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			//打印
			print() {
				if (!!this.idarray) {
					var url = "http://admin.bj-qhjd.com/B/prints?ids=" + this.idarray;
					var wind = window.open(url, '打印',
						'height=400, width=400, top=100, left=100, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no'
					);
				}
			},
			printNum() {
				if (!!this.codearray) {
					var url = "http://admin.bj-qhjd.com/B/prints2?ids=" + this.codearray;
					var wind = window.open(url, '打印',
						'height=400, width=400, top=100, left=100, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no'
					);
				}
			},
			//导出
			exportExcel() {
				var wb = XLSX.utils.table_to_book(document.querySelector('#out-table'))
				var wbout = XLSX.write(wb, {
					bookType: 'xlsx',
					bookSST: true,
					type: 'array'
				})
				try {
					FileSaver.saveAs(new Blob([wbout], {
						type: 'application/octet-stream'
					}), 'sheetjs.xlsx')
				} catch (e) {
					if (typeof console !== 'undefined') console.log(e, wbout)
				}
				return wbout
			},
			handleSizeChange(val) {
				this.pageSize = val
				this.loadTableData(this.currentPage, val)
			},
			handleCurrentChange(val) {
				this.currentPage = val
				this.loadTableData(val, this.pageSize)
			},

		}
	}
</script>
