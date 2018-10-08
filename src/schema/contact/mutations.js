// Imports
const { GraphQLInt, GraphQLString } = require('graphql');

// App Imports
const ContactType = require('./type');
const {create, remove} = require('./resolvers');


// Contact create
exports.contactCreate = {
    type: ContactType,
    args: {
        number: {
            number: 'number',
            type: GraphQLString
        },

        userId: {
            userId: 'userId',
            type: GraphQLInt
        }
    },
    resolve: create
};

// Contact remove
exports.contactRemove = {
    type: ContactType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve: remove
};