/**
 * @file formatMoney
 * @author dazhuang(zengqingzhuang@baidu.com)
 */

/**
 * 格式化金额
 * @param  {number} money        待格式化的金额，以分为单位
 * @param  {string} type         格式化的类型，“cn” 代表 “元”，“en” 代表 “￥”，默认 “” 无修饰符
 * @param  {number} decimals     保留小数的位数，默认为 2，两位小数，只对小数有效
 * @param  {string} decimalPoint 小数点符号，默认为 “.”
 * @param  {string} separator    千分位符号，默认为 ","
 * @return {string}              格式化之后的金额，以元为单位
 */
export default (money = 0, type = '', decimals = 2, decimalPoint = '.', separator = ',') => {
    money = +money;

    if (isNaN(money) || money === 0) { // 非 “数字” 或 0 返回 "0.00"
        return '0.00';
    }

    money = '' + (money / 100).toFixed(decimals); // 转化 decimals 位数的小数
    let [integerPart, decimalPart] = money.split('.');
    let reg = /(\d+)(\d{3})/;

    while (reg.test(integerPart)) { // 循环添加千位分隔符
        integerPart = integerPart.replace(reg, `$1${separator}$2`);
    }

    if (/^0+$/.test(decimalPart)) { // 整数
        money = integerPart;
    } else {
        money = `${integerPart}${decimalPoint}${decimalPart}`; // 小数
    }

    switch (type) {
        case 'cn':
            money = `${money}元`; // 标题和其他描述性文案使用 “元”
            break;
        case 'en':
            money = `¥${money}`; // 金额独立展示时使用 “￥”
            break;
        default:
            money = `${money}`; // 默认无修饰符
            break;
    }

    return money;
};