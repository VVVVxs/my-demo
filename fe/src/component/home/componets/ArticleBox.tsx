import * as React from 'react';
import { Article } from '../../comon';
import { useRequest } from '@umijs/hooks'
import { ArticleService } from '../../../service';

const ArticleBox = () => {
    const data = useRequest(ArticleService.getArticle)

    return (
        <div className='articleBox'>
            <Article detail={data.data || undefined} />
        </div>
    )
}
export default ArticleBox;