const mongoose = require('mongoose');

const Schema= mongoose.Schema;

const elementSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    symbol:{
        type:String,
        required:true,
        unique:true
    },
    atomicNumber:{
        type:Number,
        required:true,
        unique:true
    },
    density:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Element',elementSchema);