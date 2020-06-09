import * as koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as logger from 'koa-logger';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as Static from 'koa-static';
import * as jwt from 'jsonwebtoken';
import router from './router';
import { db } from './config/dbconfig';
import { whiteList, secretKey } from './config/index';
import { initModal } from './modal/index';

// 连接数据库
mongoose.connect(db, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, initModal).then(() => {
    const app = new koa();
    app.on('error', (err, ctx) => {
        console.error('server error', err);
    })
    // 中间件
    app.use(bodyParser({
        jsonLimit: '16mb'
    }));
    // 保存静态文件（图片）
    app.use(Static(path.join(__dirname, '../static/images')));
    app.use(logger());
    app.use(async (ctx, next) => {
        console.log('444');
        try {
            const url = ctx.originalUrl;
            const referer = ctx.request.header.referer;
            console.log('url', url);
            console.log('referer', referer);
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
                            console.log('decode', decode);
                            await next();
                        }
                    })
                } else {
                    console.log(123);
                    ctx.body = {
                        code: 2,
                        mse: '请登录',
                        data: null
                    }
                }
            }
        } catch (err) {
            console.log('errerrerrerrerr', err);
            ctx.body = {
                code: 500,
                msg: '请求异常',
                data: null,
            }
            ctx.app.emit('error', err, ctx);
        }
    })
    app.use(router.routes()).use(router.allowedMethods())

    app.listen(3000)
})
mongoose.connection.on('connected', () => {
    console.log('连接已完成')
});

