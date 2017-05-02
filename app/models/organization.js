/**
 * @file 机构model文件
 * @author dazhuang(zengqingzhuang@baidu.com)
 */
'use strict';
let request = require('../tools/request');
let api = require('../tools/api');
class orgModel {
	getOrgList(param, callback) {
		let http = new request({
			uri: api.getOrgList,
			data: {
				id: 1
			}
		});
		http.get()
			.then((ret) => {
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
					}, {
						number: 3,
						name: '火箭',
						createTime: '2017-04-06 10:58',
						money: 23423423
					}]
				}
				callback(null, data);
			})
			.catch(function(err) {
				callback(err);
			})
	}
}
module.exports = new orgModel();