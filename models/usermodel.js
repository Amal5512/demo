const mongoose=require("mongoose")
const userSchema =new mongoose.Schema(
    {
        name:String,
        email:String,
        mobno:String,
        password:String,
        confirmpassword:String

    }
)
module.exports=mongoose.model("user",userSchema)