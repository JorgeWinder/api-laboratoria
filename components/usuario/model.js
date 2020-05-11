const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
    _id: String,
    nombre: String,
    password: String,
    date: Date,
})

const model = mongoose.model('users', mySchema)
module.exports = model
