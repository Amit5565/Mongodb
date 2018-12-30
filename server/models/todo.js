var mongoose=require('mongoose');
var todoschema=new mongoose.Schema({
  text:String,
  age:Number,
  completed:Boolean
})
module.exports=mongoose.model("Todo",todoschema);
