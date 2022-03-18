const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,  
    },
    displayName: {
        type: String,
        required: true,
        trim: true,
    },
    photoURL: {
        type: String,
        required: true,
        trim: true,
    },
});
const User = mongoose.model("User", userSchema, "Users");
module.exports = User;