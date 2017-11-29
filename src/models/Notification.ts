import { Schema, model } from 'mongoose';
var ObjectId = Schema.Types.ObjectId;

var notificationSchema = new Schema({
    userRecive: {
        type: ObjectId,
        ref: 'User'
    },
    userSend: {
        type: ObjectId,
        ref: 'User'
    },
    content: {
        type: String,
        require: true
    },
    questionId: {
        type: ObjectId,
        ref: 'Question'
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
const NotificationModel = model('Notification', notificationSchema);
export class Notification extends NotificationModel{
}