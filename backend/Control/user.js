const express = require("express")
const {upload} = require("../multer")
const user = require("../Model/user")
const path = require('path')
const ErrorHandler = require('../util/Error')

const router = express.Router();

router.post('/create',async(req,res,next)=>{
    try{
    const {name,email,password} = req.body;
    const existUser = user.findOne(email);
    if(existUser){
        return res.status(400).send({message:"user already registered"})
    }
    const createUser = new user({
        name,email,password

    })
    await createUser.save();
    console.log(createUser)
}
catch(e){
    console.log(e.message);
}
})


module.exports = router
