const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const passport = require('passport')

// Jwt strategy
require('../../utils/auth/strategies/jwt')

const router = express.Router()

// router.get('/', passport.authenticate('jwt', {session: false}) ,function(req, res){
    router.get('/', function(req, res){

    controller.getTipoPublicacion()
        .then((userList)=>{
            response.success(req, res, userList, 200)
        })
        .catch((e)=>{
            response.error(req, res, 'UnExpected error', 500, e)
        })

})

router.post('/', function(req, res){

    controller.addTipoPublicacion(req.body)
    .then((data)=>{
        response.success(req, res, data, 201)
    })
    .catch((e)=>{
        response.error(req, res, 'Información invalida', 400 ,'Error en el controlador: ' + e)
    })

})


module.exports = router