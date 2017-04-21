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
	let condition = helpers.getRequestParams(req);
	orgModel.getOrgList(condition, (err, result) => {
		if (err) {
			log.error('异步接口:' + req.originalUrl, '传入参数:' + JSON.stringify(condition), '错误信息:' + JSON.stringify(err));
			return next(err);
		}
		res.json({
			status: 200,
			data: result
		});
	});
});
// demo router
router.get('/demo/list.:format', (req, res, next) => {
	res.json({
		status: 20000
	});
});
module.exports = router;