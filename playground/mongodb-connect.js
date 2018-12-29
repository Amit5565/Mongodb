var mongoose=require('mongoose');

mongoose.connect("mongodb://localhost/todo-api",{useNewUrlParser:true},(err,db)=>{
  if(err){
    console.log("Error in Connection");
  }
  else{
    console.log("Connection established");
    // db.collection("Todos").insertOne({
    //   text:"Hi Friends This is Amit",
    //   completed:false
    // },(err,res)=>{
    //   if(err){
    //     console.log("Error in storing data");
    //   }
    //   else{
    //     console.log(JSON.stringify(res.ops,undefined,2));
    //   }
    // })
  }

  // db.collection("User").insertOne({
  //   _id:124,
  //   name:"Amit",
  //   rollno:"2K17/C0/050"
  // },(err,res)=>{
  //    console.log(res.ops);
  // })

   db.collection("Todos").find({
     text:"Hi Friends This is Amit"
   }).toArray().then((docs)=>{
     console.log("Todos");
     console.log(JSON.stringify(docs,undefined,2));
   },(err)=>{
     console.log("Unable to fetch todos");
   });
});
