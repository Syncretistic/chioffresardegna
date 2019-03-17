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

// postSchema.methods.createPost = function createPost(title, content, author){};
// postSchema.methods.modifyPost = function modifyPost(post){};
// postSchema.methods.deletePost = function deletePost(post){};

const Post = mongoose.model('Post', postSchema);

module.exports = Post;