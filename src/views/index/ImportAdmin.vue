<template>
	<div>
		<el-upload class="upload-demo" :action="url" multiple :file-list="fileList" :before-upload="beforeAvatarUpload"
		 :on-success="success">
			<el-button size="small" type="primary" icon="el-icon-picture-outline">点击上传图片</el-button>
		</el-upload>
		<el-upload class="upload-demo" :action="uploadEurl" :on-success="successE" multiple :file-list="fileList" style="margin-top: 30px;">
			<el-button size="small" type="primary" icon="el-icon-folder-add">上传表格</el-button>
		</el-upload>
		<div v-if="this.tableData.length != 0">
			<el-button size="small" type="primary" @click="upList">提交</el-button>
		</div>
		<el-table :data="tableData" style="width: 100%" v-if="this.tableData.length != 0">
			<el-table-column prop="id" label="Id" width="50">
			</el-table-column>
			<el-table-column prop="typeid" label="栏目Id" width="100">
			</el-table-column>
			<el-table-column prop="pinming" label="标题">
			</el-table-column>
			<el-table-column prop="mz" label="面值">
			</el-table-column>
			<el-table-column prop="nf" label="年份">
			</el-table-column>
			<el-table-column prop="gg" label="冠字编号">
			</el-table-column>
			<el-table-column prop="jdpj" label="鉴定评级">
			</el-table-column>
			<el-table-column prop="pjbh" label="评级编号">
			</el-table-column>
			<el-table-column prop="isepq" label="EPQ" width="50">
			</el-table-column>
			<el-table-column prop="articlemain" label="内容">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import {
		uploadApi,
		upListApi,
		inspectpjbhApi
	} from "@/api"
	import baseUrl from "@/api/env.js"
	export default {
		data() {
			return {
				fileList: [],
				tableData: [],
				btnShow: true,
			};
		},
		computed: {
			url() {
				return `${baseUrl}/uploadImage`;
			},
			uploadEurl() {
				return `${baseUrl}/upload`;
			}
		},
		methods: {
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				return isJPG
			},
			success(response, file, fileList) {
				if (response) {
					this.$notify({
						title: '成功',
						message: `图片${file.name}上传成功`,
						type: 'success'
					});
				} else {
					this.$notify({
						title: '失败',
						message: `图片${file.name}上传成功`,
						type: 'error'
					});
				}
			},
			successE(response, file, fileList) {
				if (response) {
					this.tableData = response
					this.btnShow = true
				}
			},
			upList() {
				this.btnShow = false
				const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});

				upListApi(this.tableData).then(res => {
					if (res) {
						loading.close();
						this.$notify({
							title: '成功',
							message: `批量添加成功`,
							type: 'success'
						});
					}
				})
			},
		}
	}
</script>

<style>
</style>
