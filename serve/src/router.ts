import * as Router from 'koa-router'
import {
    testInit, addArticle, getArticle, getArticleList,
    uploadImage, getArticleById
} from './home/controller';
import { upload } from './config/multer';
const router = new Router({
    prefix: '/api',  // 统一前缀，接口地址全部是xxx/api/
})

router.get('/66', testInit);
router.post('/new-article', addArticle);
router.post('/get-article', getArticle);
router.post('/get-article-list', getArticleList);
router.post('/get-article-by-id', getArticleById);
router.post('/upload-image', upload.single('images'), uploadImage)
export default router;