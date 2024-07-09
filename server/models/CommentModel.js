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

