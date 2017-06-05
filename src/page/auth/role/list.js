import uiTable from 'components/uiTable';
import uiDialog from 'components/uiDialog';
export default {
	data() {
		return {
			selectedRow: '',
			curRow: {},
			markDialog: 0, // 1-编辑弹窗 2-删除弹窗
			pageSize: 5,
			pageNumber: 0,
			pageTotal: 0,
			roleList: [],
			columns: ['角色编码', '角色名称', '场景']
		}
	},
	created() {
		this.queryList();
	},
	methods: {
		queryList() {
			this.roleList = [
				{
					Code: 'RD',
					Name: '研发工程师',
					CJ: '教育',
				},
				{
					Code: 'QA',
					Name: '测试工程师',
					CJ: '教育'
				},
				{
					Code: 'edu-PM',
					Name: '教育产品经理',
					CJ: '教育'
				},
				{
					Code: 'zf-PM',
					Name: '租房产品经理',
					CJ: '租房'
				}
			]
		},
		/**
		 * 新增
		 */
		addRow() {
			this.selectedRow = '';
			this.markDialog = 1;
		},
		/**
		 * 编辑
		 */
		updateRow() {
			this.selectedRow = this.curRow;
			if (!this.selectedRow) return;
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
		onSelectRow(row) {
			this.selectedRow = row;
			this.curRow = row;
		}
	},
	components: {
        uiTable,
        uiDialog
    }
}