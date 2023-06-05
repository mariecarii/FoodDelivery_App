const express = require("express")

const app = express()

const PORT = process.env.port || 8000

//Routes
app.get("/", (req,res) => {
    res.send("Home page")
 })
 

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})