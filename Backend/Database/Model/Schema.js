import mongoose from "mongoose";
const loginDetails = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
})
const LoginData =  new mongoose.model("LoginData",loginDetails)
export default LoginData
