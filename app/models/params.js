/**
 * @file 推送参数
 * @author dazhuang(zengqingzhuang@baidu.com)
 */
'use strict';
class paramsModel {
	getParamsList(param, callback) {
		let data = {
			total: 50,
			list: [{
				className: 'A分类',
				params: 'state'
			},{
				className: 'B分类',
				params: 'state,money'
			},{
				className: 'B分类',
				params: 'state,money,time'
			}]
		}
		callback(null, data);
	}
}
module.exports = new paramsModel();