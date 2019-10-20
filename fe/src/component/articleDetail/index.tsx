import * as React from 'react';
import { initState, reducer } from './reducer';
import { useDataApi } from '../../util/hook';
import { Article } from '../comon';
const ArticleDetail = () => {
    const { useReducer } = React;
    const [state, dispatch] = useReducer(reducer, initState);
    const pathname: string = window.location.pathname;
    const acticleId: string = pathname.substring(pathname.lastIndexOf('/') + 1)
    useDataApi('get-article-by-id', 'post', dispatch, 'GET_ARTICLE_BY_id', { id: acticleId });
    return (
        <div>
            <Article detail={state.articleDetail} />
        </div>
    )
}
export default ArticleDetail;