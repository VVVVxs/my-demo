import { Schema, model } from 'mongoose';
const now = ()=>{
    return new Date();
}
const schema = new Schema({
    createBaseOn: { type: Date, default: now },
    title: String,
    content: String,
    isDeleted: { type: Number, default: 0 }
})
export const article = model('article', schema);