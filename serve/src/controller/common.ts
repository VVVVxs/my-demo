import * as Router from 'koa-router';
import User from '../modal/user';
import { hanldError, hanldSuccess } from '../config/handleUnsual';
export const signup = async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    let result = {};
    try {
        const { username, password } = ctx.request.body;
        const newUser = new User({ username, password });
        const res = await newUser.save();
        if (res) {
            result = hanldSuccess();
        }
    } catch (err) {
        if (err.code === 11000) {
            result = hanldError('该用户名已存在');
        }
    }
    ctx.body = result;
}

export const signin = async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    let result = {}
    try {
        const { username, password } = ctx.request.body;
        await User.findOne({ username }, (err, user: any) => {
            if (err) {
                result = hanldError('用户名或密码输入错误');
                return;
            }
            user.comparePassword(password, (err: any, isMatch: boolean) => {
                console.log('isMatch', isMatch);
                if (isMatch) {
                    result = hanldSuccess();
                    return;
                } else {
                    result = hanldError('用户名或密码输入错误');
                    return;
                }
            });
        });

    } catch (err) {
        console.log('tryerr', err);
    }
    ctx.body = result;
}