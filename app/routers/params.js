/**
 * @file 通知地址路由文件
 * @author dazhuang(zengqingzhuang@baidu.com)
 */
let express = require('express');
let router = express.Router();
let helpers = require('../helpers');
let log = require('../tools/log');
let paramsModel = require('../models/params');
router.get('/params/list.:format', (req, res, next) => {
	let condition = helpers.getRequestParams(req);
	paramsModel.getParamsList(condition, (err, result) => {
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
module.exports = router;