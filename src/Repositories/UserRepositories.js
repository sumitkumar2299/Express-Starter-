const user = require('../Schema/userSchema')
class UserRepositories{

    async findUser(parameters){
        const response = await user.findOne({...parameters})
        return response;

    }
}

module.exports = UserRepositories;