const FamousWave = require('./../models/FamousWave')

exports.getWaves = async (req,res) => {


    try {

        const famousWaves = await FamousWave.find({})

        console.log(famousWaves)

        res.json(famousWaves)

    } catch (error) {

    }

}