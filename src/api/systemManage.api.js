import request from '@/utils/http/request'

/** 安全管理--用户管理 */
// 查询用户列表
export function getaboutustable (data) {
  return request({
    url: `/getaboutustable`,
    method: 'POST',
    data
  })
}