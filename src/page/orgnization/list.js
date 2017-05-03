import uiTable from 'components/uiTable';
import uiDialog from 'components/uiDialog';
export default {
	data() {
		return {
			selectedRow: {},
			markDialog: 0, // 1-编辑弹窗 2-删除弹窗
			orgList: [],
			columns: ['序号', '机构名称', '创建时间', '金额']
		}
	},
	created() {
		this.$http.get('/organization/list.json', {}).then((res) => {
			let result = res.data.data || {};
			this.orgList = result.list;
		}).catch((res) => {
			alert('接口异常');
		});
	},
	methods: {
		/**
		 * 新增
		 */
		addRow() {

		},
		/**
		 * 编辑
		 */
		updateRow(row) {
			if (!row) return;
			Object.assign(this.selectedRow, row);
			this.markDialog = 1;
		},
		/**
		 * 删除
		 */
		deleteRow(row) {
			this.markDialog = 2;
		},
		/**
		 * 关闭弹窗
		 */
		closeDialog() {
			this.markDialog = 0;
		},
		/**
		 * 保存
		 */
		btnSave() {
			console.log(this.selectedRow)
		}
	},
	components: {
        uiTable,
        uiDialog
    }
}