// IMPORTACIONES 

const express = require('express')
const conectDB = require('./config/db')

const app = express()

// MIDDLEWARES

require('dotenv').config()



// RUTEO

// SERVIDOR
app.listen(process.env.PORT, () => {
    console.log(`Conectados al servidor en el puerto ${process.env.PORT}`)
})