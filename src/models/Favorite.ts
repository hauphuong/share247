import { Schema, model } from 'mongoose';
var ObjectId = Schema.Types.ObjectId;

const favoriteSchema = new Schema({
    questionId: {
        type: ObjectId,
        ref: 'Question'
    },
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

const FavoriteModel = model('Favorite', favoriteSchema);

 export class Favorite extends FavoriteModel{
     
 }