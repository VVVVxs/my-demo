import * as Router from 'koa-router';
import { article } from '../modal/article';
export const testInit = async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    try {
        console.log('heihei');
        ctx.body = 'hello World';
    } catch (err) {
        ctx.throw(500);
    }
}
export const addArticle = async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    try {
        const { title, content } = ctx.request.body;
        const newArticle = new article({ title, content });
        newArticle.save();
        ctx.body = newArticle;
    } catch (err) {
        ctx.throw(500);
    }
}