import * as config from './config' // 获取字典配置

// 获取字典值
export default function (key, type = 'Array') {
  const data = config[key]
  if (data) {
    if (type === 'Array') {
      return Object.keys(data).map((value) => {
        return {
          label: data[value],
          value: value
        }
      }).sort((a, b) => {
        return a.value < b.value ? -1 : 1
      })
    } else {
      return data
    }
  } else {
    return []
  }
}
