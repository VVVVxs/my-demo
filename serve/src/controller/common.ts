import * as Router from 'koa-router';
import User from '../modal/user';
export const signup = async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    try {
        const { username, password } = ctx.request.body;
        const newUser = new User({ username, password });
        newUser.save((a, b) => {
            console.log('a', a);
            console.log('b', b);
        });
        ctx.body = newUser;
    } catch (err) {
        console.log('err', err);
        ctx.throw(500);
    }
}