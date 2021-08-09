//IMPORTACIONES
const express = require('express')
const router = express.Router()

const wavesController = require('../controllers/wavesController')

//RUTEO
router.get('/', wavesController.getWaves)

//crear proyecto nuevo
router.post('/create', wavesController.createWaves)

//actualizar proyecto
router.post('/update', wavesController.updateWaves)

//eliminar proyecto
router.post('/delete', wavesController.deleteWaves)

module.exports = router