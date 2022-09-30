import * as methods from './methods' // 过滤器方法库
import * as dictionariesConfig from '../dictionaries/config'
import dictionaries from '../dictionaries'

export default {
  install: (Vue) => {
    // 在实例上注册全局过滤器
    Object.keys(methods).forEach(key => {
      Vue.filter(key, methods[key])
    })
    // 把所有字典配置注册成过滤器
    Object.keys(dictionariesConfig).forEach(key => {
      Vue.filter(key, (val, empty) => {
        return dictionaries(key, 'Object')[val] || (empty ? (String(empty) === 'true' ? val : empty) : '')
      })
    })
  }
}
