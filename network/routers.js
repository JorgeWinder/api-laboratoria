const express = require('express')
const usuario = require('../components/usuario/network')
const token = require('../components/token/network')
const comentario = require('../components/comentario/network')
const tipo_publicacion = require('../components/tipo_publicacion/network')

const routers = function(server){
    // Cada vez que nuestro server(APP) llame a '/ruta' llamará a nuestro componente de ruta
    server.use('/usuario', usuario)
    server.use('/auth/token', token)
    server.use('/comentario', comentario)
    server.use('/tipo-publicacion', tipo_publicacion)
}

module.exports = routers
