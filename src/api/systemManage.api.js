import request from '@/utils/http/request'
import serviceName from './config'

/** 安全管理--用户管理 */
// 查询用户列表
export function getaboutustable (data) {
  return request({
    url: `/getaboutustable`,
    method: 'POST',
    data
  })
}
// 黑名单审核
export function blacKNameCheck (data) {
  return request({
    url: `${serviceName.user}/blackName/blackNameCheck.do`,
    method: 'POST',
    data,
    responseType: 'blob'
  })
}
// 导入
export function impSensitive (data) {
  return request({
    url: `${serviceName.user}/sensitiveManage/impSensitive.do`,
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  })
}
