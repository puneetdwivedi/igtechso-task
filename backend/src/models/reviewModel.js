const mongoose = require("mongoose");
const userModel = require("./userModel");

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: userModel,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    watched: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema, "Review");