const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema cho bình luận
const CommentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true }, // Người bình luận
    content: { type: String, required: true }, // Nội dung bình luận
    createdAt: { type: Date, default: Date.now }, // Thời gian tạo
    updatedAt: { type: Date, default: Date.now } // Thời gian cập nhật
}, {
    timestamps: true
});

// Schema cho bài viết
const PostSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'users', required: true }, // Người tạo bài viết
    content: { type: String, required: true }, // Nội dung bài viết
    images: [{ type: String }], // Đường dẫn tới các hình ảnh
    videos: [{ type: String }], // Đường dẫn tới các video
    likes: [{ type: Schema.Types.ObjectId, ref: 'users' }], // Người dùng đã thích bài viết
    comments: [CommentSchema], // Bình luận trong bài viết
    createdAt: { type: Date, default: Date.now }, // Thời gian tạo
    updatedAt: { type: Date, default: Date.now } // Thời gian cập nhật
}, {
    timestamps: true
});

module.exports = mongoose.model('posts', PostSchema);