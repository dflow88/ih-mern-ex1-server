//IMPORTACIONES
const express = require('express')
const router = express.Router()

const famousWavesController = require('./../controllers/famousWavesController')

//RUTEO
router.get('/', famousWavesController.getWaves)

module.exports = router