import * as multer from 'koa-multer';
import * as path from 'path';
const storage = multer.diskStorage({
    // 配置图片上传的目录
    destination: function (req, fill, cb) {
        cb(null, path.join(__dirname, '../../static/images'))
    },
    // 修改文件名称
    filename: function (req, fill, cb) {
        const filename = (fill.originalname).split(".") //以点分割成数组，数组的最后一项就是后缀名
        cb(null, Date.now() + '.' + filename[filename.length - 1]);
    }
})

//加载配置
export const upload = multer({ storage: storage });