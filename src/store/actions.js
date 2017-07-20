//公共方法 -- 页面dispatch调用
import * as types from './mutation-types';

// 设置命名空间名称
export const setNameSpace = ({commit}, name) => {
	commit(types.SET_NAME_SPACE, name);
}