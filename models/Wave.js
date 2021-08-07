//IMPORTACIONES
const mongoose = require('mongoose')

//SCHEMA
const waveSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: String,
    waveType: String,
    biggestSizeM: String,
    season: String
},
    {
        timestamps: true
    }
)

//MODELO
const Wave = mongoose.model('Wave', waveSchema)

//EXPORTACION
module.exports = Wave