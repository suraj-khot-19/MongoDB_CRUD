import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"]
    },
    price: {
        type: Number,
        default: 0,
        required: [true, "please enter product price"]
    },
    quantity: {
        type: Number,
        default: 0,
        required: [true, "please enter product quantity"]
    }
},

    {
        timestamps: true
    }
);

const product = mongoose.model("Product", ProductSchema)

export default product;
