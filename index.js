// IMPORTACIONES 

const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()

// MIDDLEWARES

//variables de entorno
require('dotenv').config()

//conexion a DB
connectDB()

//habilitar CORS
app.use(cors())

// RUTEO

// Api
app.use('/api/proyectos', require('./routes/proyectos'))
app.use('/api/waves', require('./routes/famousWaves'))

// Monitoreo (Para ver que si funciona)
app.get("/", (req, res) => {
    res.send("Hola Mundo")
})


// SERVIDOR
app.listen(process.env.PORT, () => {
    console.log(`Conectados al servidor en el puerto ${process.env.PORT}`)
})