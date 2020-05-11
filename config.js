/* 
Habilitar referencia 'dotenv'
para el uso de variables de entorno de producción en el proyecto.
Variables deben estar en el archivo .env
*/

//require('dotenv').config()

const config = {
    DB_URI: process.env.DB_URI || 'mongodb+srv://user-mbd:92kTFt6OQqlKe1Gu@cluster0-qmwio.gcp.mongodb.net/laboratoria',
    PORT: process.env.PORT || 3001,
    HOST: process.env.HOST || 'http://localhost',
    authJwtSecret: process.env.SECRET || 'secreto'
}

module.exports = {
    config
}