// Imports
const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

// Schedule type
const ScheduleType = new GraphQLObjectType({
    name: 'schedule',

    fields: () => ({
        id: {type: GraphQLInt},
        timestamp: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString}
    })
});

module.exports = ScheduleType;