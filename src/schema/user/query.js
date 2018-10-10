// Imports
const { GraphQLInt, GraphQLList } = require('graphql');
const { resolver } = require('graphql-sequelize');

// App Imports
const UserType = require('./type');
//const { getAll, getById } = require('./resolvers');

const { User } = require('../../models');

// Users All
exports.users = {
    type: new GraphQLList(UserType),
    resolve: resolver(User)
};

// User By ID
exports.user = {
    type: UserType,
    args: {
        id: {type: GraphQLInt}
    },
    resolve: resolver(User)
};
