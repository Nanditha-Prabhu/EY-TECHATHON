import cors from "cors"
import express from "express"
import mongoose, { setDriver } from "mongoose"
import User from "./model/User.js"
import Clothes from "./model/Clothes.js"
import Items from "./model/Items.js"

import dotenv from "dotenv"

dotenv.config()

/* Constants Initializations */
const mongourl = process.env.MONGODB_URL;
// const mongourl = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1"

/* Functions or objects initializations */
const app = express();


/* Methods initializations */
app.use(express.json());  // Server express to accept json data directly through cURL or postman or others...
app.use(cors());


/* Establist Database Connection?? */
mongoose.connect(mongourl)
    .then(() => console.log("Database connected"))
    .catch((e) => console.log(e));


/* Handle validation errors */
const handleError = (error) => {
    let errors = {
        emailId: "",
        password: ""
    }
    console.log(error.code);
    if (error.message.includes("User validation failed")) {
        console.log(Object.values(error.errors).forEach(({properties}) => {
            // console.log(properties);
            errors[properties.path] = properties.message;
        }))
        // errors[error.errors.password]
    }

    return errors;
}


app.post("/signup", async (req, res) => {
    const { username, phoneNo, emailId, password } = req.body;

    // ----- testing ---------
    console.log(req.body);

    try {
        await User.create({
            username, phoneNo, emailId, password
        });
        res.send({ status: "OK" });
    } catch (error) {
        const errors = handleError(error);
        res.send(errors);
    }
});


/* Start server on port 3000 */
app.listen(3000, () => {
    console.log("Server started on port 3000");
})

app.get("/", (req, res) => {
    res.send("Hello Postman!!")
})

// app.get("/getClothes", async (req, res) => {
//     const clothes = await Clothes.find()
//     console.log(clothes)
//     res.status(200).json(clothes)
// })

app.get("/getClothes", async (req, res) => {
    const Item = await Items.find({})
    console.log(Item[0].ItemName)
    console.log(Item[0].Rate);
    res.status(200).json(Item)
})