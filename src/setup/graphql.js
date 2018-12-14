'use strict';

// Imports
const graphqlHTTP = require('express-graphql');
// App Imports
const schema = require('../schema');
const cors = require('cors');

// Setup GraphQL
module.exports = function (server) {
    console.info('SETUP - GraphQL...');

    server.use(cors());

    // API (GraphQL on route `/api`)
    server.use('/', graphqlHTTP(() => ({
        schema,
        graphiql: true,
        pretty: true
    })))
};