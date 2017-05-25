import uiDialog from 'components/uiDialog';
export default {
	data() {
		return {
			selectedRow: {},
			addressList: [],
			markDialog: 0
		}
	},
	created() {
	},
	methods: {
		addSendAddress() {
			this.addressList.push(0);
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