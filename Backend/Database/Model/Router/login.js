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
router.post("/",(req,res)=>{
    try {
        const addingData  = new LoginData(req.body);
        addingData.save();
        res.status(201).send(true)
    } catch (error) {
        res.status(500).send("Inrternal Server Error: ",error)
    }
})

export default router