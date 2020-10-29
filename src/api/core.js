import axios from "axios";//引入axios模块
import urlType from "./config";
// 创建实例
const instance = axios.create({
  baseURL: 'http://120.53.31.103:84',//公用路径
  timeout: 6000,//设置超时时间
  headers: { 'X-Custom-Header': 'foobar' }//设置请求头
});


//   拦截器
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

//   判断是get请求还是post请求
export function requset(type, url, params) {
  switch (type) {
    case urlType.type.GET:
      return get(url, params);
    case urlType.type.POST:
      return post(url, params);
  }
}


//   封装get请求
function get(url, params) {
  return instance.get(url, params);
}

// 封装post请求
function post(url, params) {
  return instance.post(url, params);
}