// import Vue from 'vue'
import axios from 'axios' // 引用ajax组件
import {
  getToken
} from './auth' // 引用工具

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // 实际生产打包配置
  // baseURL: '/mocks/gateway', // 是否使用mock数据开发
  baseURL: 'https://www.tagewangluo.com:7001', // 测试地址
  timeout: 15000 // 请求超时时间
})

// 配置请求发出前拦截器
service.interceptors.request.use(async (config) => {
  // 从状态管理中获取token
  const token = getToken()
  if (token) {
    config.headers.Authorization = token // 让每个请求携带自定义token 请根据实际情况自行修改
  } else {
    config.headers.Authorization = '666666'
  }
  // 请求增加时间戳-去除缓存
  config.params = Object.assign(config.params || {}, {
    customValue: 'test', // 渠道编号
    _: +new Date() // 防止缓存时间戳
  })

  return config
}, (error) => {
  Promise.reject(error)
})

// 配置响应拦截器
service.interceptors.response.use((response) => {
  console.log('响应拦截器', response,123)
  // 接收到响应数据并成功后的一些共有的处理，关闭loading等
  if (response.status !== 200) {
    return Promise.reject(new Error(response.message))
  } else {
    // 获取业务结果数据
    const {
      data,
      config
    } = response
    console.log(data, config)
  }
}, ({
  config,
  response
}) => {
  console.log('apiError========================接口：' + config.url)
  /** *** 处理结束 *****/
  // 如果不需要错误处理，以上的处理过程都可省略
  return Promise.reject(response)
})

export default service