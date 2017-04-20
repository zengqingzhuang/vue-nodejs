/**
 * @file 机构路由文件
 * @author dazhuang(zengqingzhuang@baidu.com)
 */
let express = require('express');
let router = express.Router();
let helpers = require('../helpers');
let log = require('../tools/log');
let orgModel = require('../models/organization');
router.get('/organization/list.:format', (req, res, next) => {
	//可以请求接口，如果报错直接走next(err);
	let condition = helpers.getRequestParams(req);
	log.error('异步接口:' + req.originalUrl, '传入参数:' + JSON.stringify(condition), '错误信息:' + JSON.stringify({
		errno: 101,
		message: 'id不能为空'
	}));
	orgModel.getOrgList(condition, (err, result) => {
		if (err) {
			return next(err);
		}
		res.json({
			status: 200,
			data: result
		});
	});
});
module.exports = router;