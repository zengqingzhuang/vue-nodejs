import uiTable from 'components/uiTable';
import uiDialog from 'components/uiDialog';
export default {
	data() {
		return {
			selectedRow: '',
			selectedRowO: '',
			markDialog: 0, // 1-编辑弹窗 2-删除弹窗
			addressList: []
		}
	},
	created() {
		this.queryList1(1);
		this.selectedRow = {
			corpid: 'zhangmen',
			crmcorpid: 'zhangmen',
			name: '掌门',
			signAddress: 'www.111.com',
			shNumber: '1'
		}
		this.selectedRowO ={
			corpid: 'beifen',
			crmcorpid: 'beifen',
			name: '掌门',
			signAddress: 'www.222.com',
			shNumber: '1'
		}
	},
	methods: {
		queryList1(page) {
		},
		/**
		 * 审批
		 */
		approve() {
			if (!this.selectedRow) return;
			this.$router.push('/approve/compare?id=1');
		},
		btnOk() {
			this.markDialog = 1;
		},
		closeDialog() {
			this.markDialog = 0;
		},
		queryList(page) {
			this.queryList1(page);
		},
		onSelectRow(row) {
			this.selectedRow = row;
		}
	},
	components: {
        uiTable,
        uiDialog
    }
}