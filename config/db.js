const mongoose = require('mongoose');
const connmdb =  'mongodb+srv://devadmin:aKDrbJLz6Ab5c4C@devcamp.mclrko7.mongodb.net/?retryWrites=true&w=majority&appName=devcamp';

const connectDB = async () => {
    const conn = await mongoose.connect(connectDB);

    console.log('MongoDB connected');
}

module.exports = connectDB;