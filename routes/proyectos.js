//IMPORTACIONES
const express = require('express')
const router = express.Router()

const proyectoController = require('./../controllers/proyectoController')

//RUTEO

//obtencion de los proyectos
router.get('/', proyectoController.obtenerProyectos)

//crear proyecto nuevo
router.post('/crear', proyectoController.crearProyecto)

//actualizar proyecto
router.post('/actualizar', proyectoController.actualizarProyecto)

//eliminar proyecto
router.post('/eliminar', proyectoController.eliminarProyecto)

module.exports = router