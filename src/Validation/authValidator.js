const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/serverConfig");

async function isLoggedIn(req,res,next){
    const token = req.cookies['authtoken'];
        if(!token) {
            return res.status(401).json({
                succsess:false,
                data:{},
                error:"Not authenticated",
                message:"No auth token is provided"
            })
        }

        const decoded = jwt.verify(token,JWT_SECRET)

        if(!decoded){
            return res.status(401).json({
                succsess:false,
                data:{},
                error:"Not authenticated",
                message:"invalid Token provided"
            });
        }

        // if reached here then user is authenticated allow them to access the api.
        req.user = {
            email:decoded.email,
            id:decoded.id
        }

        
        next();


}

module.exports = {
    isLoggedIn
}