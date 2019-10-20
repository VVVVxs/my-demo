import * as React from 'react';
import { Article } from '../../comon';
import { useAppState } from '../store/Provider';
import { IInitState } from '../store/store';
import { useDataApi } from '../../../util/hook';

const ArticleBox = () => {
    const [state, dispatch]: [IInitState, any] = useAppState();
    useDataApi('get-article', 'post', dispatch, 'GET_INIT_ARTICLE')

    return (
        <div className='articleBox'>
            <Article detail={state.ininArticle} />
        </div>
    )
}
export default ArticleBox;