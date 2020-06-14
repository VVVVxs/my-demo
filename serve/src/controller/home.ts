import * as Router from 'koa-router';
import * as path from 'path';
import article from '../modal/article';
import { hanldSuccess,hanldError } from '../config/handleUnsual';
export const addArticle = async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    try {
        const { title, content, description } = ctx.request.body;
        const newArticle = new article({ title, content, description });
        newArticle.save();
        ctx.body = newArticle;
    } catch (err) {
        ctx.throw(500);
    }
}
export const getArticle = async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    try {
        const result = await article.findOne({ isDeleted: 0 }).sort({ createBaseOn: -1 }).limit(1);
        ctx.body = result;

    } catch (err) {
        ctx.throw(500);
    }
}

export const getArticleList = async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    try {
        const result = await article.find({}, 'createBaseOn title description')
        ctx.body = result;

    } catch (err) {
        ctx.throw(500);
    }
}
export const getArticleById = async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    try {
        const { id } = ctx.request.body;
        const result = await article.findOne({ _id: id })
        ctx.body = result;

    } catch (err) {
        ctx.throw(500);
    }
}

export const uploadImage = async (ctx: any, next: () => Promise<any>) => {
    const { body, files } = ctx.request;
    try {
        const file = ctx.request.files.file;
        const basename = path.basename(file.path);    //获取图片名称（basename）
        ctx.body = hanldSuccess(`${ctx.origin}/images/${basename}`)
    } catch (err) {
        ctx.body = hanldError(err.toString())
    }
}
