// Use for reference: 'https://sysgears.com/articles/how-to-create-an-apollo-react-express-application/'

// Import model created with Mongoose to work with posts stored in MongoDB
const Post = require('./models/postModel');

// Create resolver functions to handle GraphQL queries
const resolvers = {
    Query: {
        // Query resolver for "posts" Query must return array of posts per the GraphQL Schema in schema.js
        // To return posts list from MongoDB
        posts: () => Post.find({})
    },

    // Mutation resolver addPost creates new document in MongoDB in response to "addPost" mutation in gql Schema.
    Mutation: {
        addPost: (parent, post) => {
            // Create a new record in MongoDB database using mongoose "new instance of the m'post' model"
            // Parent arg refers to parent resolver when using nested resolvers
            const newPost = new Post({
                title: post.title,
                content: post.content
            });

            // Save new record to MongoDB and return new record object to client
            return newPost.save();
        }
    }
};

module.exports = resolvers;