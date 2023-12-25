import { Router } from "express"
import User from "../model/User.js"
import Cart from "../model/Cart.js"
import { protectRoutes } from "../utils.js"

const router = Router()

/* Shamelessly copied from stackoverflow
   src: https://stackoverflow.com/questions/59174763/how-to-add-product-to-shopping-cart-with-nodejs-express-and-mongoose
*/
router.post("/addToCart", protectRoutes, async (req, res) => {
    const { productId, quantity, name, price } = req.body

    const user = await User.findOne({ _id: req.userId })
    // console.log(user);

    try {
        let cart = await Cart.findOne({ userId: user._id });  // userID comes from userAuth middleware
        if (cart) {
            // Check if item exists in a user cart and grab the index if exists to update the quantity
            let itemIndex = cart.products.findIndex(p => p.productId == productId)  // returns -1 if note found

            if (itemIndex > -1) {    // to update the parameters of existing products
                let productItem = cart.products[itemIndex]
                productItem.quantity = quantity
                cart.products[itemIndex] = productItem
            } else {
                // If product doesn't exist in cart
                cart.products.push({ productId, quantity, name, price })
            }
            cart = await cart.save()
            return res.status(201).send({ success: true, cart })
        } else {
            const newCart = await Cart.create({
                userId: user._id,
                products: [{ productId, quantity, name, price }]
            })
            return res.status(201).send({ success: true, newCart })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ success: false, status: "Something went wrong" })
    }
})


router.get("/cart", protectRoutes, async (req, res) => {
    // console.log(req.body);
    let cartItems = await Cart.find({ _id: req.userId })
    console.log(cartItems[0].products[0].name);
    res.status(200).json(cartItems)
})

export default router;