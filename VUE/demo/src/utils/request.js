import axios from "axios";
import { getToken } from '../utils/js-cookie-lib'
import { secure } from '../utils/secure'

const service = axios.create({
  //baseURL: 'http://localhost:60021/api/',
  baseURL: 'http://localhost:8180/',
  timeout: 10000000,
  headers: { 'X-Custom-Header': 'foobar' }
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log('before send request', config);
  config.headers['Accept'] = '*/*'

  const signature = secure.signature(config);

  config.headers['signature'] = signature;

  // config.headers['Authorization'] = getToken()
  return config;
}, function (error) {
  // 对请求错误做些什么
  console.error('request error', error);
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('对响应数据做点什么', response);
  return response;
}, function (error) {
  // 对响应错误做点什么
  console.error('response error', error);
  return Promise.reject(error);
});

export default service