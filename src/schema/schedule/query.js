// Imports
const { GraphQLInt, GraphQLList } = require('graphql');

// App Imports
const ScheduleType = require('./type');
const { getAll, getById } = require('./resolvers');

// Schedules All
exports.schedules = {
    type: new GraphQLList(ScheduleType),
    resolve: getAll
};

// Schedule By ID
exports.schedule = {
    type: ScheduleType,
    args: {
        id: {type: GraphQLInt}
    },
    resolve: getById
};
