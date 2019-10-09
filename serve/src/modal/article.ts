import { Schema } from 'mongoose';

export const article = new Schema({
    createBaseOn: { type: Date, default: Date.now },
    title: String,
    content: String
})