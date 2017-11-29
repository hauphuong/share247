import { Schema, model } from 'mongoose';
var ObjectId = Schema.Types.ObjectId;

const badgeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type:Number,
        default:0
    },
    description: {
        type: String,
        default: null
    },
    color: {
        type: String,
        default: '#1d9977'
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

const BadgeModel = model('Badge', badgeSchema);

export class Badge extends BadgeModel{
}