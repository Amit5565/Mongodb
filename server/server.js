var express=require('express');
var app=express();
var mongoose=require('./db/mongoose.js');
var bodyparser=require('body-parser');
var Todo=require('./models/todo.js');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json())
app.get("/",(req,res)=>{
   res.send("Welcome");
})
app.post("/todos",(req,res)=>{
  Todo.create({
    text:req.body.text,
    age:req.body.age,
    completed:false
  },(err,db)=>{
    res.status(200).send(db);

  })
})
app.listen(7000,()=>{
  console.log("Started on Port 7000");
})
