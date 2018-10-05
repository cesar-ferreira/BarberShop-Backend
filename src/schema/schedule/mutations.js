// Imports
const { GraphQLString, GraphQLInt } = require('graphql');

// App Imports
const ScheduleType = require('./type');
const {create, remove} = require('./resolvers');

// Schedule create
exports.scheduleCreate = {
    type: ScheduleType,
    args: {
        timestamp: {
            timestamp: 'timestamp',
            type: GraphQLString
        }
    },
    resolve: create
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
    resolve: remove
};