// Imports
const { GraphQLInt } = require('graphql');

// App Imports
const ContactType = require('./type');
const {create, remove} = require('./resolvers');


// Contact create
exports.contactCreate = {
    type: ContactType,
    args: {
        number: {
            number: 'number',
            type: GraphQLInt
        }
    },
    resolve: create
};

// Contact remove
exports.contactRemove = {
    type: ContactType,
    args: {
        number: {
            number: 'number',
            type: GraphQLInt
        }
    },
    resolve: remove
};