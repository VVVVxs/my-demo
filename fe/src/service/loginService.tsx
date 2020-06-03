import axios from 'axios';
import { message } from 'antd';
import CommonService from './commonService';
export default class LoginService extends CommonService {
    static register = (payload: any): Promise<any> => {
        return new Promise((resolve) => {
            axios.post(`/api/signup`, payload).then(({ data }) => {
                if (data.code === 0) {
                    message.success('登陆成功');
                    resolve(data);
                } else {
                    message.warning(data.msg || '请求异常')
                }
            }).catch((err) => {
                LoginService.handleErro(err);
            })
        });
    }
    static login = (payload: any): Promise<any> => {
        return new Promise((resolve) => {
            axios.post(`/api/signin`, payload).then(({ data }) => {
                if (data.code === 0) {
                    message.success('登陆成功');
                    resolve(data);
                } else {
                    message.warning(data.msg || '请求异常')
                }
            }).catch((err) => {
                LoginService.handleErro(err);
            })
        });
    }
}
