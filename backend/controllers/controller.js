const Food = require("../model/foodModel")

const create = async (req,res) => {
    try {
        const food = await Food.create(req.body)
        res.status(200).json(food)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

module.exports = {
    create
}