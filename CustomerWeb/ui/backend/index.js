import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"

import CartRoute from "./routes/CartRoute.js"
import ClothesRoute from "./routes/ClothesRoute.js"
import UserAuthRoute from "./routes/UserAuthRoute.js"

dotenv.config()

/* Constants Initializations */
const mongourl = process.env.MONGODB_URL;


/* Functions or objects initializations */
const app = express();


/* Methods initializations */
app.use(express.json());  // Server express to accept json data directly through cURL or postman or others...
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));


/* Establist Database Connection?? */
mongoose.connect(mongourl)
    .then(() => console.log("Database connected"))
    .catch((e) => console.log(e));


/* Test Route */
app.get("/", (req, res) => {
    res.send("Hello Postman!!")
})    


/* Routes */
app.use(UserAuthRoute)
app.use(CartRoute)
app.use(ClothesRoute)
    

/* Start server on port 3000 */
app.listen(3000, () => {
    console.log("Server started on port 3000");
})