import * as Router from 'koa-router'
const router = new Router({
    prefix: '/api',  // 统一前缀，接口地址全部是xxx/api/
})

router.get('/66', async (ctx, next) => {
    console.log('heihei')
    ctx.body = 'Hello World';
})
export default router;