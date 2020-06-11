import axios, { AxiosResponse } from 'axios';

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
Service.interceptors.response.use((res) => {
    if (res.data && res.data.code === 2) {
        window.location.href = `/login?url=${res.data.data}`;
    } else if (res.data && res.data.code === -1) {
        message.warning(res.data.msg || '请求异常')
    }
    // 请求响应时做些什么
    return res;
}, error => {
    console.log('TCL: error', error)
    const msg = error.Message !== undefined ? error.Message : ''
    message.warn(`网络错误${msg}`);
    return Promise.reject(error)
})
