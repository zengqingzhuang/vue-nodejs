//公共方法 -- 页面dispatch调用
import * as types from './mutation-types';

export const getPublicData = ({commit}, {}) => {
	commit(types.GET_PUBLIC_DATA, {});
}