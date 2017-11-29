import { Schema, model } from 'mongoose';
var ObjectId = Schema.Types.ObjectId;

var answerSchema = new Schema({
    questionId: {
        type: ObjectId,
        ref: 'Question',
        index: true
    },
    userId: {
        type: ObjectId,
        ref: 'User',
        index: true
    },
    content: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    isAcepted: {
        type: 'Boolean',
        default: false
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

answerSchema.pre('save', function(next) {
    console.log('A new answer "%s" was inserted', this._id);
    next();
});



const AnswerModel = model('Answer', answerSchema);

export class Answer extends AnswerModel{
}