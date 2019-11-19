const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const RecipeSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    prep_time: {
        type: String,
    },
    ingredients: {
        type: String,
    },
    steps: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Recipe = mongoose.model('recipes', RecipeSchema)
