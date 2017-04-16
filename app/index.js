var express = require('express'),
	app = express(),
	path = require('path'),
	_ = require('lodash'),
	fs = require('fs'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	log4js = require('log4js'),
	config = require('../config'),
	favicon = require('serve-favicon'),
	webpackDevMiddleware = require("webpack-dev-middleware"),
	webpack = require("webpack");

//express的日志配置
log4js.configure(config.log4js);
app.use(log4js.connectLogger(log4js.getLogger("http"), {
	level: 'auto' //自动调整日志级别
}));
//客户端请求的body中的内容处理
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
//全局变量
app.locals = {
	version: config.application.version,
	title: config.application.title,
	settings: {}
};
//设置静态资源
app.use(express.static(path.join(__dirname, '../public')));
//设置url图标
//app.use(favicon(path.join(__dirname, '../public/favicon.ico')));
//web浏览器发送cookie内容--req.cookies
app.use(cookieParser());

// webpack
var webpackCompiler = webpack(require('../webpack.config'));
app.use(webpackDevMiddleware(webpackCompiler, {
	// options
	noInfo: true,
	lazy: true
}));
var hotMiddleware = require('webpack-hot-middleware')(webpack(require('../webpack.config')));
app.use(hotMiddleware)

//同步递归加载所有的路由
function readRouter(folderName) {
	var folderDir = __dirname + '/' + folderName;
	var fileArry = fs.readdirSync(folderDir);
	_.forEach(fileArry, function(file) {
		if (file.indexOf('.js') != -1) {
			var file_path = folderDir + '/' + file,
				cur_file = fs.statSync(file_path);
			if (cur_file.isDirectory()) { //是目录
				readRouter(folderName + '/' + file);
			} else {
				app.use('/', require(file_path));
			}
		}
	});
}
readRouter('routers');
//next()错误处理 catch 404
app.use(function(req, res, next) {
	var err = {
		status: 500,
		message: '接口异常'
	};
	next(err);
});
//next(err)
app.use(function(err, req, res, next) {
	if (!_.isObject(err)) {
		err = {
			status: 500,
			message: '接口异常'
		}
	} else {
		err.status = err.status ? err.status : 500;
		err.message = err.message ? err.message : '接口异常';
	}
	var format = req.url.match(/\.\w{1,5}/); //请求路由格式，.:format or 页面
	if (format) {
		format = format[0].split(".")[1].toLowerCase();
	}
	if (format === 'json' || format === 'jsonp') { //接口
		res.set('Content-Type', "application/json");
		res[format](err);
		log4js.getLogger().error('error:' + err.message);
	}
});
module.exports = app;