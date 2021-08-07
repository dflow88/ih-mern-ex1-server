const Wave = require('../models/Wave')

exports.getWaves = async (req,res) => {


    try {

        const waves = await Wave.find({})

        console.log(waves)

        res.json(waves)

    } catch (error) {

    }

}