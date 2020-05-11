const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
    _id: {type: Number, default: 2},
    descripcion: String,
    fecha_reg: Date,
})

const model = mongoose.model('tipopublicacions', mySchema)
module.exports = model
