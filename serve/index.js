const koa = require('koa');
const router = require('./router');
const app = new koa();

// 中间件
const serve = require('koa-static');

app.use(serve('./asset'));

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('host', host);
    console.log(`app start listen at http://${host}:${port}`);
})