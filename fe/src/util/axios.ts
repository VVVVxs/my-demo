import axios from 'axios';
import { message } from 'antd';
//使用create方法创建axios实例

export const Service = axios.create({
    timeout: 7000, // 请求超时时间
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
})

// 添加请求拦截器
Service.interceptors.request.use(config => {
    console.log('config', config);

    // 请求时做些什么
    return config
})
// 添加响应拦截器
Service.interceptors.response.use(response => {
    if(response.data&&response.data.code===2){
        window.location.href='/login';
    }
    console.log('response', response);
    // 请求响应时做些什么
    return response.data;
}, error => {
    console.log('TCL: error', error)
    const msg = error.Message !== undefined ? error.Message : ''
    message.warn(`网络错误${msg}`);
    return Promise.reject(error)
})
