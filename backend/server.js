const dotenv = require("dotenv").config()
const express = require("express")
const connectDB = require("./config/connectDB")
//food schema 
const Food = require("./model/foodModel")

const app = express()

//Middleware
app.use(express.json())
// const logger = (req, res, next) => {
//     console.log("Middleware ran")
//     next()
// }

//Routes
app.get("/", (req,res) => {
    res.send("Home page")
 })
 
 //Create a Food and Zipcode Entry
 app.post("/api/foods", async (req, res) => {
    try {
        const food = await Food.create(req.body)
        res.status(200).json(food)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
 })

 //Read data
app.get("/api/foods", async (req,res) => {
    try {
        //whenever you want to refer to somehting in your database must use Model to connect (in this example Food)
        //.find(), you can add parameters inside () on what to find, otherwise leaving blank will return all data
        const foods = await Food.find()
        res.status(200).json(foods)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
})
const PORT = process.env.port || 8000

const startServer = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}
startServer()