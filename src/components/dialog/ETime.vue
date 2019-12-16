<template>
	<el-dialog title="藏品时间" :visible.sync="timeVisible">
		<el-form :label-width="formLabelWidth">
			<el-form-item label="时间">
				<el-date-picker v-model="time" type="date" placeholder="选择日期">
				</el-date-picker>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="timeVisible = false">取 消</el-button>
			<el-button type="primary" @click="submit">确 定</el-button>
		</div>
	</el-dialog>
</template>

<script>
	import {
		changeTimeByIdApi
	} from "@/api"
	export default {
		data() {
			return {
				timeVisible: false,
				formLabelWidth: '100px',
				time: "",
				id: ""
			}
		},
		watch: {
			timeVisible(newValue, oldValue) {
				if (!newValue) {
					this.time = ""
					this.id = ""
				}
			}
		},
		methods: {
			submit() {
				if (!!this.time) {
					let t = Date.parse(new Date(this.time)) / 1000
					changeTimeByIdApi(this.id, t).then(res => {
						if (res) {
							this.timeVisible = false
							this.$message({
								type: "success",
								message: "修改成功"
							})
						} else {
							this.$message({
								type: "error",
								message: "修改失败"
							})
						}
					})
				} else {
					this.$message({
						type: "error",
						message: "请填写时间"
					})
				}

			}
		},
	}
</script>
