/**
 * @file 通知地址路由文件
 * @author dazhuang(zengqingzhuang@baidu.com)
 */
const express = require('express');
const router = express.Router();
const helpers = require('../helpers');
const log = require('../tools/log');
const paramsModel = require('../models/params');
router.get('/params/list.:format', async (req, res, next) => {
	const condition = helpers.getRequestParams(req);
	try {
		const result = await paramsModel.getParamsList(condition);
		res.json({
			status: 0,
			data: result
		});
	} catch(err) {
		log.error('异步接口:' + req.originalUrl, '传入参数:' + JSON.stringify(condition), '错误信息:' + JSON.stringify(err));
		res.json({
			status: 1
		});
	}
});
module.exports = router;