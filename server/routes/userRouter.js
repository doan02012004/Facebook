
const express = require('express')
const { create_user, get_user, login, getAll_user } = require('../controllers/UserController')

const router = express.Router()

router.post('/register',create_user)
router.post('/login',login)
router.get('/:id',get_user)
router.get('/',getAll_user)


module.exports = router