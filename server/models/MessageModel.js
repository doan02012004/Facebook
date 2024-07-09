
const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
        chatId: {
            type: String
        },
        senderId:{
            type:String
        },
        receiverId:{
            type:String
        },
        text:{
            type:String
        }
        ,
        statusView:{
            type:Boolean,
            default:false
        }
},{
    timestamps:true
})

const MessageModel = mongoose.model('messages', MessageSchema)

module.exports = MessageModel