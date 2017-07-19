import * as types from '../mutation-types';
import Vue from 'vue';

// 页面需要的数据
const state = {
	orgList: [],
	selectRow: '',
	pageTotal: 0,
	pageNumber: 1,
	pageSize: 10
}

// 页面调用的方法--mapGetters
const getters = {
	orgList: state => state.orgList,
	pageTotal: state => state.pageTotal,
	pageNumber: state => state.pageNumber,
	pageSize: state => state.pageSize,
	selectRow: state => state.selectRow
}

// 页面调用的事件,可异步可同步--mapActions
const actions = {
	queryList({commit, state}, data) {
		Vue.http.get('/organization/list.json', data).then((res) => {
			let result = res.data.data;
			let pageNumber = data.pageNumber;
			commit(types.GET_ORG_LIST, {result, pageNumber});
		}).catch((res) => {
			alert('接口异常');
		});	
	},
	onSelectRow({commit, state}, row) {
		commit(types.ON_SELECT_ROW, {row});
	}
}

// commit事件，同步，修改state中的数据必须调用mutations方法
const mutations = {
	[types.GET_ORG_LIST](state, {result, pageNumber}) {
		state.orgList = result.list;
		state.pageNumber = pageNumber;
		state.pageTotal = result.total;
	},
	[types.ON_SELECT_ROW](state, {row}) {
		state.selectRow = row;
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}