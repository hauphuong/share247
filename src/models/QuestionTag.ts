import { Schema, model } from 'mongoose';
var ObjectId = Schema.Types.ObjectId;

var questionTagSchema = new Schema({
    questionId: {
        type: ObjectId,
        ref: 'Question'
    },
    tagId: {
        type: ObjectId,
        ref: 'Tag'
    }
});

const QuestionTagModel = model('QuestionTag', questionTagSchema);

 export class QuestionTag extends QuestionTagModel{
     
 }