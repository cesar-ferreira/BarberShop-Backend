// Imports
const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');
const { resolver } = require('graphql-sequelize');

// Contact type
const ContactType = new GraphQLObjectType({
    name: 'contact',

    fields: () => ({
        number: {type: GraphQLString},
        userId: {type: GraphQLInt},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString}
    })
});

module.exports = ContactType;
