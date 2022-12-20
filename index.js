const express=require("express");
const cors=require("cors");
const connect = require("./config/db");
require('dotenv').config();
const Player_Router=require("./Router/player.router")

const app=express();
app.use(cors())
app.use(express.json())
app.use("/",Player_Router)

app.get("/",(req,res)=>{
    res.status(200).send("Home Page");
})


const PORT=process.env.PORT||8080;
app.listen(PORT,async()=>{
    try{
        await connect;
        console.log("Server connected to db");
    }
    catch(err){
        console.log(err)
    }
    console.log(`Server Listen http://localhost:${PORT}/`);
})