// Imports
const { GraphQLInt, GraphQLList } = require('graphql');

// App Imports
const ContactType = require('./type');
const { getAll, getById } = require('./resolvers');

// Contact All
exports.contacts = {
    type: new GraphQLList(ContactType),
    resolve: getAll
};

// Contact By ID
exports.contact = {
    type: ContactType,
    args: {
        id: {type: GraphQLInt}
    },
    resolve: getById
};
