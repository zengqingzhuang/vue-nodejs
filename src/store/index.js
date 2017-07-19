import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as state from './state';
import mutations from './mutations'
import organization from './modules/organization';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
	actions,
	getters,
	state,
	modules: {
		organization
	},
	mutations,
	strict: debug
});