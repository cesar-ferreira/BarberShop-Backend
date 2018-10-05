// Imports
const {GraphQLObjectType} = require('graphql');

// App Imports

const { users, user } = require('./user/query');
const { services, service } = require('./service/query');

// Query
const query = new GraphQLObjectType({
    name: 'query',
    description: '...',

    fields: () => ({
        users,
        user,
        services,
        service
    })
});

module.exports = query;