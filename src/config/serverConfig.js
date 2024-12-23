const dotenv = require('dotenv');
dotenv.config();

//exporting environment variable that project uses. 
module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL
}