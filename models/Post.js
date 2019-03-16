const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    date_published: { type: Date, default: () => Date.now() },
    last_edit: { type: Date, default: () => Date.now() },
    published: { type: Boolean, default: false },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

postSchema.methods.createPost = function createPost(title, content, author){};
postSchema.methods.modifyPost = function createPost(post){};
postSchema.methods.deletePost = function createPost(post){};

const Post = mongoose.model('Post', postSchema);

module.exports = Post;