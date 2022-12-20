const { Schema, model }= require("mongoose");



const playerSchema=new Schema({
    name:{type:String,required:true},
    level:{type:String, enum:["Low level","Medium level","High level"],required:true},
    score:{type:Number,default:0}
});


const PlayerModel=model("player",playerSchema);

module.exports={PlayerModel};