import { Schema, model } from 'mongoose';
var ObjectId = Schema.Types.ObjectId;

const reportSchema = new Schema({
    userReported: {
        type: ObjectId,
        ref: 'User'
    },
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    questionId: {
        type: ObjectId,
        ref: 'Question'
    },
    answerId: {
        type: ObjectId,
        ref: 'Answer'
    },
    type: {
        type: String,
        required: true
    },
    content: {
        type: String,
        default: null
    },
    status: {
        type: Boolean,
        default: false
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

const ReportModel = model('Report', reportSchema);

 export class Report extends ReportModel{
     
 }