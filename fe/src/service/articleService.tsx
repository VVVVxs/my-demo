import axios, { AxiosResponse } from 'axios';
export default class ArticleService {
    static getArticleList = (payload: any): Promise<any> => {
        return new Promise((resolve) => {
            axios.post(`/api/get-article-list`, payload).then((res) => {
                resolve(res.data);
            })
        });
    }
}
