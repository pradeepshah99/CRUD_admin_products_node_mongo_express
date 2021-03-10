const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profile = new Schema({
    email:{type:String,unique:true},
	name : String,
	mobile : Number,
	image :String,
	dob:String,
	address :String,
	orders :{type:Number,default:0},
},
{
 timestamps: true,
});

module.exports=mongoose.model('profile',profile)







