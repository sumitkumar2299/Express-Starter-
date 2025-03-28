const { loginUser } = require("../Services/authService");


async function login(req,res){

    try{
        // console.log("login function is called")
        const loginPayload = req.body; // get email and password from the user
       // auth service
       const response = await loginUser(loginPayload)

       res.cookie("authToken",response,{
        httpOnly:true,
        secure:false,
        maxAge: 7*24*60*1000
       })

     

       return res.status(200).json({
        success:true,
        message:"Logged in succesfully",
        data:{},
        error:{}

       })

        
    }
    catch(error){
        // console.log("login function is not working properly ")
        return res.status(401).json({
            success:false,
            data: {},
            message:error.message,
            error:error
        })
    }
   

}

module.exports = {
    login
}