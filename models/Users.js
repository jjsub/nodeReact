const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;


// Create Schema
const userSchema = new Schema({
    googleId: String,
    name: String,
    email: String
});

// Mongoose Class creation
mongoose.model('users', userSchema);