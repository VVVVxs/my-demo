import * as React from 'react';
import { Spin } from 'antd';
import { useRequest } from '@umijs/hooks';
import { ArticleService } from '../../service';
import { Article } from '../comon';

const ArticleDetail = () => {
    const pathname: string = window.location.pathname;
    const acticleId: string = pathname.substring(pathname.lastIndexOf('/') + 1)
    const { data, loading } = useRequest(ArticleService.getArticleById.bind(null, acticleId))
    return (
        <Spin spinning={loading}>
            <Article detail={data} />
        </Spin>
    )
}
export default ArticleDetail;