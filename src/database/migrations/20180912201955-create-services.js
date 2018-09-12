'use strict';

module.exports = {
    up: (queryInterface, DataTypes) => {
        queryInterface.createTable('Services', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            name: {
                allowNull: false,
                type: DataTypes.ENUM,
                values: ['SERVICE1', 'SERVICE2', 'SERVICE3', 'SERVICE4', 'SERVICE5', 'SERVICE6', 'SERVICE7', 'SERVICE8']
            },
            description: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            price: {
                allowNull: false,
                type: DataTypes.FLOAT,
            },
            time: {
                allowNull: false,
                type: DataTypes.FLOAT,
            },
            status: {
                type: DataTypes.ENUM,
                values: ['ACTIVE', 'INACTIVE'],
                defaultValue: 'ACTIVE'
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        });
    },

    down: (queryInterface) => {
        queryInterface.dropTable('Services');
    }
};