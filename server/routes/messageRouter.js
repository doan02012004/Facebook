
const express = require('express')
const { addMessage, getMessage, getLastMessage, updateStatusViewMessage, getPageMessage } = require('../controllers/MessageController')

const router = express.Router()

router.post('/', addMessage)
router.get('/:chatId', getMessage)
router.get('/:chatId/pagemessage', getPageMessage)
router.post('/statusView', updateStatusViewMessage)
router.get('/lastmessage/:chatId', getLastMessage)

module.exports = router