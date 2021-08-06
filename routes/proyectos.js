//IMPORTACIONES
const express = require('express')
const router = express.Router()

const proyectoController = require('./../controllers/proyectoController')

//RUTEO
router.get('/', proyectoController.obtenerProyectos)

module.exports = router