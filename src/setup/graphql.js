'use strict';

// Imports
const graphqlHTTP = require('express-graphql');
// App Imports
const schema = require('../schema');

// Setup GraphQL
module.exports = function (server) {
    console.info('SETUP - GraphQL...');

    // API (GraphQL on route `/api`)
    server.use('/graphiql', graphqlHTTP(() => ({
        schema,
        graphiql: true,
        pretty: true
    })))
};