
const express = require('express')
const { createChat, userChat, findChat, getCountChatUnRead } = require('../controllers/ChatController')
const router = express.Router()

router.post('/', createChat)
router.get('/:userId', userChat)
router.get('/countchat/:userId', getCountChatUnRead)
router.get('/find/:firstId/:secondId',findChat)
module.exports = router