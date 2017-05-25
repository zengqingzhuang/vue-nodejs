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
		if (this.$route.query.id) {
			this.queryDetail();	
		}
	},
	methods: {
		queryDetail() {
			this.selectedRow = {
				corpid: 'zhangmen',
				crmcorpid: 'zhangmen',
				name: '掌门',
				signKey: 'asdfas223d',
				signAddress: 'www.baidu.com',
				shNumber: 1
			}
			this.addressList = [
					{
						address: 'www.11111.com'
					},
					{
						address: 'www.22222.com'
					}
				]
		},
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