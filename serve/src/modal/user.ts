import { Schema, model } from 'mongoose';
import * as bcrypt from 'bcrypt';
const schema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        index: { unique: true }
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
                console.log('hash', hash);
                user.password = hash;
                next();
            })
        })
    } else {
        return next();
    }
    console.log('this', this);
})

// 校验用户输入密码是否正确
schema.methods.comparePassword = function (passw: any, cb: any) {
    bcrypt.compare(passw, this.password, (err, isMatch) => {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

export default model('user', schema);