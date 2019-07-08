const { gql } = require('apollo-server-express');

// Construct Schema with gql
const typeDefs = gql`
    #Define type with 3 fields
    # _id created automatically by Mongoose for Mutations and will be sent from server to client

    type Post {
        _id: ID,
        title: String,
        content: String
    },

    # Define query type to respond to 'posts' query
    
    type Query {
        posts: [Post]
    },

    # Define mutation to add new posts with two required fields

    type Mutation {
        addPost(title: String!, content: String!): Post
    }
`;

module.exports = typeDefs;