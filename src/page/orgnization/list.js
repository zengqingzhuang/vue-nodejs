import uiTable from 'components/uiTable';
import uiDialog from 'components/uiDialog';
export default {
	data() {
		return {
			selectedRow: {},
			markDialog: 0, // 1-编辑弹窗 2-删除弹窗
			pageSize: 2,
			pageNumber: 0,
			pageTotal: 0,
			orgList: [],
			columns: ['序号', '机构名称', '创建时间', '金额']
		}
	},
	created() {
		this.queryList1();
	},
	methods: {
		queryList1(page) {
			this.$http.get('/organization/list.json', {}).then((res) => {
				let result = res.data.data || {};
				this.orgList = result.list;
				this.pageNumber = +page || 1;
				this.pageTotal = this.orgList.length;
			}).catch((res) => {
				alert('接口异常');
			});
		},
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
		},
		/**
		 * 删除当前行
		 */
		deleteCurRow() {
			this.closeDialog();
		},
		queryList(page) {
			this.queryList1(page);
		}
	},
	components: {
        uiTable,
        uiDialog
    }
}