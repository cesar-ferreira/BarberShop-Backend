'use strict';

const { GraphQLEnumType } = require('graphql');

const serviceNameEnumType = new GraphQLEnumType({
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
        SERVICE4: {
            value: 'SERVICE4'

        },
        SERVICE5: {
            value: 'SERVICE5'

        },
        SERVICE6: {
            value: 'SERVICE6'

        },
    },
});

const serviceStatusEnumType = new GraphQLEnumType({
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
module.exports = { serviceNameEnumType, serviceStatusEnumType };