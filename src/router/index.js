import Vue from 'vue' // 引入vue
import Router from 'vue-router' // 引入路由
import appLayout from '@/components/layout' // 应用层布局
// 导入其他业务路由模块
import customerPc from './test'

Vue.use(Router) // 使用路由

export const appRouterMap = [
  ...customerPc // PC客户端
]

// 定义全局公共路由-不用异步挂载
export const constantRouterMap = [{
    path: '/app',
    name: 'app',
    component: appLayout, // 应用层布局
    redirect: '/demo',
    children: [
      ...appRouterMap // 业务功能路由
    ]
  },
  // 根路由
  {
    path: '/',
    redirect: '/app'
  },
]

// 挂载路由
export default new Router({
  // mode: 'history', // 后端支持可开
  // base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0
  }), // 路由滚动行为-默认路由切换滚动到y=0
  routes: constantRouterMap // 路由配置-初始挂载无权限限制的路由
})