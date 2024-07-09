const { default: mongoose } = require('mongoose')
const ChatModel = require('../models/ChatModel')
const MessageModel = require('../models/MessageModel')

const createChat = async(req,res) =>{
    const newChat = {
        members: [req.body.senderId, req.body.receiverId]
    }
    try {
        const result = await ChatModel.create(newChat)
        const chat = await ChatModel.findById(result._id).sort({createdAt: -1 }).populate('members')
        return res.status(200).json(chat)
    } catch (error) {
        return res.status(500).json({
            messages: error.message
        })
    }
}

const userChat = async(req,res) =>{
    try {
        const chats = await ChatModel.find({
            members:{$in: [req.params.userId]}
        }).populate('members')
        if(chats){
            
        }
        return res.status(200).json({
            data:chats
        })
    } catch (error) {
       return res.status(500).json({
            messages: error.message
        })
    }
}

const getOtherMemberIds = async (req, res) => {
    try {
      // Giả sử req.body.myId là ID của bạn được gửi từ client
      const myId = req.body.myId;
  
      // Lấy tất cả các cuộc trò chuyện mà bạn là thành viên
      const chats = await ChatModel.find({ members: myId });
  
      if (chats.length === 0) {
        return res.status(404).json({ message: 'No chats found' });
      }
  
      // Lọc ra ID của người khác từ mỗi cuộc trò chuyện
      const otherMemberIds = chats.map(chat => {
        const otherId = chat.members.find(member => member !== myId);
        return {
          chatId: chat._id,
          otherId: otherId
        };
      });
  
      return res.status(200).json(otherMemberIds);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

const findChat = async(req,res) =>{
    try {
        const chat = await ChatModel.findOne({
            members:{$all:[req.params.firstId, req.params.secondId]}
        }).populate('members')
        return res.status(200).json(chat)
    } catch (error) {
        return res.status(500).json({
            messages: error.message
        })
    }
}

const getCountChatUnRead = async(req,res)=>{
    const userId = req.params.userId
        try {
            const userChats = await ChatModel.find({
                members:{$in:[userId]}
            })
            let count = 0
            for(let chat of userChats){
                const lastMessage = await MessageModel.findOne({chatId:chat._id})
                .sort({createdAt:-1})
                .limit(1)

                if(lastMessage && lastMessage.senderId !== userId && !lastMessage.statusView){
                    count++
                }
            }

            return res.status(200).json(count)
        } catch (error) {
            return res.status(500).json({
                messages: error.message
            })
        }
}
module.exports = {
    createChat,
    userChat,
    findChat,
    getCountChatUnRead
}
