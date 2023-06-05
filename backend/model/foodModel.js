const mongoose = require("mongoose")
//creating schema 

const foodSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add something, do not leave blank"]
        },
        completed: {
            type: Boolean,
            required: true,
            default: false
        }
    }, {
        timestamps: true
    }

)

//schema needs to be inside model
const Food = mongoose.model("Task", foodSchema)

module.exports = Food