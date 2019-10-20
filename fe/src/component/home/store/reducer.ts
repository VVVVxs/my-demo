import { IInitState } from './store';
const reducer =  (state: IInitState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'GET_INIT_ARTICLE':

            return {
                ininArticle: action.payload
            }
    }
}

export default reducer;