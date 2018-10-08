// Imports
const { GraphQLInt, GraphQLList } = require('graphql');

// App Imports
const ServiceType = require('./type');

const { resolver } = require('graphql-sequelize');

const { Service } = require('../../models');
//const { getAll, getById } = require('./resolvers');

// Service All
exports.services = {
    type: new GraphQLList(ServiceType),
    resolve: resolver(Service)
};

// Service By ID
exports.service = {
    type: ServiceType,
    args: {
        id: {type: GraphQLInt}
    },
    resolve: resolver(Service)
};
