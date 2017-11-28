import { Schema, model } from 'mongoose';
import { Answer } from './Answer';
var ObjectId = Schema.Types.ObjectId;

const questionSchema = new Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    content: {
        type: String,
        required:true
    },
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    viewCount: {
        type: Number,
        default: 0
    },
    score: {
        type: Number,
        default: 0
    },
    activeToken: {
        type: String,
        default: null
    },
    isResolved: {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
        default: false
    },
    creationDate: {
        type: Date,
        required: true
    },
    lastEditDate: {
        type: Date,
        default: Date.now
    },
    closedDate: {
        type: Date,
        required: false
    }
});  

const QuestionModel = model('Question',questionSchema);

export class Question extends QuestionModel {
    static async findAnswers(id) {
        return Answer.find({questionId:id});
    }
}