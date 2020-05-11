const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const passport = require('passport')

// Jwt strategy
require('../../utils/auth/strategies/jwt')

const router = express.Router()

// router.get('/', passport.authenticate('jwt', {session: false}) ,function(req, res){

router.get('/', function(req, res){

    const filter = req.query.id || null

    controller.getComentario(filter)
        .then((List)=>{
            response.success(req, res, List, 200)
        })
        .catch((e)=>{
            response.error(req, res, 'UnExpected error', 500, e)
        })

})

router.post('/', function(req, res){

    console.log(req.body)
    controller.addComentario(req.body)
    .then((data)=>{
        response.success(req, res, data, 201)
    })
    .catch((e)=>{
        response.error(req, res, 'Información invalida', 400 ,'Error en el controlador: ' + e)
    })

})

router.patch('/:id', function(req, res){

    console.log("%s %s", req.params.id, req.body.comentario)

    controller.updateComentario(req.params.id, req.body.comentario)
    .then((data)=>{
        response.success(req, res, data, 200)
    })
    .catch((e)=>{
        response.error(req, res, 'Error interno', 500, e)
    })

})

router.delete('/:id', function(req, res){

    controller.deleteComentario(req.params.id)
    .then((data)=>{
        response.success(req, res, `Comentario eliminado`, 200)
    })
    .catch((e)=>{
        response.error(req, res, 'Error interno', 500, e)
    })

})


module.exports = router