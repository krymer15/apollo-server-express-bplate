// Use for reference: 'https://sysgears.com/articles/how-to-create-an-apollo-react-express-application/'

const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// Import Mongoose instance
const mongoose = require('./config/database');

// Import Schema and Resolvers for GraphQL server
const typeDefs = require('./modules/schema');
const resolvers = require('./modules/resolvers');

// Initialize a graphql server
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// Initialize an express app for middleware
const app = express();

// Use Express app as middleware in Apollo GraphQL server
server.applyMiddleware({ app });

// Set port for Express app
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}${server.graphqlPath}`);
});