var mongoose=require('mongoose');

mongoose.connect("mongodb://localhost/todoapp",{useNewUrlParser:true});

module.exports=mongoose;
