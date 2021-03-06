/**
 * @file 机构model文件
 * @author dazhuang(zengqingzhuang@baidu.com)
 */
const request = require('../tools/request');
const api = require('../tools/api');
class orgModel {
	async getOrgList(param) {
		const http = new request({
			uri: api.getOrgList,
			data: {
				param
			}
		});
		await http.get();
		return {
			total: 50,
			list: [{
				corpid: 'zhangmen',
				crmcorpid: 'zhangmen',
				name: '掌门',
				signKey: '4x1tHXuV9j',
				signKey1: '4x1tHXuV9j',
				signAddress: 'www.baidu.com',
				shNumber: '1',
				createTime: '2015-03-06 10:58',
				updateTime: '2016-03-06 10:58',
				state: '已开启'
			}, {
				corpid: 'vipabc',
				crmcorpid: 'vipabc',
				name: 'vipabc',
				signKey: 'nUwWoK24pH',
				signKey1: 'nUwWoK24pH',
				signAddress: 'www.baidu.com',
				shNumber: '2',
				createTime: '2015-03-06 10:58',
				updateTime: '2016-03-06 10:58',
				state: '已开启'
			}, {
				corpid: 'beifeng',
				crmcorpid: 'beifeng',
				name: '北风',
				signKey: 'NdmTX6VnWk',
				signKey1: 'NdmTX6VnWk',
				signAddress: 'www.baidu.com',
				shNumber: '3',
				createTime: '2015-03-06 10:58',
				updateTime: '2016-03-06 10:58',
				state: '未开启'
			}, {
				corpid: 'zhangmen',
				crmcorpid: 'zhangmen',
				name: '掌门',
				signKey: 'TKoirNdf0A',
				signKey1: 'TKoirNdf0A',
				signAddress: 'www.baidu.com',
				shNumber: '4',
				createTime: '2015-03-06 10:58',
				updateTime: '2016-03-06 10:58',
				state: '未开启'
			}, {
				corpid: 'zhangmen',
				crmcorpid: 'zhangmen',
				name: '掌门',
				signKey: 'qCYYp0CMV8',
				signKey1: 'qCYYp0CMV8',
				signAddress: 'www.baidu.com',
				shNumber: '5',
				createTime: '2015-03-06 10:58',
				updateTime: '2016-03-06 10:58',
				state: '已开启'
			}]
		}
	}
}
module.exports = new orgModel();