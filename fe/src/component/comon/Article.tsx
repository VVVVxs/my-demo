import * as React from 'react';
import { useAppState } from '../home/store/Provider';
import { IInitState } from '../home/store/store';

const Article: React.FC = () => {
    const [state, dispatch]: [IInitState, any] = useAppState();
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'GET_INIT_ARTICLE', payload: 100 })}>点击+1</button>
        </div>
    )
};

export default Article;
