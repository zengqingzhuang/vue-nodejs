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
			orgList: [],
			columns: ['分配corpId', 'crmcorpId', '机构名称', 'signKey', '签名地址', '商户号', '创建时间', '修改时间', '开启时间', '停用时间', '状态']
		}
	},
	created() {
		this.queryList1(1);
	},
	methods: {
		queryList1(page) {
			this.$http.get('/organization/list.json', {}).then((res) => {
				let result = res.data.data || {};
				this.orgList = result.list;
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
			this.$router.push('/orgnization/edit?id=1');
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