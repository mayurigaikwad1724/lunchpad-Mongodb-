const express=require("express")
const app=express();
const PORT=8000
const router=require("./Router/router")
 
app.use(express.json())
require('dotenv').config()

app.use("/",router)
app.listen(PORT,()=>{
    console.log(`Server Runing on port: http://localhost:${PORT}`)
})

