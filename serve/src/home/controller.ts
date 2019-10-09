import * as Router from 'koa-router';
export const testInit = async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    try {
        console.log('heihei');
        ctx.body = 'hello World';
    } catch (err) {
        ctx.throw(500);
    }
}