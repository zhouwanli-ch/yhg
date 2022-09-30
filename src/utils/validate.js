/************************************************************************
 * 校验功能库
 *************************************************************************/
import _ from 'lodash'

// 正则校验
export const Reg = {
  phoneNo: /^1[3457689]\d{9}$/, // 手机号码--联通、移动、电信
  external: /^(https?:|mailto:|tel:)/, // 协议检查
  idCard15Or18: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, // 身份证正则
  email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/, // email正则
  chinese: /^[\u0391-\uFFE5]+$/, // 中文
  money: /^(([1-9]\d*)(\.\d{1,2})?)$|^(0\.0?([1-9]\d?))$|^([0]{1})$/, // 金额正则 (小时正则)
  called: /(\+{1}\d{4})|(\d{4})/, // 非外呼号码
  number: /^[0-9]*$/, // 数字正则,
  password: /^(?![a-zA-Z]+$)(?![\d]+$)(?![^a-zA-Z0-9]+$)\S{6,12}$/, // 登录密码
  capitalLetters: /^[A-Z]+$/, // 大写字母
  telRules: /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/, // 正则校验座机、手机号
  intNum: /^[0-9]*[1-9][0-9]*$/ // 正则校验 正整数
}

// 是否管理员
export function isAdmin (value) {
  const validMap = ['admin', 'editor']
  return validMap.indexOf(value.trim()) >= 0
}

// 协议检查
export function isExternal (value) {
  return Reg.external.test(value)
}

// 判读是否手机号
export function isPhoneNo (value) {
  return Reg.phoneNo.test(value) // 手机号码--联通、移动、电信
}

/*
 * 判断是否为空-具体参考lodash文档
  _.isEmpty(null) // => true
  _.isEmpty(true) // => true
  _.isEmpty(1) // => true
  _.isEmpty([1, 2, 3]) // => false
  _.isEmpty({ a: 1 })// => false
* */
export function isEmpty (value) {
  return _.isEmpty(value)
}

// 判断是否一个对象-具体参考lodash文档
export function isObject (value) {
  return _.isObject(value)
}

// 判断是否一个Date对象-具体参考lodash文档
export function isDate (value) {
  return _.isDate(value)
}

// 时间范围选择器检查
export function dateRange (rule, value, callback) {
  const [startDate, endDate] = value
  if (startDate || endDate) {
    if (!startDate) {
      callback(new Error('请选择开始时间'))
    } else if (!endDate) {
      callback(new Error('请选择结束时间'))
    } else {
      callback()
    }
  } else {
    callback()
  }
}

// 处理 金额/小时 输入
export function clearNoNum (string) {
  // 先把非数字的都替换掉，除了数字和.
  string = string.replace(/[^\d.]/g, '')
  // 必须保证第一个为数字而不是.
  string = string.replace(/^\./g, '')
  // 保证只有出现一个.而没有多个.
  string = string.replace(/\.{2,}/g, '.')
  // 保证.只出现一次，而不能出现两次以上
  string = string.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
  // 保证.后只出现2位
  string = string.replace(/([0-9]+\.[0-9]{2})[0-9]*/, '$1')
  return string
}

/**
 * 证件号验证
 * @param certType 证件类型
 * @param val 证件号
 * @returns {boolean} true-通过 false-不通过
 */
export function documentType (certType, val) {
  switch (certType) {
    // 身份证
    case '110':
      return Reg.idCard15Or18.test(val)
    // 临时身份证
    case '111':
      return Reg.idCard15Or18.test(val)
    // 中国护照
    case '151':
      return (val.length === 9 || val.length === 8)
    // 外国护照
    case '152':
      return (val.length === 9 || val.length === 8 || val.length === 11)
    // 军人身份证
    case '123':
      return (val.length === 7 || val.length === 8)
    // 户口簿
    case '140':
      return (val.length === 9 || val.length === 18 || val.length === 11)
    // 港澳居民来往内地通行证
    case '171':
      return (val.length === 12 || val.length === 11 || val.length === 9 || val.length === 8 || val.length === 12)
    // 台湾居民来往大陆通行证
    case '172':
      return (val.length === 8 || val.length === 12 || val.length === 7)
    // 边民出入境通行证
    case '194':
      return true
    // 外国人永久居留身份证
    case '153':
      return (val.length === 8)
    // 其他
    case '199':
      return true
    // 匹配不到，不能通过验证
    default:
      return true
  }
}
