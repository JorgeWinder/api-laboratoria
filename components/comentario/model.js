const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
    user: {type: String, ref: 'users'},
    comentario: String,
    tipo_publicacion: {type: Number, ref: 'tipopublicacions'},
    fecha_reg: Date,
})

const model = mongoose.model('comentarios', mySchema)
module.exports = model
