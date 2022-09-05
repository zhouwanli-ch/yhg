import Vue from 'vue'
import VueRouter from 'vue-router'
import demo from '../views/demo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'demo',
    component: demo
  }
]

const router = new VueRouter({
  routes
})

export default router
