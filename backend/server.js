const dotenv = require("dotenv").config()
const express = require("express")
const connectDB = require("./config/connectDB")

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
 
 //Create a Task
 app.post("/api/tasks", async (req, res) => {
    console.log(req.body)
    res.send("Task Created")
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