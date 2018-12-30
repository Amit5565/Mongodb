var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/todo-api",{useNewUrlParser:true},(err,db)=>{
   if(err){
     console.log("Error in Connection");
   }
   else{
    //deleteOne
    // db.collection("Todos").deleteMany({text:"Eat food"}).then((result)=>{
    //   console.log(result);
    // })

    db.collection("Todos").findOneAndDelete({text:"HjhlHLKJsjl"}).then((result)=>{
      console.log(result);
    })

   }
})
