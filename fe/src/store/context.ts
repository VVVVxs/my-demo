import React, { createContext } from 'react';
interface IContext {
    article:  IArticle;
};

interface IArticle {
    _id: string;
    baseCreateOn: Date;
    title: string;
    content: string;
    isDeleted: number;
}

const Context = createContext({
    article: undefined
})