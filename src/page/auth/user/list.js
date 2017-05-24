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
			userList: [],
			columns: ['ID', '账号名称', '姓名', '手机号', '邮箱', '角色']
		}
	},
	created() {
		this.queryList();
	},
	methods: {
		queryList() {
			this.userList = [
				{
					ID: 1,
					accountName: 'zhangsan',
					Name: '张三',
					Mobile: '13999999999',
					Email: 'zhangsan@baidu.com',
					Role: 'RD'
				},
				{
					ID: 2,
					accountName: 'lisi',
					Name: '李四',
					Mobile: '13888888888',
					Email: 'lisi@baidu.com',
					Role: 'QA'
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