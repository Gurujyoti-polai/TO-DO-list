const mongoose = require('mongoose')

const todoschema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true 
    }  
})

module.exports = mongoose.model('Todo', todoschema)