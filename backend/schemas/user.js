import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model('User', userSchema);