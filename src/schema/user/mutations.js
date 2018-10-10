// Imports
const { GraphQLString, GraphQLInt } = require('graphql');
const { resolver } = require('graphql-sequelize');

// App Imports
const UserType = require('./type');
const { User } = require('../../models');
//const {create, remove} = require('./resolvers');

// User create
exports.userCreate = {
    type: UserType,
    args: {
        name: {
            name: 'name',
            type: GraphQLString
        },

        username: {
            username: 'username',
            type: GraphQLString
        },

        email: {
            email: 'email',
            type: GraphQLString
        },

        dateOfBirth: {
            dateOfBirth: 'dateOfBirth',
            type: GraphQLString
        },

        password: {
            password: 'password',
            type: GraphQLString
        }
    },
    resolve (parentValue, args) {
        return User.create(args)
    }
};

// User remove
exports.userRemove = {
    type: UserType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve (parentValue, args) {
        return User.destroy({where: {id: args.id}})
    }
};


