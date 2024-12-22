const express = require('express');

const serverConfig = require('./config/serverConfig');

const app = express();
const PORT = process.env.PORT;

app.listen(serverConfig.PORT,()=>{
    console.log(`server is running on the port ${serverConfig.PORT}`);
})



// single responsibilities principle 
// localhost:3000 -> socket address 
