import { Schema, model } from 'mongoose';
import { hash, compare } from 'bcrypt';
import { create } from 'domain';
import randomString = require('random-string');

const userSchema = new Schema({
    displayName: { 
        type: String, 
        required: true, 
        minlength: 3, 
        trim: true
    },
    email: { 
        type: String, 
        required: true 
    },
    password: {
        type: String, 
        default:null
    },
    avatar: { 
        type: String,
        default: null,
    },
    location: {
        type: String,
        default: null
    },
    website: {
        type: String,
        default: null
    },
    birthday: {
        type: String,
        default: null
    },
    reputation: {
        type: Number,
        default:0
    },
    status: {
        type:Number,
        default:0
    },
    role:{
        type: String,
        required: true
    },
    activeToken:  {
        type: String,
        default: null
    },
    resetPasswordToken: {
        type: String,
        default: null
    },
    resetPasswordExpires: {
        type: Date,
        default: Date.now()
    },
    creationDate:{
        type: Date,
        default: Date.now()
    },
    lastEditDate: {
        type: Date,
        default:Date.now()
    },
    lastAccessDate: {
        type: Date,
        default: Date.now()
    }
});

const UserModel = model('User',userSchema);

export class User extends UserModel{
    password: string;

    async generateHash(password): Promise<String> {
        const encryptPassword = await hash(password,8);
        return encryptPassword;
    }

    async validatePassword(password: String) : Promise<Boolean> {
        const isValid = await compare(password, this.password);
        return isValid;
    }
}