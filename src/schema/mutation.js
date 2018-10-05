// Imports
const {GraphQLObjectType} = require('graphql');

// App Imports.

const { userCreate, userRemove } = require('./user/mutations');
const { serviceCreate, serviceRemove } = require('./service/mutations');
const { contactCreate, contactRemove } = require('./contact/mutations');
const { scheduleCreate, scheduleRemove } = require('./schedule/mutations');

// Mutation
const mutation = new GraphQLObjectType({
    name: 'mutations',
    description: '...',

    fields: {
        userCreate,
        userRemove,
        serviceCreate,
        serviceRemove,
        contactCreate,
        contactRemove,
        scheduleCreate,
        scheduleRemove
    }

});

module.exports = mutation;