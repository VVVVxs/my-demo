import * as React from 'react';
import { List, Avatar, Spin } from 'antd';
import { useRequest } from '@umijs/hooks';
import { ArticleService } from '../../service';
import { reducer, initState, IArticleList } from './reducer';
import { IArticle } from '../../dataTypes/IArticle';
import { useDataApi } from '../../util/hook';
const ConfigBaseURL = require('../../../config/appConfig.js');
const ArticleList = () => {
    const { useReducer } = React;
    const [state, dispatch]: [IArticleList, any] = useReducer(reducer, initState)
    const { data: articleList, error, loading }: { data: IArticle[], error: any, loading: boolean } = useRequest(ArticleService.getArticleList, {})

    const jumpArticleDetail = (e: Event | undefined, id: string) => {
        e ? e.preventDefault() : '';
        window.open(`http://localhost:8080/detail/${id}`);
    }

    return (
        <Spin spinning={loading}>
            <List
                itemLayout="horizontal"
                dataSource={articleList}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a onClick={jumpArticleDetail.bind(null, event, item._id)}>{item.title}</a>}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </Spin>

    )
}
export default ArticleList;