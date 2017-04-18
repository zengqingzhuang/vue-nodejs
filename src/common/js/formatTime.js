/**
 * @file formatTime
 * @author dazhuang(zengqingzhuang@baidu.com)
 */

/**
 * 格式化日期时间
 * @param  {number} timestamp 待格式化的时间戳，单位秒
 * @param  {string} format    日期时间格式，如：“yyyy/m/d h:i:s”，默认为 "yyyy/mm/dd"
 * @return {string}           格式化后的日期时间
 */
export default (timestamp = 0, format = 'yyyy/mm/dd') => {
    timestamp = 1000 * timestamp; // 转化为毫秒
    format = format.toLowerCase();

    if (isNaN(timestamp)) { // 非 “数字” 转化为 0
        timestamp = 0;
    }

    let date = new Date(timestamp);
    let map = {
        'm+': date.getMonth() + 1, // 月
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 时
        'i+': date.getMinutes(), // 分
        's+': date.getSeconds() // 秒
    };
    let datetime = format;

    if (/(y+)/.test(datetime)) {
        datetime = datetime.replace(RegExp.$1, ('' + date.getFullYear()).substring(4 - RegExp.$1.length));
    }

    for (let key in map) {
        if (new RegExp('(' + key + ')').test(datetime)) {
            datetime = datetime.replace(
                RegExp.$1,
                RegExp.$1.length === 1 ? map[key] : ('00' + map[key]).substring(('' + map[key]).length)
            );
        }
    }

    return datetime;
};