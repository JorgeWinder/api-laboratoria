const express = require('express')
const response = require('../../network/response')
// const controller = require('./controller')

const passport = require('passport')
const jwt = require('jsonwebtoken')

const { config } = require('../../config')

// Basic strategy
require('../../utils/auth/strategies/basic')

const router = express.Router()

// router.post('/', passport.authenticate('basic', { session: false }), function(req, res) {

//     try {
//         res.send({ username: req.user.username , password: req.user.email});
//     } catch (error) {
//         response.error(req, res, 'UnExpected error', 500, JSON.parse(error))    
//     }
    
// });


router.post('/', function(req, res, next) {

    
    passport.authorize('basic', function(error, user){
        try {
        
            if(error || !user){
            //    return res.status(400).send(error)
               return response.error(req, res, JSON.parse(error), 200, error)
            }

            req.login(user, { session: false}, async function(error){

                if(error){
                    next(error)
                }

                const payload = {sub: user.username, email: user.email}
                const token = jwt.sign(payload, config.authJwtSecret, {
                    expiresIn: "15m"
                })

                response.success(req, res, {access_token: token}, 200)
            })
        } catch (error) {
            response.error(req, res, 'UnExpected error', 500, error)
        }
    })(req, res)
    
});


module.exports = router