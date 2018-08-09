/**
 * Tshirt
 *
 * @module      :: Model
 * @description :: Represent data model for the Tshirts
 * @author		:: Joshim Uddin
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tshirt = new Schema({
    model: {
        type: String,
        required: true
    },
    style: {
        type: String,
        enum: ['Casual', 'Vintage', 'Alternative'],
        required: true
    },
    size: {
        type: Number,
        enum: [36, 38, 40, 42, 44, 46],
        required: true
    },
    colour: {
        type: String,
        enum: ['White', 'Black', 'Red', 'Blue', 'Pink'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    modified: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tshirt', Tshirt);