// Imports
const { GraphQLString, GraphQLInt } = require('graphql');
const { Schedule } = require('../../models');
// App Imports
const ScheduleType = require('./type');
//const {create, remove} = require('./resolvers');

// Schedule create
exports.scheduleCreate = {
    type: ScheduleType,
    args: {
        timestamp: {
            timestamp: 'timestamp',
            type: GraphQLString
        },

        userId: {
            userId: 'userId',
            type: GraphQLInt
        },

        serviceId: {
            serviceId: 'serviceId',
            type: GraphQLInt
        }
    },
    resolve (parentValue, args) {
        return Schedule.create(args)
    }
};

// Schedule remove
exports.scheduleRemove = {
    type: ScheduleType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve (parentValue, args) {
        return Schedule.destroy({where: {id: args.id}})
    }
};