
const UserModel = require('../models/UserModel')
const bcrypt = require('bcrypt')
const create_user = async(req,res)=>{
    try {
        const newUser = {
            email: req.body.email,
            password:req.body.password,
            avatar: req.body.avatar? req.body.avatar: "",
            firstname: req.body.firstname? req.body.firstname: "",
            lastname: req.body.lastname? req.body.lastname: "",
            story: req.body.story? req.body.story: "",
            friend: []
        }
        const checkEmail = await UserModel.findOne({email:newUser.email})
        if(checkEmail){
            return res.status(400).json({
                message: "Email already exists "
            })
        }
       else{
        const hashPassword = await bcrypt.hash(newUser.password,10)
        newUser.password = hashPassword
        const user = await UserModel.create(newUser)
        return res.status(200).json({
            data:user
        })
       }
     
    } catch (error) {
       return res.status(500).json(error)
    }
}

const login = async(req,res)=>{
    try {
        const checkUser = await UserModel.findOne({email:req.body.email});
        if(!checkUser){
            return res.status(400).json({
                message:"User is Not Found",
            })
        }
       const isPasswordMatch = await bcrypt.compare(req.body.password,checkUser.password)
       if(isPasswordMatch){
        // checkUser.password == undefined;
        return res.status(200).json({
            data:{...checkUser.toObject(),password:undefined}
        })
       }
       else{
        return res.status(400).json({
            message:"Sai mật khẩu"
        })
       }
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

const get_user = async(req,res)=>{
    const id = req.params.id;
    try {
        
        const user = await UserModel.findById(id)
        if(!user){
            return res.status(400).json({
                message:"user not found"
            })
        }
        return res.status(200).json({
            data:{...user.toObject(),password:undefined}
        })
    } catch (error) {
       return res.status(500).json(error)
    }
}

const getAll_user = async(req,res)=>{
    try {
        const users = await UserModel.find()
        if(!users){
            return res.status(400).json({
                message:"user not found"
            })
        }
        return res.status(200).json({
            data:{...users.toObject(),password:undefined}
        })
    } catch (error) {
       return res.status(500).json(error)
    }
}


module.exports = {
    create_user,
    get_user,
    getAll_user,
    login
}