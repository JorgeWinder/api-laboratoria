const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const bcrypt = require('bcryptjs')

passport.use(
    new BasicStrategy( function(username, password, cb){


        if(username!= 'jorge.winder@gmail.com' || password!='1234'){
            return cb('{"error": "Datos invalidos"}', false)
        }

        const user = {username: username, email: 'jorge.winder@gmail.com'}
        
        return cb(null, user)
    })
)