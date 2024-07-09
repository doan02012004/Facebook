
const mongoose = require('mongoose')

const ChatSchema = new mongoose.Schema({
        members: [
           { type:mongoose.Schema.Types.ObjectId, ref: 'users'}
        ]
},{
    timestamps:true
})

const ChatModel = mongoose.model('chats', ChatSchema)

module.exports = ChatModel