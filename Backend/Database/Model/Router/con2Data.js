import express from "express";
const product2Router = express.Router()
import Product2Data from "../product2Schema.js";


product2Router.post('/',async(req,res)=>{
   try {
    const addData = new Product2Data(req.body)
    await addData.save()
    res.status(200).send(true)
   } catch (error) {
    res.status(500).send("Internal Server Errors: ",error)
   }
})

product2Router.get('/',async (req,res)=>{
    try {
        res.status(200).send(await Product2Data.find({}))
    } catch (error) {
        res.status(500).send("Internal Server Error: " + error)
    }
})

export default product2Router