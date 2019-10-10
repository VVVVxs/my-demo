import { Schema, model } from 'mongoose';

const schema = new Schema({
    createBaseOn: { type: Date, default: Date.now },
    title: String,
    content: String,
    isDeleted: { type: Number, default: 0 }
})
export const article = model('article', schema);