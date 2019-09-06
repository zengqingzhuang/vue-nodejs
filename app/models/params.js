/**
 * @file 推送参数
 * @author dazhuang(zengqingzhuang@baidu.com)
 */
class paramsModel {
	getParamsList(param) {
		return {
			total: 50,
			list: [{
				className: 'A分类',
				params: 'state'
			},{
				className: 'B分类',
				params: 'state,money'
			},{
				className: 'C分类',
				params: 'state,money,time'
			}]
		}
	}
}
module.exports = new paramsModel();