// Responsible for connecting to the database
const mongoose = require('mongoose');

// Connects to the MongoDB database using Mongoose
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit the process if it fails to connect to the DB
    }
}

module.exports = connectDB;