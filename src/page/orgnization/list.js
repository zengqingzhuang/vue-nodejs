import uiTable from 'components/uiTable';
import uiDialog from 'components/uiDialog';
import {mapGetters, mapActions} from 'Vuex';
export default {
	data() {
		return {
			scene: 0, // 场景
			state: 0, // 状态
			markDialog: 0, // 1-编辑弹窗 2-删除弹窗
			columns: ['appId', 'crm-机构ID', '机构名称', '百度密钥', '机构密钥', '签名地址', '商户号', '创建时间', '修改时间', '状态']
		}
	},
	created() {
		this.$store.dispatch('setNameSpace', 'organization');
		this.queryList({
			pageSize: 5,
			pageNumber: 1
		});
	},
	computed: {
		...mapGetters('organization/', {
	    	orgList: 'orgList',
	    	pageSize: 'pageSize',
	    	pageNumber: 'pageNumber',
	    	pageTotal: 'pageTotal',
	    	selectRow: 'selectRow'
		})
	},
	methods: {
		...mapActions('organization/', {
			queryList: 'queryList',
			selectList: 'selectList'
		}),
		/**
		 * 查询
		 * @return {[type]} [description]
		 */
		searchList() {
			this.queryList({
				pageSize: this.pageSize,
				pageNumber: this.pageNumber,
				scene: this.scene,
				state: this.state
			});
		},
		/**
		 * 编辑
		 */
		updateRow(row) {
			if (!this.selectRow) return;
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
			console.log(this.selectRow)
		},
		openRow() {
			this.markDialog = 3;
		},
		stopRow() {
			this.markDialog = 4;
		},
		/**
		 * 删除当前行
		 */
		deleteCurRow() {
			this.closeDialog();
		}
	},
	components: {
        uiTable,
        uiDialog
    }
}