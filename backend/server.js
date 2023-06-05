const dotenv = require("dotenv").config()
const express = require("express")
const connectDB = require("./config/connectDB")

const app = express()


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