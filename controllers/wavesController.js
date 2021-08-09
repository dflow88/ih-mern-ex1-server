const Wave = require('../models/Wave')

exports.getWaves = async (req,res) => {


    try {

        const waves = await Wave.find({})

        res.json(waves)

    } catch (error) {

    }

}

exports.createWaves = async (req, res) => {

    const { name, country, biggestSizeM, season, waveType } = await req.body

    try {
        
        console.log(name)
        const response = await Wave.create({ name, country, biggestSizeM, season, waveType })
        
        res.json(response)

    } catch (error) {

    }
}

exports.updateWaves = async (req, res) => {

    const { waveId, name, country, biggestSizeM, season, waveType } = await req.body

    try {
        
        const response = await Wave.findByIdAndUpdate( waveId, {name, country, biggestSizeM, season, waveType}, {new: true} )
        
        res.json(response)

    } catch (error) {

    }
}

exports.deleteWaves = async (req, res) => {

    const { waveId } = await req.body

    try {
        
        const response = await Wave.findByIdAndDelete(waveId)
        console.log(response)
        res.json(response)

    } catch (error) {

    }
}