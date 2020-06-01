import * as koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as logger from 'koa-logger';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as Static from 'koa-static';
import router from './router';
import { db } from './config/dbconfig';
import { initModal } from './modal/index';
// 连接数据库
mongoose.connect(db, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, initModal).then(() => {
    const app = new koa();
    // 中间件
    app.use(bodyParser({
        jsonLimit: '16mb'
    }));
    // 保存静态文件（图片）
    app.use(Static(path.join(__dirname, '../static/images')));
    app.use(logger());
    app.use(async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            console.log('errerrerrerrerr', err);
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

