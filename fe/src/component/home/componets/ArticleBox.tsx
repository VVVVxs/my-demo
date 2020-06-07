import * as React from 'react';
import { Article } from '../../comon';
import { useAppState } from '../store/Provider';
import { IInitState } from '../store/store';
import { useRequest } from '@umijs/hooks'
import { ArticleService } from '../../../service';

const ArticleBox = () => {
    const [state, dispatch]: [IInitState, any] = useAppState();
    const data = useRequest(ArticleService.getArticle)
    console.log('data',data);

    return (
        <div className='articleBox'>
            <Article detail={state.ininArticle || undefined} />
        </div>
    )
}
export default ArticleBox;