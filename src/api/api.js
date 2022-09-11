
import Axios from 'axios';

const eggUrl = 'https://www.tagewangluo.com:7001'
const request = Axios.create({
    baseURL: eggUrl,
})

export const getaboutustable = params => request('/getaboutustable',{method:'post',data:params})

export const sendmsg = params => request('/sendmsg',{method:'post',data:params})
export const messagelogin = params => request('/messagelogin',{method:'post',data:params})
export const passwordlogin = params => request('/passwordlogin',{method:'post',data:params})
export const logon = params => request('/logon',{method:'post',data:params})
export const getusermessage = params => request('/getusermessage',{method:'post',data:params})


let cancel,
  promiseArr = {};
//请求拦截器
request.interceptors.request.use(
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
  