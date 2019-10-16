import * as React from 'react';
import { List, Avatar } from 'antd';
import { reducer, initState, IArticleList } from './reducer';
import { getArticleList } from './request';
const ArticleList = () => {
    const { useReducer, useEffect } = React;
    const [state, dispatch]: [IArticleList, any] = useReducer(reducer, initState)

    useEffect(() => {
        async function getList() {
            const result = await getArticleList();
            dispatch({ type: 'GET_ARTICLE_LIST', payload: result });

        }
        getList();
    }, [])


    return (
        <List
            itemLayout="horizontal"
            dataSource={state.articleList}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
            )}
        />
    )
}
export default ArticleList;