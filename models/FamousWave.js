//IMPORTACIONES
const mongoose = require('mongoose')

//SCHEMA
const famousWaveSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: String,
    type: String,
    season: String,
    biggestSizeM: Number
},
    {
        timestamps: true
    }
)

//MODELO
const FamousWave = mongoose.model('famousWaves', famousWaveSchema)

//EXPORTACION
module.exports = FamousWave