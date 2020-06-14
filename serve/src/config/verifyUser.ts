import * as jwt from 'jsonwebtoken';
import * as Router from 'koa-router';
import { whiteList, secretKey } from './index';

export const VerifyUser = async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    try {
        const url = ctx.originalUrl;
        const referer = ctx.request.header.referer;
        if (whiteList.includes(url)) {
            await next();
        } else {
            // 验证是否登录
            const uerToken = ctx.cookies.get('u_token');
            if (uerToken) {
                await jwt.verify(uerToken, secretKey, async (err, decode) => {
                    if (err) {
                        ctx.body = {
                            code: 2,
                            mse: '请登录',
                            data: referer
                        }
                    } else {
                        await next();
                    }
                })
            } else {
                ctx.body = {
                    code: 2,
                    mse: '请登录',
                    data: referer
                }
            }
        }
    } catch (err) {
        ctx.body = {
            code: 500,
            msg: '请求异常',
            data: null,
        }
        ctx.app.emit('error', err, ctx);
    }
}