const adminData = require('../model/adminSchema');
const userData = require('../model/userSchema');
const sha1 = require('sha1');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');

module.exports.register = async(req, res, next) => {
    const salt = await bcrypt.genSalt(10);
    const hasPass = await bcrypt.hash(req.body.password, salt);
    const checkmail = await adminData.findOne({email: req.body.email});
    if(checkmail){res.send({message : `email address already exist`})}
    else
    {
        let admin = new adminData();
        admin.fullname = req.body.fullname;
        admin.email = req.body.email;
        admin.password = hasPass;

        if(!req.body.fullname || !req.body.email || !req.body.password)
        {
            res.send({message: `please fill the all fields`});
        }
        else{
            await admin.save().then((err, result)=>
            {
                if(err){res.send(err)}
                else{
                    res.status(200).json({message: "Admin Data Added", data: result})
                }
            }).catch((err)=>
            {
                res.send(err);
            })
        }
    }

}

module.exports.adminlogin = async(req, res, next) => {
    adminData.find({ email: req.body.email }).then(user => {

        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
                return res.status(401).json({
                    message: "authentication Failed!"
                });
            } else if (result) {

                const token = jwt.sign({ data: user }, 'deep', {
                    expiresIn: "1h"
                });
                return res.status(200).json({
                    message: "Authentication has successfully done!",
                    token: token
                });
            } else {
                res.status(401).json({
                    message: "authentication Failed"
                });
            }
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

// code for the using of multer 

const path = "./uploadData";
let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path);
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])

    }
})

let upload = multer({ storage: storage }).single('Image');


// api code for the user registration

module.exports.userSignup = (req, res)=>
{
    upload(req, res, function(err){
        if(err){
            console.log(err);
        }
        else
        {
            let userinfo = new userData();
            userData.userName = req.body.userName;
            userinfo.userEmail = req.body.userEmail;
            userinfo.userPassword = req.body.userPassword;

            if(!req.body.userName || !req.body.userEmail || !req.body.userPassword)
            {
                res.status(400).send({message : "Please fill the all fields"});
            }
            else
            {
                userinfo.save().then((err, result)=>
                {
                    if(err) {res.send(err)}else{res.status(200).json({message: `User Added with the id ${req.userInfo._id}`})}
                })
            }
        }
    })
}

