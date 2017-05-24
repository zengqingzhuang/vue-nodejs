import uiTable from 'components/uiTable';
import uiDialog from 'components/uiDialog';
export default {
	data() {
		return {
			selectedRow: {},
			markDialog: 0, // 1-删除弹窗
			pageSize: 5,
			pageNumber: 0,
			pageTotal: 0,
			paramsList: [],
			columns: ['分类', '推送参数']
		}
	},
	created() {
		this.queryList1(1);
	},
	methods: {
		queryList1(page) {
			this.$http.get('/params/list.json', {}).then((res) => {
				let result = res.data.data || {};
				this.paramsList = result.list;
				this.pageNumber = page;
				this.pageTotal = result.total;
			}).catch((res) => {
				alert('接口异常');
			});
		},
		/**
		 * 新增
		 */
		addRow() {
			location.href = '/#/params/add';
		},
		/**
		 * 编辑
		 */
		updateRow(row) {
			if (!row) return;
			location.href = '/#/params/edit?id=' + 1;
		},
		/**
		 * 删除
		 */
		deleteRow(row) {
			this.markDialog = 1;
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