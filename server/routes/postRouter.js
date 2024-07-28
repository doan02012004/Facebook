const express = require('express')
const { getAllPost, createPost, getByIdPost } = require('../controllers/PostController')
const router = express.Router()


router.post('/',createPost)
router.get('/', getAllPost)
router.get('/:postId', getByIdPost)

module.exports = router