const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: [true, "First name is required"],
        minLength: [5,"First name must be atleast 5 character long"],
        lowercase: true,
        trim: true, // if user gives extra spaces then it will automatically remove it 
        maxlength: [20,"first name should be less than 20 characters"],
    },

    lastName: {
        type: String,
        required: [true, "First name is required"],
        minLength: [5,"First name must be atleast 5 character long"],
        lowercase: true,
        trim: true, // if user gives extra spaces then it will automatically remove it 
        maxlength: [20,"first name should be less than 20 characters"],
    },

    mobileNumber: {
        type: String,
        trim: true,
        maxlength:[10,"Phone number should be of length 10"],
        unique: [true,"phone number is already in use"],
        required:[true,"phone number should be provided"]
    },
    email:{
        type: String,
        trim: true,
        required: [true,"Email should be provided"],
        unique: [true,"Email is already in use "],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required : [true,"password should be provided"],
        minLength: [6, "Password should be minimum 6 character long"]
    },

  


},{
    timestamps:true
});


const user = mongoose.model("User",userSchema); //collection 

module.exports = user;