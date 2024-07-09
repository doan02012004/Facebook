const MessageModel = require('../models/MessageModel')

const addMessage = async(req,res) =>{
    const {chatId, senderId, receiverId,text} = req.body  
    const message = new MessageModel({
        chatId,
        senderId,
        receiverId,
        text
    })
    try {
        const result = await message.save()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({
            messages: error.message
        })
    }
}

const getMessage = async(req,res) =>{
    const {chatId} = req.params;
    try {
        const result = await MessageModel.find({
           chatId
        })
        return  res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({
            messages: error.message
        })
    }
}

const getLastMessage = async(req,res) =>{
    
    try {
        const {chatId} = req.params;
        const result = await MessageModel.findOne({chatId})
        .sort({createdAt:-1})
        .exec()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({
            messages: error.message
        })
    }
}

const updateStatusViewMessage = async(req,res) =>{
   const {chatId,userId} = req.body
    try {
        const result = await MessageModel.updateMany(
            {
                chatId, statusView:false, senderId:{$ne:userId}
            },
            {$set:{statusView:true}}
        )
        if(!result){
            return res.status(400).json({
                message: "update fail statusView"
            })
        }
        return  res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({
            messages: error.message
        })
    }
}

const getPageMessage = async(req,res)=>{
    try {
        const { chatId } = req.params;
        const page = parseInt(req.query.page) || 1;
        const limit = 8; // Số lượng tin nhắn mỗi trang //5
        const totalMessages = await MessageModel.countDocuments({ chatId }); //21
        const totalPages = Math.ceil(totalMessages / limit); //6
        const sk = Math.max(totalMessages - ((page)*limit), 0) // 16
          // Kiểm tra nếu là trang cuối cùng thì giới hạn lại số lượng sản phẩm trả về
        const adjustedLimit = page === totalPages ? totalMessages - ((page-1)*limit) : limit;
        const messages = await MessageModel.find({ chatId }).sort({ createdAt: 1 }).skip(sk).limit(adjustedLimit);
        res.json({
          data: messages,
          nextPage: page < totalPages ? page + 1 : null,
        });
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
}




module.exports = {
    addMessage,
    getMessage,
    getLastMessage,
    updateStatusViewMessage,
    getPageMessage
}
