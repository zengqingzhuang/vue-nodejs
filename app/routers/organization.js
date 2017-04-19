/**
 * @file 机构路由文件
 * @author dazhuang(zengqingzhuang@baidu.com)
 */
let express = require('express');
let router = express.Router();
let Log = require('../tools/log').logger;
let log4 = require('log4js').getLogger();
let orgModel = require('../models/organization');
router.get('/organization/list.:format', (req, res, next) => {
	//可以请求接口，如果报错直接走next(err);
	Log('error', '接口:' + req.originalUrl);
	log4.error('sssssssss')
	orgModel.getOrgList({
		id: 1
	}, (err, result) => {
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