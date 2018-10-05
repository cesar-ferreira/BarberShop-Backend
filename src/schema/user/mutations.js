// Imports
const { GraphQLString, GraphQLInt } = require('graphql');

// App Imports
const UserType = require('./type');
const {create, remove} = require('./resolvers');

// User create
exports.userCreate = {
    type: UserType,
    args: {
        name: {
            name: 'name',
            type: GraphQLString
        },

        username: {
            username: 'username',
            type: GraphQLString
        },

        email: {
            email: 'email',
            type: GraphQLString
        },

        dateOfBirth: {
            dateOfBirth: 'dateOfBirth',
            type: GraphQLString
        },

        password: {
            password: 'password',
            type: GraphQLString
        }
    },
    resolve: create
};

// User remove
exports.userRemove = {
    type: UserType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve: remove
};