// const {findUser} = require("../Repositories/UserRepositories")
const Repositories = require('../Repositories/UserRepositories')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRY } = require('../config/serverConfig');

const userRepo = new Repositories;

async function loginUser(authDetails){
    const email = authDetails.email;
    const plainPassword = authDetails.password;



    

    // check if their is a registered user with the given email.
     const user = await userRepo.findUser({email});

     
     
     

    if(!user){
        throw{message:"No user found with the given email ",statusCode:404};
    }

    console.log("hey it's working or not");


    // if the user is found we need to compare plaincoming password with hashed password
    
    const iSPasswordValidated = await bcrypt.compare(plainPassword,user.password)
    if(!iSPasswordValidated){
        throw{message:"invalid password, please try again",statusCode:401}
    }


    // if the password is validated, create a token and return it 

    const token = jwt.sign({email:user.email,id:user.id},JWT_SECRET,{
        expiresIn:JWT_EXPIRY
    })

    return token


}


module.exports = {
    loginUser
}