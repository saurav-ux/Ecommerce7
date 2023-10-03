import express from 'express'
import './Database/connection.js'
import router from './Database/Model/Router/login.js';
const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json())

app.use('/login',router)
app.get('/',(req,res)=>{
    console.log("Test")
    res.send('Hello Saurav') 
})

app.listen(PORT,()=> console.log(`Server is running on : http://localhost:${PORT}`))
