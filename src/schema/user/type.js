// Imports
const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

// User type
const UserType = new GraphQLObjectType({
    name: 'user',

    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        email: {type: GraphQLString},
        dateOfBirth: {type: GraphQLString},
        password: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString}
    })
});

module.exports = UserType;