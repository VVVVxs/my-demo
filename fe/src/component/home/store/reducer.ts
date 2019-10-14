import axios from 'axios';
import { IInitState } from './store';
const reducer = async (state: IInitState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'GET_INIT_ARTICLE':

            return {
                ...state,
                ininArticle: action.payload
            }

            break;
    }
}

export default reducer;