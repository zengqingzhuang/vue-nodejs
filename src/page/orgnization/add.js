import uiDialog from 'components/uiDialog';
export default {
	data() {
		return {
			selectedRow: {},
			addressList: [0],
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
		},
		redirect() {
			this.markDialog = 0;
			window.open('http://www.baidu.com');
		}
	},
	components: {
		uiDialog
	}
}