import * as koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as logger from 'koa-logger';
import * as mongoose from 'mongoose';
import router from './router';
import { db } from './config/dbconfig';
// 连接数据库
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    const app = new koa();
    // 中间件
    app.use(bodyParser());
    app.use(logger());
    app.use(async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            console.log(err);
            err.status = err.statusCode || err.status || 500;
            throw err;
        }
    })
    app.use(router.routes()).use(router.allowedMethods())


    app.listen(3000)
})
mongoose.connection.on('connected', () => {
    console.log('连接已完成')
});

