const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const standardAlloySchema = new Schema({
    country: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    density: {
        type: Number,
        required: true
    },
    reference: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('StandardAlloy', standardAlloySchema);
