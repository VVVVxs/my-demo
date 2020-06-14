import * as koa from 'koa';
// import * as bodyParser from 'koa-bodyparser';
import * as logger from 'koa-logger';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as Static from 'koa-static';
import * as koa_body from 'koa-body';
import router from './router';
import { db } from './config/dbconfig';
import { VerifyUser } from './config/verifyUser';
import { initModal } from './modal/index';

// 连接数据库
mongoose.connect(db, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, initModal).then(() => {
    const app = new koa();
    app.on('error', (err, ctx) => {
        console.error('server error', err);
    })
    // 中间件
    // app.use(bodyParser({
    //     jsonLimit: '16mb'
    // }));
    // 保存静态文件（图片）
    app.use(koa_body({
            multipart: true,
            formidable: {
                uploadDir: path.resolve(__dirname, "../static/images"),
                keepExtensions: true
            }
        })).use(Static(path.resolve(__dirname, "../static")))

    app.use(logger());
    app.use(VerifyUser);
    app.use(router.routes()).use(router.allowedMethods())

    app.listen(3000)
})
mongoose.connection.on('connected', () => {
    console.log('连接已完成')
});

