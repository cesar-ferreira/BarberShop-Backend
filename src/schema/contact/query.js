// Imports
const { GraphQLInt, GraphQLList } = require('graphql');
const { Contact } = require('../../models');
const { resolver } = require('graphql-sequelize');

// App Imports
const ContactType = require('./type');
//const { getAll, getById } = require('./resolvers');

// Contact All
exports.contacts = {
    type: new GraphQLList(ContactType),
    resolve: resolver(Contact)
};

// Contact By ID
exports.contact = {
    type: ContactType,
    args: {
        id: {type: GraphQLInt}
    },
    resolve: resolver(Contact)
};
