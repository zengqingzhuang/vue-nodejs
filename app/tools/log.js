/**
 * @file log打日志
 * @author dazhuang(zengqingzhuang@baidu.com)
 *
 */
let log4js = require('log4js');

module.exports = {
    error: function(...params) {
        this.writeLog('error', params);
    },
    info: function(...params) {
        this.writeLog('info', params);
    },
    warn: function(...params) {
        this.writeLog('warn', params);
    },
    trace: function(...params) {
        this.writeLog('trace', params);
    },
    debug: function(...params) {
        this.writeLog('debug', params);
    },
    writeLog: function(type, params) {
        log4js.getLogger(type)[type](params.join('|'));
    }
}