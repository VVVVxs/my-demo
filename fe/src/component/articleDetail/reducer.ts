export interface IArticle {
    _id: string,
    description: string;
    title: string;
    content: string;
    createBaseOn: string;
}
export const initState: { articleDetail: IArticle | undefined } = {
    articleDetail: undefined
}

export const reducer = (state: any, action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'GET_ARTICLE_BY_id':

            return {
                ...state,
                articleDetail: action.payload
            };
    }
}
