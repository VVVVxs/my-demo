import axios, { AxiosResponse } from 'axios'

export default class ArticleService {
    static getArticleList = (payload: any) => {
        return axios.post(`/api/get-article-list`, payload)
    }
}
