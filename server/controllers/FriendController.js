const FriendModel = require("../models/FriendModel");


const add_friend = async(req,res)=>{
    const requester = req.body.requester;
    const recipient = req.body.recipient
    try {
        const checkNewFriend = await FriendModel.findOne({
            members:{
                $all:[requester,recipient]
            }})
        if(checkNewFriend){
           const friend = await FriendModel.findByIdAndUpdate({_id:checkNewFriend._id},
            {
                status:'pending',
                requester: requester,
                recipient: recipient
            },
            {new:true}
           ).populate('requester')
           return res.status(200).json(friend)
        }else{
            const newFriend = {
                requester,
                recipient,
                status: 'pending',
                members:[
                    requester,
                    recipient
                ]
            }
            const createFriend = await FriendModel.create(newFriend)
            const Friend = await FriendModel.findById(createFriend._id).populate('requester')
            
            return res.status(200).json(Friend)
        }
      
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

const getFriendsAcp = async(req,res)=>{
    const userId = req.params.userId
    try {
        const listFriendAcp = await FriendModel.find({recipient:userId, status:'pending'}).populate('requester')
        return res.status(200).json(listFriendAcp)
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

const getOneFriend = async(req,res)=>{
    const requester = req.params.requesterId
    const recipient = req.params.recipientId
    try {
        const listFriendAcp = await FriendModel.findOne({members:{$all:[requester,recipient]}, status:'pending'})
        return res.status(200).json(listFriendAcp)
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

const AcceptedFriend = async(req,res)=>{
    const id = req.body.friendId
    try {
        const friendAcp = await FriendModel.findByIdAndUpdate({_id:id},{
            status:'accepted'
        },{
            new:true
        })
        return res.status(200).json(friendAcp)
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}


module.exports = {
    add_friend,
    getFriendsAcp,
    getOneFriend,
    AcceptedFriend
}