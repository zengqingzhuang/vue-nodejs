/**
 * @file 机构model文件
 * @author dazhuang(zengqingzhuang@baidu.com)
 */
'use strict';
class orgModel {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	getOrgList(param, callback) {
		//调用接口查询数据
		let data = {
			people: 100,
			list: [{
				number: 1,
				name: '时尚',
				createTime: '2015-03-06 10:58',
				money: 10000000
			}, {
				number: 2,
				name: '掌门',
				createTime: '2015-03-06 10:58',
				money: 10000000
			}]
		}
		callback(null, data);
	}
}
module.exports = new orgModel();