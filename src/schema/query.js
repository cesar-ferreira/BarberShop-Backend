// Imports
const {GraphQLObjectType} = require('graphql');

// App Imports

const { users, user } = require('./user/query');
const { services, service } = require('./service/query');
const { contacts, contact } = require('./contact/query');
const { schedules, schedule } = require('./schedule/query');

// Query
const query = new GraphQLObjectType({
    name: 'query',
    description: '...',

    fields: () => ({
        users,
        user,
        services,
        service,
        contacts,
        contact,
        schedules,
        schedule
    })
});

module.exports = query;