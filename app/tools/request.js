/**
 * @file node端发送request请求
 * @author dazhuang(zengqingzhuang@baidu.com)
 *
 */
let rp = require('request-promise');
let config = require('../../config');
let log = require('./log');
let util = require('util');
let url = require('url');
class request {
	constructor(opts) {
		this.opts = Object.assign({
			uri: '',
			qs: {}, // get请求参数
			body: {}, // post请求参数
			// headers: {
			// 	'User-Agent': 'Request-Promise',
			// 	'Accept': 'application/json',
			// 	'content-type': 'application/x-www-form-urlencoded'  // get
			// },
			json: true,
			timeout: 5000, // 接口超时时间
			cached: false //此接口是否缓存-后续添加接口缓存机制
		}, opts);
	}
	get() {
		let beginTime = new Date().getTime();
		let uri = url.parse(this.opts.uri);
		return new Promise((resolve, reject) => {
			if (!this.opts.uri || this.opts.uri.constructor !== String) {
				return reject({
					errno: 1,
					message: '请求的URI不正确'
				});
			}
			if (this.opts.data) {
				if (this.opts.data.constructor !== Object) {
					return reject({
						errno: 1,
						message: 'URI参数必须是Object类型'
					});
				}
				this.opts.qs = this.opts.data;
			}
			rp.get(this.opts)
				.then((res) => {
					log.info(`${this.opts.uri} - 接口耗时: ${new Date().getTime() - beginTime}ms`);
					if (config.outconsole.param) {
						log.info(`${uri.href} - 接口传入参数: ${util.inspect(this.opts.qs, {
							depth: null
						})}`);
					}
					if (config.outconsole.result) {
						log.info(`${uri.href} - 接口返回结果: ${util.inspect(res, {
							depth: null
						})}`);
					}
					resolve(res);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}
	post() {
		let beginTime = new Date().getTime();
		let uri = url.parse(this.opts.uri);
		return new Promise((resolve, reject) => {
			if (!this.opts.uri || this.opts.uri.constructor !== String) {
				return reject({
					errno: 1,
					message: '请求的URI不正确'
				});
			}
			if (this.opts.data) {
				if (this.opts.data.constructor !== Object) {
					return reject({
						errno: 1,
						message: 'URI参数必须是Object类型'
					});
				}
				this.opts.body = this.opts.data;
			}
			rp.post(this.opts)
				.then((res) => {
					log.info(`${this.opts.uri} - 接口耗时: ${new Date().getTime() - beginTime}ms`);
					if (config.outconsole.param) {
						log.info(`${uri.href} - 接口传入参数: ${util.inspect(this.opts.body, {
							depth: null
						})}`);
					}
					if (config.outconsole.result) {
						log.info(`${uri.href} - 接口返回结果: ${util.inspect(res, {
							depth: null
						})}`);
					}
					resolve(res);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}
}

module.exports = request;