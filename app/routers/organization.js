/**
 * @file 机构路由文件
 * @author dazhuang(zengqingzhuang@baidu.com)
 */
let express = require('express');
let router = express.Router();
router.get('/organization/list.:format', (req, res, next) => {
	//可以请求接口，如果报错直接走next(err);
	res.json({
		status: 200,
		data: {
			name: '掌门',
			list: [{
				id: 1,
				name: '张三'
			}]
		}
	});
});
module.exports = router;