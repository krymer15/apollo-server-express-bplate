// import mongoose
const mongoose = require('mongoose');

// Create query string to connect to MongoDB server
const db = 'mongodb+srv://test:test@apollo-server-express-bplate-xuatl.mongodb.net/test?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true });

// Event listeners
mongoose.connection.once('open', () => console.log('Connected to a MongoDB instance'));
mongoose.connection.on('error', error => console.log(error));

// Export mongoose for server.js
module.exports = mongoose;