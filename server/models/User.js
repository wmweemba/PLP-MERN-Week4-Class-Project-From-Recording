// Responsible for connecting to the database
const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["developer", "admin"], default: "developer" }
})

module.exports = mongoose.model('User', userSchema);