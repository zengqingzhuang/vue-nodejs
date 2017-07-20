// 修改公共state数据文件
import * as types from './mutation-types';

export default {
	[types.SET_NAME_SPACE](state, name) {
		state.namespace = name;
	}
}