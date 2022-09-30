// import Vue from 'vue'
import router from '@/router' // 实例化的路由对象
import store from '@/store' // 状态管理
import NProgress from 'nprogress' // progress bar 页面加载进度
import 'nprogress/nprogress.css' // progress bar style
import {
  getToken
} from '@/utils/http/auth' // getToken from cookie
import {
  isEmpty
} from '@/utils/validate'
// import loading from '@/components/loading'

// NProgress Configuration 页面加载进度配置-不要显示转圈圈
NProgress.configure({
  showSpinner: false
})

const whiteList = ['/login', '/demo'] // 没有登录token也能访问的白名单列表

// H5刷新继承路由参数
const inheritParams = (to, form, next) => {
  const {
    name,
    params
  } = to
  const tabConfig = store.getters.getTabsObject[name] || {}
  // console.log(isEmpty(params))
  // console.log(isEmpty(tabConfig.params))
  // console.log('to', store.getters.getTabsObject[name])
  if (isEmpty(params) && !isEmpty(tabConfig.params)) {
    next({
      name: name,
      params: {
        ...tabConfig.params
      }
    })
  } else {
    next()
  }
}

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  console.log(to, from, next)
  NProgress.start() // 开始加载页面
  // loading.hideLoading() // 进入页面前关闭loading
  const {
    path,
    query
  } = to

  if (getToken()) { // 如果没有登录状态
    // 有登录token
    if (path === '/login') { // 有登录，还去访问登录页，直接定向到首页
      next({
        path: query.to || '/'
      })
      NProgress.done()
    } else {
      // console.log('访问权限计算=====》', businessCode)
      // console.log('获取配置', store.getters.menusConfig[businessCode])
      if (process.env.VUE_APP_CSR_MENU_FILTER_SWITCH === 'false') {
        inheritParams(to, from, next)
      } else {
        inheritParams(to, from, next)
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    }
  }
})

// 路由后置守卫
router.afterEach(() => {
  // 结束路由进度加载
  NProgress.done()
})