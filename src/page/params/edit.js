import uiDialog from 'components/uiDialog';
export default {
	data() {
		return {
			markDialog: 0
		}
	},
	created() {
		this.queryDetail();
	},
	methods: {
		queryDetail(page) {
			
		},
		/**
		 * 编辑
		 */
		btnSave(row) {
			this.markDialog = 1;
		},
		closeDialog() {
			this.markDialog = 0;	
		}
	},
	components: {
		uiDialog
	}
}