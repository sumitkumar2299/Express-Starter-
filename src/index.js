const express = require('express');
const cookieParser = require('cookie-parser')



const serverConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
// const user = require('./Schema/userSchema');
const userRouter = require('./Routes/userRoutes');
const CartRouter = require('./Routes/CartRoute');
const authRouter = require('./Routes/authRoute');
// const { isLoggedIn } = require('./Validation/authValidator');


const app = express();

// const cors = require('cors');

// app.use(cors())

// app.use(cookieParser);
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}))


// routing middlewares
// if your req routes starts with /user then handle it using userrouter.

app.use('/users',userRouter); // connects the router to the server 
app.use('/carts',CartRouter);
app.use('/auth',authRouter)



// app.get('/ping',isLoggedIn,(req,res)=>{
//     console.log(req.body);
//     console.log(req.cookies);
//     return res.json({message:"pong"});
// })

app.get('/test', (req, res) => {
    console.log("received ping request")
    res.json({ message: "API is working!" });
});




app.listen(serverConfig.PORT, async ()=>{
    await connectDB();
    console.log(`server is running on the port ${serverConfig.PORT}`);


    // const newUser = await user.create({
    //     email: "abc@gmail.com",
    //     password: '123456',
    //     FirstName: "sumit",
    //     lastName: "kumar",
    //     mobileNumber: "1234567891"
    // });
    
    // console.log("created new user");
    // console.log(newUser); 
   
})



//localhost: 5500/users = post 
//localhost: 5500/cart/?55455 - get 


// single responsibilities principle 
// localhost:3000 -> socket address 


// when you are cloning a project from github then run the command npm install to add node_modules . 


/**
 * rest 
 * soap
 * grpc 
 * graphql
 */

