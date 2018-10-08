// Imports
const { GraphQLInt, GraphQLList } = require('graphql');

const { Schedule } = require('../../models');
const { resolver } = require('graphql-sequelize');

// App Imports
const ScheduleType = require('./type');
//const { getAll, getById } = require('./resolvers');

// Schedules All
exports.schedules = {
    type: new GraphQLList(ScheduleType),
    resolve: resolver(Schedule)
};

// Schedule By ID
exports.schedule = {
    type: ScheduleType,
    args: {
        id: {type: GraphQLInt}
    },
    resolve: resolver(Schedule)
};
