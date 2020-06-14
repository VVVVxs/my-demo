import { message } from "antd";
import axios from 'axios';

export default class AppService {
    static getUserInfo = (): Promise<any> => {
        return new Promise((resolve) => {
            axios.post(`/api/get-user-info`).then(({ data }) => {
                resolve(data);
            })
        });
    }
}