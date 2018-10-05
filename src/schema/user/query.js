// Imports
const { GraphQLInt, GraphQLList } = require('graphql');

// App Imports
const UserType = require('./type');
const { getAll, getById } = require('./resolvers');

// Users All
exports.users = {
    type: new GraphQLList(UserType),
    resolve: getAll
};

// User By ID
exports.user = {
    type: UserType,
    args: {
        id: {type: GraphQLInt}
    },
    resolve: getById
};
