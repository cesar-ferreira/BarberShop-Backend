// Imports
const { GraphQLString, GraphQLInt, GraphQLFloat } = require('graphql');
const { serviceNameEnumType, serviceStatusEnumType } = require('./util/enum');
const { resolver } = require('graphql-sequelize');

const { Service } = require('../../models');

// App Imports
const ServiceType = require('./type');
//const {create, remove} = require('./resolvers');


// Service create
exports.serviceCreate = {
    type: ServiceType,
    args: {
        name: {
            name: 'name',
            type: serviceNameEnumType
        },

        description: {
            description: 'description',
            type: GraphQLString
        },

        price: {
            price: 'price',
            type: GraphQLFloat
        },

        time: {
            time: 'time',
            type: GraphQLFloat
        },

        status: {
            status: 'status',
            type: serviceStatusEnumType
        }
    },
    resolve (parentValue, args) {
        return Service.create(args)
    }
};

// Service remove
exports.serviceRemove = {
    type: ServiceType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve (parentValue, args) {
        return Service.destroy({where: {id: args.id}})
    }
};