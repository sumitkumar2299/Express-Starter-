const UserRepositories = require("../Repositories/UserRepositories");
const userService = require("../Services/userService");

// const {model} = require('mongoose')

// function createUser(req,res){
//     console.log("create user controller called");
//     console.log(req.body);

//     return res.json({
//         message:"ok"
//     })
// }

// module.exports = {
//     createUser
// }

async function createUser(req,res) {
    
    
    
    // todo: register the user 
    const UserService = new userService(new UserRepositories());
    console.log(UserService);
    


    try{
        const response = await UserService.registerUser(req.body);
        
    return res.json({
        message: 'successfully registered the user',
        success:true,
        data:response,
        error:{}
    });
}
    catch(error){
        return res.json({
            success:false,
            message:error.reason,
            data:{},
            error: error
            

        })
    }


    }

module.exports = {
    createUser
}