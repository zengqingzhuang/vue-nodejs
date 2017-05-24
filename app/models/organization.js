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
					total: 50,
					list: [{
						corpid: 'zhangmen',
						name: '掌门',
						signKey: '4x1tHXuV9j',
						signAddress: 'www.baidu.com',
						shNumber: '1',
						createTime: '2015-03-06 10:58',
						updateTime: '2016-03-06 10:58',
						startTime: '2015-03-06 10:58',
						stopTime: '2015-03-06 10:58',
						state: '已开启'
					}, {
						corpid: 'vipabc',
						name: 'vipabc',
						signKey: 'nUwWoK24pH',
						signAddress: 'www.baidu.com',
						shNumber: '2',
						createTime: '2015-03-06 10:58',
						updateTime: '2016-03-06 10:58',
						startTime: '2015-03-06 10:58',
						stopTime: '',
						state: '已开启'
					}, {
						corpid: 'beifeng',
						name: '北风',
						signKey: 'NdmTX6VnWk',
						signAddress: 'www.baidu.com',
						shNumber: '3',
						createTime: '2015-03-06 10:58',
						updateTime: '2016-03-06 10:58',
						startTime: '2015-03-06 10:58',
						stopTime: '',
						state: '已停用'
					}, {
						corpid: 'zhangmen',
						name: '掌门',
						signKey: 'TKoirNdf0A',
						signAddress: 'www.baidu.com',
						shNumber: '4',
						createTime: '2015-03-06 10:58',
						updateTime: '2016-03-06 10:58',
						startTime: '2015-03-06 10:58',
						stopTime: '2015-03-06 10:58',
						state: '已停用'
					}, {
						corpid: 'zhangmen',
						name: '掌门',
						signKey: 'qCYYp0CMV8',
						signAddress: 'www.baidu.com',
						shNumber: '5',
						createTime: '2015-03-06 10:58',
						updateTime: '2016-03-06 10:58',
						startTime: '2015-03-06 10:58',
						stopTime: '2015-03-06 10:58',
						state: '已开启'
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