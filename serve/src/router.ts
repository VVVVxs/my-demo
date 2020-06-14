import * as Router from 'koa-router'
import {
    addArticle, getArticle, getArticleList,
    uploadImage, getArticleById
} from './controller/home';
import { signup, signin, logout } from './controller/login';
import { getUerInfo } from './controller/app';
import { upload } from './config/multer';
const router = new Router({
    prefix: '/api',  // 统一前缀，接口地址全部是xxx/api/
})
router.post('/signin', signin)
router.post('/signup', signup)
router.post('/logout', logout)
router.post('/get-user-info', getUerInfo)
router.post('/new-article', addArticle); // 新增文章
router.post('/get-article', getArticle); // 获取最新的一篇文章
router.post('/get-article-list', getArticleList); // 获取文章列表
router.post('/get-article-by-id', getArticleById); // 根据id获取文章 
// router.post('/upload-image', upload.single('images'), uploadImage) // 上传图片
router.post('/upload-image', uploadImage) // 上传图片
export default router;