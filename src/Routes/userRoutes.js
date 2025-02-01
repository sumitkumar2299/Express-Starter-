// resources = user 
//  /users

const express = require('express');
const { createUser } = require('../Controllers/userController');


// we have to initialize a router object to add routes in a new file 
// routers are used for segregating your routes in a different modules 

const userRouter = express.Router();

userRouter.post('/',createUser); // this is a route registration and createUser is a function 

module.exports = userRouter; // exporting the router objects. 





