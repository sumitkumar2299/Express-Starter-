const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:[true,"product name is required"],
        minLength:[5,"product must be of 5 characters"],
        trim:true
    },
    description:{
        type:String,
        minLength:[5,"product description must be of 5 characters"],
    },
    productImage:{
        type:String,

    },
    price:{
        type:Number,
        required:[true,"product price is required"]
    },
    category:{
        type:String,
        enum:["veg","non-veg","drinks","sides"],
        // it gives certain sets of properties or categories 
        default:'veg'
    },
    inStock:{
        type:Boolean,
        required:[true,"in stock status is required"],
        default:true,
    }

},{
    timestamps:true
});

const product = mongoose.model('product',productSchema);
module.exports = product
