const user = require('../Schema/userSchema')
class UserRepositories{

    async findUser(parameters){
        const response = await user.findOne({...parameters})
        return response;

    }

    async createUser(userDetails) {
        const response = await user.create(userDetails);
        return response;
    }
}

module.exports = UserRepositories;