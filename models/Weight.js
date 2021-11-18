const mongoose = require('mongoose');

const WeightSchema = mongoose.Schema({
    id: String,
    userId:{
        type: String,
        required: true
    },
    weight:{
        type: Number,
        required: true
    },
    date:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('weights', WeightSchema);