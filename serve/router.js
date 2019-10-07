const Router = require('koa-router');
const router = new Router({
    prefix: '/api',  // 统一前缀，接口地址全部是xxx/api/
})

const home = require('./home/controller');

Object.keys(home).forEach(key => {
    router.all('/' + key, home[key]) // router.all是允许所有的访问方式，如果需要限定则改为指定方式即可
})

module.exports = router;