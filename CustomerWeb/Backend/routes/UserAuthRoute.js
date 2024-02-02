import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { handleError } from "../utils.js"
import { Router } from "express"
import User from "../model/User.js"

const router = Router()

/* Signup route */
router.post("/signup", async (req, res) => {
    const { username, phoneNo, emailId, password } = req.body

    try {
        await User.create({ username, phoneNo, emailId, password })
        return res.json({ success: true, status: "New User Created" })
    } catch (err) {
        console.log(err)
        const errors = handleError(err)
        return res.status(200).json({ success: false, status: "Something went wrong while creating user: " + err, errors })
    }
})


/* Signin route */
router.post("/signin", async (req, res) => {
    const { emailId, password } = req.body

    // ---------------- testing ---------------
    // console.log(req.body);

    try {
        const user = await User.findOne({ emailId })

        if (user) {
            console.log(user._id);
            if (await bcrypt.compare(password, user.password)) {
                let token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' })
                // res.cookie("jwt", token, {
                //     httpOnly: true,
                //     secure: true,
                //     sameSite: 'None',
                //     maxAge: 3 * 24 * 60 * 60 * 1000,   // Cookie lifespan: 3 days
                //     domain: 'localhost'
                // })
                // console.log(token);
                return res.status(200).json({ token, success: true })
            } else {
                throw Error("Incorrect Password")
            }
        } else {
            throw Error("Incorrect Email")
        }
    } catch (err) {
        console.log(err);
        const errors = handleError(err)
        return res.json({ errors })
    }
})


export default router