// Mongoose model to query MongoDB
const { Schema, model } = require('mongoose');

// Instantiate a schema using mongoose Schema
const postSchema = new Schema({
    title: String,
    content: String
});

// Create model with mongoose
// Mongoose will use the 'post' model name to create a 'Posts collection in MongoDB
const Post = model('post', postSchema);

module.exports = Post;