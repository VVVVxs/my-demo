import axios from 'axios';
export default class LoginService {
    static register = (payload: any): Promise<any> => {
        return new Promise((resolve) => {
            axios.post(`/api/signup`, payload).then((res) => {
                resolve(res.data);
            })
        });
    }
}
