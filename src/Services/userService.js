class userService {

    constructor(userRepository){
        // in the argument we will expect userRepository object 
        this.userRepository = userRepository;
    }
    async registerUser(userDetails){
        // it will create a brand new user in the database

        // 1. we need to check if the user with this email and mobile number is already exist or not 
        const user = await this.userRepository.findUser({
            email: userDetails.email,
            mobileNumber: userDetails.mobileNumber
        })
        // 2. if not then create the user in the databases 

        if(user){
            // we found a user
            throw{reason: "user with the given email and mobile number already exist", statusCode: 400}
        }
        // 3. return the details of the created user 
    }
}