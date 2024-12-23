const express = require('express');


const serverConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');

const app = express();

app.use(express.json());
app.use(express.text());






app.listen(serverConfig.PORT, async ()=>{
    await connectDB();
    console.log(`server is running on the port ${serverConfig.PORT}`);
   
})







// single responsibilities principle 
// localhost:3000 -> socket address 


// when you are cloning a project from github then run the command npm install to add node_modules . 


/**
 * rest 
 * soap
 * grpc 
 * graphql
 */