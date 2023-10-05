import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
const router = express.Router();
import LoginData from '../Schema.js';

//get data

router.get("/",async (req,res)=>{
    try {
        res.status(200).send(await LoginData.find({}))
    } catch (error) {
        res.status(500).send("Internal Server Error: " + error)
    }
})

router.post("/",async (req,res)=>{
    try {
        const addingData  = new LoginData(req.body);
        const email = req.body.email
        const useremail = await LoginData.findOne({email:email})
        if(useremail!==null){
            res.status(400).send("Email Already Exists")
        }
        else{
        const tokenn = await addingData.generateAuthToken();
        console.log("gen token",tokenn)
           await addingData.save();
            res.status(200).send(true)
        }    
        // res.status(201).send(true)
    } catch (error) {
        res.status(500).send("Internal Server Errors: ",error)
    }
})

router.post("/validate",async (req,res)=>{
    try {
        const email = req.body.email
        const password = req.body.password
        const useremail = await LoginData.findOne({email:email})
        // const userpassword = await LoginData.findOne({password:password})
        const isMatch = await bcrypt.compare(password,useremail.password)
        // console.log(isMatch)
        // console.log(useremail)
        if(useremail!==null && isMatch){
            const tokenn = await useremail.generateAuthToken();
            console.log("login token",tokenn)
            res.status(201).send({status:true,name:useremail.name})
        }
        else{
            if(!isMatch && useremail===null){
                res.status(201).send({status:false,name:"Incorrect both Email and Password"})
            }
            else if(!isMatch){
                res.status(201).send({status:false,name:"Incorrect Password"})
            }
            else{
                res.status(201).send({status:false,name:"Incorrect Email"})
            }
           
        }
    //    await addingData.save();
        // res.status(201).send(true)
    } catch (error) {
        res.status(500).send("Inrternal Server Error: ",error)
    }
})

export default router