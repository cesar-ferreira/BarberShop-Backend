// Imports
const {GraphQLObjectType} = require('graphql');

// App Imports
//const user = require('./user/*query');
//import * as thought from './thoughts/fields/query'
const { users, user } = require('./user/query');

// Query
const query = new GraphQLObjectType({
    name: 'query',
    description: '...',

    fields: () => ({
        users,
        user
    })
});

module.exports = query;