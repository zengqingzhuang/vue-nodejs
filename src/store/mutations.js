// 修改公共state数据文件
import * as types from './mutation-types';

export default {
	[types.GET_PUBLIC_DATA](state, {}) {
		state.publicData = {};
	}
}