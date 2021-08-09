const Proyecto = require('./../models/Proyecto')

exports.obtenerProyectos = async (req,res) => {

    try {

        const proyectos = await Proyecto.find({})

        console.log(proyectos)

        res.json(proyectos)

    } catch (error) {

    }

}

exports.crearProyecto = async (req, res) => {


    const { nombre } = req.body

    try {

        console.log(nombre)

        const response = await Proyecto.create({nombre})

        res.json(response)

    } catch (error) {

    }

}

exports.actualizarProyecto = async (req, res) => {


    const { proyectoId, nombre } = req.body

    try{
        const response = await Proyecto.findByIdAndUpdate(proyectoId, {nombre}, {new: true})
            console.log(response)

            res.json(response)

    } catch (error) {

    }

}

exports.eliminarProyecto = async (req, res) => {

    const { proyectoId } = req.body

    try {
        const response = await Proyecto.findOneAndRemove({_id: proyectoId})
        console.log(response)
        res.json(response)


    } catch (error) {

    }
}