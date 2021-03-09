const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userData = new Schema({
    userName : String,
    userEmail : {type:String,unique:true},
    userPassword : String
},
{
    timestamps: true,

})

module.exports=mongoose.model('userdata',userData)
