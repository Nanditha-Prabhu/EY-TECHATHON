import cors from "cors"
import express from "express"
import mongoose, { setDriver } from "mongoose"
import User from "./model/User.js"
import Clothes from "./model/Clothes.js"
import Items from "./model/Items.js"


/* Constants Initializations */
const mongourl = "mongodb+srv://user1:user1@cluster0.mbfpvjt.mongodb.net/StylifyAI?retryWrites=true&w=majority";

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
    // console.log(req.body);
    // console.log(username, phoneNo, emailId, password);

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

app.get("/getClothes", async (req, res) => {
    const Item = await Items.find({'ItemId': 'item01164'})
    console.log(Item.ItemName)
    res.status(200).json(Item)
})