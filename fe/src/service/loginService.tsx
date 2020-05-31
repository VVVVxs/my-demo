import axios from 'axios'
export default class LoginService {
    static login = (payload: any): Promise<any> => {
        console.log('payload', payload);
        return new Promise((resolve) => {
            axios.post(`/api/login`, payload).then((res) => {
                resolve(res.data);
            })
        });
    }
}
