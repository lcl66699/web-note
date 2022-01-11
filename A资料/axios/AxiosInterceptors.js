import axiosOrigin from "axios"
import router from '@/router'
import store from '@/vuex/store';
import { getToken, removeToken} from '@/utils/auth'


let calcelSource = getCancelSource();
const Message = require("element-ui").Message

let config = {
  // 一分钟超时
  timeout: 60000
};
let axios = axiosOrigin.create(config);
axios.defaults.headers.get["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (config) => {
    // 检查是否过期，如果已经过期，移除token，移除授权定时器
    // store.dispatch('digitalPark/validateExpire');

    let redirectHref = window.location.href;
    let hasToken = getToken();
    if (hasToken) {
      config.headers['Token'] = hasToken;
      redirectHref = location.origin + '/#/login';
    }
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    config.headers['X-Requested-InPage'] = redirectHref;

    // 添加全局取消请求
    config.cancelToken = calcelSource.source.token;


    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // code => 0：操作成功  101：报错  102：参数为空
    let res = response.data || {};
    let message = res.msg || res.resMsg;
    let code =res.code || res.resCode;
    let data =res.data || res.result;

    if (code === 200 || (code === '0' && message=='成功')) {
      // 如果没有则返回空对象
      return (data || {});
    } else if (code === 411) {
      // 如果是登录页面，则不进行message提示
      if (router.currentRoute.path == '/login') return;
      msgInfo({
        message: message,
        type: 'error'
      });
      console.error(`${message}，错误代码:${res.code}`);
	     calcelSource.source.cancel();
	   removeToken();
	   router.push('/');
	    calcelSource = getCancelSource();
      return Promise.reject(res);
    } else {
      // console.log(res);
      msgInfo({
        message: message,
        type: 'error'
      });
      // 兼容旧接口
      //return Promise.reject(res);
      return res;
    }
  },
  (error) => {
    // 最起码返回了响应头
    if (error.response) {
      let response = error.response;
      // let redirect = error.response.headers["X-SSO-Redirect"] || error.response.headers["x-sso-redirect"];
      // 响应头状态匹配 401: token失效
      switch (response.code) {
        case 411:
          calcelSource.source.cancel();  // 取消所有请求
          // 重置token并进行下一步操作
          removeToken();
          //store.dispatch('user/resetToken').then(() => {
            router.push('login');
            calcelSource = getCancelSource();
          //})

          break;
        case 404:
          return Promise.reject(error);
          break;
        default:
          break;
      }
    } else {
      if (!window.navigator.onLine) {
        // 断网处理
        msgInfo({
          message: `网络好像出了点问题~`,
          type: 'error'
        });
      }
    }
    if (axiosOrigin.isCancel(error)) { // 取消请求的情况下，终端Promise调用链
      return new Promise(() => { });
    } else {
      return Promise.reject(error);
    }
  }
);

// 获取请求取消 calcelToken，在每次取消请求后，重新获取
function getCancelSource() {
  const CancelToken = axiosOrigin.CancelToken;
  const source = CancelToken.source();
  return {
    source
  }
}

// 统一提示
function msgInfo({ message, type }) {
  if (typeof message === 'string' && message.trim().length > 0) {
    Message({
      message: message,
      type: type
    });
  }
}

// 页面跳转，取消页面跳转之前所有正在进行的请求
setTimeout(() => {
  router.beforeEach((to, from, next) => {
    if (calcelSource.source.cancel) {
      calcelSource.source.cancel();  // 取消所有请求
      calcelSource = getCancelSource();
    }

    next();
  })
}, 0);

export default axios;
