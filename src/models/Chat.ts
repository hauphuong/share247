import { Schema, model } from 'mongoose';
var ObjectId = Schema.Types.ObjectId;

const chatSchema = new Schema({
    userSend: {
        type: ObjectId,
        ref: 'User'
    },
    userReceive: {
        type: ObjectId,
        ref:'User'
    },
    msg: {
        type: String,
        required:true
    },
    status: {
        type: Boolean,
        default: false
    },
    creationDate: {
        type: Date,
        default:Date.now
    }
});

const ChatModel = model('Chat', chatSchema);

 export class Chat extends ChatModel{
     
 }