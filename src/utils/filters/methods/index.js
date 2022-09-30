/*
* 注册全局过滤器
* 直接新增过滤函数，代码会自动注册到全局
* */
import moment from 'moment'

/**
 * 保留最少小数点后两位
 * @param num 0 => 0.00   0.1 => 0.10  0.12 => 0.12  0.123 => 0.123
 * @returns {*}
 */
export function decimalPlacesTwo (num) {
  if (!isNaN(num) && num !== '' && num !== null) {
    const [start, end] = (num + '').split('.')
    if (!end) {
      return `${start}.00`
    } else if (end.length === 1) {
      return `${start}.${end}0`
    } else {
      return num
    }
  } else {
    return num
  }
}

/**
 * 日期格式化
 * @param date 日期
 * @param formatStr YYYY-MM-DD HH:mm:ss
 * @param sourceStr 数据源格式
 * @returns {string}
 */
export function dateFormat (date, formatStr = 'YYYY-MM-DD', sourceStr) {
  if (!date) {
    return ''
  } else if (parseInt(date) === 0) { // 00000000 或 000000
    return '--'
  } else if (typeof date === 'string' && !date.replace(/\s/g, '')) {
    return ''
  } else {
    if (sourceStr) {
      return moment(date, sourceStr).format(formatStr)
    } else {
      return moment(date).format(formatStr)
    }
  }
}

/**
 * 账号加掩码
 * @param val 账号 => 453623 *** *** 3456
 * @returns {string|*}
 */
export function accountHide (val) {
  if (!val) return val
  const size = val.length
  if (size < 10) return val
  const head = val.substring(0, 6)
  const tail = val.substring(size - 4)
  return head + ' *** *** ' + tail
}

/**
 * 证件号码只显示前6位，其余位数屏蔽，以*代替。
 * @param val 证件号
 * @returns {string|*}
 */
export function certificateHide (val) {
  if (!val) return val
  const size = val.length
  if (size < 6) return val
  const head = val.substring(0, 6)
  return head + ' *** *** ***'
}

/**
 * 手机号加掩码
 * @param val 手机号
 * @returns {string|*}
 */
export function phoneNumberHide (val = '') {
  return (val + '').replace(/^(\d{3})\d+(\d{4})$/, '$1 **** $2')
}

/*
* 截取文件后缀，映射对应文图标
* */
export function getFileType (name = '', formatStr = '{type}') {
  const extensionName = name.slice(name.lastIndexOf('.') + 1).toLowerCase()
  const config = {
    png: 'png',
    jpg: 'png',
    jpeg: 'png',

    doc: 'doc',
    docx: 'doc',

    excel: 'xls',
    xls: 'xls',
    xlsx: 'xls',

    ppt: 'ppt',
    pptx: 'ppt',

    pdf: 'pdf',

    rar: 'zip',
    zip: 'zip'
  }
  return formatStr.replace(/\{type\}/g, config[extensionName] || 'file')
}

/*
* 小于10的数字补零
* */
export function zeroFilling (val) {
  const number = parseFloat(val)
  if (number || number === 0) {
    return number > 9 ? val : `0${number}`
  } else {
    return val
  }
}

/*
* 字符串4位加空格
* */
export function addSpace (val) {
  if (val) {
    return (val + '').replace(/\s/g, '').replace(/(\w{4})(?=\w)/g, '$1 ')
  } else {
    return val
  }
}

/*
* 手机号加空格
* */
export function phoneAddSpace (val) {
  if (val) {
    return (val + '').replace(/^(\d{3})(\d{4})(\d{4})$/g, '$1 $2 $3')
  } else {
    return val
  }
}

/*
* 如果是 null 或 ''  转 0
* */
export function nullToZero (val) {
  if (val === '' || val === null) {
    return 0
  } else {
    return val
  }
}

/**
 * 转数字
 * @param val 0003590 => 3590
 * @returns {number|*}
 */
export function toNumber (val) {
  const number = parseFloat(val)
  if (number || number === 0) {
    return number
  } else {
    return val
  }
}
