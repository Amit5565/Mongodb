var express=require('express');
var app=express();
var mongoose=require('./db/mongoose.js');
var bodyparser=require('body-parser');
var Todo=require('./models/todo.js');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json())

app.post("/todos",(req,res)=>{
  Todo.create({
    text:req.body.text,
    age:req.body.age,
    completed:false
  },(err,db)=>{
    res.status(200).send(db);

  })
})

app.get("/todos",(req,res)=>{
   Todo.find({},(err,db)=>{
     if(err){
       res.status(400).send(err);
     }
     else{
       res.status(200).send(db);
     }
   })
})
app.get("/todos/new",(req,res)=>{
  var text;
})
app.listen(7000,()=>{
  console.log("Started on Port 7000");
})
