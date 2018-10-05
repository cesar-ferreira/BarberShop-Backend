// Imports
const {GraphQLObjectType} = require('graphql');

// App Imports.

const { userCreate, userRemove } = require('./user/mutations');
const { serviceCreate, serviceRemove } = require('./service/mutations');

// Mutation
const mutation = new GraphQLObjectType({
    name: 'mutations',
    description: '...',

    fields: {
        userCreate,
        userRemove,
        serviceCreate,
        serviceRemove
    }

});

module.exports = mutation;