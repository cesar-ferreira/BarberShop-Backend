// Imports
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat } = require('graphql');
const { serviceNameEnumType, serviceStatusEnumType } = require('./util/enum');

// Service type
const ServiceType = new GraphQLObjectType({
    name: 'service',

    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: serviceNameEnumType},
        description: {type: GraphQLString},
        price: {type: GraphQLFloat},
        time: {type: GraphQLFloat},
        status: {type: serviceStatusEnumType},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString}
    })
});

module.exports = ServiceType;
