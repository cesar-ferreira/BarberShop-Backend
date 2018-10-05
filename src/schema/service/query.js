// Imports
const { GraphQLInt, GraphQLList } = require('graphql');

// App Imports
const ServiceType = require('./type');
const { getAll, getById } = require('./resolvers');

// Service All
exports.services = {
    type: new GraphQLList(ServiceType),
    resolve: getAll
};

// Service By ID
exports.service = {
    type: ServiceType,
    args: {
        id: {type: GraphQLInt}
    },
    resolve: getById
};
