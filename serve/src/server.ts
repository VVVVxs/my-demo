import * as koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as logger from 'koa-logger';

import router from './router';
const app = new koa();

// 中间件
app.use(bodyParser());
app.use(logger());

app.use(router.routes()).use(router.allowedMethods())


app.listen(3000)