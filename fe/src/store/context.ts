import React, { createContext } from 'react';
import ReactDOM from 'react-dom';

import reducer from './reducer';
const initState = {
    count: 0
}
interface IContext {
    article: IArticle;
};

interface IArticle {
    _id: string;
    baseCreateOn: Date;
    title: string;
    content: string;
    isDeleted: number;
}
