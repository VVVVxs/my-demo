import * as React from 'react';
import { useAppState } from '../home/store/Provider';
import { IInitState } from '../home/store/store';
import { getInitArticle } from '../home/store/request';
import { IArticle } from '../../dataTypes/IArticle';
import './Article.less';

const Article: React.FC = () => {
    const { useEffect, useState, useRef } = React;
    const [state, dispatch]: [IInitState, any] = useAppState();
    // const [article, setArticle] = useState<undefined | IArticle>(undefined);
    const Content: any = useRef(null);
    useEffect(() => {
        (async function getArticle() {
            const b: IArticle = await getInitArticle();
            dispatch({ type: 'GET_INIT_ARTICLE', payload: b })
            if (Content.current !== null && b) {
                Content.current.innerHTML = b.content;
            }

        })();

    }, [])

    return (
        <div className='article'>
            <h1>{state.ininArticle ? state.ininArticle.title : ''}</h1>
            <div ref={Content}>
            </div>
        </div>
    )
};

export default Article;
