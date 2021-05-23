const express = require('express');
const mongoose = require("mongoose")
const employeeSchema=new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,   
    },
    email:{
        type:String, 
    },
    gender:{
        type:String,
    },
    phone:{
        type:String
    },
    age:{
        type:Number,
    },
    password:{
        type:String,
    },
    confirmpassword:{
        type:String,
    }
})
const Register=new mongoose.model("Register",employeeSchema)
module.exports=Register;