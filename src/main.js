import 'core-js' // 旧ie浏览器兼容
import 'regenerator-runtime/runtime' // 旧ie浏览器兼容
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './router/permission' // 添加路由守卫
import Filters from './utils/filters' // 导入全部过滤器
import * as Methods from './utils/filters/methods' // 导入全部过滤器方法
import dictionaries from './utils/dictionaries' // 获取字典的方法
import Components from './components'
import Api from './api' // 导入全部api服务
import EventBus from './utils/EventBus' // 事件总程
// import loading from './components/loading'
import * as util from './utils/util'
import * as validate from './utils/validate'

// 挂载一些全局公共方法
Vue.prototype.$app = {
  // loading, // vue实例绑定 全局单例loading （注: .$loading 是elementUI 保留属性，所以用$load代替绑定实例）
  util, // 公共工具函数库
  validate, // 公共验证函数库
  filters: Methods, // 全部过滤器方法
  dictionaries // 注册获取字典的方法
}

Vue.prototype.$EventBus = EventBus // 把事件总程挂载都全局实例中

Vue.use(Filters) // 全局注册全部过滤器
Vue.use(Components) // 全局注册全部自定义组件
Vue.use(Api) // 全局注册全部api服务

Vue.config.productionTip = false // 设置为 false 以阻止 vue 在启动时生成生产提示

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
