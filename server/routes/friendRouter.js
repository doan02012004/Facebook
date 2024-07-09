const express = require('express')
const { add_friend, getFriendsAcp, getOneFriend, AcceptedFriend } = require('../controllers/FriendController')

const router = express.Router()


router.post('/addfriend', add_friend)
router.get('/pending/:userId', getFriendsAcp)
router.get('/onefriend/:requesterId/:recipientId', getOneFriend)
router.post('/accepted/:friendId',AcceptedFriend)
module.exports = router