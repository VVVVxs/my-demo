import * as Router from 'koa-router';
import * as jwt from 'jsonwebtoken';
import { secretKey } from '../config/index';
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
        const findResult: any = await User.findOne({ username }, (err, user: any) => {
            if (err) {
                result = hanldError('用户名或密码输入错误');
                return;
            }
            if (!user) {
                result = hanldError('当前用户名未注册');
                return;
            }
        });
        await findResult.comparePassword(password, (isMatch: boolean) => {
            if (isMatch) {
                result = hanldSuccess();
                let token = jwt.sign({ username, password }, secretKey, {
                    expiresIn: 60 * 60 * 24,// 授权时效24小时
                })
                ctx.cookies.set('u_token', token, { httpOnly: false });
                ctx.cookies.set('u_user', username,
                    { httpOnly: false, expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) }
                );
                return;
            } else {
                result = hanldError('用户名或密码输入错误');
                return;
            }
        });
    } catch (err) {
        result = hanldError('服务异常');
    }
    ctx.body = result;

}

export const logout = (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    let result = {}
    try {
        ctx.cookies.set('u_token', '', { signed: false, maxAge: 0 });
        result = hanldSuccess('退出成功');
    } catch (err) {
        result = hanldError('服务异常');
    }
    ctx.body = result;
}