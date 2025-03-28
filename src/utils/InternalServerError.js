const AppError = require("./appError");


class internalServerError extends AppError {
    constructor(){
        super(`it's not you it's our server where something went wrong`,500);
    }
}

module.exports = internalServerError;