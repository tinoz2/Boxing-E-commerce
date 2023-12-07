import mongoose from 'mongoose'

const URI = "mongodb://127.0.0.1:27017/myshop"
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