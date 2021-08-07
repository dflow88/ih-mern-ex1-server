//IMPORTACIONES
const express = require('express')
const router = express.Router()

const wavesController = require('../controllers/wavesController')

//RUTEO
router.get('/', wavesController.getWaves)

module.exports = router