const PostModel = require("../models/PostModel")

const getAllPost = async (req,res) => {
    try {
        const posts = await PostModel.find().populate('author')
        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
const createPost = async (req,res) => {
    try {
        const data = await PostModel.create(req.body)
        const post = await PostModel.findById(data._id).populate('author')
        return res.status(200).json(post)
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
const getByIdPost = async (req,res) => {
    try {
        const post = await PostModel.find(req.params.postId).populate('author likes')
        return res.status(200).json(post)
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
module.exports = {
    getAllPost,
    createPost,
    getByIdPost
}