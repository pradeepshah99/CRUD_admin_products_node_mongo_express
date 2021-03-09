// category schema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const adminData = new Schema({
    fullname: String,
	email:{type:String,unique:true},
	password : String,
    

},{
    timestamps: true,
});
module.exports=mongoose.model('Admin',adminData)


