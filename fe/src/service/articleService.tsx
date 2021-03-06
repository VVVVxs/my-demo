import { Service as axios } from '../util/axios';

export default class ArticleService {
    static getArticleList = (payload: any): Promise<any> => {
        return new Promise((resolve) => {
            axios.post(`/api/get-article-list`, payload).then((res) => {
                resolve(res.data);
            })
        });
    }
    static getArticle = (): Promise<any> => {
        return new Promise((resolve) => {
            axios.post(`/api/get-article`).then(({data}) => {
                resolve(data);
            })
        });
    }
    static getArticleById = (id: string): Promise<any> => {
        return new Promise((resolve) => {
            axios.post(`/api/get-article`, { id }).then((res) => {
                resolve(res.data);
            })
        });
    }
}
