<template>
	<el-dialog title="藏品信息" :visible.sync="dialogFormVisible">
		<el-form :model="form">
			<el-form-item label="标题" :label-width="formLabelWidth">
				<el-input v-model="form.pinming" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="栏目" :label-width="formLabelWidth">
				<el-select v-model="form.typeid" placeholder="请选择栏目">
					<el-option label="纸币" value="7"></el-option>
					<el-option label="银元" value="8"></el-option>
					<el-option label="邮票" value="9"></el-option>
					<el-option label="古代币" value="10"></el-option>
					<el-option label="金银纪念币" value="11"></el-option>
					<el-option label="纪念币" value="36"></el-option>
					<el-option label="不显示" value="35"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="面值" :label-width="formLabelWidth">
				<el-input v-model="form.mz" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="年份" :label-width="formLabelWidth">
				<el-input v-model="form.nf" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="规格" :label-width="formLabelWidth">
				<el-input v-model="form.gg" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="鉴定评级" :label-width="formLabelWidth">
				<el-input v-model="form.jdpj" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="评级编号" :label-width="formLabelWidth">
				<el-input v-model="form.pjbh" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="EPQ" :label-width="formLabelWidth">
				<el-radio-group v-model="form.isepq">
					<el-radio label="0">隐藏</el-radio>
					<el-radio label="1">显示</el-radio>
				</el-radio-group>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="dialogFormVisible = false">取 消</el-button>
			<el-button type="primary" @click="submit">确 定</el-button>

		</div>
	</el-dialog>
</template>

<script>
	import {
		saveGood
	} from "@/api"
	export default {
		props: {
			form: {
				type: Object,
				default: {
					id: 0,
					pinming: "",
					typeid: "",
					mz: "",

				}
			},
		},
		data() {
			return {
				dialogFormVisible: false,
				formLabelWidth: '120px',
			}
		},
		watch: {
			dialogFormVisible(newValue, oldValue) {
				if (newValue) {
					console.info(this.form)
				}
			}
		},
		mounted() {
			console.info(this.form)
		},
		methods: {
			submit() {
				this.dialogFormVisible = false
				this.form.typeid = parseInt(this.form.typeid);
				saveGood(this.form).then(res => {
					if (res) {
						this.$parent.loadTableData()
						this.$notify({
							title: '操作成功',
							type: 'success'
						});
						this.form = {
							id: 0,
							pinming: "",
							typeid: "",
							mz: "",
						}
					}
				})
			}
		},
	}
</script>
