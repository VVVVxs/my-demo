import axios, { AxiosResponse } from 'axios'
import { IArticle } from '../dataTypes/IArticle';
export default class ArticleService {
    static getArticleList = (payload: any): Promise<any> => {
        console.log('payload', payload);
        return new Promise((resolve) => {
            axios.post(`/api/get-article-list`, payload).then((res) => {
                resolve(res.data);
            })
        });
    }
}
