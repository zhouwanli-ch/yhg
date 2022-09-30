// 全局注册所有api
export default {
  install: (Vue) => {
    var apiConfig = {}
    const requireContext = require.context('./', true, /\.api.js$/)
    requireContext.keys().forEach(path => {
      const apiList = requireContext(path)
      if (apiList) {
        const key = path.match(/\.\/(\w+)\.api/)[1]
        apiConfig[key] = apiList
      }
    })
    // console.log('引入全部api服务', apiConfig)
    Vue.prototype.$api = apiConfig
  }
}
