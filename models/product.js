const {Schema} = require('mongoose');
const mongoose = require("mongoose");

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    {timestamps: true, versionKey: false});

// model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;