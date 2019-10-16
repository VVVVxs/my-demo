import axios, { AxiosResponse } from 'axios'
export const getArticleList = async() => {
    return await axios.post('/api/get-article-list').then((res: AxiosResponse) => {
        return res.data;
    }).catch((err) => {
        console.log('888', err);
    })
}