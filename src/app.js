const express = require("express")
const app = express();
const path = require("path")
const port = process.env.PORT || 3000;
require("./db/conn")
const Register = require("./models/registers")

const hbs = require("hbs");
const static_path = path.join(__dirname,"../public")
const templates_path = path.join(__dirname,"../templates/views")
const templates_path1 = path.join(__dirname,"../templates/partials")

// HOW TO GET DATA FROM FORM USE BELOW -:
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use(express.static(static_path))
app.set("view engine","hbs")
app.set("views",templates_path)
hbs.registerPartials(templates_path1)


app.get("/",(req,res)=>{
    res.render("register")
})

app.post("/register",async (req,res)=>{
    try{
        const password=req.body.password;
        const cpassword=req.body.confirmpassword;
        if(password===cpassword){
            const registeremployee= new Register({
                firstname: req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                gender:req.body.gender,
                phone:req.body.txtEmpPhone,
                age:req.body.age,
                password:password,
                confirmpassword:cpassword
            })
            console.log(req.body)
            const registered= await registeremployee.save();
            
        }else{
            res.send("WRONG PASSWORDS")
        }

    }catch(error){
        res.status(400).send(error)
        console.log(error)
    }
})







app.listen(port,()=>{
    console.log("running")
})