import * as Router from 'koa-router'
import { testInit } from './home/controller';
const router = new Router({
    prefix: '/api',  // 统一前缀，接口地址全部是xxx/api/
})

router.get('/66', testInit);
export default router;