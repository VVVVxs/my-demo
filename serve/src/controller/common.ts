import * as Router from 'koa-router';
import User from '../modal/user';
export const signup = async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    const { username, password } = ctx.request.body;
    const newUser = new User({ username, password });
    let result = {};
    await newUser.save().then((val: any, err: any) => {
        console.log('val', val);
        console.log('err', err);
    });
    console.log('result', result);
    ctx.body = result;
}