// Imports
const {GraphQLSchema} = require('graphql');

// App Imports
const query = require('./query');
const mutation = require('./mutation');

// Schema
const schema = new GraphQLSchema({
    query,
    mutation
});

module.exports = schema;