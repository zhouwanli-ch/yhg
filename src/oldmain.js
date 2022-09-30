import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false

const eggUrl = 'https://www.tagewangluo.com:7001'
Vue.prototype.baseURL = eggUrl
Vue.prototype.$api = Axios.create({
  baseURL: eggUrl,
});

let cancel,
  promiseArr = {};
//请求拦截器
Vue.prototype.$api.interceptors.request.use(
  config => {
    // 调试的时候直接修改token值
    let token = null;
    // console.log(plus)
    // console.log(localStorage.getItem('accessToken'))
    // let tokenvalue = sessionStorage.getItem('username')
    let tokenvalue = localStorage.getItem('accessToken')
    if (tokenvalue === null) {
      token = null
    } else {
      token = tokenvalue
    }

    if (!token || !/\S/.test(token)) {
      //token = getToken();
    }
    //注入token
    config.headers["Authorization"] = token;

    //发起请求时，取消掉当前正在进行的相同请求
    if (promiseArr[config.url]) {
      promiseArr[config.url]('cancel');
      promiseArr[config.url] = cancel;
    } else {
      promiseArr[config.url] = cancel;
    }
    return config;

  },
  error => {
    return Promise.reject(error);
  }
);

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.config.productionTip = false

router.beforeEach(async (to, from, next) => {
  localStorage.setItem("routertopath", to.path);
  localStorage.setItem("routerfrompath", from.path);
  next();
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
