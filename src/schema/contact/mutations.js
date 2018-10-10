// Imports
const { GraphQLInt, GraphQLString } = require('graphql');

// App Imports
const ContactType = require('./type');
const { Contact } = require('../../models');
const { resolver } = require('graphql-sequelize');
//const {create, remove} = require('./resolvers');


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
    resolve (parentValue, args) {
        return Contact.create(args)
    }
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
    resolve (parentValue, args) {
        return Contact.destroy({where: {id: args.id}})
    }
};