
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        product_name: {
            type:String, 
            required: true, 
            unique: true,
            trim: true
        },
        Category: {
            type:String, 
            required: true, 
            unique: true,
            enum: ["Men", "Women", "Other"]
        },
        Sub_Category: {
            type:String, 
            required: true,
            enum: ["Clothing", "Footwear", "Toy"]
        },
        color: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            required: true
        }


    }, {timestamps: true}
)

module.exports = mongoose.model( 'Product', ProductSchema)