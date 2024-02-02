import { Router } from "express"
import Items from "../model/Items.js"

const router = Router()

router.get("/getClothes", async (req, res) => {
    const Item = await Items.find({}).limit(10)
    // console.log(req.cookies.jwt);
    // console.log(Object.keys(Item[0]))
    // console.log(Item[0].Rate);
    // console.log(req.cookies.jwt);
    res.status(200).json(Item)
    // res.send([{}]);
})


export default router