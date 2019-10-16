export interface IArticle {
    _id: string,
    description: string;
    title: string;
}
export interface IArticleList {
    articleList: IArticle[]
}
export const initState: IArticleList = {
    articleList: []
}

export const reducer = (state: any, action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'GET_ARTICLE_LIST':

            return {
                ...state,
                articleList: action.payload
            };
    }
}

