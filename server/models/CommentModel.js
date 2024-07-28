const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentChildren = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true }, // Người bình luận
    comment: { type: String, required: true }, // Nội dung bình luận
    likes:[
        {type:Schema.Types.ObjectId, ref: 'users'}
    ]
})
// Schema cho bình luận
const CommentSchema = new Schema({
    postId:{type:Schema.Types.ObjectId, ref:'posts'},
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true }, // Người bình luận
    comment: { type: String, required: true }, // Nội dung bình luận
    childrens:[
        {type:CommentChildren, default:[]}
    ],
    likes:[
        {type:Schema.Types.ObjectId, ref: 'users'}
    ]
}, {
    timestamps: true,versionKey:false
});
const CommentModel = mongoose.model('comments', CommentSchema)

module.exports = CommentModel
