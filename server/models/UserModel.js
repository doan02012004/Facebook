
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    avatar:{
        type:String,
    },
    firstname:{
        type:String,
       
    },
    lastname:{
        type: String,
       
    },
    story:{
        type:String, 
    }

},{
    timestamps:true
})

const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel