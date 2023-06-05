const dotenv = require("dotenv").config()
const express = require("express")
const connectDB = require("./config/connectDB")
//food model 
const Food = require("./model/foodModel")
const routes = require("./routes/Route")

const app = express()

//Middleware
app.use(express.json())
app.use(routes)

//Routes
app.get("/", (req,res) => {
    res.send("Home page")
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