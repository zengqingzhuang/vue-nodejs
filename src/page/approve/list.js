import uiTable from 'components/uiTable';
import uiDialog from 'components/uiDialog';
export default {
	data() {
		return {
			selectedRow: '',
			markDialog: 0, // 1-编辑弹窗 2-删除弹窗
			pageSize: 5,
			pageNumber: 0,
			pageTotal: 0,
			orgList: [],
			columns: ['appId', 'crm-机构ID', '机构名称', '百度密钥', '机构密钥', '签名地址', '商户号', '创建时间', '修改时间', '状态']
		}
	},
	created() {
		this.queryList1(1);
	},
	methods: {
		queryList1(page) {
			this.orgList = [{
						corpid: 'zhangmen',
						crmcorpid: 'zhangmen',
						name: '掌门',
						signKey: '4x1tHXuV9j',
						signKey1: '4x1tHXuV9j',
						signAddress: 'www.baidu.com',
						shNumber: '1',
						createTime: '2015-03-06 10:58',
						updateTime: '2016-03-06 10:58',
						state: '审核中'
					}, {
						corpid: 'vipabc',
						crmcorpid: 'vipabc',
						name: 'vipabc',
						signKey: 'nUwWoK24pH',
						signKey1: '4x1tHXuV9j',
						signAddress: 'www.baidu.com',
						shNumber: '2',
						createTime: '2015-03-06 10:58',
						updateTime: '2016-03-06 10:58',
						state: '审核通过'
					}, {
						corpid: 'beifeng',
						crmcorpid: 'beifeng',
						name: '北风',
						signKey: 'NdmTX6VnWk',
						signKey1: '4x1tHXuV9j',
						signAddress: 'www.baidu.com',
						shNumber: '3',
						createTime: '2015-03-06 10:58',
						updateTime: '2016-03-06 10:58',
						state: '拒绝'
					}, {
						corpid: 'zhangmen',
						crmcorpid: 'zhangmen',
						name: '掌门',
						signKey: 'TKoirNdf0A',
						signKey1: '4x1tHXuV9j',
						signAddress: 'www.baidu.com',
						shNumber: '4',
						createTime: '2015-03-06 10:58',
						updateTime: '2016-03-06 10:58',
						state: '拒绝'
					}, {
						corpid: 'zhangmen',
						crmcorpid: 'zhangmen',
						name: '掌门',
						signKey: 'qCYYp0CMV8',
						signKey1: '4x1tHXuV9j',
						signAddress: 'www.baidu.com',
						shNumber: '5',
						createTime: '2015-03-06 10:58',
						updateTime: '2016-03-06 10:58',
						state: '审核中'
					}]
		},
		/**
		 * 审批
		 */
		approve() {
			if (!this.selectedRow) return;
			this.$router.push('/approve/compare?id=1');
		},
		refuse() {
			this.markDialog = 1;
		},
		queryList(page) {
			this.queryList1(page);
		},
		closeDialog() {
			this.markDialog = 0;
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