// Imports
const {GraphQLObjectType} = require('graphql');

// App Imports.
//const user = require('./user/mutations');
//import * as thought from './thoughts/fields/mutations'
const { userCreate, userRemove } = require('./user/mutations');

// Mutation
const mutation = new GraphQLObjectType({
    name: 'mutations',
    description: '...',

    fields: {
        userCreate,
        userRemove
    }

});

module.exports = mutation;