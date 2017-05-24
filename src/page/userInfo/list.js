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
			columns: ['BID', '手机号', '姓名', '邮箱']
		}
	},
	methods: {
		queryList() {
			this.userList = [
				{
					BID: '1111',
					Mobile: '13888888888',
					Name: '张三',
					Email: '222222@qq.com'
				}
			]
		}
	},
	components: {
        uiTable
    }
}