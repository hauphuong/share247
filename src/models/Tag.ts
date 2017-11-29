import { QuestionTag } from './QuestionTag';
import { Schema, model } from 'mongoose';
var ObjectId = Schema.Types.ObjectId;

const tagSchema = new Schema({
    tagName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        default: 0
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    lastEditDate: {
        type: Date,
        default: Date.now
    }

});

const TagModel = model('Tag',tagSchema);

 export class Tag extends TagModel{
    static async getQuestionByTag(id) {
        const questions = await QuestionTag.find({tagId: id});
        return questions;
    }
 }