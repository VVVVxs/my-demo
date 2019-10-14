import * as React from 'react';
import { useAppState } from '../home/store/Provider';
import { IInitState } from '../home/store/store';
import { getInitArticle } from '../home/store/request';

const Article: React.FC = () => {
    const { useEffect } = React;
    const [state, dispatch]: [IInitState, any] = useAppState();

    useEffect(() => {
        const a = async () => {
            const b = await getInitArticle()
            console.log(b);
        }
        a();

    }, [])

    return (
        <div>
            {/* <h1>{state.ininArticle ? state.ininArticle.title : ''}</h1>   */}
            <button onClick={async () => dispatch({ type: 'GET_INIT_ARTICLE', payload: 100 })}>点击+1</button>
        </div>
    )
};

export default Article;
