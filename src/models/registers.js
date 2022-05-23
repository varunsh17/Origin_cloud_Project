const mongoose = require("mongoose")
const validator = require('validator');
const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
        }
    },
    phone: {
        type: String,
        unique: true,
        require: true,
        minlength: [10, "Please enter a valid phone number"],
        maxlength: 10,

    },
    adress: {
        type: String,
    },
    City: {
        type: String
    },
    State: {
        type: String
    },
    Country: {
        type: String
    },
    CompanyName: {
        type: String
    },
    Occupation: {
        type: String
    },
    YearsOfExperience: {
        type: Number
    },
    password: {
        type: String,
        require: true,
    },

})
const Register = new mongoose.model("Register", employeeSchema)
module.exports = Register;