import mongoose from "mongoose"

const { Schema, model } = mongoose

/* Shamelessly copied from stackoverflow
   src: https://stackoverflow.com/questions/59174763/how-to-add-product-to-shopping-cart-with-nodejs-express-and-mongoose
*/
const CartSchema = Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    products: [{
        productId: String,
        quantity: Number,
        name: String,
        price: Number
    }],
    active: {
        type: Boolean,
        default: true
    },
    modifiedOn: {
        type: Date,
        default: Date.now
    }
},
    { timestamps: true }
);

const cart = model("Cart", CartSchema)

export default cart

