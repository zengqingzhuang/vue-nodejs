/**
 * @file 通知地址路由文件
 * @author dazhuang(zengqingzhuang@baidu.com)
 */
const express = require('express');
const router = express.Router();
const helpers = require('../helpers');
const log = require('../tools/log');
const addressModel = require('../models/address');
router.get('/address/list.:format', async (req, res, next) => {
	const condition = helpers.getRequestParams(req);
	try {
		const result = await addressModel.getAddressList(condition);
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