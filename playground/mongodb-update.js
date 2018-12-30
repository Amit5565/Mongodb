var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/todo-api",{useNewUrlParser:true},(err,db)=>{
   if(err){
     console.log("Error in Connection");
   }
   else{
    // db.collection("Todos").findOneAndUpdate({text:"Eat Lunch"},{
    //   $set:{
    //     completed:true
    //   }
    // },{
    //   returnOriginal:false
    // }).then((result)=>{
    //   console.log(result);
    // })
   db.collection("Todos").findOneAndUpdate({text:"Amit"},{
     $inc:{
       age:2
     }
   }).then((result)=>{
     console.log(result);
   })
   }

})
