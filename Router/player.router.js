const {Router}=require("express");
const { PlayerModel } = require("../Model/player.model");
const randomWords = require('random-words');


const app=Router();


app.get("/randomword",async(req,res)=>{
  try{
    const get_word=await randomWords({ min: 50, max: 51 }).join(" ");
    res.status(200).send(get_word);
  }
  catch(err){
    res.status.send("msg",err)
  }
 
})


app.get("/register",async(req,res)=>{
    try{
        const get_data=await PlayerModel.find();
        res.status(200).send(get_data);
    }
    catch(err){
        console.log(err);
    }
})

app.post("/register",async(req,res)=>{
       const {name,level,score}=req.body;
       try{
        const new_player=new PlayerModel({
            name,level,score
           })
         await new_player.save();
         res.status(201).send({"msg":"Player Register Successfully"})  
       }
       catch(err){
        res.status(500).send({"msg":err})
       }    
})


app.patch("/register/:id",async(req,res)=>{
    const { id } = req.params;
    const {score } = req.body;
      try {
        const update_score = await PlayerModel.updateOne({ _id: id },{ $set: { score }});
        res.send({ msg: "Your new score", update_score });
      } catch (err) {
        res.send(err);
      }
    
})

module.exports=app;