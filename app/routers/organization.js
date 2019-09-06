/**
 * @file 机构路由文件
 * @author dazhuang(zengqingzhuang@baidu.com)
 */
const express = require('express');
const router = express.Router();
const helpers = require('../helpers');
const log = require('../tools/log');
const orgModel = require('../models/organization');
router.get('/organization/list.:format', async (req, res, next) => {
	const condition = helpers.getRequestParams(req);
	try {
		const result = await orgModel.getOrgList(condition);
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
// demo router
router.get('/demo/list.:format', (req, res, next) => {
	res.json({
		status: 200
	});
});
module.exports = router;