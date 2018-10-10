// Imports
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLList } = require('graphql');
const { serviceNameEnumType, serviceStatusEnumType } = require('./util/enum');

const ScheduleType = require('../schedule/type');

const { resolver } = require('graphql-sequelize');

const { Service } = require('../../models');

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
        schedule: {
            type: new GraphQLList(ScheduleType),
            resolve: resolver(Service.Schedule)
        },
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString}
    })
});

module.exports = ServiceType;
