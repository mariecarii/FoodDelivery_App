const mongoose = require("mongoose")
//creating schema 

const foodSchema = mongoose.Schema(
    {
        food_name: {
            type: String,
            required: [true, "Please add something, do not leave blank"]
        },
        address_zipcode: {
            type: Number,
            required: true,
        }
    }, {
        timestamps: true
    }

)

//schema needs to be inside model
const Food = mongoose.model("food_name", foodSchema)

module.exports = Food