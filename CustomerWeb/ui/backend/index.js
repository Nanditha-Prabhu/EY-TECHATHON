const express = require("express");

const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());

const mongourl = "mongodb+srv://user1:user1@cluster0.mbfpvjt.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongourl, {
    useNewUrlParser: true,
}).then(()=>{
    console.log("Database connected");
}).catch((e) => console.log(e));

app.listen(3000, ()=>{
    console.log("Server started");
})

// schema - structure of object
// query - making against db  

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true
    },
    phoneNo: {
        type: Number,
        required: [true, "Phone Number is required"]
    },
    emailId: {
        type: String,
        required: [true, "Email ID is required"],
        unique: true,
        lowercase: true
    },
    password: {
        type: [String, "Password is required"],
        required: true
    }
}, {
    timestamps: true
})
const User = mongoose.model("User", userSchema)

// require("./components/Login")


app.post("/signup", async(req, res)=>{
    // const [username, phoneNo, emailId, password] = req.body;
    const username = req.body.username;
    const phoneNo = req.body.phoneNo;
    const emailId = req.body.emailId;
    const password = req.body.password;

    // try{
    //     await User.create({
    //         username, phoneNo, emailId, password
    //     });
    //     res.send({status:"OK"});
    // } catch(error) {
    //     res.send({ status: "Error"});

    
    // }

    const user = new User({
        username:username,
        phoneNo:phoneNo,
        emailId:emailId,
        password:password
})
user.save();
});