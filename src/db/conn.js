const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/registrationform",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("conncetion success")
}).catch((e)=>{
    console.log("conncetion failed")
})