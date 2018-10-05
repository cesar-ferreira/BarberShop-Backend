'use strict';

const { GraphQLEnumType } = require('graphql');

exports.serviceNameEnumType = new GraphQLEnumType({
    name: 'ServiceNameEnum',
    values: {
        SERVICE1: {
            value: 'SERVICE1'
        },
        SERVICE2: {
            value: 'SERVICE2'

        },
        SERVICE3: {
            value: 'SERVICE3'

        },
    },
});

exports.serviceStatusEnumType = new GraphQLEnumType({
    name: 'ServiceStatusEnum',
    values: {
        ACTIVE: {
            value: 'ACTIVE'

        },
        INACTIVE: {
            value: 'INACTIVE'

        }
    },
});
