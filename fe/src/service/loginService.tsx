// import axios from 'axios';
import { message } from 'antd';
import { Service as axios } from '../util/axios';
import CommonService from './commonService';
export default class LoginService extends CommonService {
    static register = (payload: any): Promise<any> => {
        return new Promise((resolve,reject) => {
            axios.post(`/api/signup`, payload).then(({ data }) => {
                if (data.code === 0) {
                    message.success('注册成功');
                } else {
                    message.warning(data.msg || '请求异常')
                }
                resolve(data);
            }).catch((err) => {
                LoginService.handleErro(err);
                reject(err);
            })
        });
    }
    static login = (payload: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            axios.post(`/api/signin`, payload).then(({ data }) => {
                if (data.code === 0) {
                    message.success('登陆成功');
                } else {
                    message.warning(data.msg || '请求异常')
                }
                resolve(data);
            }).catch((err) => {
                LoginService.handleErro(err);
                reject(err);
            })
        });
    }
}
