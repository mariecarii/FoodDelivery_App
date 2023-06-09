const express = require("express")
const Food = require("../model/foodModel")
const router = express.Router()
const { create } = require("../controllers/controller")

 //Create a Food and Zipcode Entry
 router.post("/api/foods", create)

  //Read data
router.get("/api/foods", async (req,res) => {
    try {
        //whenever you want to refer to somehting in your database must use Model to connect (in this example Food)
        //.find(), you can add parameters inside () on what to find, otherwise leaving blank will return all data
        const foods = await Food.find()
        res.status(200).json(foods)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
})

module.exports = router 