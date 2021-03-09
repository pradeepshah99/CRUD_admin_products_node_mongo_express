const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userData = new Schema({
    name : String,
    email : {type:String,unique:true},
    password : String
},
{
    timestamps: true,

})

module.exports=mongoose.model('userdata',userData)
