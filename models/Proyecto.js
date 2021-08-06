//IMPORTACIONES
const mongoose = require('mongoose')

//SCHEMA
const proyectoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

//MODELO
const Proyecto = mongoose.model('Proyecto', proyectoSchema)

//EXPORTACION
module.exports = Proyecto