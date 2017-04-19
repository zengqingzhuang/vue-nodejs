/**
 * @file log打日志
 * @author dazhuang(zengqingzhuang$baidu.com)
 *
 */
let _ = require('lodash');
let config = require('../../config');
let log4js = require('log4js');
let util = require('util');

exports.logger = function() {
    if (!config.outlogs) {
        return;
    }
    let type = "cheese",
        logs = "log里什么也没有",
        type_num = 0;
    if (arguments.length === 0) {
        logs = "log里什么也没有";
    }
    if (arguments.length === 1) {
        logs = arguments[0];
    }
    if (arguments.length > 1) {
        logs = [], type_num = 1;
        type = arguments[0];
        _.forEach([].slice.call(arguments, type_num, arguments.length), function(p, n) {
            if (_.isObject(p)) {
                if (util.isError(p)) {
                    logs.push(p.message || p.messages[0]);
                } else {
                    logs.push(JSON.stringify(p));
                }

                return;
            }
            if (_.isArray(p)) {
                logs.push(p.join(","));
                return;
            }
            logs.push(p);
        })
        logs = logs.join("|");
    }
    //TODO log需要完善
    //log4js.addAppender(log4js.appenders.file('./logs/trace.log'), 'logger');
    let logger = log4js.getLogger(type);
    console.log(logs,'111')
    logger.trace(logs);
};