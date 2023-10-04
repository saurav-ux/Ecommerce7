import express from 'express'
import './Database/connection.js'
import router from './Database/Model/Router/login.js';

//By using the cors middleware and calling app.use(cors()),
// you allow your Express server to respond to requests from different origins,
// including http://localhost:3001.
import cors from 'cors'
const app = express();
app.use(cors())
const PORT = process.env.PORT || 5001;
app.use(express.json())

app.use('/login',router)
app.get('/',(req,res)=>{
    console.log("Test")
    res.send('Hello Saurav') 
})

app.listen(PORT,()=> console.log(`Server is running on : http://localhost:${PORT}`))
