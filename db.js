import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const URI = process.env.MONGO_URI
const db = mongoose.connection

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('DB connected');

    } catch (error) {
        console.log(error);
    }
}

db.once('open', () => {
    console.log('DB connected');
})

db.on('error', (error) => {
    console.log(error);
})

export default connectDB;