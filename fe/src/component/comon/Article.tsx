import * as React from 'react';
import { IArticle } from '../../dataTypes/IArticle';
import './Article.less';
interface IArticleProps {
    detail: IArticle | undefined,
}
const Article = (props: IArticleProps) => {
    const { useEffect, useRef } = React;
    const Content: any = useRef(null);

    useEffect(() => {
        if (Content.current !== null && props.detail && props.detail.content) {
            Content.current.innerHTML = props.detail.content;
        }

    }, [props])

    console.log(props);

    return (
        <div className='article'>
            <h1>{props.detail ? props.detail.title : ''}</h1>
            <div className='description'>
                <p><span>摘要：</span>{props.detail ? props.detail.description : ''}</p>
            </div>
            <div ref={Content}>
            </div>
        </div>
    )
};

export default Article;
