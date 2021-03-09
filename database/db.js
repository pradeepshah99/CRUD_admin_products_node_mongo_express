const mongoose = require('mongoose');

require('../model/adminSchema');

var uri =  "mongodb://localhost:27017/adminPanelDB";

mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:true}).then(()=>
{
    console.log("Connection has been done successfully")
}).catch((err)=> console.log(err));




module.exports = mongoose;
