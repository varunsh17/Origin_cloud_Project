const express = require("express")
const app = express();
const path = require("path")
const port = process.env.PORT || 3000;
require("./db/conn")
const Register = require("./models/registers")

const static_path = path.join(__dirname, "../public")
const templates_path = path.join(__dirname, "../templates/views")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(express.static(static_path))
app.set("view engine", "ejs")
app.set("views", templates_path)



app.get("/", (req, res) => {
    res.render("register")
})
app.get("/login", (req, res) => {
    res.render("login")
})
app.post("/register", async (req, res) => {
    try {
        const password = req.body.password;
        const firstname = req.body.firstname;
        const email = req.body.email;
        const companyName = req.body.companyName;
        const experience = req.body.experience;
        const number = req.body.number;
        const adress = req.body.adress;
        const state = req.body.state;
        const city = req.body.city;
        const occupation = req.body.occupation;
        const country = req.body.country;

        const registeremployee = new Register({
            firstname: firstname,
            email: email,
            phone: number,
            adress: adress,
            City: city,
            State: state,
            Country: country,
            CompanyName: companyName,
            Occupation: occupation,
            YearsOfExperience: experience,
            password: password,

        })
        console.log(req.body)
        const registered = await registeremployee.save()
        res.render("index")

    } catch (error) {
        res.send("Please Enter valid Details: " + error.message)
        console.log(error)
    }
})
app.post("/login", async (req, res) => {
    try {
        const useremail = req.body.username;
        const password = req.body.password;

        const user_mail = await Register.findOne({ email: useremail });
        if (user_mail.password === password) {
            res.render('index');

        } else {
            res.send("password or email is incorrect");
        }

    } catch (error) {
        res.send("password or email is incorrect");
    }
})






app.listen(port, () => {
    console.log("running")
})