// Imports
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const { resolver } = require('graphql-sequelize');

const ContactType = require('../contact/type');

const { User } = require('../../models');


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
        contact: {
            type: new GraphQLList(ContactType),
            resolve: resolver(User.Contact)
        },
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString}
    })
});

module.exports = UserType;