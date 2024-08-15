const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const compositionSchema = new Schema({
    element: {
      type: Schema.Types.ObjectId,
      ref: 'Element',
      required: true
    },
    percentage: {
      type: Number,
      required: true
    }
}, { _id: false }); // Disable the automatic generation of _id for subdocuments

// Define the schema for a Part
const partSchema = new Schema({
    partCode: {
        type: String,
        required: true,
        unique: true // Ensure each part has a unique code
    },
    userId: {
        type: String,
        required: true
    },
    partName: {
        type: String,
        required: true
    },
    composition: [compositionSchema], // Array of element compositions
    standardAlloyId: {
        type: String, // Store the ID as a string
        required: false // This field is optional
    }
});

module.exports = mongoose.model('Part', partSchema);
