import uiTable from 'components/uiTable';
export default {
	data() {
		return {
			selectedRow: {},
			markDialog: 0, // 1-编辑弹窗 2-删除弹窗
			pageSize: 5,
			pageNumber: 0,
			pageTotal: 0,
			userList: [],
			columns: ['课程ID', '课程名称', '商户编码', '门店ID']
		}
	},
	methods: {
		queryList() {
			this.userList = [
				{
					ID: '1',
					courseName: '语文课',
					sh: 'sh1',
					store: 'mendian1'
				},
				{
					ID: '2',
					courseName: '数学课',
					sh: 'sh2',
					store: 'mendian2'
				},
				{
					ID: '3',
					courseName: '英语课',
					sh: 'sh3',
					store: 'mendian3'
				}
			]
		}
	},
	components: {
        uiTable
    }
}