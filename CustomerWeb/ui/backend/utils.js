/* Utils.js is not a best suited name for this functionality
   So, change it when to name that best suits this file functionality
*/

import jwt from "jsonwebtoken"

const protectRoutes = (req, res, next) =>  {
    let authHeader = req.headers['authorization']
    let token = authHeader.split(' ')[1]
    // console.log("Debugging: "+token);

    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decodeToken) => {
            // console.log(decodeToken); // Testing
            if (err)
                return res.send({ success: false, loc: "/Signin", error: err.message })
            req.userId = decodeToken.id
            next()
        })
    } else {
        console.log("No token stored in cookie :)");
        return res.send({ success: true, loc: "/Siginin", error: err.message })
    }
}

/* Handle validation errors */
const handleError = (err) => {
    // err -> { message, code }
    // message: Contains error messages
    // code contains, error code returned by mongodb (syntax) [11000 means duplicate key error]

    let val_errors = {
        username: "",
        phoneNo: "",
        emailId: "",
        password: ""
    }

    if (err.message === 'Incorrect Email')
        val_errors.emailId = err.message

    if (err.message === 'Incorrect Password')
        val_errors.password = err.message

    if (err.code === 11000) {
        val_errors.emailId = "Email is already used"
        return val_errors
    }

    if (err.message.includes("User validation failed"))
        Object.values(err.errors).map(({ properties }) => {
            val_errors[properties.path] = properties.message
        })

    return val_errors
}


/* Default is required, so this is just a placeholder (not related to this context) */
export default () => {
    return Math.PI
}

/* This is what we are using */
export { protectRoutes, handleError }