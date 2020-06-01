import * as Router from 'koa-router'
import {
    addArticle, getArticle, getArticleList,
    uploadImage, getArticleById
} from './controller/home';
import { signup } from './controller/common';
import { upload } from './config/multer';
const router = new Router({
    prefix: '/api',  // 统一前缀，接口地址全部是xxx/api/
})
// router.post('/login', login)
router.post('/signup', signup)
router.post('/new-article', addArticle); // 新增文章
router.post('/get-article', getArticle); // 获取最新的一篇文章
router.post('/get-article-list', getArticleList); // 获取文章列表
router.post('/get-article-by-id', getArticleById); // 根据id获取文章 
router.post('/upload-image', upload.single('images'), uploadImage) // 上传图片
export default router;