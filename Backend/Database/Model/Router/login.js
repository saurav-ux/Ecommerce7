import express from 'express'
const router = express.Router();
import LoginData from '../Schema.js';

//get data

router.get("/",async (req,res)=>{
    try {
        res.send(await LoginData.find({}))
    } catch (error) {
        res.send("Internal Servar Error: ",error)
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
            await addingData.save();
            res.status(201).send("Data Inserted")
        }    
        // res.status(201).send(true)
    } catch (error) {
        res.status(500).send("Internal Server Error: ",error)
    }
})

router.post("/validate",async (req,res)=>{
    try {
        const email = req.body.email
        const password = req.body.password
        const useremail = await LoginData.findOne({email:email})
        const userpassword = await LoginData.findOne({password:password})
        // console.log(useremail)
        if(useremail!==null && userpassword!==null){
            res.status(201).send({status:true,name:useremail.name})
        }
        else{
            if(useremail===null && userpassword===null){
                res.status(201).send({status:false,name:"Incorrect both Email and Password"})
            }
            else if(userpassword===null){
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