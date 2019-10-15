import axios, { AxiosResponse } from 'axios'
export const getInitArticle = async () => {
    return await axios.post('/api/get-article').then((res: AxiosResponse) => {
        return res.data;
    }).catch((err) => {
        console.log(err);
    })
}