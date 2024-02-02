import bcrypt from "bcrypt"
import mongoose from "mongoose"

const {Schema, model} = mongoose

const userSchema = new Schema({
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
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Minimum length of password must be 6 characters"]
    }
}, {
    timestamps: true
})

/* Mongoose hook which fires a function before(pre) or after(post) certain event (eg,. saving doc to mongo)  */
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

const User = model("User", userSchema)

// Utils
// userSchema.statics.login((email, password) => {
//     const user = this.findOne({ email });
//     if (user) {
//         if (user.password === password) {
//             // redirect to the home page
//         }
//         throw Error("Invalid User Password");
//     }
//     throw Error("Invalid User Email");
// })

export default User