import { Schema, model } from 'mongoose';
import * as bcrypt from 'bcrypt';
const schema: Schema = new Schema({
    username: {
        type: String,
        required: [true, '请输入用户名'],
        unique: [true, '当前用户名已被注册'],
    },
    password: {
        type: String,
        required: true,
    }
})

// 添加用户保存时中间件对password进行bcrypt加密,这样保证用户密码只有用户本人知道
schema.pre('save', function (next) {
    const user: any = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next();
                }
                user.password = hash;
                next();
            })
        })
    } else {
        return next();
    }
})

// 校验用户输入密码是否正确
schema.methods.comparePassword = async function (passw: string, cb: any) {
    const isMatch =  bcrypt.compareSync(passw, this.password);
    cb(isMatch);
};

export default model('user', schema);