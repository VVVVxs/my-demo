export const getInitArticle = (id: number) => {
    return {
        type: 'GET_INIT_ARTICLE',
        payload: id
    }
}
