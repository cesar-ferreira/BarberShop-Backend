// Imports
const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

// Contact type
const ContactType = new GraphQLObjectType({
    name: 'contact',

    fields: () => ({
        number: {type: GraphQLInt},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString}
    })
});

module.exports = ContactType;
