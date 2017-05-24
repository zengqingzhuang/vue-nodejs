import uiTable from 'components/uiTable';
import uiDialog from 'components/uiDialog';
export default {
	data() {
		return {
			selectedRow: {},
			markDialog: 0, // 1-编辑弹窗 2-删除弹窗
			pageSize: 5,
			pageNumber: 0,
			pageTotal: 0,
			roleList: [],
			columns: ['ID', '角色编码', '角色名称']
		}
	},
	created() {
		this.queryList();
	},
	methods: {
		queryList() {
			this.roleList = [
				{
					ID: 1,
					Code: 'RD',
					Name: '研发工程师'
				},
				{
					ID: 2,
					Code: 'QA',
					Name: '测试工程师'
				},
				{
					ID: 3,
					Code: 'PM',
					Name: '产品经理'
				},
				{
					ID: 4,
					Code: 'OP',
					Name: '运维工程师'
				}
			]
		},
		/**
		 * 新增
		 */
		addRow() {
			this.selectedRow = {};
			this.markDialog = 1;
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
		}
	},
	components: {
        uiTable,
        uiDialog
    }
}