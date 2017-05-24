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
			addressList: [],
			columns: ['corpId', '通知地址', '推送参数']
		}
	},
	created() {
		this.queryList1(1);
	},
	methods: {
		queryList1(page) {
			this.$http.get('/address/list.json', {}).then((res) => {
				let result = res.data.data || {};
				this.addressList = result.list;
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