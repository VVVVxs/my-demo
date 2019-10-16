import * as Router from 'koa-router'
import { testInit, addArticle, getArticle, getArticleList } from './home/controller';
const router = new Router({
    prefix: '/api',  // 统一前缀，接口地址全部是xxx/api/
})

router.get('/66', testInit);
router.post('/new-article', addArticle);
router.post('/get-article', getArticle);
router.post('/get-article-list', getArticleList);

export default router;