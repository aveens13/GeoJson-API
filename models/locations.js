const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    id:{
        type: String,
        required: [true,"Please give a id for your location"],
        unique: true,
        trim: true,
        maxlength: 10
    },
    address:{ 
        type:String,
        required:true
    },
    location: {
        type: {
          type: String,
          enum: ['Point']
        },
        coordinates: {
          type: [Number],
          index: '2dsphere'
        }
    },
    created:{
        type: Date,
        default: Date.now()
    }

    
})

module.exports = mongoose.model('Location',locationSchema)