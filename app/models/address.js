/**
 * @file 通知地址
 * @author dazhuang(zengqingzhuang@baidu.com)
 */
'use strict';
class addressModel {
	getAddressList(param, callback) {
		let data = {
			total: 50,
			list: [{
				corpid: 'zhangmen',
				address: 'www.baidu1.com',
				params: 'state'
			},{
				corpid: 'zhangmen',
				address: 'www.baidu2.com',
				params: 'state,money'
			},{
				corpid: 'zhangmen',
				address: 'www.baidu3.com',
				params: 'state'
			}, {
				corpid: 'vipabc',
				address: 'www.baidu.com',
				params: 'state,money'
			}]
		}
		callback(null, data);
	}
}
module.exports = new addressModel();