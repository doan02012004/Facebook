
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendSchema = new mongoose.Schema({
    requester: { type: Schema.Types.ObjectId, ref: 'users', required:true }, // Người gửi yêu cầu kết bạn
    recipient: { type: Schema.Types.ObjectId, ref: 'users',required:true  }, // Người nhận yêu cầu kết bạn
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
   members:[
    {type:Schema.Types.ObjectId, ref:'users',required:true }
   ]
},{
    timestamps:true
})

const FriendModel = mongoose.model('friends', FriendSchema)

module.exports = FriendModel