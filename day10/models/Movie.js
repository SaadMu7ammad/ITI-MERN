const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    title: String,
    description: String,
    rate: Number,
    image:String
})
module.exports = mongoose.model('movies', movieSchema);
