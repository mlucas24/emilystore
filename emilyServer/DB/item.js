const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    mainPhotoURL: {
        type: String,
        required: true,
        trim: true,
    },
    photos: {
        type: [String]
    },
    quantity: {
        type: Number,
        required: true
    }

});
const User = mongoose.model("Item", userSchema, "Items");
module.exports = User;